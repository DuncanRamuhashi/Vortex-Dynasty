import React from 'react';
import logo from '../assets/wew-removebg-preview.png';
import { FaLocationPin } from 'react-icons/fa6';
const Navbar = () => {
  return (
    <div className="px-10 py-9">
      <div className="flex justify-between items-center bg-gradient-to-b from-gray-400 via-gray-100 
      rounded-3xl p-3 shadow-lg">
        
        {/* Logo */}
        <div>
          <img src={logo} className="h-24 w-[300px] object-contain" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex pr-20 gap-8 text-blue-500 text-lg font-bold">
          <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out">Story</a>
          <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out">Press</a>
        </div>

        {/* Store Locator */}
        <div className=" space-x-2 inline-flex items-center justify-center bg-gray-800 hover:text-gray-800 text-gray-100 text-lg font-bold 
        rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
          <a href="#">Store Locator</a>
          <FaLocationPin/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
