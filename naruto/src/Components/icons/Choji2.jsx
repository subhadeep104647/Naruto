import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const ChojiStat = ({
  age,
  height,
  power,
  expansionJutsu,
  butterflyMode,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-red-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-red-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-red-500 to-orange-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Expansion Jutsu */}
    <div className="mt-3">
      <p className="text-orange-300 text-xs mb-1">Expansion Jutsu</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: expansionJutsu }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{expansionJutsu}</p>
    </div>

    {/* Butterfly Mode */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Butterfly Mode</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: butterflyMode }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{butterflyMode}</p>
    </div>
  </motion.div>
);

const imageVariant = {
  hidden: {
    opacity: 0,
    y: 300,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const Choji2 = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-20">
      {/* Header */}
      <div className="flex flex-row items-center justify-center w-full mt-5">
        <motion.div
          className="absolute left-10"
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
            className="p-2 rounded-full border border-gray-400 text-gray-300 shadow-lg"
          >
            <Link to="/Choji">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          CHOJI AKIMICHI
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Choji 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Choji1.svg"
              alt="Young Choji"
              className="h-60"
            />

            <ChojiStat
              age="8"
              height="143 cm"
              power="20%"
              expansionJutsu="25%"
              butterflyMode="0%"
              delay={0}
            />
          </div>

          {/* Choji 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Choji2.svg"
              alt="Genin Choji"
              className="h-70 -mt-10"
            />

            <ChojiStat
              age="12"
              height="156 cm"
              power="40%"
              expansionJutsu="55%"
              butterflyMode="10%"
              delay={3}
            />
          </div>

          {/* Choji 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Choji3.svg"
              alt="Chunin Choji"
              className="h-90 -mt-20"
            />

            <ChojiStat
              age="15"
              height="172 cm"
              power="70%"
              expansionJutsu="80%"
              butterflyMode="60%"
              delay={6}
            />
          </div>

          

          {/* Choji 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Choji5.svg"
              alt="Adult Choji"
              className="h-115 -mt-38"
            />

            <ChojiStat
              age="17"
              height="185 cm"
              power="100%"
              expansionJutsu="100%"
              butterflyMode="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Choji2;