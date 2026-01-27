"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ISSUERS } from "@/app/constants/constant";
import { useTheme } from "next-themes";
import { useDesignMode } from "@/app/context/DesignContext";

const IssuerSection = () => {
  const { resolvedTheme } = useTheme();
  const { designMode } = useDesignMode();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // SAP mode adjustments
  const isSapMode = designMode === "sap";
  const containerClass = isSapMode
    ? "w-36 h-20 md:w-48 md:h-24 p-4"
    : "w-48 h-24 md:w-64 md:h-32 p-8";
  const logoSizes = isSapMode
    ? "(max-width: 768px) 100px, 140px"
    : "(max-width: 768px) 150px, 200px";

  return (
    <section
      className={`
            py-20 relative overflow-hidden
            ${
              isSapMode
                ? "bg-sap-base-bg border-t border-sap-border"
                : "border-t border-border bg-secondary/30"
            }
        `}
    >
      {/* Background ornament - hide in SAP mode */}
      {!isSapMode && (
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
          <Image
            src="/background-ornaments/1.png"
            alt="ornament"
            fill
            className="object-contain rotate-180"
          />
        </div>
      )}

      <div className="w-[90%] xl:w-[80%] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            {isSapMode ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                  Trusted <span className="text-sap-primary">Issuers</span>
                </h2>
                <p className="text-sap-text-secondary">
                  These certificates are issued by world-renowned educational
                  institutions and industry leaders, ensuring the highest
                  standards of technical excellence.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-foreground mb-4">
                  Trusted{" "}
                  <span className="text-primary not-italic">Issuers</span>
                </h2>
                <p className="text-muted-foreground font-semibold">
                  These certificates are issued by world-renowned educational
                  institutions and industry leaders, ensuring the highest
                  standards of technical excellence.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {ISSUERS.map((issuer) => (
              <div
                key={issuer.id}
                className={`
                                    group relative transition-all duration-500 transform
                                    ${
                                      isSapMode
                                        ? "hover:scale-105"
                                        : "hover:scale-105"
                                    }
                                `}
              >
                <div
                  className={`
                                    ${
                                      isSapMode
                                        ? "bg-sap-white border border-sap-border"
                                        : "bg-card/70 backdrop-blur-md border border-border/50 group-hover:border-primary/30"
                                    }
                                    rounded-xl transition-all flex items-center justify-center shadow-sm
                                    ${isSapMode ? "hover:shadow-md" : "hover:shadow-xl hover:shadow-primary/5"}
                                    ${containerClass}
                                `}
                >
                  <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                    {issuer.logo ? (
                      isDark ? (
                        <Image
                          src={issuer.logo}
                          alt={issuer.name}
                          fill
                          className={`object-contain ${isSapMode ? "" : "dark:invert"}`}
                          sizes={logoSizes}
                        />
                      ) : (
                        <Image
                          src={issuer.logo}
                          alt={issuer.name}
                          fill
                          className="object-contain"
                          sizes={logoSizes}
                        />
                      )
                    ) : (
                      <div
                        className={`
                                                absolute inset-0 flex items-center justify-center text-center transition-all duration-300
                                                ${
                                                  isSapMode
                                                    ? "font-semibold text-sm text-sap-text-secondary group-hover:text-sap-primary"
                                                    : "font-black text-2xl tracking-tighter text-muted-foreground group-hover:text-primary uppercase italic"
                                                }
                                            `}
                      >
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
