"use client";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import Tilt from "react-parallax-tilt";

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
    <section id="skills" className="pt-24 pb-24 bg-background">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-extrabold text-foreground mb-16 uppercase tracking-tight">
          Core <span className="text-primary font-black">Expertise</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <Tilt key={skill.name} scale={1.05} transitionSpeed={400} className="flex justify-center">
              <div className="bg-card w-full max-w-[160px] p-8 rounded-xl flex flex-col items-center justify-center border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4 text-primary">
                  {skill.icon}
                </div>
                <p className="text-xl font-bold text-foreground">
                  {skill.percentage}%
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-bold">
                  {skill.name}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
