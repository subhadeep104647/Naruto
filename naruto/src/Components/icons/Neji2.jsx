import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const NejiStat = ({
  age,
  height,
  power,
  byakugan,
  gentleFist,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-indigo-700 rounded-xl p-3 mt-4 w-44"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

    {/* Power */}
    <div className="mt-2">
      <p className="text-indigo-300 text-xs mb-1">Power</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: power }}
          transition={{
            delay: delay + 0.5,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Byakugan */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Byakugan</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: byakugan }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-300"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{byakugan}</p>
    </div>

    {/* Gentle Fist */}
    <div className="mt-3">
      <p className="text-violet-300 text-xs mb-1">Gentle Fist</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: gentleFist }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-violet-500 to-purple-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{gentleFist}</p>
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

const Neji2 = () => {
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
            <Link to="/Neji">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-indigo-400 via-violet-300 to-blue-400 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          NEJI HYUGA
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Neji 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Neji1.svg"
              alt="Young Neji"
              className="h-60"
            />

            <NejiStat
              age="8"
              height="140 cm"
              power="20%"
              byakugan="30%"
              gentleFist="25%"
              delay={0}
            />
          </div>

          {/* Neji 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Neji2.svg"
              alt="Genin Neji"
              className="h-70 -mt-10"
            />

            <NejiStat
              age="13"
              height="160 cm"
              power="45%"
              byakugan="65%"
              gentleFist="60%"
              delay={3}
            />
          </div>

          {/* Neji 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Neji3.svg"
              alt="Chunin Exam Neji"
              className="h-90 -mt-20"
            />

            <NejiStat
              age="14"
              height="165 cm"
              power="75%"
              byakugan="90%"
              gentleFist="90%"
              delay={6}
            />
          </div>

          {/* Neji 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Neji4.svg"
              alt="Shippuden Neji"
              className="h-100 -mt-30"
            />

            <NejiStat
              age="18"
              height="172 cm"
              power="95%"
              byakugan="100%"
              gentleFist="100%"
              delay={9}
            />
          </div>

          {/* Neji 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Neji5.svg"
              alt="War Arc Neji"
              className="h-115 -mt-38"
            />

            <NejiStat
              age="18"
              height="172 cm"
              power="100%"
              byakugan="100%"
              gentleFist="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Neji2;