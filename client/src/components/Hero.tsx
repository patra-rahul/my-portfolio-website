import { Phone } from "lucide-react";
import Linkedin from "../assets/icons/Linkedin.png";

import HeroImg from "../assets/images/hero.png";
const Hero = () => {
  return (
    <>
      <div
        className="tracking-wider  text-white border m-4 border-white/15  rounded-xl h-full"
        id="Hero"
      >
        <div className="h-10 bg-panel rounded-t-xl flex items-center">
          <div className="flex items-center space-x-2 mx-4">
            <div className="bg-red-600 h-3 w-3 rounded-full"></div>
            <div className="bg-yellow-600 h-3 w-3 rounded-full"></div>
            <div className="bg-green-600 h-3 w-3 rounded-full"></div>
          </div>
          <div className="text-lg hidden md:block">
            Welcome To My Awesome Portfolio Website !!
          </div>
          <div className="text-lg block md:hidden">Welcome !!</div>
        </div>

        <div className="relative hidden md:block">
          <h1 className="absolute top-80 left-50 text-2xl text-blue">
            Full Stack / Backend Engineer
          </h1>
        </div>

        <div className="relative flex justify-center">
          <ul className="absolute top-10 md:top-15 flex whitespace-nowrap leading-none gap-x-2">
            <li className="flex items-center border-blue border w-fit p-2 rounded-lg text-blue gap-x-2">
              <a href="">LinkedIn</a>
              <img src={Linkedin} alt="" className="h-5 w-auto" />
            </li>

            <li className="flex items-center bg-blue w-fit p-2 rounded-lg">
              Book Call <Phone height={10} />
            </li>
          </ul>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute whitespace-nowrap top-20 md:top-40 z-0 text-[300px] leading-20 max-md:text-[110px] select-none">
            <span className="max-md:block">RAHUL</span>
            <span className="max-md:block">PATRA</span>
          </div>
          <img src={HeroImg} alt="" className="relative z-10 mt-50" />
        </div>
      </div>
    </>
  );
};

export default Hero;
