import { projects } from "@/app/constants/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-background">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
        A small section of recent <br />
        <span className="text-primary">projects</span>
      </h2>

      <div className="w-[85%] md:w-[75%] xl:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mt-16 cursor-pointer">
        {projects.reverse().map((project, index) => (
          <article
            key={index}
            className="group flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden bg-muted border border-border shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <Image
                  src={project.img}
                  alt={`${project.title} - Project Screenshot`}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>

            <h3 className="mt-5 text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
