import React from 'react';
import Navbar from './Navbar';
import background from '../assets/pexels-pixabay-274192.jpg';

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
    </div>
  );
};

export default Hero;
