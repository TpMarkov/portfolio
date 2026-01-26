"use client";

import React from "react";
import Image from "next/image";

export const GridPattern = ({ className }: { className?: string }) => (
    <div
        className={`absolute inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none ${className}`}
        style={{
            backgroundImage: `radial-gradient(circle, currentColor 0.5px, transparent 0.5px)`,
            backgroundSize: "24px 24px",
        }}
    />
);

export const OrnamentShapes = () => (
    <>
        <GridPattern className="text-foreground" />

        {/* Global Assets for Depth */}

        {/* Ornament 1 - Sinuous Blue Waves */}
        <div className="absolute top-[5%] right-0 w-[60%] h-[400px] pointer-events-none z-[-1] opacity-20 dark:opacity-30 mix-blend-screen overflow-hidden">
            <Image
                src="/background-ornaments/1.png"
                alt="Ornament 1"
                fill
                className="object-cover object-right"
            />
        </div>

        {/* Ornament 2 - Grid Tech Floor - for Resume / Experience Area */}
        <div className="absolute top-[20%] left-0 w-full h-[600px] pointer-events-none z-[-1] opacity-10 dark:opacity-20 mix-blend-overlay overflow-hidden">
            <Image
                src="/background-ornaments/2.png"
                alt="Ornament 2"
                fill
                className="object-cover"
            />
        </div>

        {/* Ornament 3 - Abstract Wave - for Projects Area */}
        <div className="absolute top-[50%] left-[-10%] w-[50%] h-[500px] pointer-events-none z-[-1] opacity-10 dark:opacity-20 mix-blend-screen overflow-hidden">
            <Image
                src="/background-ornaments/3.png"
                alt="Ornament 3"
                fill
                className="object-cover object-left"
            />
        </div>

        {/* Ornament 4 - Global Tech / Earth - for Footer / Contact Area */}
        <div className="absolute bottom-[2%] right-[-5%] w-[40%] h-[600px] pointer-events-none z-[-1] opacity-10 dark:opacity-20 mix-blend-lighten overflow-hidden">
            <Image
                src="/background-ornaments/4.png"
                alt="Ornament 4"
                fill
                className="object-contain object-right"
            />
        </div>

        {/* Subtle Geometry to maintain professional structure */}
        <div className="absolute top-[1200px] right-[10%] w-px h-64 bg-gradient-to-b from-primary/30 to-transparent z-[-1]" />
        <div className="absolute top-[2400px] left-[10%] w-px h-64 bg-gradient-to-b from-primary/30 to-transparent z-[-1]" />
    </>
);
