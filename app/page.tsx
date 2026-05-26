import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import SystemsArchitecture from "./components/SystemsArchitecture";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechOrbit from "./components/TechOrbit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <SystemsArchitecture />
      <Experience />
      <Projects />
      <TechOrbit />
      <Contact />
      <Footer />
    </>
  );
}
