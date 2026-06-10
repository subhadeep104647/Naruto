import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Card from './Card';

const home = () => {
  const navigate = useNavigate();
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    setEntering(true);

    setTimeout(() => {
      navigate("/Card");
    }, 2500);
  };
  
  return (
    <>
    <div className='absolute top-100 left-20 '>
      <motion.h1
        className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-600 bg-clip-text text-transparent text-7xl md:text-9xl font-serif tracking-[12px] text-shadow-2xl"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}>
        KONOHA
        </motion.h1>

      <motion.p
        className="mt-6 text-white text-xl md:text-2xl tracking-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}>
        The Village Hidden in the Leaves
      </motion.p>

      <motion.p
        className="mt-3 text-yellow-300 text-sm md:text-lg tracking-[3px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}>
        Where the Will of Fire Burns Forever
      </motion.p>
      <motion.button
        onClick={handleEnter}
        className="mt-3 text-gray-900 text-lg font-serif md:text-lg tracking-[3px] bg-gradient-to-r from-orange-400 via-yellow-500 to-yellow-300 px-5 py-2 rounded-r-2xl border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}>
        <Link to="/Card">ENTER KONOHA <span>--&gt;</span></Link>
      </motion.button>
    </div>

    <AnimatePresence>
        {entering && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Gate Zoom Animation */}
            <motion.img
              src="/KonohaGate.png"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{
                scale: 2.2,
              }}
              transition={{
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}

export default home