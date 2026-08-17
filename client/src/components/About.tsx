import Me from "../assets/Me.jpg";
import { ChevronRight } from "lucide-react";

import Cpp from "../assets/icons/CPP.svg";
import Js from "../assets/icons/JavaScript.svg";
import Py from "../assets/icons/Python.svg";
import Ts from "../assets/icons/TypeScript.svg";
import React from "../assets/icons/React.svg";
import Tailwind from "../assets/icons/Tailwind CSS.svg";
import Express from "../assets/icons/Express.svg";
import Mongoose from "../assets/icons/Mongoose.svg";
import Prisma from "../assets/icons/prisma.svg";
import Git from "../assets/icons/Git.svg";
import Github from "../assets/icons/GitHub.svg";
import Mongo from "../assets/icons/MongoDB.svg";
import Postgres from "../assets/icons/PostgresSQL.svg";
import Redis from "../assets/icons/Redis.svg";
import Postman from "../assets/icons/Postman.svg";
import Node from "../assets/icons/Node.svg";

const About = () => {
  return (
    <div className=" py-24 sm:py-32" id="About">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-purple">
          {" "}
          About Me{" "}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-wider text-balance text-white sm:text-5xl">
          {" "}
          Everything you need to know{" "}
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2">
          {/* Left Column: Image Container */}
          <div className="relative lg:row-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
              <img src={Me} alt="" className="h-full object-cover" />
            </div>
          </div>

          {/* Right Column Top: Text Card */}
          <div className="relative max-lg:row-start-1">
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
              <div className="bg-bg p-6 h-fit text-white">
                <span className="text-2xl ">Rahul Patra [Synonyms: Owl] </span>
                <br />
                I'm an{" "}
                <span className="text-yellow italic">
                  {" "}
                  aspiring software developer{" "}
                </span>{" "}
                focused on building practical, scalable software and
                understanding how things work under the hood. I enjoy working
                across the stack — from designing interfaces and building APIs
                to databases, authentication, caching, and deployment. I'm
                particularly interested in backend engineering, system design,
                and applied AI. Currently, I'm sharpening my{" "}
                <span className="text-green italic">
                  {" "}
                  foundations in DSA, backend development, system design, and AI
                  engineering,{" "}
                </span>{" "}
                while building projects that force me to learn beyond tutorials.
                <div className="bg-bg p-4 my-4 border-secondary-text border-2 flex flex-col">
                  <div className="flex">
                    <ChevronRight />{" "}
                    <span className="text-secondary-text">ls quote</span>
                  </div>
                  <div className="italic text-xl">
                    {" "}
                    "I believe the best way to learn software engineering is to
                    build things, break them, understand why they broke, and
                    build them better."{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* Removed broken 'max-lg:xl' layout utility */}
            <div className="pointer-events-none absolute inset-px rounded-lg outline outline-white/15" />
          </div>

          {/* Right Column Bottom: Tech Stack Card */}
          <div className="relative max-lg:row-start-3">
            {/* Fixed broken class 'rounded-xlborder' */}
            <div className="bg-white text-panel p-6 border border-gray-100 max-w-2xl mx-auto rounded-xl">
              <h1 className="pb-4 text-2xl font-bold text-gray-800">
                {" "}
                Tech Stack{" "}
              </h1>
              <ul className="flex flex-col gap-6 tracking-wider">
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-bg min-w-45">
                    {" "}
                    Languages:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <img
                      src={Cpp}
                      alt="C++"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Py}
                      alt="Python"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Js}
                      alt="JavaScript"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Ts}
                      alt="TypeScript"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Node}
                      alt="Node.js"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-bg min-w-45">
                    {" "}
                    Libraries & Frameworks:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <img
                      src={React}
                      alt="React"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Tailwind}
                      alt="Tailwind"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Express}
                      alt="Express"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-bg min-w-45">
                    {" "}
                    ODMs & ORMs:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <img
                      src={Mongoose}
                      alt="Mongoose"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Prisma}
                      alt="Prisma"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-bg min-w-45">
                    {" "}
                    Version Control:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <img
                      src={Git}
                      alt="Git"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Github}
                      alt="GitHub"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-bg min-w-45">
                    {" "}
                    Databases & Cache:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <img
                      src={Postgres}
                      alt="PostgreSQL"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Mongo}
                      alt="MongoDB"
                      className="h-8 w-8 object-contain"
                    />
                    <img
                      src={Redis}
                      alt="Redis"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-bg min-w-45">
                    {" "}
                    Testing:{" "}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <img
                      src={Postman}
                      alt="Postman"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
