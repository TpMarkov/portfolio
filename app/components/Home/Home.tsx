"use client";

import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Footer from "./Footer/Footer";
import { useDesignMode } from "@/app/context/DesignContext";

const Home = () => {
  const { designMode } = useDesignMode();

  return (
    <div
      className={`overflow-hidden relative ${designMode === "sap" ? "sap-design-mode" : ""}`}
    >
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
