import OwlV2 from "../assets/images/owlv2.jpg";
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

const AboutV2 = () => {
  return (
    <>
      <div className="p-2 m-2 text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[90px] gap-4">
          <div className="col-span-8 row-span-4 rounded-2xl bg-bg overflow-hidden border border-white/10 p-5 flex flex-col justify-center px-20">
            <h1 className="text-2xl ">Rahul Patra [Synonyms: Owl] </h1>
            <p>
              I'm an{" "}
              <span className="text-yellow italic">
                {" "}
                aspiring software developer{" "}
              </span>{" "}
              focused on building practical, scalable software and understanding
              how things work under the hood. I enjoy working across the stack —
              from designing interfaces and building APIs to databases,
              authentication, caching, and deployment. I'm particularly
              interested in backend engineering, system design, and applied AI.
              Currently, I'm sharpening my{" "}
              <span className="text-green italic">
                {" "}
                foundations in DSA, backend development, system design, and AI
                engineering,{" "}
              </span>{" "}
              while building projects that force me to learn beyond tutorials.
            </p>

            <div className="bg-bg p-4 my-4 border-secondary-text border-2 rounded-xl flex flex-col">
              <div className="flex">
                <ChevronRight />{" "}
                <span className="text-secondary-text">ls quote</span>
              </div>
              <div className="italic text-xl">
                {" "}
                "I believe the best way to learn software engineering is to
                build things, break them, understand why they broke, and build
                them better."{" "}
              </div>
            </div>
          </div>

          <div className="col-span-4 row-span-4 border border-white/10 rounded-2xl overflow-hidden">
            <img src={OwlV2} alt="" />
          </div>

          <div className="col-span-4 row-span-7 border border-white/10 rounded-2xl overflow-hidden">
            Card 3
          </div>

          <div className="col-span-8 row-span-3 border border-white/10 rounded-2xl overflow-hidden bg-white/6">
            <div className="grid grid-cols-12 p-4 items-center gap-y-2 mt-4.5 ml-5">
              <h1 className="col-span-8 text-3xl">Languages</h1>
              <img
                src={Cpp}
                alt="C++"
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Js}
                alt="C++"
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Ts}
                alt="C++"
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Py}
                alt="C++"
                className="col-span-1"
                height={40}
                width={40}
              />

              <h1 className="col-span-9 text-3xl">Frameworks</h1>
              <img
                src={React}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Tailwind}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Express}
                alt=""
                className="col-span-1 invert"
                height={40}
                width={40}
              />

              <h1 className="col-span-9 text-3xl">Database & Cache</h1>
              <img
                src={Mongo}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Postgres}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Redis}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />

              <h1 className="col-span-10 text-3xl">ORMs & ODMs</h1>
              <img
                src={Prisma}
                alt=""
                className="col-span-1 brightness-0 invert"
                height={40}
                width={40}
              />
              <img
                src={Mongoose}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />

              <h1 className="col-span-10 text-3xl">Version Control Tools</h1>
              <img
                src={Git}
                alt=""
                className="col-span-1"
                height={40}
                width={40}
              />
              <img
                src={Github}
                alt=""
                className="col-span-1 invert brightness-0"
                height={40}
                width={40}
              />
            </div>
          </div>

          <div className="col-span-5 row-span-4 border border-white/10 rounded-2xl overflow-hidden">
            Card 5
          </div>
          <div className="col-span-3 row-span-2 bg-purple rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center">
            <span className="text-6xl">7+</span>
            Fundamental Backend Projects
          </div>
          <div className="col-span-3 row-span-2 border border-white/10 rounded-2xl overflow-hidden">
            Card 7
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
