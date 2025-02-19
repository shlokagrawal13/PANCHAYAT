import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import SliderHeader from '../components/SliderHeader';

const Programs = () => {
  const [hovered, setHovered] = useState(null);

  const programs = [
    "Conferences at National level to highlight and develop solutions to problems faced by Panchayati Raj Institutions and strengthen these organizations.",
    "Conferences and workshops at the State level and District level to strengthen the organizations and provide orientation.",
    "Training programmes at different levels to assist office bearers and officials involved in the Panchayati Raj system.",
    "Publication of books to assist and train persons in the operation of Panchayati Raj Institutions.",
    "National Seminars on socially relevant topics e.g. Family Planning and Welfare, Agriculture, Environment Water conservation and harvesting, non-conventional energy sources etc.",
    "Promotion of numerous schemes relating to agriculture and rural development and other relevant schemes at the Regional, State and Zilla Parishad levels.",
    "Youth Conferences at State level, focused on every state.",
    "Recognition and award of prizes for performance of Zilla Parishads as well as block panchayats and gram panchayats.",
    "Publication of Panchayat Sandesh to extend and educate the people about the rural development programmes and the successful stories.",
    "To hold meetings and seminars on various important dates including the birthdays of key leaders like Shri Lal Singh Tyagi, Shri Balwant Rai Mehta, Shri Rajiv Gandhi, and more.",
    "To give awards to the best Zilla Panchayat Parishads, Block Samitis and Village Panchayat for their unique contributions to the success of PRIs."
  ];
 
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
    <div className="font-sans bg-gray-100 overflow-hidden py-1 ">
     {/* Animated Header */}
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10 mb-6 w-full"
      > */}
        <SliderHeader/>
         {/* <div className="relative mb-12">
        <img
          src="/images/PROGRAMS/HeaderPrg/PrgH.jpg" // Replace with your header image URL
          alt="Program Header"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-semibold z-10">Programs</h1>
        </div>
      </div> */}
      {/* </motion.div> */}
      <motion.h1
                                  initial="hidden"
                                  whileInView="visible"
                                  variants={sectionVariants}
                                  viewport={{ once: true }}
                                  className="text-4xl font-bold text-black text-center mt-12"
                                >
                                  Programs
                         </motion.h1>
      
      <div className="space-y-4 p-10">
       <p className='text-lg text-gray-600 mb-8'>
          AIPP has played an important role in drafting and tabling of the 73rd Constitutional Amendment Act which Panchayati Raj Institutions the constitutional rights and powers to operate at the grass roots level. In addition, AIPP has been involved in research, imparting training, and production of literature including a monthly journal. In recognition of its role in promoting the Panchayati Raj system, AIPP receives grant-in-aid from several State Governments and the Central Government.
        </p>
        {programs.map((program, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md bg-gray-200 hover:bg-cyan-100 hover:scale-105 transition-all duration-300 ease-in-out transform ${hovered === index ? 'bg-cyan-200' : ''}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="block text-sm text-gray-800">
             <li>
             {program}
             </li>
            </span>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Programs;
