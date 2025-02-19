import React from 'react';
  // import Videobg from '/Videos/Video1.mp4';
  import { FaArrowUpLong } from "react-icons/fa6";
  import { motion } from "framer-motion";
  import { useState, useEffect } from "react";
  import SliderHeader from "../components/SliderHeader";

  
  function LandingPage() {
    return (
<div data-scroll data-scroll-speed=""  className=' relative w-full h-screen sm:h-screen  bg-[#B48F60] pt-1 z-20 overflow-hidden'>
<SliderHeader/>
{/* <div className="relative w-full h-2/5 sm:h-3/5 mt-14 z-20" >

     
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
           <div className='absolute w-full sm:w-1/2 h-full px-10 '>
             <video
              src={Videobg}
              className="w-full h-full object-center sm:object-left  md:mt-0 mt-28"
              autoPlay
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
      <motion.div
        className=""
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
          <div className="textStructure  flex justify-end p-4 sm:p-8 text-right md:opacity-100 opacity-0 md:static  md:mt-16">
           <div className="w-full sm:w-1/2 bg-white bg-opacity-50 p-4 sm:p-8 text-zinc-900 backdrop-blur-sm">
               {["आत्मनिर्भर पंचायत,", "ग्रामोदय से भारत", "उदय"].map((item, index) => (
               <div key={index} className="Hero-main">
                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">{item}</h1>
                 </div>
               ))}
             </div>
          </div>
        
      </motion.div>
    </div> */}
    <div className='border-t-[1px] border-zinc-100 flex-col sm:flex  lg:flex-row justify-between items-center text-zinc-100 px-5 mt-16'>
           {["Trust is the ultimate strength", "Wisdom guides fair justice"].map((item, index) => (
            <p key={index} className='text-md font-light tracking-tight leading-none py-5'>{item}</p>
          ))}
          <div className='Discover-More gap-5 flex  justify-between items-center text-light text-md mt-5'>
            <div className='px-4 py-1 border-[1px] border-zinc-100 rounded-full'>Discover More</div>
            <div className='w-10 h-10 rounded-full border-[1px] border-zinc-100 flex items-center justify-center'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
    </div>
    );
  }

  export default LandingPage;
