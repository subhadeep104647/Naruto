import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const ItachiStat = ({
  age,
  height,
  power,
  sharingan,
  mangekyo,
  susanoo,
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
          className="h-full bg-gradient-to-r from-red-500 to-orange-500"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Sharingan */}
    <div className="mt-3">
      <p className="text-red-400 text-xs mb-1">Sharingan</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: sharingan }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-red-700 to-red-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{sharingan}</p>
    </div>

    {/* Mangekyo Sharingan */}
    <div className="mt-3">
      <p className="text-purple-400 text-xs mb-1">Mangekyō</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: mangekyo }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-purple-700 to-pink-500"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{mangekyo}</p>
    </div>

    {/* Susanoo */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Susanoo</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: susanoo }}
          transition={{
            delay: delay + 1.4,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{susanoo}</p>
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

const Itachi2 = () => {
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
            <Link to="/Itachi">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-red-500 via-red-300 to-orange-400 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          ITACHI UCHIHA
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Itachi 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                delay: 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/Itachi1.svg"
              alt="Young Itachi"
              className="h-50"
            />

            <ItachiStat
              age="5"
              height="118 cm"
              power="20%"
              sharingan="0%"
              mangekyo="0%"
              susanoo="0%"
              delay={0}
            />
          </div>

          {/* Itachi 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                delay: 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/Itachi2.svg"
              alt="Young Uchiha Itachi"
              className="h-80 -mt-20"
            />

            <ItachiStat
              age="10"
              height="145 cm"
              power="45%"
              sharingan="60%"
              mangekyo="0%"
              susanoo="0%"
              delay={3}
            />
          </div>

          {/* Itachi 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                delay: 6,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/Itachi3.svg"
              alt="ANBU Itachi"
              className="h-90 -mt-20"
            />

            <ItachiStat
              age="13"
              height="168 cm"
              power="70%"
              sharingan="90%"
              mangekyo="85%"
              susanoo="40%"
              delay={6}
            />
          </div>

          {/* Itachi 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                delay: 9,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/Itachi4.svg"
              alt="Akatsuki Itachi"
              className="h-100 -mt-30"
            />

            <ItachiStat
              age="17"
              height="178 cm"
              power="90%"
              sharingan="100%"
              mangekyo="100%"
              susanoo="90%"
              delay={9}
            />
          </div>

          {/* Itachi 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                delay: 12,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/Itachi5.svg"
              alt="Prime Itachi"
              className="h-120 -mt-40"
            />

            <ItachiStat
              age="21"
              height="178 cm"
              power="100%"
              sharingan="100%"
              mangekyo="100%"
              susanoo="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Itachi2;