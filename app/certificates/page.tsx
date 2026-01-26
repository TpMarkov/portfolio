import React from "react";
import Certificates from "../components/Certificates/Certificates";
import IssuerSection from "../components/Certificates/IssuerSection";
import Image from "next/image";

const CertificatesPage = () => {
    return (
        <main className="min-h-screen pt-[12vh] bg-background">
            {/* Page Hero */}
            <div className="relative py-20 bg-secondary/50 border-b border-border overflow-hidden">
                {/* Background Asset */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none z-0"
                    style={{
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                    }}
                >
                    <Image
                        src="/background-ornaments/1.png"
                        alt="Background"
                        fill
                        className="object-cover mix-blend-overlay -rotate-45 scale-150"
                    />
                </div>

                <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Trust & Excellence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 leading-tight uppercase italic">
                        Technical <span className="text-primary not-italic">Authority</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-border/50 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-3xl font-black text-foreground italic">100%</span>
                            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">Verified Credentials</span>
                        </div>
                        <div className="h-px w-8 md:h-8 md:w-px bg-border"></div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-3xl font-black text-foreground italic">TOP-TIER</span>
                            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">Issuers & Institutions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificates Showcase */}
            <Certificates />

            {/* Issuers Section */}
            <IssuerSection />

            {/* Trust CTA */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
                </div>

                <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-8">
                        Ready to build with a <br />
                        <span className="text-white/80 not-italic">certified expert?</span>
                    </h2>
                    <a
                        href="/#footer"
                        className="inline-block px-10 py-5 bg-white text-primary rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </main>
    );
};

export default CertificatesPage;
