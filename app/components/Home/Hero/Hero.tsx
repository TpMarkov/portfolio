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
      <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content - Spans 7 columns */}
        <div ref={textRef} className="lg:col-span-7 text-left">
          <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 rounded-full mb-6 scale-90 translate-x-[-5%] transition-transform hover:translate-x-0 duration-500">
            <span className="text-primary text-xs font-bold uppercase tracking-widest leading-none">
              Web & Design Studio
            </span>
          </div>

          <h1 className="hero-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 leading-[0.9]">
            <span className="block opacity-60">Elevate your</span>
            <span className="text-primary uppercase">
              Brand Identity
            </span>
          </h1>

          <h2 className="hero-text mt-8 text-xl sm:text-2xl font-bold text-muted-foreground flex flex-wrap gap-x-3">
            <span>Engineering</span>
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
                  wrapperClassName: "text-primary font-black",
                }}
              />
            </span>
          </h2>

          <p className="hero-text mt-10 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed font-semibold opacity-90">
            We deliver sophisticated digital products for forward-thinking brands.
            Blending technical precision with creative excellence.
          </p>

          <div className="hero-btn mt-12 flex flex-wrap gap-4">
            <Link href="#projects">
              <button className="px-10 py-5 bg-primary text-primary-foreground font-black rounded-lg transition-all duration-300 hover:opacity-90 active:scale-95 shadow-2xl shadow-primary/20 uppercase tracking-tighter italic">
                <span className="flex items-center gap-3">
                  Check Cases
                  <FaArrowRight className="text-sm" />
                </span>
              </button>
            </Link>
            <Link href="#footer">
              <button className="px-10 py-5 bg-transparent text-foreground font-black rounded-lg border-2 border-border transition-all duration-300 hover:bg-muted active:scale-95 uppercase tracking-tighter italic">
                <span>Start Project</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Logo/Asset - Spans 5 columns - Offset for asymmetry */}
        <div ref={logoRef} className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative group">
            {/* Geometric shadow ornament */}
            <div className="absolute -inset-8 border border-primary/10 rounded-2xl rotate-12 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"></div>
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl -rotate-6 transition-transform duration-700 group-hover:rotate-0"></div>

            <div className="relative bg-card p-12 rounded-3xl border-2 border-border shadow-[40px_40px_80px_rgba(0,0,0,0.05)] dark:shadow-[40px_40px_80px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/webdevstudiohq-logo.png"
                alt="webdevstudioHQ"
                width={180}
                height={180}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Background Ornament - Top Right Asymmetry */}
      <div
        className="absolute -top-[10%] -right-[10%] w-[60%] h-[700px] pointer-events-none z-0 opacity-20 dark:opacity-[0.25]"
        style={{
          maskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)'
        }}
      >
        <Image
          src="/background-ornaments/1.png"
          alt="Hero Ornament"
          fill
          className="object-cover object-right-top mix-blend-screen dark:mix-blend-overlay rotate-[5deg]"
        />
      </div>
    </div>
  );
};

export default Hero;
