import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import SliderHeader from '../components/SliderHeader';
import axios from 'axios';

const AIPPMedia = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    // Fetch media items from the backend
    axios.get('http://localhost:5000/api/media-items')
      .then(response => setMediaItems(response.data))
      .catch(error => {
        console.error('Error fetching media items:', error); // Add error logging
        alert('Error fetching media items');
      });

    // Fetch YouTube videos from the backend
    axios.get('http://localhost:5000/api/youtube-videos')
      .then(response => setYoutubeVideos(response.data))
      .catch(error => {
        console.error('Error fetching YouTube videos:', error); // Add error logging
        alert('Error fetching YouTube videos');
      });
  }, []);

  const handleShare = (platform, item) => {
    // Replace this with your share functionality
    alert(`Sharing "${item.title}" on ${platform}`);
  };

  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-100 py-1">
        {/* Header Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10 mb-6 w-full"
        > */}
          <SliderHeader />
        {/* </motion.div> */}

        {/* Media Section */}
        <div className="mb-12 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Media News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <button
                      onClick={() => handleShare('Twitter', item)}
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare('Facebook', item)}
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('Instagram', item)}
                      className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
                    >
                      Instagram
                    </button>
                  </div>
                  <button
                    onClick={() => window.open(item.newsUrl, '_blank')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Read News
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Section */}
        <div className='p-10'>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">YouTube Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative pb-[56.25%]">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIPPMedia;
