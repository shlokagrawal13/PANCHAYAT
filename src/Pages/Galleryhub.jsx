import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import SliderHeader from '../components/SliderHeader';

const GalleryHub = () => {
  const location = useLocation();
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(location.state?.selectedAlbum || null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/albums');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const closeModal = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
  };

  const openImageModal = (album, index) => {
    setSelectedAlbum(album);
    setSelectedImage(album.images[index]);
    setCurrentImageIndex(index);
  };

  const showNextImage = () => {
    const newIndex = (currentImageIndex + 1) % selectedAlbum.images.length;
    setSelectedImage(selectedAlbum.images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const showPrevImage = () => {
    const newIndex = (currentImageIndex - 1 + selectedAlbum.images.length) % selectedAlbum.images.length;
    setSelectedImage(selectedAlbum.images[newIndex]);
    setCurrentImageIndex(newIndex);
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  const Section = ({ heading, content }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true }}
      className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg"
    >
     
    </motion.div>
  );
  return (
    <>
      <Navbar />
      <div className=" font-sans bg-gray-100 py-1">
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10 mb-6 w-full"
        > */}
          <SliderHeader/>
        {/* </motion.div> */}
        <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={sectionVariants}
                                    viewport={{ once: true }}
                                    className="text-4xl font-bold text-black text-center mt-12"
                                  >
                                    Gallery
                           </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {albums.map((album) => (
            <div
              key={album.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="relative">
                <img
                  src={album.thumbnail}
                  alt={album.name}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h2 className="text-2xl font-bold">{album.name}</h2>
                  <p className="text-sm">
                    {album.location} - {album.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedAlbum && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative overflow-auto max-h-[80vh]">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedAlbum.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
                {selectedAlbum.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Album ${selectedAlbum.name} image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                    onClick={() => openImageModal(selectedAlbum, idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative overflow-auto max-h-[80vh]">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex justify-between items-center mb-4">
                <button onClick={showPrevImage} className="text-gray-700 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <img
                  src={selectedImage}
                  alt={`Album ${selectedAlbum.name} image`}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out"
                />
                <button onClick={showNextImage} className="text-gray-700 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GalleryHub;
