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
  SiVite,
} from "react-icons/si";
import { HiCode, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useDesignMode } from "@/app/context/DesignContext";

// Tech stack icon mapping
const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Android: <SiAndroid />,
  Convex: <HiCode />,
  BetterAuth: <HiCode />,
  Prisma: <SiPrisma />,
  Vite: <SiVite />,
  GSAP: <HiCode />,
};

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const { designMode } = useDesignMode();

  const toggleExpand = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section
      id="projects"
      className={`
        relative pt-32 pb-32 overflow-hidden
        ${
          designMode === "sap"
            ? "bg-sap-base-bg"
            : "bg-secondary/50 border-y border-border"
        }
      `}
    >
      {/* Background Asset - Hide in SAP mode */}
      {designMode !== "sap" && (
        <div
          className="absolute bottom-0 left-0 w-full lg:w-[50%] h-full lg:h-[120%] opacity-[0.05] lg:opacity-[0.1] dark:opacity-[0.1] lg:dark:opacity-20 pointer-events-none z-0"
          style={{
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        >
          <Image
            src="/background-ornaments/4.png"
            alt="Global Tech Background"
            fill
            className="object-contain object-center lg:object-left-bottom mix-blend-lighten dark:mix-blend-overlay -rotate-12"
          />
        </div>
      )}

      <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
        {designMode === "sap" ? (
          /* SAP Design Mode */
          <>
            <div className="max-w-xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Featured <span className="text-sap-primary">Projects</span>
              </h2>
              <div className="h-1 w-16 bg-sap-primary mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const isExpanded = expandedProjects.includes(index);

                return (
                  <article
                    key={index}
                    className={`
                      flex flex-col bg-sap-white border border-sap-border rounded-lg overflow-hidden transition-all duration-300
                      ${designMode === "sap" ? "hover:shadow-md" : ""}
                      ${designMode === "sap" ? "" : "hover:shadow-2xl hover:border-primary/30"}
                    `}
                  >
                    {/* Project Image */}
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-[16/10] overflow-hidden"
                    >
                      {designMode === "sap" && (
                        <div className="absolute inset-0 bg-sap-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                          <span className="text-white font-medium text-sm px-4 py-2 border-2 border-white rounded-md bg-sap-primary/50 backdrop-blur-sm">
                            Visit Website →
                          </span>
                        </div>
                      )}
                      <Image
                        src={project.img}
                        alt={`${project.title} - Project Screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`
                          object-cover transition-transform duration-500
                          ${designMode === "sap" ? "" : "group-hover:scale-110"}
                        `}
                      />
                    </Link>

                    {/* Project Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3
                        className={`
                        mb-2 line-clamp-2 transition-colors
                        ${
                          designMode === "sap"
                            ? "text-lg font-semibold text-foreground hover:text-sap-primary"
                            : "text-xl font-bold text-foreground hover:text-primary"
                        }
                      `}
                      >
                        {project.title}
                      </h3>

                      {project.description && (
                        <div className="mb-4 flex-grow">
                          <p
                            className={`
                            leading-relaxed text-sm
                            ${designMode === "sap" ? "text-sap-text-secondary" : "text-muted-foreground"}
                            ${!isExpanded ? "line-clamp-3" : ""}
                          `}
                          >
                            {project.description}
                          </p>
                          <button
                            onClick={() => toggleExpand(index)}
                            className={`
                              mt-2 text-sm font-medium flex items-center gap-1 transition-colors
                              ${designMode === "sap" ? "text-sap-primary hover:text-sap-primary-dark" : ""}
                            `}
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
                        <p
                          className={`
                          text-xs mb-2 tracking-wide
                          ${designMode === "sap" ? "font-medium text-sap-text-tertiary" : "font-semibold text-muted-foreground uppercase tracking-wider"}
                        `}
                        >
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <div
                              key={i}
                              className={`
                                flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-colors
                                ${
                                  designMode === "sap"
                                    ? "bg-sap-neutral-bg text-sap-text-secondary"
                                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                                }
                              `}
                              title={tech}
                            >
                              <span className="text-sm">{techIcons[tech]}</span>
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
          </>
        ) : (
          /* Original Design Mode */
          <>
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
                const shiftClass =
                  index % 3 === 1
                    ? "lg:translate-y-12"
                    : index % 3 === 2
                      ? "lg:translate-y-6"
                      : "";

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
                          <p
                            className={`text-muted-foreground text-sm leading-relaxed ${!isExpanded ? "line-clamp-3" : ""}`}
                          >
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
                              <span className="text-base">
                                {techIcons[tech]}
                              </span>
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
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
