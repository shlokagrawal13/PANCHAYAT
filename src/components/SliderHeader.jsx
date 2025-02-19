import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
    "https://www.studyiq.com/articles/wp-content/uploads/2022/09/13172558/Panchayati-Raj.jpg",
"https://www.shutterstock.com/image-vector/illustration-village-panchayat-vector-art-260nw-2461591249.jpg",
"https://c8.alamy.com/comp/2EDY0FK/meeting-in-an-indian-village-2EDY0FK.jpg"
  ];
  
function SliderHeader() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    return (
    <div className="relative w-screen h-[62vw] sm:h-[31vw] mt-14 z-20" >
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
   
    );
  }

export default SliderHeader