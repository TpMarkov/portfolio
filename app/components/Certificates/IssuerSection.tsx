"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ISSUERS } from "@/app/constants/constant";
import { useTheme } from "next-themes";

const IssuerSection = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <section className="py-20 border-t border-border bg-secondary/30 relative overflow-hidden">
            {/* Background ornament */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                <Image
                    src="/background-ornaments/1.png"
                    alt="ornament"
                    fill
                    className="object-contain rotate-180"
                />
            </div>

            <div className="w-[90%] xl:w-[80%] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic text-foreground mb-4">
                            Trusted <span className="text-primary not-italic">Issuers</span>
                        </h2>
                        <p className="text-muted-foreground font-semibold">
                            These certificates are issued by world-renowned educational institutions and industry leaders,
                            ensuring the highest standards of technical excellence.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {ISSUERS.map((issuer) => (
                            <div
                                key={issuer.id}
                                className="group relative transition-all duration-500 transform hover:scale-105"
                            >
                                <div className="p-8 bg-card/70 backdrop-blur-md border border-border/50 group-hover:border-primary/30 rounded-2xl transition-all w-48 h-24 md:w-64 md:h-32 flex items-center justify-center shadow-sm hover:shadow-xl hover:shadow-primary/5">
                                    <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                                        {issuer.logo ? (
                                            isDark ? (
                                                <Image
                                                    src={issuer.logo}
                                                    alt={issuer.name}
                                                    fill
                                                    className="object-contain dark:invert"
                                                    sizes="(max-width: 768px) 150px, 200px"
                                                />
                                            ) : (
                                                <Image
                                                    src={issuer.logo}
                                                    alt={issuer.name}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 150px, 200px"
                                                />
                                            )
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center font-black text-2xl tracking-tighter text-muted-foreground group-hover:text-primary transition-all duration-300 text-center uppercase italic">
                                                {issuer.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IssuerSection;
