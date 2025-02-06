import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <div className="text-center space-y-6 mb-10">
          <h2 className="text-3xl font-bold text-blue-500">
            Vortex Dynasty: The Rise of a Legacy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Born in 2011, Vortex Dynasty is more than a club—it's a movement. 
            From underground events to digital revolutions, we’ve redefined the 
            game with passion, technology, and street culture. The dynasty lives on. 
          </p>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-400">Contact Us</h3>
            <p className="text-gray-400">📍 Johannesburg, South Africa</p>
            <p className="text-gray-400">📧 vortexdynasty@email.com</p>
            <p className="text-gray-400">📞 +27 123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-semibold text-blue-400 text-center md:text-left">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/vortexrsa/" className="text-gray-400 hover:text-blue-500 text-3xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/vortexoptics/" className="text-gray-400 hover:text-blue-500 text-3xl">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/VortexM_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="text-gray-400 hover:text-blue-500 text-3xl">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/channel/UCquXDZlwxGNEY4hyCepNAZQ" className="text-gray-400 hover:text-blue-500 text-3xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Vortex Dynasty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
