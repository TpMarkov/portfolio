"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useDesignMode } from "@/app/context/DesignContext";

export default function Page() {
  const { resolvedTheme } = useTheme();
  const { designMode } = useDesignMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const isSap = designMode === "sap";

  return (
    <div
      className={`
        min-h-screen flex flex-col lg:flex-row transition-colors duration-300
        ${isSap ? "bg-[#f5f5f5] text-[#11181c]" : "bg-background text-foreground"}
      `}
    >
      {/* Left Side: Branding (MATCHES SIGN UP) */}
      <div
        className={`
          hidden lg:flex lg:w-2/3 relative overflow-hidden
          ${isSap ? "bg-gradient-to-br from-[#0070f2] to-[#005bb5]" : "bg-slate-950"}
        `}
      >
        {isSap ? (
          <>
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern
                    id="sap-pattern-signin"
                    patternUnits="userSpaceOnUse"
                    width="20"
                    height="20"
                  >
                    <circle cx="10" cy="10" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="100"
                  fill="url(#sap-pattern-signin)"
                />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="0,0 100,0 100,100" fill="white" />
              </svg>
            </div>
          </>
        ) : (
          <Image
            src="/background-ornaments/5.jpg"
            alt="Branding background"
            fill
            className="object-contain opacity-60 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
            priority
          />
        )}

        {!isSap && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/40" />
          </>
        )}

        <div className="relative z-10 flex flex-col justify-between h-full w-full p-16">
          <Link href="/" className="flex items-center space-x-3 group w-fit">
            <div
              className={`
                backdrop-blur-md px-3 rounded-lg border transition-transform group-hover:scale-105
                ${isSap ? "bg-white/20 border-white/30" : "bg-white/10 border-white/20"}
              `}
            >
              <Image
                width={40}
                height={40}
                src="/images/webdevstudiohq-logo.png"
                alt="logo"
                className="grayscale contrast-100"
              />
            </div>
            <h1
              className={`
                text-3xl drop-shadow-lg
                ${isSap ? "text-white font-semibold tracking-normal" : "text-white font-black uppercase tracking-tighter italic"}
              `}
            >
              webdevstudio
              <span className={isSap ? "text-white" : "text-primary"}>HQ</span>
            </h1>
          </Link>

          <div className="space-y-6 max-w-lg">
            <div className="space-y-4">
              {isSap ? (
                <>
                  <h2 className="text-5xl font-bold text-white leading-tight">
                    Welcome <br />
                    <span className="text-white/90">Back.</span>
                  </h2>
                  <div className="w-24 h-1 bg-white/40 rounded-full" />
                </>
              ) : (
                <>
                  <h2 className="text-6xl font-black text-white leading-none uppercase italic">
                    Welcome <br />
                    <span className="text-primary">Back.</span>
                  </h2>
                  <div className="w-24 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
                </>
              )}
            </div>

            <p
              className={
                isSap
                  ? "text-white/90 font-medium text-lg"
                  : "text-slate-200 font-semibold text-xl italic backdrop-blur-sm bg-black/10 p-6 rounded-3xl border-l-4 border-primary"
              }
            >
              Continue your premium experience and access your workspace.
            </p>
          </div>

          <div
            className={`
              font-bold text-xs uppercase tracking-[0.2em]
              ${isSap ? "text-white/70" : "text-slate-400 italic text-white"}
            `}
          >
            © 2026 webdevstudioHQ — Established for Innovation
          </div>
        </div>
      </div>

      {/* Right Side: Authentication */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-16 relative">
        <Link
          href="/"
          className={`
            absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12
            flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-wider
            ${isSap ? "text-[#6b7280] hover:text-[#0070f2]" : "text-muted-foreground hover:text-primary font-black"}
          `}
        >
          <HiArrowLongLeft className="w-5 h-5" />
          <span>Back to Website</span>
        </Link>

        {/* Mobile Header */}
        <div className="lg:hidden flex flex-col items-center mb-8 sm:mb-12 text-center">
          <Image
            width={40}
            height={40}
            src="/images/webdevstudiohq-logo.png"
            alt="logo"
          />
          <h1 className="text-xl font-semibold mt-2">
            webdevstudio<span className="text-[#0070f2]">HQ</span>
          </h1>
        </div>

        <div className="w-full max-w-[400px] sm:max-w-[440px] space-y-8 sm:space-y-10">
          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Welcome <span className="text-[#0070f2]">Back</span>
            </h1>
            <p className="text-[#6b7280] text-sm sm:text-base">
              Your premium experience continues here.
            </p>
          </div>

          <SignIn
            appearance={{
              baseTheme: isDark ? dark : undefined,
              layout: { logoPlacement: "none" },
              elements: {
                card: "bg-transparent shadow-none border-none p-0 w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
