import { useState } from "react";
import logo from "../assets/owl.jpg";
import { SquareMenu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="p-3 m-4 bg-panel/10 bg-opacity-0.5 rounded-xl sticky top-5 z-50 backdrop-blur-xl border border-white/10"
      id="Navbar"
    >
      <ul className="hidden md:flex justify-between items-center text-4xl text-color-panel text-primary-text">
        <li>
          <a href="#">
            <img
              src={logo}
              alt="inaccessible"
              className="h-12 rounded-full object-contain"
            />
          </a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>Work</li>
        <li>
          <a href="#Github">Github</a>
        </li>
        <li>Activity</li>
        <li className="bg-white px-4 py-2 rounded-lg text-bg">
          <a href="mailto:contractrahulpatra@gmail.com">
            contactrahulpatra@gmail.com
          </a>
        </li>
      </ul>

      <ul className="md:hidden flex items-center justify-between">
        <li>
          <a href="#">
            <img
              src={logo}
              alt="inaccessible"
              className="h-12 rounded-full object-contain"
            />
          </a>
        </li>
        <li>
          <button
            className="px-4 py-2 rounded-lg text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {(!menuOpen && <SquareMenu className="h-10 w-10" />) ||
              (menuOpen && <X className="h-10 w-10" />)}
          </button>
        </li>
      </ul>

      {menuOpen && (
        <ul className="flex-col justify-center space-y-2 text-white mt-4 tracking-widest ">
          <li className="bg-[#262f3b] p-2 rounded-lg">
            <a href="#About" onClick={() => setMenuOpen(!menuOpen)}>
              About
            </a>
          </li>
          <li className="bg-[#262f3b] p-2 rounded-lg">Work</li>
          <li className="bg-[#262f3b] p-2 rounded-lg">
            <a href="#Github" onClick={() => setMenuOpen(!menuOpen)}>
              Github
            </a>
          </li>
          <li className="bg-[#262f3b] p-2 rounded-lg">Activity</li>
          <li className="bg-white px-4 py-2 rounded-lg text-bg">
            <a href="mailto:contractrahulpatra@gmail.com">
              contactrahulpatra@gmail.com
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
