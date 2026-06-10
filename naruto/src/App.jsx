import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navebar from "./components/Navebar";
import Home from "./pages/Home";
import Hinata from "./pages/Hinata";
import Card from "./pages/Card";

const App = () => {
  const location = useLocation();

  const backgroundImage =
    location.pathname === "/"
      ? "/Bg.png" // Home page only
      : "/Bg2.png"; // All other pages

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        key={backgroundImage}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{
          scale: 1.2,
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.08, 1.12],
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          opacity: {
            duration: 2,
          },
        }}
      />

      {/* Cloud Layer 1 */}
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-full"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 20%), radial-gradient(circle at 60% 50%, rgba(255,255,255,0.10) 0%, transparent 25%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 18%)",
        }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Cloud Layer 2 */}
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-full"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 22%), radial-gradient(circle at 70% 40%, rgba(255,255,255,0.06) 0%, transparent 20%)",
        }}
        animate={{
          x: ["-20%", "-70%"],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content */}
      <motion.div
        className="relative z-20 px-20 py-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Navebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Hinata" element={<Hinata />} />
        </Routes>
      </motion.div>
    </div>
  );
};

export default App;