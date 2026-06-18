import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const TsunadeStat = ({
  age,
  height,
  power,
  medicalNinjutsu,
  hundredHealings,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-pink-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-pink-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-pink-500 to-rose-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Medical Ninjutsu */}
    <div className="mt-3">
      <p className="text-emerald-300 text-xs mb-1">Medical Ninjutsu</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: medicalNinjutsu }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{medicalNinjutsu}</p>
    </div>

    {/* Hundred Healings */}
    <div className="mt-3">
      <p className="text-violet-300 text-xs mb-1">Hundred Healings</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hundredHealings }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{hundredHealings}</p>
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

const Tsunade2 = () => {
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
            <Link to="/Tsunade">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          TSUNADE SENJU
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Tsunade 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Tsunade1.svg"
              alt="Young Tsunade"
              className="h-60"
            />

            <TsunadeStat
              age="8"
              height="142 cm"
              power="35%"
              medicalNinjutsu="0%"
              hundredHealings="0%"
              delay={0}
            />
          </div>

          {/* Tsunade 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Tsunade2.svg"
              alt="Teen Tsunade"
              className="h-70 -mt-10"
            />

            <TsunadeStat
              age="15"
              height="163 cm"
              power="60%"
              medicalNinjutsu="40%"
              hundredHealings="0%"
              delay={3}
            />
          </div>

          {/* Tsunade 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Tsunade3.svg"
              alt="Legendary Sannin"
              className="h-90 -mt-20"
            />

            <TsunadeStat
              age="25"
              height="170 cm"
              power="85%"
              medicalNinjutsu="85%"
              hundredHealings="40%"
              delay={6}
            />
          </div>

          {/* Tsunade 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Tsunade4.svg"
              alt="Fifth Hokage"
              className="h-105 -mt-30"
            />

            <TsunadeStat
              age="50"
              height="170 cm"
              power="100%"
              medicalNinjutsu="100%"
              hundredHealings="90%"
              delay={9}
            />
          </div>

          {/* Tsunade 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Tsunade5.svg"
              alt="Strength of a Hundred Tsunade"
              className="h-110 -mt-36"
            />

            <TsunadeStat
              age="58"
              height="170 cm"
              power="100%"
              medicalNinjutsu="100%"
              hundredHealings="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tsunade2;