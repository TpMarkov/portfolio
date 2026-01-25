"use client";

import { projects } from "@/app/constants/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-background">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground mb-16">
        A small section of recent <br />
        <span className="text-primary">projects</span>
      </h2>

      <div className="w-[90%] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="px-4"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {projects.reverse().map((project, index) => (
            <ProjectKey key={`p-${index}`} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

// Extracted for cleaner code
const ProjectKey = ({ project }: { project: any }) => (
  <article className="group flex flex-col transition-transform duration-300 hover:-translate-y-2 h-full">
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden bg-muted border border-border shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <span className="text-white font-bold text-lg px-4 py-2 border border-white rounded-full">View Project</span>
        </div>

        <Image
          src={project.img}
          alt={`${project.title} - Project Screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>

    <h3 className="mt-5 text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 text-center">
      {project.title}
    </h3>
  </article>
);

export default Projects;
