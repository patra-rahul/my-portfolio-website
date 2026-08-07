import { Info } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Asci from "./Asci";
import { SquareArrowOutUpLeft } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="tracking-wider  text-white shadow-lg shadow-cyan-500/50 border-2 m-4  rounded-xl h-full">
        <div className="h-10 bg-panel rounded-t-xl flex items-center">
          <div className="flex items-center space-x-2 mx-4">
            <div className="bg-red-600 h-3 w-3 rounded-full"></div>
            <div className="bg-yellow-600 h-3 w-3 rounded-full"></div>
            <div className="bg-green-600 h-3 w-3 rounded-full"></div>
          </div>
          <div className="text-lg">
            Welcome to my awesome Portfolio Website !!
          </div>
        </div>

        <div className="flex-col items-center justify-center">
          <div className="m-4 p-4">
            <div className="flex justify-around">
              <div>
                <div className="text-9xl text-blue">RAHUL</div>
                <div className="text-2xl">
                  Full Stack / Backend Developer - Building in Public
                </div>
                <div className="text-secondary-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, earum! <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nam.
                </div>

                <div className="flex my-5">
                  <Info className="text-blue space-x-1" />
                  <span className="text-secondary-text mx-3">
                    Logged in as user:
                  </span>
                  patra-rahul
                </div>

                <div className="text-2xl">~/patra-rahul [He/Him]</div>
                <div className="flex bg-panel rounded-xl p-2 mt-4  border-border border-2">
                  <ChevronRight className="text-yellow" /> Building Backend & AI
                  systems one commit at a time_
                </div>

                <div className="mt-4 space-x-2 flex">
                  <button className="bg-yellow py-2 px-4 rounded-xl text-bg">
                    Book Call
                  </button>
                  <button className="bg-purple py-2 px-4 rounded-xl text-bg flex gap-2">
                    Github
                    <span>
                      <SquareArrowOutUpLeft />
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <Asci />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
