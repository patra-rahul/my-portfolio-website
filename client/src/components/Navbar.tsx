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
      <ul className="hidden md:flex justify-between items-center text-4xl text-color-panel text-primary-text cursor-pointer">
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
          <a href="#About" className="hover:text-blue">About</a>
        </li>
        <li>
          <a href="#" onClick={() => alert("Coming Soon !!!")} className="hover:text-blue">
            Work
          </a>
        </li>
        <li>
          <a href="#Github" className="hover:text-blue">Github</a>
        </li>
        <li>
          <a href="#" onClick={() => alert("Coming Soon!!")} className="hover:text-blue">
            Activity
          </a>
        </li>
        <li className="bg-white px-4 py-2 rounded-lg text-bg hover:text-white hover:bg-transparent hover:border">
          <a href="mailto:contractrahulpatra@gmail.com" className="">
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
        <ul className="flex-col justify-center space-y-2 text-white text-xl mt-4 tracking-widest ">
          <li className="bg p-2 rounded-lg border">
            <a
              href="#About"
              className="flex items-center w-full h-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About
            </a>
          </li>
          <li
            className="bg p-2 rounded-lg border"
            onClick={() => alert("Coming Soon !!")}
          >
            Work
          </li>
          <li
            className="bg p-2 rounded-lg border"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <a href="#Github" className="flex items-center w-full h-full">
              Github
            </a>
          </li>
          <li
            className="bg p-2 rounded-lg border"
            onClick={() => alert("Coming Soon !!")}
          >
            Activity
          </li>
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
