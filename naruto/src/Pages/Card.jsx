import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft  } from "lucide-react";


const Card = () => {
  return (
    <div className='flex flex-col'>
        
   <motion.div
      initial={{
        opacity: 0,
        scale: 1.05,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Card Content */}
    </motion.div>

    <div className="flex flex-row w-full mt-3 items-center justify-between gap-5 ml-5">

  {/* Left Content */}
  <motion.div
    className="flex flex-col w-1/2 gap-10"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1.2 }}
    >
      <h1 className="text-gray-200 tracking-widest text-sm font-semibold border-2 border-orange-500 w-50 flex items-center justify-center py-1 rounded-full bg-white/5 backdrop-blur-2xl">
        SEVENTH HOKAGE
      </h1>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.8 }}
    >
      <h1 className="text-gray-300 font-sans text-3xl tracking-wide leading-15">
        HARD WORK IS WORTHLESS FOR THOSE <br />
        WHO DON'T BELIEVE IN THEMSELVES <br />
        I'LL NEVER GO BACK ON MY WORD <br />
        THAT IS MY NINJA WAY
      </h1>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2.2 }}
    >
      <p className="text-yellow-300 text-lg tracking-wide leading-8">
        Naruto Uzumaki is the Seventh Hokage of Konohagakure and one of the
        strongest shinobi in history. Once shunned as the host of the Nine-Tails,
        Naruto earned the respect of the entire world through his determination,
        courage, and unwavering belief in his friends. His dream of becoming
        Hokage inspired countless people and united the ninja world.
      </p>
    </motion.div>
  </motion.div>

  {/* Right Side */}
  <div className="w-1/2 flex flex-row items-center">

    {/* Naruto Image */}
    <motion.div
  initial={{
    opacity: 0,
    y: 300,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 3.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <img
    src="/Naruto.png"
    alt="Naruto Uzumaki"
    className="h-150 ml-22 "
  />
</motion.div>
  </div>
</div>


<div className='flex flex-row justify-between items-center'>
    <div className=''>
         <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <motion.button
        whileHover={{
          scale: 1.15,
          x: 10,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className=" p-4 rounded-full border border-gray-400 text-gray-300 shadow-lg "
      >
        <Link to="/">
          <ChevronLeft  size={15} />
        </Link>
      </motion.button>
    </motion.div>
    </div>

    <div>
         <motion.div
      className="flex items-center justify-center ml-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <motion.button
        whileHover={{
          scale: 1.15,
          x: 10,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className=" p-4 rounded-full border border-gray-400 text-gray-300 shadow-lg "
      >
        <Link to="/Hinata">
          <ChevronRight size={15} />
        </Link>
      </motion.button>
    </motion.div>
    </div>
</div>
    </div>
  )
}

export default Card