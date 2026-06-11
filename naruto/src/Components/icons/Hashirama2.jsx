import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const HashiramaStat = ({
  age,
  height,
  power,
  woodRelease,
  sageMode,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-green-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-green-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-green-600 to-emerald-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Wood Release */}
    <div className="mt-3">
      <p className="text-lime-300 text-xs mb-1">Wood Release</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: woodRelease }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-lime-600 to-green-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{woodRelease}</p>
    </div>

    {/* Sage Mode */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Sage Mode</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: sageMode }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{sageMode}</p>
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

const Hashirama2 = () => {
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
            <Link to="/Hashirama">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-green-500 via-emerald-300 to-lime-400 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          HASHIRAMA SENJU
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Hashirama 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Hashirama1.svg"
              alt="Young Hashirama"
              className="h-60"
            />

            <HashiramaStat
              age="10"
              height="148 cm"
              power="35%"
              woodRelease="30%"
              sageMode="0%"
              delay={0}
            />
          </div>

          {/* Hashirama 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Hashirama2.svg"
              alt="Young Warrior Hashirama"
              className="h-70 -mt-10"
            />

            <HashiramaStat
              age="18"
              height="170 cm"
              power="60%"
              woodRelease="70%"
              sageMode="0%"
              delay={3}
            />
          </div>

          {/* Hashirama 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Hashirama3.svg"
              alt="Clan Leader Hashirama"
              className="h-90 -mt-20"
            />

            <HashiramaStat
              age="25"
              height="179 cm"
              power="80%"
              woodRelease="100%"
              sageMode="50%"
              delay={6}
            />
          </div>

          {/* Hashirama 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Hashirama4.svg"
              alt="First Hokage"
              className="h-105 -mt-30"
            />

            <HashiramaStat
              age="35"
              height="185 cm"
              power="95%"
              woodRelease="100%"
              sageMode="90%"
              delay={9}
            />
          </div>

          {/* Hashirama 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Hashirama5.svg"
              alt="Sage Hashirama"
              className="h-110 -mt-36"
            />

            <HashiramaStat
              age="Legend"
              height="185 cm"
              power="100%"
              woodRelease="100%"
              sageMode="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hashirama2;