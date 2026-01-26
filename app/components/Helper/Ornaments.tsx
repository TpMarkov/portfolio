"use client";

import React from "react";

export const Blob = ({ className }: { className?: string }) => (
    <div
        className={`absolute rounded-full blur-[120px] opacity-20 pointer-events-none z-[-1] animate-pulse ${className}`}
    />
);

export const GridPattern = ({ className }: { className?: string }) => (
    <div
        className={`absolute inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none ${className}`}
        style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
        }}
    />
);

export const OrnamentShapes = () => (
    <>
        {/* Hero Area Blobs */}
        <Blob className="w-[500px] h-[500px] bg-primary top-[-5%] left-[-10%] dark:opacity-30" />
        <Blob className="w-[400px] h-[400px] bg-purple-600 top-[10%] right-[-5%] dark:opacity-20" />

        {/* Section Separators (Subtle) */}
        <div className="absolute top-[800px] left-0 w-full h-[500px] pointer-events-none z-[-1] overflow-hidden">
            <Blob className="w-[600px] h-[600px] bg-indigo-500 bottom-0 left-[10%] opacity-10" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
        </div>

        {/* Mid-Page Content Decorations */}
        <div className="absolute top-[1800px] right-0 w-1/2 h-[800px] pointer-events-none z-[-1] overflow-hidden">
            <GridPattern className="h-full text-primary" />
            <Blob className="w-[500px] h-[500px] bg-primary top-[10%] right-[-10%] opacity-10" />
        </div>

        {/* Lower Page Decorations */}
        <div className="absolute top-[3000px] left-0 w-full h-[1000px] pointer-events-none z-[-1] overflow-hidden">
            <Blob className="w-[450px] h-[450px] bg-purple-400 top-[10%] left-[-5%] opacity-10" />
            <div className="absolute -rotate-12 left-10 top-20 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="#9333ea" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </>
);
