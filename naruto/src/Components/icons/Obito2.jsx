import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const ObitoStat = ({
  age,
  height,
  power,
  sharingan,
  rinnegan,
  tenTails,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-orange-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-orange-300 text-xs mb-1">Power</p>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-orange-500 to-red-500"
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

    {/* Rinnegan */}
    <div className="mt-3">
      <p className="text-purple-300 text-xs mb-1">Rinnegan</p>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: rinnegan }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-purple-700 to-violet-400"
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">{rinnegan}</p>
    </div>

    {/* Ten Tails */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Ten Tails</p>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: tenTails }}
          transition={{
            delay: delay + 1.4,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-white"
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">{tenTails}</p>
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

const Obito2 = () => {
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
            <Link to="/Obito">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-orange-500 via-red-400 to-purple-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          OBITO UCHIHA
        </motion.h1>
      </div>

      {/* Evolution */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Obito 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Obito1.svg"
              alt="Young Obito"
              className="h-60"
            />

            <ObitoStat
              age="8"
              height="145 cm"
              power="20%"
              sharingan="0%"
              rinnegan="0%"
              tenTails="0%"
              delay={0}
            />
          </div>

          {/* Obito 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Obito2.svg"
              alt="Genin Obito"
              className="h-70 -mt-10"
            />

            <ObitoStat
              age="14"
              height="154 cm"
              power="85%"
              sharingan="80%"
              rinnegan="0%"
              tenTails="0%"
              delay={3}
            />
          </div>

          {/* Obito 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Obito3.svg"
              alt="Masked Obito"
              className="h-90 -mt-20"
            />

            <ObitoStat
              age="18"
              height="175 cm"
              power="100%"
              sharingan="100%"
              rinnegan="0%"
              tenTails="0%"
              delay={6}
            />
          </div>

          {/* Obito 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Obito4.svg"
              alt="War Arc Obito"
              className="h-100 -mt-30"
            />

            <ObitoStat
              age="31"
              height="182 cm"
              power="95%"
              sharingan="100%"
              rinnegan="75%"
              tenTails="25%"
              delay={9}
            />
          </div>

          {/* Obito 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Obito5.svg"
              alt="Ten Tails Obito"
              className="h-120 -mt-40"
            />

            <ObitoStat
              age="31"
              height="182 cm"
              power="100%"
              sharingan="100%"
              rinnegan="100%"
              tenTails="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Obito2;