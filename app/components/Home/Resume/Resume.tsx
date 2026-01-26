import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaDatabase, FaReact } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

const Resume = () => {
  return (
    <section id="resume" className="pt-24 pb-24 bg-background border-b border-border">
      <div className="w-[90%] sm:w-[85%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Work part */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Work <span className="text-primary">Experience</span>
              </h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
              <ResumeCard Icon={FaReact} role="Front-End Developer" />
              <ResumeCard Icon={FaDatabase} role="Back-End Developer" />
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Academic <span className="text-primary">Journey</span>
              </h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
              <ResumeCard
                Icon={HiBadgeCheck}
                location={true}
                role="Alpha JS Track"
                description="Teleric Academy"
                date="Jan 2025 - July 2025"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                location={true}
                role="JS Advanced"
                description="Software University"
                date="Dec 2024"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                role="JS Fundamentals"
                description="Software University"
                location={true}
                date="Sep 2024"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                role="HTML & CSS"
                location={true}
                description="Software University"
                date="Nov 2024"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                role="B. Logistics"
                location={true}
                description="NMU Veliko Turnovo"
                date="2011 - 2014"
              />
              <ResumeCard
                Icon={HiBadgeCheck}
                location={true}
                role="Languages School"
                description="Exarch Joseph"
                date="2006 - 2011"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
