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
        {/* Clean Logo Container */}
        <div ref={logoRef} className="mb-12 relative">
          <div className="relative bg-card p-8 rounded-2xl border border-border transition-shadow duration-500 hover:shadow-xl">
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
          <h1 className="hero-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4">
            <span className="block mb-2">Welcome to</span>
            <span className="text-primary uppercase tracking-tighter">
              webdevstudioHQ
            </span>
          </h1>

          <h2 className="hero-text mt-8 text-xl sm:text-2xl font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground flex-wrap">
            <span>Specializing in</span>
            <span className="text-foreground">
              <Typewriter
                options={{
                  strings: [
                    "High-End Web Design",
                    "Custom Software",
                    "Agency-Grade UX/UI",
                    "Full-Stack Systems",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 50,
                  wrapperClassName: "text-primary font-bold",
                }}
              />
            </span>
          </h2>

          <p className="hero-text mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            We deliver sophisticated digital products for forward-thinking brands.
            Blending technical precision with creative excellence.
          </p>
        </div>

        <div className="hero-btn mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="#projects">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg shadow-primary/10">
              <span className="flex items-center gap-2">
                Explore Work
                <FaArrowRight className="text-sm" />
              </span>
            </button>
          </Link>
          <Link href="#footer">
            <button className="px-8 py-4 bg-background text-foreground font-bold rounded-lg border border-border transition-all duration-300 hover:bg-muted active:scale-95">
              <span>Get Concept</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
