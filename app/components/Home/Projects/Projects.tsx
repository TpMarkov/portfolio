import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small section of recent <br></br>
        {""} <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div>
          <Image
            src="/images/project-1.png"
            width={800}
            height={650}
            className="rounded-lg"
            alt={"project-image"}
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Modern Video Call AI Assistant
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI / UX</h1>
        </div>
        <div>
          <Image
            src="/images/project-2.png"
            width={800}
            height={650}
            className="rounded-lg"
            alt={"project-image"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
