"use client";

import { projects } from "@/app/constants/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAndroid,
  SiPrisma,
  SiVite
} from "react-icons/si";
import { HiCode, HiChevronDown, HiChevronUp } from "react-icons/hi";

// Tech stack icon mapping
const techIcons: Record<string, React.ReactNode> = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "MongoDB": <SiMongodb />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <SiJavascript />,
  "Android": <SiAndroid />,
  "Convex": <HiCode />,
  "BetterAuth": <HiCode />,
  "Prisma": <SiPrisma />,
  "Vite": <SiVite />,
  "GSAP": <HiCode />
};

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedProjects(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="projects" className="relative pt-32 pb-32 bg-secondary/50 border-y border-border overflow-hidden">
      {/* Background Asset 3 - Abstract Wave - Asymmetrical & Faded */}
      <div
        className="absolute -bottom-20 -right-20 w-[70%] h-[120%] opacity-15 dark:opacity-20 pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at 80% 80%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 80% 80%, black, transparent 75%)'
        }}
      >
        <Image
          src="/background-ornaments/3.png"
          alt="Project Background"
          fill
          className="object-cover object-bottom mix-blend-screen dark:mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
        <div className="max-w-xl mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic leading-none">
            Featured <span className="text-primary not-italic">Cases</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.includes(index);
            // Dynamic shift for asymmetry
            const shiftClass = index % 3 === 1 ? "lg:translate-y-12" : index % 3 === 2 ? "lg:translate-y-6" : "";

            return (
              <article
                key={index}
                className={`group flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 ${shiftClass}`}
              >
                {/* Project Image */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/10] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white font-bold text-lg px-6 py-3 border-2 border-white rounded-full backdrop-blur-sm bg-black/20">
                      Visit Website →
                    </span>
                  </div>
                  <Image
                    src={project.img}
                    alt={`${project.title} - Project Screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {project.description && (
                    <div className="mb-4 flex-grow">
                      <p className={`text-muted-foreground text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                        {project.description}
                      </p>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <HiChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Read More <HiChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                          title={tech}
                        >
                          <span className="text-base">{techIcons[tech]}</span>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
