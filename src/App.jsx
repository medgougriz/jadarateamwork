import { useState } from "react";
import Home from "./pages/Home";
import Quad from "./pages/Quad";
import { Routes, Route } from "react-router-dom";

import "./style.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quad" element={<Quad />} />
    </Routes>
    </>
  );
}

export default App;
