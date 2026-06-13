import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navebar from "./Components/Navebar";
import Home from "./page/Home";
import Hinata from "./page/Hinata";
import Card from "./page/Card";
import Naruto from "./page/Naruto";
import Naruto2 from "./Components/icons/Naruto2";
import Hinata2 from "./Components/icons/Hinata2";
import Sakura from "./page/Sakura";
import Kakashi from "./page/Kakashi";
import Kakashi2 from "./Components/icons/Kakashi2";
import Sakura2 from "./Components/icons/Sakura2";
import Sasuke from "./page/Sasuke";
import Sasuke2 from "./Components/icons/Sasuke2";
import Itachi2 from "./Components/icons/Itachi2";
import Itachi from "./page/Itachi";
import Shisui from "./page/Shisui";
import Shisui2 from "./Components/icons/Shisui2";
import Obito2 from "./Components/icons/Obito2";
import Obito from "./page/Obito";
import Madara from "./page/Madara";
import Madara2 from "./Components/icons/Madara2";
import Hashirama from "./page/Hashirama";
import Hashirama2 from "./Components/icons/Hashirama2";
import Ino from "./page/Ino";
import Ino2 from "./Components/icons/Ino2";
import Guy from "./page/Guy";
import Guy2 from "./Components/icons/Guy2";
import Lee from "./page/Lee";
import Lee2 from "./Components/icons/Lee2";
import Neji from "./page/Neji";
import Neji2 from "./Components/icons/Neji2";
import Tenten from "./page/Tenten";
import Tenten2 from "./Components/icons/Tenten2";
import Shikamaru from "./page/Shikamaru";
import Shikamaru2 from "./Components/icons/Shikamaru2";
import Choji from "./page/Choji";
import Choji2 from "./Components/icons/Choji2";
import Tobirama from "./page/Tobirama";
import Tobirama2 from "./page/Tobirama2";
import Hiruzen from "./page/Hiruzen";
import Hiruzen2 from "./Components/icons/Hiruzen2";
import Minato from "./page/Minato";
import Minato2 from "./Components/icons/Minato2";

const App = () => {
  const location = useLocation();

  const backgroundImage =
    location.pathname === "/"
      ? "/Bg.png"
      : location.pathname === "/Card"
      ? "/Bg2.png"
      : "/Bg3.png";

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
        className="relative z-20 px-20 py-2"
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
          <Route path="/Naruto" element={<Naruto />} />
          <Route path="/Naruto2" element={<Naruto2 />} />
          <Route path="/Hinata2" element={<Hinata2 />} />
          <Route path="/Sakura" element={<Sakura />} />
          <Route path="/Sakura2" element={<Sakura2 />} />
          <Route path="/Kakashi" element={<Kakashi />} />
          <Route path="/Kakashi2" element={<Kakashi2 />} />
          <Route path="/Sasuke" element={<Sasuke/>} />
          <Route path="/Sasuke2" element={<Sasuke2/>} />
          <Route path="/Itachi" element={<Itachi/>} />
          <Route path="/Itachi2" element={<Itachi2/>} />
          <Route path="/Shisui" element={<Shisui/>} />
          <Route path="/Shisui2" element={<Shisui2/>} />
          <Route path="/Obito" element={<Obito/>} />
          <Route path="/Obito2" element={<Obito2/>} />
          <Route path="/Madara" element={<Madara/>} />
          <Route path="/Madara2" element={<Madara2/>} />
          <Route path="/Hashirama" element={<Hashirama/>} />
          <Route path="/Hashirama2" element={<Hashirama2/>} />
          <Route path="/Ino" element={<Ino/>} />
          <Route path="/Ino2" element={<Ino2/>} />
          <Route path="/Guy" element={<Guy/>} />
          <Route path="/Guy2" element={<Guy2/>} />
          <Route path="/Lee" element={<Lee/>} />
          <Route path="/Lee2" element={<Lee2/>} />
          <Route path="/Neji" element={<Neji/>} />
          <Route path="/Neji2" element={<Neji2/>} />
          <Route path="/Tenten" element={<Tenten/>} />
          <Route path="/Tenten2" element={<Tenten2/>} />
          <Route path="/Shikamaru" element={<Shikamaru/>} />
          <Route path="/Shikamaru2" element={<Shikamaru2/>} />
          <Route path="/Choji" element={<Choji/>} />
          <Route path="/Choji2" element={<Choji2/>} />
          <Route path="/Tobirama" element={<Tobirama/>} />
          <Route path="/Tobirama2" element={<Tobirama2/>} />
          <Route path="/Hiruzen" element={<Hiruzen/>} />
          <Route path="/Hiruzen2" element={<Hiruzen2/>} />
          <Route path="/Minato" element={<Minato/>} />
          <Route path="/Minato2" element={<Minato2/>} />
        </Routes>
      </motion.div>
    </div>
  );
};

export default App;