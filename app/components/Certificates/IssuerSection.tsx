import React from "react";
import Image from "next/image";
import { ISSUERS } from "@/app/constants/constant";

const IssuerSection = () => {
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
                                className="group relative grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                            >
                                <div className="p-4 bg-card/50 backdrop-blur-sm border border-transparent group-hover:border-primary/20 rounded-xl transition-all">
                                    <div className="relative w-24 h-12 md:w-32 md:h-16">
                                        {/* Placeholder icon if logo not found, using text as logo for now */}
                                        <div className="absolute inset-0 flex items-center justify-center font-black text-xl tracking-tighter text-muted-foreground group-hover:text-primary transition-colors">
                                            {issuer.name}
                                        </div>
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
