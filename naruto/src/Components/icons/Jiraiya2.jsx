import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const JiraiyaStat = ({
  age,
  height,
  power,
  sageMode,
  ninjutsu,
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
          className="h-full bg-gradient-to-r from-red-500 to-orange-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Sage Mode */}
    <div className="mt-3">
      <p className="text-green-300 text-xs mb-1">Sage Mode</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: sageMode }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-green-500 to-lime-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{sageMode}</p>
    </div>

    {/* Ninjutsu */}
    <div className="mt-3">
      <p className="text-blue-300 text-xs mb-1">Ninjutsu</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: ninjutsu }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{ninjutsu}</p>
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

const Jiraiya2 = () => {
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
            <Link to="/Jiraiya">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-red-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          JIRAIYA
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Jiraiya 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Jiraiya1.svg"
              alt="Young Jiraiya"
              className="h-60"
            />

            <JiraiyaStat
              age="10"
              height="148 cm"
              power="30%"
              sageMode="0%"
              ninjutsu="25%"
              delay={0}
            />
          </div>

          {/* Jiraiya 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Jiraiya2.svg"
              alt="Young Shinobi Jiraiya"
              className="h-70 -mt-10"
            />

            <JiraiyaStat
              age="18"
              height="175 cm"
              power="60%"
              sageMode="0%"
              ninjutsu="60%"
              delay={3}
            />
          </div>

          {/* Jiraiya 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Jiraiya3.svg"
              alt="Legendary Sannin"
              className="h-90 -mt-20"
            />

            <JiraiyaStat
              age="25"
              height="188 cm"
              power="80%"
              sageMode="40%"
              ninjutsu="85%"
              delay={6}
            />
          </div>

          {/* Jiraiya 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Jiraiya4.svg"
              alt="Master Jiraiya"
              className="h-105 -mt-30"
            />

            <JiraiyaStat
              age="50"
              height="191 cm"
              power="95%"
              sageMode="90%"
              ninjutsu="100%"
              delay={9}
            />
          </div>

          {/* Jiraiya 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Jiraiya5.svg"
              alt="Sage Jiraiya"
              className="h-110 -mt-36"
            />

            <JiraiyaStat
              age="58"
              height="191 cm"
              power="100%"
              sageMode="100%"
              ninjutsu="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Jiraiya2;