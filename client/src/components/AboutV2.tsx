import OwlV2 from "../assets/images/owlv2.jpg";
import { ChevronRight } from "lucide-react";

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

          <div className="col-span-4 row-span-6 border border-white/10 rounded-2xl overflow-hidden">
            Card 3
          </div>

          <div className="col-span-8 row-span-2 border border-white/10 rounded-2xl overflow-hidden">
            Card 4
          </div>

          <div className="col-span-5 row-span-4 border border-white/10 rounded-2xl overflow-hidden">
            Card 5
          </div>
          <div className="col-span-3 row-span-2 border border-white/10 rounded-2xl overflow-hidden">
            Card 6
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
