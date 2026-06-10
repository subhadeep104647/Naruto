import React from "react";
import { Route, Routes } from "react-router-dom";

import Navebar from "./Components/Navebar";
import Home from "./Pages/Home";
import Pain from "./Components/Icons/Pain";

const App = () => {
  return (
    <div className=" px-20 py-5 relative min-h-screen w-full bg-[url('/Bg.png')] bg-cover bg-center bg-no-repeat">
      <Navebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pain" element={<Pain />} />
      </Routes>
    </div>
  );
};

export default App;