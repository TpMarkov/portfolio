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
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(logoRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
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
      className="relative min-h-screen flex items-center justify-center text-foreground overflow-hidden flex-col bg-background py-20"
    >
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-4">
        {/* Logo with Glow Effect */}
        <div ref={logoRef} className="mb-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-background/80 backdrop-blur-sm p-8 rounded-full border-4 border-primary shadow-2xl">
            <Image
              src="/images/webdevstudiohq-logo.png"
              alt="webdevstudioHQ"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div ref={textRef} className="text-center px-4 w-full">
          <h1 className="hero-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
            <span className="block mb-2">Welcome to</span>
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-primary animate-gradient">
              webdevstudioHQ
            </span>
          </h1>

          <h2 className="hero-text mt-8 text-xl sm:text-3xl font-medium flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground flex-wrap">
            <span>Your Partner in</span>
            <span className="text-primary font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "Digital Solutions",
                    "Modern Design",
                    "Full-Stack Apps",
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

          <p className="hero-text mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences that drive results.
            From concept to deployment, we bring your vision to life with cutting-edge technology.
          </p>
        </div>

        <div className="hero-btn mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="#projects">
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                View Our Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
          <Link href="#footer">
            <button className="group relative px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-secondary/80 hover:scale-105 active:scale-95 border-2 border-border">
              <span className="relative z-10">Get In Touch</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
