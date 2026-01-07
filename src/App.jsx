import Home from "./pages/Home";
import Quad from "./pages/Quad";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import "./style.css";
import Notfind from "./components/notfind";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfind />} />
      <Route path="/quad" element={<Quad />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
