"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-full border-8 border-[#0c0c48aa] overflow-hidden">
          <Image
            src="/images/avatar.png"
            alt="heroimage"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide text-white">
          Creating web products, <br></br>
          <span className="text-cyan-200">brands, and experiences.</span>{" "}
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          {`Hi! I'm Tsvetan - A Passionate`}{" "}
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 70,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button className="rounded-full transition-all duration-300 cursor-pointer font-medium mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900">
          <span>See my work</span>
          <FaArrowRight className="inline h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
