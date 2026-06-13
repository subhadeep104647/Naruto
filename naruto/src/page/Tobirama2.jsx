import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const TobiramaStat = ({
  age,
  height,
  power,
  waterRelease,
  flyingRaijin,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-cyan-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-cyan-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-600 to-sky-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Water Release */}
    <div className="mt-3">
      <p className="text-blue-300 text-xs mb-1">Water Release</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: waterRelease }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{waterRelease}</p>
    </div>

    {/* Flying Raijin */}
    <div className="mt-3">
      <p className="text-yellow-300 text-xs mb-1">Flying Raijin</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: flyingRaijin }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-yellow-500 to-amber-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{flyingRaijin}</p>
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

const Tobirama2 = () => {
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
            <Link to="/Tobirama">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          TOBIRAMA SENJU
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Tobirama 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Tobirama1.svg"
              alt="Young Tobirama"
              className="h-60"
            />

            <TobiramaStat
              age="10"
              height="145 cm"
              power="30%"
              waterRelease="40%"
              flyingRaijin="0%"
              delay={0}
            />
          </div>

          {/* Tobirama 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Tobirama2.svg"
              alt="Young Warrior Tobirama"
              className="h-70 -mt-10"
            />

            <TobiramaStat
              age="18"
              height="172 cm"
              power="60%"
              waterRelease="80%"
              flyingRaijin="25%"
              delay={3}
            />
          </div>

          {/* Tobirama 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Tobirama3.svg"
              alt="Clan Leader Tobirama"
              className="h-90 -mt-20"
            />

            <TobiramaStat
              age="25"
              height="182 cm"
              power="80%"
              waterRelease="100%"
              flyingRaijin="75%"
              delay={6}
            />
          </div>

          {/* Tobirama 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Tobirama4.svg"
              alt="Second Hokage"
              className="h-105 -mt-30"
            />

            <TobiramaStat
              age="40"
              height="182 cm"
              power="95%"
              waterRelease="100%"
              flyingRaijin="100%"
              delay={9}
            />
          </div>

          {/* Tobirama 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Tobirama5.svg"
              alt="Edo Tobirama"
              className="h-110 -mt-36"
            />

            <TobiramaStat
              age="Legend"
              height="182 cm"
              power="100%"
              waterRelease="100%"
              flyingRaijin="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tobirama2;