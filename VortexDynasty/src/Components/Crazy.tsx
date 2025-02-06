import React from "react";
import crazy from "../assets/crazy.jpg";
import crazy2 from "../assets/crazy2.jpg";

const Crazy = () => {
  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* First Image with Card */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        <img
          src={crazy}
          alt="Crazy Vibes"
          className="w-full h-[350px] md:h-auto object-cover grayscale"
        />
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 md:left-5 md:translate-x-0 bg-black bg-opacity-70 text-white p-4 rounded-lg shadow-lg w-4/5 md:w-auto">
          <h2 className="text-lg md:text-xl font-bold text-center md:text-left">
            Crazy Vibes
          </h2>
          <p className="text-sm text-center md:text-left">
            Unleash the energy, embrace the moment.
          </p>
        </div>
      </div>

      {/* Second Image with Card */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        <img
          src={crazy2}
          alt="Wild Nights"
          className="w-full h-[350px] md:h-auto object-cover"
        />
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 md:right-5 md:left-auto md:translate-x-0 bg-gray-900 bg-opacity-70 text-white p-4 rounded-lg shadow-lg w-4/5 md:w-auto">
          <h2 className="text-lg md:text-xl font-bold text-center md:text-right">
            Wild Nights
          </h2>
          <p className="text-sm text-center md:text-right">
            Dance, drink, and let loose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crazy;
