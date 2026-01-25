"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import ParticlesHero from "./ParticleBackground";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(imageRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    })
      .from(
        ".hero-text",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.5"
      )
      .from(
        ".hero-btn",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center text-foreground overflow-hidden flex-col bg-background"
    >
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <div ref={imageRef} className="w-[150px] h-[150px] rounded-full border-4 border-primary/20 shadow-2xl overflow-hidden mb-8">
          <Image
            src="/images/avatar.png"
            alt="heroimage"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <div ref={textRef} className="text-center px-4">
          <h1 className="hero-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
            Creating web products, <br className="hidden sm:block" />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              brands, and experiences.
            </span>
          </h1>
          <h2 className="hero-text mt-6 text-lg sm:text-2xl font-medium flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground">
            <span>Hi! We are webdevstudioHQ - Pasionate about</span>
            <span className="text-primary font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Development",
                    "Backend Development",
                    "Web Architecture",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 70,
                  wrapperClassName: "text-primary",
                }}
              />
            </span>
          </h2>
        </div>

        <div className="hero-btn mt-10">
          <Link href="#projects">
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                See our work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
