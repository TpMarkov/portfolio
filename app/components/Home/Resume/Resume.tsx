import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaDatabase, FaReact } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My work <span className="text-cyan-200">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={FaDatabase} role="Back-End Developer" />
          </div>
        </div>
        {/* Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={HiBadgeCheck}
              location={true}
              role="Alpha JavaScript Track"
              description="Teleric Academy"
              date="Jan 01/2025 - July 01/2025"
            />
            <ResumeCard
              Icon={HiBadgeCheck}
              location={true}
              role="JavaScript Advanced"
              description="Software University"
              date="Dec 12/2024"
            />
            <ResumeCard
              Icon={HiBadgeCheck}
              role="Programing fundatmentals with JavaScript"
              description="Software University"
              location={true}
              date="Sep 08/2024"
            />
            <ResumeCard
              Icon={HiBadgeCheck}
              role="HTML & CSS"
              location={true}
              description="Software University"
              date="Nov 04/2024"
            />
            <ResumeCard
              Icon={HiBadgeCheck}
              role="Bachelor in Logistics"
              location={true}
              description="National Military University Veliko Turnovo"
              date="2011 - 2014"
            />
            <ResumeCard
              Icon={HiBadgeCheck}
              location={true}
              role="Foreign Languages ​​High School"
              description="Exarch Joseph the First"
              date="2006 - 2011"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
