import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const LeeStat = ({
  age,
  height,
  power,
  taijutsu,
  eightGates,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-lime-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-lime-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-lime-500 to-green-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Taijutsu */}
    <div className="mt-3">
      <p className="text-yellow-300 text-xs mb-1">Taijutsu</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: taijutsu }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{taijutsu}</p>
    </div>

    {/* Eight Gates */}
    <div className="mt-3">
      <p className="text-red-300 text-xs mb-1">Eight Gates</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: eightGates }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-red-600 to-pink-500"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{eightGates}</p>
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

const Lee2 = () => {
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
            <Link to="/Lee">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-lime-400 via-green-300 to-emerald-400 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          ROCK LEE
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Lee 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Lee1.svg"
              alt="Young Lee"
              className="h-60"
            />

            <LeeStat
              age="8"
              height="138 cm"
              power="20%"
              taijutsu="35%"
              eightGates="0%"
              delay={0}
            />
          </div>

          {/* Lee 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Lee2.svg"
              alt="Genin Lee"
              className="h-70 -mt-10"
            />

            <LeeStat
              age="13"
              height="158 cm"
              power="50%"
              taijutsu="70%"
              eightGates="50%"
              delay={3}
            />
          </div>

          {/* Lee 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Lee3.svg"
              alt="Chunin Exam Lee"
              className="h-90 -mt-20"
            />

            <LeeStat
              age="14"
              height="162 cm"
              power="75%"
              taijutsu="75%"
              eightGates="65%"
              delay={6}
            />
          </div>

          {/* Lee 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Lee4.svg"
              alt="Shippuden Lee"
              className="h-100 -mt-30"
            />

            <LeeStat
              age="18"
              height="172 cm"
              power="90%"
              taijutsu="90%"
              eightGates="85%"
              delay={9}
            />
          </div>

          {/* Lee 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Lee5.svg"
              alt="War Arc Lee"
              className="h-115 -mt-38"
            />

            <LeeStat
              age="18"
              height="175 cm"
              power="100%"
              taijutsu="100%"
              eightGates="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Lee2;