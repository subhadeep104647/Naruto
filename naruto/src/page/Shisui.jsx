import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Shisui = () => {
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
            <h1 className="text-gray-200 tracking-widest text-sm font-semibold border-2 border-green-500 w-50 flex items-center justify-center py-1 rounded-full bg-white/5 backdrop-blur-2xl">
              BODY FLICKER MASTER
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.8 }}
          >
            <h1 className="text-gray-300 font-sans text-3xl tracking-wide leading-15">
              A SHINOBI'S TRUE STRENGTH
              <br />
              IS NOT IN POWER
              <br />
              BUT IN PROTECTING THOSE
              <br />
              THEY HOLD DEAR
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2.2 }}
          >
            <p className="text-green-300 text-lg tracking-wide leading-8">
              Shisui Uchiha was one of the most talented members of the Uchiha
              Clan and the best friend of Itachi Uchiha. Renowned throughout
              the ninja world as "Shisui of the Body Flicker," he possessed
              extraordinary speed and one of the most powerful Mangekyō
              Sharingan abilities, Kotoamatsukami. Shisui devoted his life to
              preventing conflict between the Uchiha Clan and the Hidden Leaf
              Village, sacrificing himself to protect peace and entrusting his
              will to Itachi.
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
              src="/Shisui3.svg"
              alt="Shisui Uchiha"
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
            <Link to="/Obito">
              <ChevronLeft size={15} />
            </Link>
          </motion.button>
        </motion.div>

        {/* Select Hero */}
        <div>
          <Link to="/Shisui2">
            <motion.h1
              className="bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent text-xl md:text-2xl font-serif tracking-[8px]"
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
            <Link to="/Itachi">
              <ChevronRight size={15} />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Shisui;