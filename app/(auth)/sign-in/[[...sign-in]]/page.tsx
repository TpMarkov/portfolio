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
      {/* Left Side: Branding (Hidden on mobile, high-impact on desktop) */}
      <div
        className={`
                hidden lg:flex lg:w-2/3 relative overflow-hidden
                ${isSap ? "bg-gradient-to-br from-[#0070f2] to-[#005bb5]" : "bg-slate-950"}
            `}
      >
        {isSap ? (
          /* SAP Design - Clean professional */
          <>
            {/* SAP-style geometric pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern
                    id="sap-pattern"
                    patternUnits="userSpaceOnUse"
                    width="20"
                    height="20"
                  >
                    <circle cx="10" cy="10" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#sap-pattern)" />
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

        {/* Advanced Blending Overlays */}
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
                            backdrop-blur-md p-2 rounded-lg border transition-transform group-hover:scale-105
                            ${isSap ? "bg-white/20 border-white/30" : "bg-white/10 border-white/20"}
                        `}
            >
              <Image
                width={40}
                height={40}
                src="/images/webdevstudiohq-logo.png"
                alt="logo"
                className="object-contain"
              />
            </div>
            <h1
              className={`
                            text-3xl font-bold tracking-tight drop-shadow-lg
                            ${isSap ? "text-white font-semibold tracking-normal" : "text-white font-black uppercase tracking-tighter italic"}
                        `}
            >
              {isSap ? (
                <>
                  webdevstudio<span className="text-white">HQ</span>
                </>
              ) : (
                <>
                  webdevstudio<span className="text-primary truncate">HQ</span>
                </>
              )}
            </h1>
          </Link>

          <div className="space-y-6 max-w-lg">
            <div className="space-y-4">
              {isSap ? (
                <>
                  <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
                    Capturing Digital <br />
                    <span className="text-white/90">Excellence.</span>
                  </h2>
                  <div className="w-24 h-1 bg-white/40 rounded-full" />
                </>
              ) : (
                <>
                  <h2 className="text-6xl font-black text-white leading-none uppercase tracking-tighter italic drop-shadow-2xl">
                    Capturing Digital <br />
                    <span className="text-primary">Excellence.</span>
                  </h2>
                  <div className="w-24 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
                </>
              )}
            </div>
            {isSap ? (
              <p className="text-white/90 font-medium text-lg leading-relaxed">
                Where premium aesthetics meet cutting-edge full-stack solutions.
                Welcome to the workspace of the future.
              </p>
            ) : (
              <p className="text-slate-200 font-semibold text-xl italic leading-relaxed backdrop-blur-sm bg-black/10 p-6 rounded-3xl border-l-4 border-primary">
                Where premium aesthetics meet cutting-edge full-stack solutions.
                Welcome to the workspace of the future.
              </p>
            )}
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
        {/* Back Link */}
        <Link
          href="/"
          className={`
                        absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12 flex items-center space-x-2 text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-all group z-20
                        ${
                          isSap
                            ? "text-[#6b7280] hover:text-[#0070f2]"
                            : "text-muted-foreground hover:text-primary font-black tracking-widest"
                        }
                    `}
        >
          <HiArrowLongLeft className="w-5 h-5 sm:w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Website</span>
        </Link>

        {/* Mobile Header (Refined sizing) */}
        <div className="lg:hidden flex flex-col items-center mb-8 sm:mb-12 text-center">
          <div
            className={`
                        p-3 mb-3 shadow-lg border
                        ${isSap ? "bg-[#0070f2]/10 border-[#0070f2]/20" : "bg-primary/10 shadow-primary/5 border-primary/10"}
                    `}
          >
            <Image
              width={40}
              height={40}
              src="/images/webdevstudiohq-logo.png"
              alt="logo"
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
            />
          </div>
          <h1
            className={`
                        text-xl sm:text-2xl font-bold tracking-tight opacity-90
                        ${isSap ? "text-[#11181c] font-semibold tracking-normal" : "font-black uppercase tracking-tighter italic"}
                    `}
          >
            {isSap ? (
              <>
                webdevstudio<span className="text-[#0070f2]">HQ</span>
              </>
            ) : (
              <>
                webdevstudio<span className="text-primary">HQ</span>
              </>
            )}
          </h1>
        </div>

        <div className="w-full max-w-[400px] sm:max-w-[440px] space-y-8 sm:space-y-10">
          <div className="text-center lg:text-left space-y-2">
            {isSap ? (
              <>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-none">
                  Welcome <span className="text-[#0070f2]">Back</span>
                </h1>
                <p className="text-[#6b7280] text-sm sm:text-base font-medium">
                  Your premium experience continues here.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter italic leading-none">
                  Welcome <span className="text-primary">Back</span>
                </h1>
                <p className="text-muted-foreground font-bold italic text-sm sm:text-lg opacity-80 decoration-primary/30 underline-offset-4 decoration-2">
                  Your premium experience continues here.
                </p>
              </>
            )}
          </div>

          {isSap ? (
            /* SAP-style sign in form */
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8">
              <SignIn
                appearance={{
                  baseTheme: isDark ? dark : undefined,
                  variables: {
                    colorPrimary: "#0070f2",
                    colorBackground: "#ffffff",
                    colorText: "#11181c",
                    colorInputBackground: "#f5f5f5",
                    colorInputText: "#11181c",
                    borderRadius: "6px",
                  },
                  layout: {
                    logoPlacement: "none",
                  },
                  elements: {
                    card: "bg-transparent shadow-none border-none p-0 w-full rounded-none",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    formButtonPrimary:
                      "bg-[#0070f2] hover:bg-[#0060d9] text-white font-medium tracking-normal shadow-sm h-10 transition-all rounded-md border-none w-full",
                    socialButtonsBlockButton:
                      "border-[#e5e7eb] hover:bg-[#f5f5f5] transition-all h-10 bg-white w-full rounded-md",
                    socialButtonsBlockButtonText:
                      "font-medium text-[#11181c] text-sm uppercase tracking-wide",
                    formFieldLabel:
                      "text-[#6b7280] font-medium text-xs uppercase tracking-wide mb-2",
                    formFieldInput:
                      "bg-[#f5f5f5] border border-[#e5e7eb] text-[#11181c] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0070f2]/20 focus:border-[#0070f2] rounded-md h-10 px-4 text-sm",
                    footerActionLink:
                      "text-[#0070f2] hover:text-[#0060d9] font-medium text-sm",
                    dividerLine: "bg-[#e5e7eb]",
                    dividerText:
                      "text-[#9ca3af] px-4 font-medium text-xs uppercase tracking-wide",
                    formFieldAction:
                      "text-[#0070f2] hover:text-[#0060d9] font-medium text-xs",
                    identityPreviewText: "font-medium text-[#11181c]",
                    footerActionText: "text-[#6b7280] font-medium text-sm",
                    internalLogo: "hidden",
                    rootBox: "font-sans",
                    formFieldRow: "mb-4",
                  },
                }}
              />
            </div>
          ) : (
            <SignIn
              appearance={{
                baseTheme: isDark ? dark : undefined,
                variables: {
                  colorPrimary: "#3b82f6",
                  colorBackground: isDark ? "#020617" : "#ffffff",
                  colorText: isDark ? "#f1f5f9" : "#0f172a",
                  colorInputBackground: isDark ? "#1e293b" : "#f5f5f5",
                  colorInputText: isDark ? "#f1f5f9" : "#0f172a",
                  borderRadius: "0",
                },
                layout: {
                  logoPlacement: "none",
                },
                elements: {
                  card: "bg-transparent shadow-none border-none p-0 w-full rounded-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  formButtonPrimary:
                    "bg-primary hover:bg-primary/90 text-[10px] sm:text-xs font-black uppercase tracking-widest italic shadow-xl shadow-primary/20 h-10 transition-all rounded-none border-none",
                  socialButtonsBlockButton:
                    "border-border hover:bg-muted transition-all h-10 bg-secondary/50 rounded-none",
                  socialButtonsBlockButtonText:
                    "font-medium italic text-[9px] sm:text-[10px] text-foreground uppercase tracking-widest font-bold",
                  formFieldLabel:
                    "text-foreground font-medium uppercase tracking-[0.15em] text-[10px] mb-3 opacity-60 font-black tracking-[0.2em]",
                  formFieldInput:
                    "bg-secondary/50 border-none focus:ring-2 transition-all h-10 sm:h-10 px-5 sm:px-6 font-medium text-sm sm:text-base rounded-none italic font-bold text-foreground focus:ring-primary/50",
                  footerActionLink:
                    "text-primary hover:text-primary/80 font-black font-medium italic underline decoration-2 underline-offset-4",
                  dividerLine: "bg-border/50",
                  dividerText:
                    "text-muted-foreground px-4 sm:px-6 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em]",
                  formFieldAction:
                    "text-primary hover:text-primary/80 text-[10px] sm:text-xs font-black font-medium italic",
                  identityPreviewText: "font-medium text-foreground",
                  footerActionText: "font-medium italic text-muted-foreground",
                  internalLogo: "hidden",
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
