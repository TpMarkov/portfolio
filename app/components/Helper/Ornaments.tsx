"use client";

import React from "react";

export const GridPattern = ({ className }: { className?: string }) => (
    <div
        className={`absolute inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none ${className}`}
        style={{
            backgroundImage: `radial-gradient(circle, currentColor 0.5px, transparent 0.5px)`,
            backgroundSize: "24px 24px",
        }}
    />
);

export const GeometricShape = ({ className, type = "square" }: { className?: string, type?: "square" | "circle" | "triangle" }) => (
    <div
        className={`absolute border border-primary/20 pointer-events-none z-[-1] ${className} ${type === "circle" ? "rounded-full" : ""
            }`}
        style={type === "triangle" ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", borderWidth: "1px" } : {}}
    />
);

export const OrnamentShapes = () => (
    <>
        <GridPattern className="text-foreground" />

        {/* Subtle geometric accents */}
        <GeometricShape type="square" className="w-24 h-24 top-[10%] left-[5%] rotate-12" />
        <GeometricShape type="circle" className="w-32 h-32 top-[15%] right-[10%] opacity-50" />
        <GeometricShape type="square" className="w-16 h-16 top-[40%] left-[2%] -rotate-6 border-dashed" />

        {/* Section separators or anchors */}
        <div className="absolute top-[800px] right-0 w-32 h-px bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />
        <div className="absolute top-[1600px] left-0 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />

        <GeometricShape type="circle" className="w-48 h-48 top-[2500px] right-[-24px] opacity-30 border-2" />
        <GeometricShape type="square" className="w-20 h-20 top-[3200px] left-[10%] rotate-45 border-primary/10" />

        {/* Subtle Dots pattern for specific areas */}
        <div
            className="absolute top-[1200px] left-[5%] w-40 h-40 opacity-[0.05] pointer-events-none"
            style={{
                backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
                backgroundSize: "10px 10px"
            }}
        />
    </>
);
