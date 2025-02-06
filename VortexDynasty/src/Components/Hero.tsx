
import Navbar from "./Navbar";
import background from "../assets/pexels-pixabay-274192.jpg";
import { GiVortex } from "react-icons/gi";

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Navbar */}
      <Navbar  />

      {/* Hero Quote */}
      <div className="flex flex-col items-center text-center px-20 md:flex-row md:justify-center gap-4 mt-[300px]">
        <GiVortex className="h-10 w-10 text-blue-400 animate-spin" />
        <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
          "Step into the Vortex, where the beat never surrenders."
        </p>
        <GiVortex className="h-10 w-10 text-blue-400 animate-spin" />
      </div>

      {/* Scrolling Text */}
      <div className="overflow-hidden relative py-32  bg-opacity-50 w-full">
        <div className="flex animate-scroll whitespace-nowrap gap-16 text-gray-300 font-extrabold text-lg md:text-2xl">
          {[
            "Drink, Dance, and Dominate. Welcome to Vortex Dynasty.",
            "Good Times, Great Vibes, and Endless Drinks.",
            "Get Lost in the Vortex, Find Joy in Every Sip.",
            "Raise Your Glass. Embrace the Vortex.",
            "Pour, Party, and Celebrate the Dynasty.",
            "Vortex Dynasty: Drink, Laugh, Repeat.",
            "Cheers to the Vortex. Cheers to Life!",
          ].map((text, index) => (
            <p key={index} className="flex-none">{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
