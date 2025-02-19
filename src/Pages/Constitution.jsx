import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SliderHeader from "../components/SliderHeader";

const Constitution = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pdf-files")
      .then(response => response.json())
      .then(data => setPdfFiles(data))
      .catch(error => console.error("Error fetching PDF files:", error));
  }, []);
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
      <Navbar/>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-1 ">
        {/* Animated Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 w-full"
        > */}
          <SliderHeader/>
          {/* <div className="relative mb-12">
            <img
              src="/images/CONSTITUTION/HeaderCon/congratulations.jpg" // Replace with your header image URL
              alt="History Header"
              className="w-full h-64 object-top rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl font-semibold z-10"></h1>
            </div>
          </div> */}
        {/* </motion.div> */}

        {/* Animated Image */}
        {/* <motion.img
          src="/images/constitution-banner.jpg"
          alt="Constitution Banner"
          className="w-4/5 h-3/4 object-cover rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        /> */}

                  <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={sectionVariants}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-black text-center mt-12"
                          >
                            Constitution  
                   </motion.h1>

        {/* PDF Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl p-10 ">
          {pdfFiles.map((pdf, index) => (
            <motion.a
              key={index}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between hover:bg-blue-50 transition"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg font-semibold text-gray-800">{pdf.name}</span>
              <span className="text-blue-500">📄</span>
            </motion.a>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Constitution;
