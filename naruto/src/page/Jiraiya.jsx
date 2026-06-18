import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Jiraiya = () => {
  return (
    <>
      <div className="flex flex-row w-full mt-3 items-center justify-between gap-5">
        {/* Left Side */}
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
            <h1 className="text-gray-200 tracking-widest text-sm font-semibold border-2 border-red-500 w-50 flex items-center justify-center py-1 rounded-full bg-white/5 backdrop-blur-2xl">
              TOAD SAGE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.8 }}
          >
            <h1 className="text-gray-300 font-sans text-3xl tracking-wide leading-15">
              A PERSON GROWS
              <br />
              WHEN THEY ARE ABLE
              <br />
              TO OVERCOME
              <br />
              THEIR FAILURES
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2.2 }}
          >
            <p className="text-red-300 text-lg tracking-wide leading-8">
              Jiraiya was one of the Legendary Sannin of Konohagakure and the
              mentor of Minato Namikaze, Naruto Uzumaki, and many other
              shinobi. Known as the "Toad Sage," he mastered Sage Mode,
              powerful summoning techniques, and countless ninjutsu. Despite
              his carefree personality, Jiraiya devoted his life to protecting
              the Hidden Leaf Village and searching for the Child of Prophecy
              who would bring peace to the shinobi world.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <div className="w-1/2 flex justify-center items-center">
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
              src="/Jiraiya4.svg"
              alt="Jiraiya"
              className="h-150"
            />
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row justify-between items-center">
        {/* Previous */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            whileHover={{
              scale: 1.15,
              x: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="p-4 rounded-full border border-gray-400 text-gray-300 shadow-lg"
          >
            <Link to="/Choji">
              <ChevronLeft size={15} />
            </Link>
          </motion.button>
        </motion.div>

        {/* Select Hero */}
        <div>
          <Link to="/Jiraiya2">
            <motion.h1
              className="bg-gradient-to-r from-red-400 via-orange-300 to-red-500 bg-clip-text text-transparent text-xl md:text-2xl font-serif tracking-[8px]"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              SELECT HERO
            </motion.h1>
          </Link>
        </div>

        {/* Next */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            whileHover={{
              scale: 1.15,
              x: 5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="p-4 rounded-full border border-gray-400 text-gray-300 shadow-lg"
          >
            <Link to="/Tsunade">
              <ChevronRight size={15} />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Jiraiya;