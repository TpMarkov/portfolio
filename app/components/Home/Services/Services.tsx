import React from "react";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="relative pt-32 pb-32 bg-secondary/50 border-y border-border overflow-hidden">
      {/* Background Asset 2 - Tech Grid - Bottom Left Asymmetry */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[120%] opacity-[0.08] dark:opacity-[0.12] pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at 20% 70%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 20% 70%, black, transparent 75%)'
        }}
      >
        <Image
          src="/background-ornaments/2.png"
          alt="Tech Grid Background"
          fill
          className="object-cover mix-blend-multiply dark:mix-blend-overlay rotate-[-2deg]"
        />
      </div>

      <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
        <div className="max-w-2xl text-left mb-20 translate-x-[-2%]">
          <h1 className="text-foreground text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none italic">
            Our <span className="text-primary not-italic">Competencies</span>
          </h1>
          <p className="mt-4 text-muted-foreground font-semibold text-lg max-w-lg">
            Delivering high-performance digital solutions through specialized engineering and creative strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Asymmetrical shifts */}
          <div className="lg:translate-y-0">
            <ServiceCard
              icon="/images/s1.png"
              name="UI and UX"
              description="Designing clean, intuitive interfaces focused on usability and user satisfaction"
            />
          </div>
          <div className="lg:translate-y-8">
            <ServiceCard
              icon="/images/s2.png"
              name="Frontend Development"
              description="Building responsive, interactive web applications using modern frameworks"
            />
          </div>
          <div className="lg:translate-y-0">
            <ServiceCard
              icon="/images/s3.png"
              name="Backend Support"
              description="Robust server-side logic and database management for scalable platforms"
            />
          </div>
          <div className="lg:translate-y-8">
            <ServiceCard
              icon="/images/s4.png"
              name="SEO Specialists"
              description="Optimizing web presence to increase visibility and drive organic traffic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
