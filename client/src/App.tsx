import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Github from "./components/Github";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Github />
      <Footer />
    </>
  );
};

export default App;
