"use client";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const skills = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    percentage: 89,
  },
  {
    name: "React Js",
    icon: <SiReact />,
    percentage: 92,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    percentage: 90,
  },
  {
    name: "Node.js",
    icon: <TbBrandNodejs />,
    percentage: 88,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    percentage: 50,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative pt-32 pb-32 bg-background border-b border-border overflow-hidden">
      {/* Background Asset 3 - Abstract Wave - Responsive Optimized */}
      <div
        className="absolute top-0 right-0 w-full lg:w-[60%] h-full lg:h-[120%] opacity-10 lg:opacity-15 dark:opacity-15 lg:dark:opacity-20 pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 75%)'
        }}
      >
        <Image
          src="/background-ornaments/3.png"
          alt="Skills Background"
          fill
          className="object-cover object-center lg:object-right mix-blend-screen dark:mix-blend-overlay rotate-[12deg]"
        />
      </div>

      <div className="relative z-10 w-[90%] sm:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 translate-x-[-1%]">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic leading-none">
            Stack <span className="text-primary not-italic">&</span> Tools
          </h2>
          <div className="h-px flex-1 bg-border hidden md:block"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            // Asymmetrical staggering
            const staggerClass = index % 2 === 0 ? "lg:translate-y-4" : "lg:scale-95";

            return (
              <Tilt key={skill.name} scale={1.05} transitionSpeed={400} className="flex justify-center">
                <div className={`bg-card w-full max-w-[160px] p-8 rounded-xl flex flex-col items-center justify-center border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-xl ${staggerClass}`}>
                  <div className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
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
      </div>
    </section>
  );
};

export default Skills;
