import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const TentenStat = ({
  age,
  height,
  power,
  weaponMastery,
  sealingTools,
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
          className="h-full bg-gradient-to-r from-orange-500 to-amber-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{power}</p>
    </div>

    {/* Weapon Mastery */}
    <div className="mt-3">
      <p className="text-yellow-300 text-xs mb-1">Weapon Mastery</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: weaponMastery }}
          transition={{
            delay: delay + 0.8,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{weaponMastery}</p>
    </div>

    {/* Sealing Tools */}
    <div className="mt-3">
      <p className="text-cyan-300 text-xs mb-1">Sealing Tools</p>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: sealingTools }}
          transition={{
            delay: delay + 1.1,
            duration: 1.5,
          }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-400"
        />
      </div>

      <p className="text-xs text-gray-400 mt-1">{sealingTools}</p>
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

const Tenten2 = () => {
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
            <Link to="/Tenten">
              <ChevronLeft size={12} />
            </Link>
          </motion.button>
        </motion.div>

        <motion.h1
          className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent text-2xl md:text-4xl font-serif tracking-[8px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          TENTEN
        </motion.h1>
      </div>

      {/* Evolution Section */}
      <div className="w-full rounded-3xl bg-black/40 backdrop-blur-lg border border-gray-800 p-8">
        <div className="flex flex-row items-end justify-between gap-5">

          {/* Tenten 1 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0 }}
              src="/Tenten1.svg"
              alt="Young Tenten"
              className="h-60"
            />

            <TentenStat
              age="8"
              height="140 cm"
              power="15%"
              weaponMastery="20%"
              sealingTools="0%"
              delay={0}
            />
          </div>

          {/* Tenten 2 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 3 }}
              src="/Tenten2.svg"
              alt="Genin Tenten"
              className="h-70 -mt-10"
            />

            <TentenStat
              age="13"
              height="154 cm"
              power="40%"
              weaponMastery="55%"
              sealingTools="10%"
              delay={3}
            />
          </div>

          {/* Tenten 3 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 6 }}
              src="/Tenten3.svg"
              alt="Chunin Tenten"
              className="h-90 -mt-20"
            />

            <TentenStat
              age="15"
              height="164 cm"
              power="70%"
              weaponMastery="85%"
              sealingTools="45%"
              delay={6}
            />
          </div>

          {/* Tenten 4 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 9 }}
              src="/Tenten4.svg"
              alt="War Arc Tenten"
              className="h-100 -mt-30"
            />

            <TentenStat
              age="18"
              height="166 cm"
              power="90%"
              weaponMastery="100%"
              sealingTools="85%"
              delay={9}
            />
          </div>

          {/* Tenten 5 */}
          <div className="flex flex-col items-center">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 12 }}
              src="/Tenten5.svg"
              alt="Adult Tenten"
              className="h-115 -mt-38"
            />

            <TentenStat
              age="18"
              height="167 cm"
              power="100%"
              weaponMastery="100%"
              sealingTools="100%"
              delay={12}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tenten2;