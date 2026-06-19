import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroes = [
  {
    Link:"/Naruto",
    name: "NARUTO",
    title: "SEVENTH HOKAGE",
    image: "/Naruto5.svg",
    primaryColor: "from-orange-400 via-yellow-400 to-orange-600",
    glowColor: "bg-orange-500/30",
  },
  {
    Link:"/Sasuke",
    name: "SASUKE",
    title: "SHADOW HOKAGE",
    image: "/Sasuke5.svg",
    primaryColor: "from-purple-500 via-violet-400 to-indigo-500",
    glowColor: "bg-purple-500/30",
  },
  {
    Link:"/Minato",
    name: "MINATO",
    title: "YELLOW FLASH",
    image: "/Minato5.svg",
    primaryColor: "from-yellow-400 via-orange-400 to-red-500",
    glowColor: "bg-yellow-500/30",
  },
  {
    Link:"/Itachi",
    name: "ITACHI",
    title: "UCHIHA PRODIGY",
    image: "/Itachi5.svg",
    primaryColor: "from-red-500 via-red-400 to-orange-400",
    glowColor: "bg-red-500/30",
  },
  {
    Link:"/Madara",
    name: "MADARA",
    title: "GHOST OF UCHIHA",
    image: "/Madara5.svg",
    primaryColor: "from-red-600 via-rose-500 to-purple-500",
    glowColor: "bg-red-600/30",
  },
  {
    Link:"/Hashirama",
    name: "HASHIRAMA",
    title: "GOD OF SHINOBI",
    image: "/Hashirama5.svg",
    primaryColor: "from-green-500 via-emerald-400 to-lime-400",
    glowColor: "bg-green-500/30",
  },
  {
    Link:"/Tobirama",
    name: "TOBIRAMA",
    title: "SECOND HOKAGE",
    image: "/Tobirama5.svg",
    primaryColor: "from-cyan-500 via-sky-400 to-blue-500",
    glowColor: "bg-cyan-500/30",
  },
  {
    Link:"/Hiruzen",
    name: "HIRUZEN",
    title: "PROFESSOR",
    image: "/Hiruzen5.svg",
    primaryColor: "from-amber-500 via-orange-400 to-red-500",
    glowColor: "bg-amber-500/30",
  },
  {
    Link:"/Jiraiya",
    name: "JIRAIYA",
    title: "LEGENDARY SANIN",
    image: "/Jiraiya5.svg",
    primaryColor: "from-red-500 via-orange-400 to-yellow-500",
    glowColor: "bg-red-500/30",
  },
  {
    Link:"/Tsunade",
    name: "TSUNADE",
    title: "FIFTH HOKAGE",
    image: "/Tsunade5.svg",
    primaryColor: "from-pink-500 via-rose-400 to-fuchsia-500",
    glowColor: "bg-pink-500/30",
  },
  {
    Link:"/Orochimaru",
    name: "OROCHIMARU",
    title: "SNAKE SANIN",
    image: "/Orochimaru5.svg",
    primaryColor: "from-purple-600 via-fuchsia-500 to-violet-500",
    glowColor: "bg-purple-600/30",
  },
  {
    Link:"/Kakashi",
    name: "KAKASHI",
    title: "COPY NINJA",
    image: "/Kakashi5.svg",
    primaryColor: "from-slate-400 via-gray-300 to-slate-500",
    glowColor: "bg-slate-500/30",
  },

];

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {heroes.map((hero, index) => (
        <button>
          <Link to={hero.Link}>
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            rotateY: 6,
            rotateX: 4,
          }}
          transition={{ duration: 0.6 }}
          className="group relative w-[300px] h-[460px] cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Background Glow */}
          <div
            className={`absolute inset-0 rounded-[40px] blur-3xl opacity-40 ${hero.glowColor} animate-pulse`}
          />

          {/* Rotating Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full border border-white/20 animate-spin" />
            <div className="absolute w-96 h-96 rounded-full border border-white/10 animate-spin" />
          </div>

          {/* Card Border */}
          <div
            className={`absolute inset-0 rounded-[40px] bg-gradient-to-r ${hero.primaryColor} p-[2px]`}
          >
            <div className="relative h-full w-full rounded-[38px] bg-black/90 backdrop-blur-xl overflow-hidden">
              
              {/* Shine */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="
                    absolute
                    top-0
                    -left-full
                    w-1/2
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    skew-x-12
                    group-hover:left-[150%]
                    duration-1000
                  "
                />
              </div>

              {/* Aura */}
              <div
                className={`absolute top-28 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[100px] ${hero.glowColor}`}
              />

              {/* Character */}
              <div className="relative flex justify-center mt-8 z-10">
                <motion.img
                  src={hero.image}
                  alt={hero.name}
                  
                  className="h-[300px] object-contain "
                />
              </div>

              {/* Info */}
              <div className="absolute bottom-10 left-0 right-0 z-10 text-center">
                <p className="text-gray-400 tracking-[4px] text-sm mb-2">
                  {hero.title}
                </p>

                <motion.h1
                  className={`
                    text-3xl
                    font-black
                    tracking-[6px]
                    bg-gradient-to-r
                    ${hero.primaryColor}
                    bg-clip-text
                    text-transparent
                  `}
                >
                  {hero.name}
                </motion.h1>
              </div>

              {/* Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-24 ${hero.glowColor} blur-2xl`}
              />
            </div>
          </div>
        </motion.div></Link>
        </button>
      ))}
    </div>
  );
};

export default Card;