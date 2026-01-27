"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { useDesignMode } from "@/app/context/DesignContext";

const skills = [
  {
    name: "JavaScript",
    percentage: 89,
  },
  {
    name: "React Js",
    percentage: 92,
  },
  {
    name: "Next.js",
    percentage: 90,
  },
  {
    name: "Node.js",
    percentage: 88,
  },
  {
    name: "Tailwind CSS",
    percentage: 94,
  },
  {
    name: "TypeScript",
    percentage: 50,
  },
];

// Tech stack with carousel logo images
const techStack = [
  {
    name: "React",
    logo: "/curosel-logos/react-removebg-preview.png",
  },
  {
    name: "Gsap",
    logo: "/curosel-logos/original-logos/GSAP_2023.webp",
  },
  {
    name: "MongoDb Png",
    logo: "/curosel-logos/original-logos/mongodb.png",
  },
  {
    name: "Inngest Png",
    logo: "/curosel-logos/original-logos/inngest.png",
  },
  {
    name: "Clerk Png",
    logo: "/curosel-logos/original-logos/clerk.png",
  },
  {
    name: "Convex Svg",
    logo: "/curosel-logos/original-logos/convex.svg",
  },
  {
    name: "Prisma SVG",
    logo: "/curosel-logos/original-logos/prisma-2.svg",
  },
  {
    name: "Next.js",
    logo: "/curosel-logos/original-logos/next.svg",
  },
  {
    name: "TypeScript",
    logo: "/curosel-logos/typescript-removebg-preview.png",
  },
  {
    name: "Tailwind",
    logo: "/curosel-logos/tailwindcss-removebg-preview.png",
  },
  {
    name: "MongoDB",
    logo: "/curosel-logos/mongodb-removebg-preview.png",
  },
  {
    name: "Prisma",
    logo: "/curosel-logos/prisma-removebg-preview.png",
  },
  {
    name: "GSAP",
    logo: "/curosel-logos/gsap-removebg-preview.png",
  },
  {
    name: "Clerk",
    logo: "/curosel-logos/clerk-removebg-preview.png",
  },
  {
    name: "Convex",
    logo: "/curosel-logos/convex-removebg-preview.png",
  },
  {
    name: "tRPC",
    logo: "/curosel-logos/trpc-removebg-preview.png",
  },
  {
    name: "Vite",
    logo: "/curosel-logos/vite-removebg-preview.png",
  },
  {
    name: "Android",
    logo: "/curosel-logos/android-removebg-preview.png",
  },
];

// Simple Logo Component - no hover effects, no text
const LogoItem = ({ logo, alt }: { logo: string; alt: string }) => (
  <div className="flex-shrink-0 w-32 h-32 relative">
    <Image src={logo} alt={alt} fill className="object-contain" />
  </div>
);

const Skills = () => {
  const { designMode } = useDesignMode();

  return (
    <section
      id="skills"
      className={`
        relative pt-32 pb-32 overflow-hidden
        ${designMode === "sap"
          ? "bg-sap-base-bg"
          : "bg-background border-b border-border"
        }
      `}
    >
      {/* Background Asset - Hide in SAP mode */}
      {designMode !== "sap" && (
        <div
          className="absolute top-0 right-0 w-full lg:w-[60%] h-full lg:h-[120%] opacity-10 lg:opacity-15 dark:opacity-15 lg:dark:opacity-20 pointer-events-none z-0"
          style={{
            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        >
          <Image
            src="/background-ornaments/3.png"
            alt="Skills Background"
            fill
            className="object-cover object-center lg:object-right mix-blend-screen dark:mix-blend-overlay rotate-[12deg]"
          />
        </div>
      )}

      <div className="relative z-10 w-full">
        {designMode === "sap" ? (
          /* SAP Design Mode */
          <>
            <div className="w-[90%] sm:w-[80%] mx-auto mb-16">
              <div className="flex flex-col md:flex-row items-baseline gap-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  Stack <span className="text-sap-primary">&</span> Tools
                </h2>
                <div className="h-px flex-1 bg-sap-border hidden md:block"></div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
              {skills.map((skill) => (
                <div key={skill.name} className="flex justify-center">
                  <div
                    className={`
                    bg-sap-white w-full max-w-[140px] p-6 rounded-lg flex flex-col items-center justify-center border border-sap-border transition-all duration-300
                    ${designMode === "sap" ? "hover:shadow-md" : ""}
                  `}
                  >
                    <p
                      className={`
                      font-semibold tracking-tight text-3xl
                      ${designMode === "sap" ? "text-sap-primary" : "text-primary"}
                    `}
                    >
                      {skill.percentage}%
                    </p>
                    <p
                      className={`
                      mt-2 text-center leading-none
                      ${designMode === "sap"
                          ? "text-xs font-medium text-sap-text-secondary tracking-normal"
                          : "text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black"
                        }
                    `}
                    >
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Infinite Logo Carousel - SAP Mode */}
            <div className="relative w-full overflow-hidden">
              {/* Fade gradients for edges */}
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-sap-base-bg via-sap-base-bg/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-sap-base-bg via-sap-base-bg/50 to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee items-center gap-12">
                {[...techStack, ...techStack].map((tech, index) => (
                  <LogoItem
                    key={`${tech.name}-${index}`}
                    logo={tech.logo}
                    alt={tech.name}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Original Design Mode */
          <>
            <div className="w-[90%] sm:w-[80%] mx-auto mb-20">
              <div className="flex flex-col md:flex-row items-baseline gap-6 translate-x-[-1%]">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic leading-none">
                  Stack <span className="text-primary not-italic">&</span> Tools
                </h2>
                <div className="h-px flex-1 bg-border hidden md:block"></div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
              {skills.map((skill, index) => {
                const staggerClass =
                  index % 2 === 0 ? "lg:translate-y-4" : "lg:scale-95";

                return (
                  <Tilt
                    key={skill.name}
                    scale={1.05}
                    transitionSpeed={400}
                    className="flex justify-center"
                  >
                    <div
                      className={`bg-card w-full max-w-[160px] p-8 rounded-xl flex flex-col items-center justify-center border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-xl ${staggerClass}`}
                    >
                      <p className="text-xl font-black text-foreground tracking-tighter italic">
                        {skill.percentage}%
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 font-black leading-none text-center">
                        {skill.name}
                      </p>
                    </div>
                  </Tilt>
                );
              })}
            </div>

            {/* Infinite Logo Carousel - Original Mode */}
            <div className="relative w-full overflow-hidden">
              {/* Fade gradients for edges */}
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee items-center gap-12 dark:contrast-70">
                {[...techStack, ...techStack].map((tech, index) => (
                  <LogoItem
                    key={`${tech.name}-${index}`}
                    logo={tech.logo}
                    alt={tech.name}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
