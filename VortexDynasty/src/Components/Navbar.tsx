import React, { useState } from "react";
import logo from "../assets/wew-removebg-preview.png";
import {  FaBars, FaTimes } from "react-icons/fa";
import { FaLocationPin } from 'react-icons/fa6';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-gray-400 via-gray-100 p-4 shadow-lg fixed w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        
        {/* Logo */}
        <div>
          <img src={logo} className="h-16 w-[200px] md:h-20 md:w-[250px] object-contain" alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-500 text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent rounded-lg md:flex gap-8 text-lg font-bold transition-all duration-300 ease-in-out
          ${menuOpen ? "block p-6 shadow-lg" : "hidden md:flex"}`}>
          <a href="#about" className="block md:inline hover:text-blue-600 transition">Story</a>
          <a href="#press" className="block md:inline hover:text-blue-600 transition">Press</a>
        </div>

        {/* Store Locator */}
        <div className="hidden md:flex space-x-2 items-center bg-gray-800 hover:text-gray-800 text-gray-100 text-lg font-bold 
        rounded-lg px-4 py-2 hover:bg-gray-100 transition cursor-pointer">
          <a href="https://www.google.com/maps/place/VORTEX+MEDIA+ADVERTISING" className="flex items-center gap-2">
            Store Locator <FaLocationPin />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 w-full p-4 flex flex-col items-center gap-4 shadow-md">
          <a href="#" className="text-lg hover:text-blue-600 transition">Story</a>
          <a href="#" className="text-lg hover:text-blue-600 transition">Press</a>
          <a
            href="https://www.google.com/maps/place/VORTEX+MEDIA+ADVERTISING"
            className="flex items-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-800 transition"
          >
            Store Locator <FaLocationPin />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
