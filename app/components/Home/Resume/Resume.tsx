import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaDatabase, FaReact } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import Image from "next/image";

const Resume = () => {
  return (
    <section id="resume" className="relative pt-24 pb-24 bg-background border-b border-border overflow-hidden">
      {/* Background Asset 3 - Abstract Wave - Responsive Optimized */}
      <div
        className="absolute top-0 right-0 w-full lg:w-[70%] h-full lg:h-[120%] opacity-10 lg:opacity-15 dark:opacity-15 lg:dark:opacity-20 pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      >
        <Image
          src="/background-ornaments/3.png"
          alt="Abstract Wave Background"
          fill
          className="object-cover object-center lg:object-right-top mix-blend-screen dark:mix-blend-overlay rotate-[3deg]"
        />
      </div>

      <div className="relative z-10 w-[90%] xl:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row items-baseline gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground uppercase italic shrink-0">
            Career <span className="text-primary not-italic">&</span> Journey
          </h2>
          <div className="h-px flex-1 bg-border hidden lg:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Experience Header + Cards */}
          <div className="xl:col-span-1 space-y-4">
            <div className="px-4 py-2 bg-primary/10 border-l-4 border-primary inline-block mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-primary">Experience</span>
            </div>
            <ResumeCard Icon={FaCodepen} role="Full-Stack Dev" date="Active" />
            <ResumeCard Icon={FaReact} role="Front-End Dev" />
            <ResumeCard Icon={FaDatabase} role="Back-End Dev" />
          </div>

          {/* Education Header + Cards (Spans 3 columns on XL) */}
          <div className="xl:col-span-3 space-y-4">
            <div className="px-4 py-2 bg-secondary border-l-4 border-muted-foreground inline-block mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Education</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <ResumeCard
                Icon={HiBadgeCheck}
                location={true}
                role="Alpha JS Track"
                description="Teleric Academy"
                date="2025"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                location={true}
                role="JS Advanced"
                description="SoftUni"
                date="2024"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                role="JS Fundamentals"
                description="SoftUni"
                location={true}
                date="2024"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                role="HTML & CSS"
                location={true}
                description="SoftUni"
                date="2024"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                role="B. Logistics"
                location={true}
                description="NMU Veliko Turnovo"
                date="2014"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                location={true}
                role="Languages School"
                description="Exarch Joseph"
                date="2011"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
