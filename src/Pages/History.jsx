import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import SliderHeader from '../components/SliderHeader';
import axios from 'axios';

const History = () => {
  const [historyItems, setHistoryItems] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fetchHistoryItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/history-items');
        setHistoryItems(response.data);
      } catch (error) {
        console.error('Error fetching history items:', error);
      }
    };

    fetchHistoryItems();
  }, []);

  const handleReadMore = (pdfUrl) => {
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
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
      <div className="font-sans bg-gray-100 py-1">
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10 mb-6 w-full"
        > */}
          <SliderHeader />
        {/* </motion.div> */}

        {/* History Items */}
        <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={sectionVariants}
                                    viewport={{ once: true }}
                                    className="text-4xl font-bold text-black text-center mt-12"
                                  >
                                    History
                           </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          
          {historyItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-50 hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 text-base mb-4">{item.description}</p>
                <button
                  onClick={() => handleReadMore(item.pdfUrl)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
