import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Kakashi = () => {
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
            <h1 className="text-gray-200 tracking-widest text-sm font-semibold border-2 border-blue-500 w-50 flex items-center justify-center py-1 rounded-full bg-white/5 backdrop-blur-2xl">
              COPY NINJA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.8 }}
          >
            <h1 className="text-gray-300 font-sans text-3xl tracking-wide leading-15">
              THOSE WHO BREAK THE RULES
              <br />
              ARE SCUM
              <br />
              BUT THOSE WHO ABANDON
              <br />
              THEIR FRIENDS ARE WORSE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2.2 }}
          >
            <p className="text-blue-300 text-lg tracking-wide leading-8">
              Kakashi Hatake is one of the most respected shinobi in
              Konohagakure and the legendary leader of Team 7. Known as the
              Copy Ninja, Kakashi mastered over a thousand jutsu and earned
              fame throughout the ninja world. Despite his calm and laid-back
              personality, he possesses exceptional intelligence, leadership,
              and combat skills. He later became the Sixth Hokage and played a
              crucial role in ending the Fourth Great Ninja War.
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
              src="/Kakashi.svg"
              alt="Kakashi Hatake"
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
            <Link to="/Sakura">
              <ChevronLeft size={15} />
            </Link>
          </motion.button>
        </motion.div>

        <div>
          <Link to="/Kakashi2">
            <motion.h1
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent text-xl md:text-2xl font-serif tracking-[8px]"
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
            <Link to="/Guy">
              <ChevronRight size={15} />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Kakashi;