import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const ShikamaruStat = ({
  age,
  height,
  power,
  intelligence,
  shadowJutsu,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-slate-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-slate-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-slate-500 to-gray-300"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Intelligence */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Intelligence</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: intelligence }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{intelligence}</p>
    </div>

    {/* Shadow Jutsu */}
    <div className="mt-3">
      <p className="text-purple-300 text-xs mb-1">Shadow Jutsu</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: shadowJutsu }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-purple-600 to-violet-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{shadowJutsu}</p>
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

const Shikamaru2 = () => {
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
            <Link to="/Shikamaru">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-slate-400 via-gray-300 to-slate-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          SHIKAMARU NARA
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Shikamaru 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Shikamaru1.svg"
              alt="Young Shikamaru"
              className="h-60"
            />

            <ShikamaruStat
              age="8"
              height="140 cm"
              power="15%"
              intelligence="60%"
              shadowJutsu="10%"
              delay={0}
            />
          </div>

          {/* Shikamaru 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Shikamaru2.svg"
              alt="Genin Shikamaru"
              className="h-70 -mt-10"
            />

            <ShikamaruStat
              age="12"
              height="152 cm"
              power="35%"
              intelligence="80%"
              shadowJutsu="40%"
              delay={3}
            />
          </div>

          {/* Shikamaru 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Shikamaru3.svg"
              alt="Chunin Shikamaru"
              className="h-90 -mt-20"
            />

            <ShikamaruStat
              age="15"
              height="165 cm"
              power="65%"
              intelligence="95%"
              shadowJutsu="75%"
              delay={6}
            />
          </div>

          {/* Shikamaru 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Shikamaru4.svg"
              alt="War Arc Shikamaru"
              className="h-100 -mt-30"
            />

            <ShikamaruStat
              age="17"
              height="170 cm"
              power="85%"
              intelligence="100%"
              shadowJutsu="95%"
              delay={9}
            />
          </div>

          {/* Shikamaru 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Shikamaru5.svg"
              alt="Adult Shikamaru"
              className="h-115 -mt-38"
            />

            <ShikamaruStat
              age="17"
              height="175 cm"
              power="100%"
              intelligence="100%"
              shadowJutsu="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shikamaru2;