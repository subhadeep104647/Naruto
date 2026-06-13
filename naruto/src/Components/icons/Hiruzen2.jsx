import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const HiruzenStat = ({
  age,
  height,
  power,
  ninjutsuMastery,
  willOfFire,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-amber-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-amber-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-amber-600 to-yellow-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Ninjutsu Mastery */}
    <div className="mt-3">
      <p className="text-orange-300 text-xs mb-1">Ninjutsu Mastery</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: ninjutsuMastery }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-orange-600 to-amber-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{ninjutsuMastery}</p>
    </div>

    {/* Will Of Fire */}
    <div className="mt-3">
      <p className="text-red-300 text-xs mb-1">Will Of Fire</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: willOfFire }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-red-600 to-orange-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{willOfFire}</p>
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

const Hiruzen2 = () => {
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
            <Link to="/Hiruzen">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          HIRUZEN SARUTOBI
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Hiruzen 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Hiruzen1.svg"
              alt="Young Hiruzen"
              className="h-60"
            />

            <HiruzenStat
              age="10"
              height="145 cm"
              power="35%"
              ninjutsuMastery="40%"
              willOfFire="50%"
              delay={0}
            />
          </div>

          {/* Hiruzen 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Hiruzen2.svg"
              alt="Young Warrior Hiruzen"
              className="h-70 -mt-10"
            />

            <HiruzenStat
              age="18"
              height="168 cm"
              power="60%"
              ninjutsuMastery="75%"
              willOfFire="70%"
              delay={3}
            />
          </div>

          {/* Hiruzen 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Hiruzen3.svg"
              alt="Prime Hiruzen"
              className="h-90 -mt-20"
            />

            <HiruzenStat
              age="30"
              height="175 cm"
              power="85%"
              ninjutsuMastery="95%"
              willOfFire="85%"
              delay={6}
            />
          </div>

          {/* Hiruzen 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Hiruzen4.svg"
              alt="Third Hokage"
              className="h-105 -mt-30"
            />

            <HiruzenStat
              age="50"
              height="175 cm"
              power="95%"
              ninjutsuMastery="100%"
              willOfFire="100%"
              delay={9}
            />
          </div>

          {/* Hiruzen 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Hiruzen5.svg"
              alt="Legendary Hiruzen"
              className="h-110 -mt-36"
            />

            <HiruzenStat
              age="69"
              height="175 cm"
              power="100%"
              ninjutsuMastery="100%"
              willOfFire="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hiruzen2;