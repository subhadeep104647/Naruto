
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const MinatoStat = ({
  age,
  height,
  power,
  flyingRaijin,
  sage,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-yellow-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-yellow-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Flying Raijin */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Flying Raijin</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: flyingRaijin }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{flyingRaijin}</p>
    </div>

    {/* Rasengan */}
    <div className="mt-3">
      <p className="text-blue-300 text-xs mb-1">sage</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: sage }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-green-500 to-lime-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{sage}</p>
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

const Minato2 = () => {
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
            <Link to="/Minato">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          MINATO NAMIKAZE
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Minato 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Minato1.svg"
              alt="Young Minato"
              className="h-60"
            />

            <MinatoStat
              age="8"
              height="145 cm"
              power="45%"
              flyingRaijin="0%"
              Sage="0%"
              delay={0}
            />
          </div>

          {/* Minato 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Minato2.svg"
              alt="Genin Minato"
              className="h-70 -mt-10"
            />

            <MinatoStat
              age="12"
              height="165 cm"
              power="65%"
              flyingRaijin="15%"
              Sage="35%"
              delay={3}
            />
          </div>

          {/* Minato 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Minato3.svg"
              alt="Jonin Minato"
              className="h-90 -mt-20"
            />

            <MinatoStat
              age="15"
              height="179 cm"
              power="90%"
              flyingRaijin="95%"
              sage="75%"
              delay={6}
            />
          </div>

          {/* Minato 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Minato4.svg"
              alt="Fourth Hokage"
              className="h-105 -mt-30"
            />

            <MinatoStat
              age="24"
              height="179 cm"
              power="100%"
              flyingRaijin="100%"
              sage="100%"
              delay={9}
            />
          </div>

          {/* Minato 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Minato5.svg"
              alt="KCM Minato"
              className="h-110 -mt-36"
            />

            <MinatoStat
              age="Legend"
              height="179 cm"
              power="100%"
              flyingRaijin="100%"
              sage="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Minato2;

