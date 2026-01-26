import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
