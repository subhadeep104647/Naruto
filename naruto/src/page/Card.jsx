import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center">
      
      {/* Title */}
      <motion.h1
        className="text-7xl font-serif tracking-[12px] text-orange-400"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        KONOHAGAKURE
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-2xl text-gray-300 mt-4 tracking-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        The Village Hidden in the Leaves
      </motion.h2>

      {/* Description */}
      <motion.div
        className="max-w-4xl mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <p className="text-yellow-300 text-lg leading-9 tracking-wide">
          Konohagakure, often called Konoha, is one of the Five Great Ninja
          Villages and the heart of the Land of Fire. Founded by Hashirama
          Senju and Madara Uchiha, the village became a symbol of peace,
          unity, and strength.
        </p>

        <p className="text-gray-300 text-lg leading-9 tracking-wide mt-6">
          Protected by generations of Hokage, Konoha has produced legendary
          shinobi such as Naruto Uzumaki, Kakashi Hatake, Minato Namikaze,
          Itachi Uchiha, and many others. The Will of Fire is the philosophy
          that binds every ninja together, teaching them to protect the next
          generation and never abandon their comrades.
        </p>

        <p className="text-orange-300 text-xl leading-9 tracking-wide mt-6 italic">
          "The fire that burns within the Leaf Village is not a flame of war,
          but a flame of hope."
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            x: 8,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="px-6 py-3 rounded-full border border-orange-400 text-orange-300 bg-white/5 backdrop-blur-md flex items-center gap-2"
        >
          <Link to="/Naruto" className="flex items-center gap-2">
            MEET THE HEROES <ChevronRight size={18} />
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Card;