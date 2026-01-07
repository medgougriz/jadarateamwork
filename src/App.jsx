import { useState } from "react";
import Home from "./pages/Home";
import Quad from "./pages/Quad";
import ContactPage from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import "./style.css";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quad" element={<Quad />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
