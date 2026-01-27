"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
import { useDesignMode } from "@/app/context/DesignContext";

const Services = () => {
  const { designMode } = useDesignMode();

  return (
    <section
      id="services"
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
          className="absolute bottom-0 left-0 w-full lg:w-[80%] h-full lg:h-[120%] opacity-[0.04] lg:opacity-[0.08] dark:opacity-[0.06] lg:dark:opacity-[0.12] pointer-events-none z-0"
          style={{
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        >
          <Image
            src="/background-ornaments/2.png"
            alt="Tech Grid Background"
            fill
            className="relative w-full h-full object-cover object-center lg:object-left-bottom mix-blend-multiply dark:mix-blend-overlay rotate-[-2deg]"
          />
        </div>
      )}

      <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
        {designMode === "sap" ? (
          /* SAP Design Mode */
          <>
            <div className="max-w-2xl text-left mb-16">
              <h1 className="text-foreground text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Our <span className="text-sap-primary">Competencies</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                Delivering high-performance digital solutions through
                specialized engineering and creative strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="/images/s1.png"
                name="UI and UX"
                description="Designing clean, intuitive interfaces focused on usability and user satisfaction"
                sapMode={true}
              />
              <ServiceCard
                icon="/images/s2.png"
                name="Frontend Development"
                description="Building responsive, interactive web applications using modern frameworks"
                sapMode={true}
              />
              <ServiceCard
                icon="/images/s3.png"
                name="Backend Support"
                description="Robust server-side logic and database management for scalable platforms"
                sapMode={true}
              />
              <ServiceCard
                icon="/images/s4.png"
                name="SEO Specialists"
                description="Optimizing web presence to increase visibility and drive organic traffic"
                sapMode={true}
              />
            </div>
          </>
        ) : (
          /* Original Design Mode */
          <>
            <div className="max-w-2xl text-left mb-20 translate-x-[-2%]">
              <h1 className="text-foreground text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none italic">
                Our{" "}
                <span className="text-primary not-italic">Competencies</span>
              </h1>
              <p className="mt-4 text-muted-foreground font-semibold text-lg max-w-lg">
                Delivering high-performance digital solutions through
                specialized engineering and creative strategy.
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
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
