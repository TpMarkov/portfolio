"use client";

import React from "react";
import Certificates from "../components/Certificates/Certificates";
import IssuerSection from "../components/Certificates/IssuerSection";
import Image from "next/image";
import Link from "next/link";
import { useDesignMode } from "@/app/context/DesignContext";

const CertificatesPage = () => {
  const { designMode } = useDesignMode();
  const isSap = designMode === "sap";

  return (
    <main
      className={`
            min-h-screen pt-[12vh]
            ${isSap ? "bg-white text-[#11181c]" : "bg-background"}
        `}
    >
      {/* Page Hero */}
      <div
        className={`
                relative py-20 overflow-hidden
                ${isSap ? "bg-white border-b border-[#e5e7eb]" : "bg-secondary/50 border-b border-border"}
            `}
      >
        {/* SAP Background */}
        {isSap && (
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0070f2] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0070f2] rounded-full blur-[100px]"></div>
          </div>
        )}

        {/* Background Asset - only for original design */}
        {!isSap && (
          <div
            className="absolute inset-0 opacity-10 pointer-events-none z-0"
            style={{
              maskImage:
                "radial-gradient(circle at center, black, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black, transparent 80%)",
            }}
          >
            <Image
              src="/background-ornaments/1.png"
              alt="Background"
              fill
              className="object-cover mix-blend-overlay -rotate-45 scale-150"
            />
          </div>
        )}

        <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto text-center">
          {isSap ? (
            <>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0070f2]/10 border border-[#0070f2]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0070f2]"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0070f2]">
                  Trust & Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#11181c] mb-8 leading-tight">
                Technical <span className="text-[#0070f2]">Authority</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-[#e5e7eb] max-w-3xl mx-auto">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold text-[#11181c]">
                    100%
                  </span>
                  <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-[#6b7280]">
                    Verified Credentials
                  </span>
                </div>
                <div className="h-px w-8 md:h-8 md:w-px bg-[#e5e7eb]"></div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold text-[#11181c]">
                    TOP-TIER
                  </span>
                  <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-[#6b7280]">
                    Issuers & Institutions
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">
                  Trust & Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 leading-tight uppercase italic">
                Technical{" "}
                <span className="text-primary not-italic">Authority</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-border/50 max-w-3xl mx-auto">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-black text-foreground italic">
                    100%
                  </span>
                  <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">
                    Verified Credentials
                  </span>
                </div>
                <div className="h-px w-8 md:h-8 md:w-px bg-border"></div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-black text-foreground italic">
                    TOP-TIER
                  </span>
                  <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">
                    Issuers & Institutions
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Certificates Showcase */}
      <Certificates />

      {/* Issuers Section */}
      <IssuerSection />

      {/* Trust CTA */}
      <section
        className={`
                py-24 relative overflow-hidden
                ${isSap ? "bg-[#0070f2]" : "bg-primary text-primary-foreground"}
            `}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {isSap ? (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
            </>
          ) : (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
          )}
        </div>

        <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto text-center">
          {isSap ? (
            <>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                Ready to build with a <br />
                <span className="text-white/90">certified expert?</span>
              </h2>
              <Link
                href="/?quote=true"
                className="inline-block px-8 py-4 bg-white text-[#0070f2] font-semibold uppercase tracking-wider rounded-lg hover:bg-white/90 transition-all hover:scale-105"
              >
                Start Your Project
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-8">
                Ready to build with a <br />
                <span className="text-white/80 not-italic">
                  certified expert?
                </span>
              </h2>
              <Link
                href="/?quote=true"
                className="inline-block px-10 py-5 bg-white text-primary rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Start Your Project
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default CertificatesPage;
