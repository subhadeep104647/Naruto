import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import Navebar from "./Components/Navebar";
import Home from "./Pages/Home";

const App = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[url(/Bg.png)] px-30 py-5 ">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url(/Bg.png)] opacity-90 z-0" />

      {/* Animated Gradient Circle 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}/>

      {/* Animated Gradient Circle 2 */}
      <motion.div
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}/>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="absolute rounded-full bg-white z-0"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10">
        <Navebar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App