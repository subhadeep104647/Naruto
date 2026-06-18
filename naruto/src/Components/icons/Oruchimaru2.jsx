import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const OrochimaruStat = ({
  age,
  height,
  power,
  forbiddenJutsu,
  immortality,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-purple-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-purple-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Forbidden Jutsu */}
    <div className="mt-3">
      <p className="text-red-300 text-xs mb-1">Forbidden Jutsu</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: forbiddenJutsu }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-red-600 to-pink-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{forbiddenJutsu}</p>
    </div>

    {/* Immortality */}
    <div className="mt-3">
      <p className="text-green-300 text-xs mb-1">Immortality</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: immortality }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-green-500 to-lime-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{immortality}</p>
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

const Orochimaru2 = () => {
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
            <Link to="/Orochimaru">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          OROCHIMARU
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Orochimaru 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Orochimaru1.svg"
              alt="Young Orochimaru"
              className="h-60"
            />

            <OrochimaruStat
              age="10"
              height="150 cm"
              power="35%"
              forbiddenJutsu="10%"
              immortality="0%"
              delay={0}
            />
          </div>

          {/* Orochimaru 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Orochimaru2.svg"
              alt="Young Shinobi Orochimaru"
              className="h-70 -mt-10"
            />

            <OrochimaruStat
              age="18"
              height="172 cm"
              power="60%"
              forbiddenJutsu="45%"
              immortality="15%"
              delay={3}
            />
          </div>

          {/* Orochimaru 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Orochimaru3.svg"
              alt="Legendary Sannin Orochimaru"
              className="h-90 -mt-20"
            />

            <OrochimaruStat
              age="25"
              height="179 cm"
              power="85%"
              forbiddenJutsu="90%"
              immortality="60%"
              delay={6}
            />
          </div>

          {/* Orochimaru 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Orochimaru4.svg"
              alt="Master Orochimaru"
              className="h-105 -mt-30"
            />

            <OrochimaruStat
              age="50"
              height="179 cm"
              power="95%"
              forbiddenJutsu="100%"
              immortality="95%"
              delay={9}
            />
          </div>

          {/* Orochimaru 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Orochimaru5.svg"
              alt="Perfected Orochimaru"
              className="h-110 -mt-36"
            />

            <OrochimaruStat
              age="Legend"
              height="179 cm"
              power="100%"
              forbiddenJutsu="100%"
              immortality="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Orochimaru2;