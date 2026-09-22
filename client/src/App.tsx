import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Github from "./components/Github";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import AboutV2 from "./components/AboutV2";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#111]">
        {/* Fixed grid */}
        <div
          className="
          fixed
          inset-0
          z-0
          pointer-events-none

          bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-size-[32px_32px]
        "
        />

        {/* Actual website */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <AboutV2 />
          <Github />
          < Footer />
        </div>
      </div>
    </>
  );
};

export default App;
