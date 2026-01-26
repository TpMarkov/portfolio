import React from "react";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="relative pt-32 pb-32 bg-secondary/50 border-y border-border overflow-hidden">
      {/* Background Asset 1 - Blue Waves - Asymmetrical & Faded */}
      <div
        className="absolute -top-24 -right-10 w-[70%] h-[120%] opacity-20 dark:opacity-[0.25] pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)'
        }}
      >
        <Image
          src="/background-ornaments/1.png"
          alt="Sinuous Background"
          fill
          className="object-cover opacity-80 mix-blend-screen dark:mix-blend-overlay"
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
