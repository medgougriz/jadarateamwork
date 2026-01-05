import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D]">

      {/* Logo */}
      <a href="#" className="text-orange-600">
        <img className="w-13 md:w-13" src="https://agadiractivities.com/wp-content/uploads/2022/02/tinywow_remove_bg_880681-e1645315319282.png" alt="logo" />
        {/* LOGO */}
      </a>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        <li><a className="hover:text-gray-500 transition" href="/">Home</a></li>
        <li><a className="hover:text-gray-500 transition" href="/service">Services</a></li>
        <li><a className="hover:text-gray-500 transition" href="/quad">Quad</a></li>
        <li><a className="hover:text-gray-500 transition" href="#">Pricing</a></li>
      </ul>

      {/* Desktop Button */}
      <button className="md:inline hidden bg-white text-gray-600 border w-40 h-11 rounded-full">
        Get started
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>

          <button className="mt-6 bg-white border w-40 h-11 rounded-full">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}
