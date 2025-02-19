import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Linestyle from './Linestyle';

export default function OurMember() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/our-member-data');
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching our member data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Linestyle
    Ourmenber={"OUR MEMBER"}
    />
    <div className="w-full py-10 bg-[#fff] backdrop-blur-md  border border-white border-opacity-20 shadow-xl px-10 overflow-hidden ">
      
      <div className="flex flex-wrap justify-center gap-10">
        {cardData.map((card, index) => (
          <CardMem key={index} {...card} />
        ))}
      </div>
    </div>
    </>
  );
}

function CardMem({ imageSrc, name, description, description2 }) {
  return (
    <motion.div 
      className="w-80 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-72 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-center text-zinc-700">
      
       <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>

        <p className="text-sm leading-relaxed text-gray-700">{description}</p>
        <p className="text-sm leading-relaxed text-gray-700 mt-1">{description2}</p>
      </div>
    </motion.div>
  );
}