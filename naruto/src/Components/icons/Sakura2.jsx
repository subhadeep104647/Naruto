import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const SakuraStat = ({ age, height, power, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 1,
    }}
    className="bg-black/60 backdrop-blur-md border border-pink-700 rounded-xl p-3 mt-4 w-40"
  >
    <p className="text-gray-300 text-xs">Age: {age}</p>
    <p className="text-gray-300 text-xs">Height: {height}</p>

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
          className="h-full bg-gradient-to-r from-pink-400 to-rose-500"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
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

const Sakura2 = () => {
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
            <Link to="/Sakura">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          SAKURA HARUNO
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Sakura 1 */}
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
              src="/Sakura1.svg"
              alt="Young Sakura"
              className="h-60"
            />

            <SakuraStat
              age="8"
              height="140 cm"
              power="15%"
              delay={0}
            />
          </div>

          {/* Sakura 2 */}
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
              src="/Sakura2.svg"
              alt="Genin Sakura"
              className="h-70 -mt-10"
            />

            <SakuraStat
              age="12"
              height="150 cm"
              power="35%"
              delay={3}
            />
          </div>

          {/* Sakura 3 */}
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
              src="/Sakura3.svg"
              alt="Shippuden Sakura"
              className="h-90 -mt-20"
            />

            <SakuraStat
              age="15"
              height="161 cm"
              power="70%"
              delay={6}
            />
          </div>

          {/* Sakura 4 */}
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
              src="/Sakura4.svg"
              alt="War Arc Sakura"
              className="h-100 -mt-30"
            />

            <SakuraStat
              age="20"
              height="165 cm"
              power="90%"
              delay={9}
            />
          </div>

          {/* Sakura 5 */}
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
              src="/Sakura5.svg"
              alt="Adult Sakura"
              className="h-120 -mt-40"
            />

            <SakuraStat
              age="32"
              height="165 cm"
              power="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sakura2;