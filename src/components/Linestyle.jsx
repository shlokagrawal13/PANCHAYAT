import React from 'react';
import { motion } from 'framer-motion';

function Linestyle({ Ourmenber }) {
  return (
    <div className="w-full py-10 bg-[#1F2937] overflow-hidden">
      <div className="text-[10vw] text-white font-bold border-t-2 border-b-2 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ['0', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
        >
          {[...Array(3)].map((_, index) => (
            <h1 key={index} className="whitespace-nowrap Uppercase pr-10">
              {Ourmenber}
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Linestyle;
