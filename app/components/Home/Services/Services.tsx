import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-24 bg-secondary/50 border-y border-border">
      <h1 className="text-foreground text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        Collaborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <ServiceCard
          icon="/images/s1.png"
          name="UI and UX"
          description="Designing clean, intuitive interfaces focused on usability and user satisfaction"
        />
        <ServiceCard
          icon="/images/s2.png"
          name="Web Apps"
          description="Building responsive and functional web applications that deliver smooth user experiences"
        />
        <ServiceCard
          icon="/images/s3.png"
          name="Design & Creative"
          description="Creating visually engaging designs that combine creativity with purpose and clarity"
        />
        <ServiceCard
          icon="/images/s4.png"
          name="Development"
          description="Write efficient, maintainable code to bring digital ideas to life across platforms"
        />
      </div>
    </section>
  );
};

export default Services;
