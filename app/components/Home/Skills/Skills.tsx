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
    <div id="skills" className="text-white pt-16 pb-16">
      <h1 className="text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold">{skill.percentage}%</p>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
