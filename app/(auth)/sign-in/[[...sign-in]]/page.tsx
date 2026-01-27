"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function Page() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground transition-colors duration-300">
            {/* Left Side: Branding (Hidden on mobile, high-impact on desktop) */}
            <div className="hidden lg:flex lg:w-2/3 relative overflow-hidden bg-slate-950">
                <Image
                    src="/background-ornaments/5.jpg"
                    alt="Branding background"
                    fill
                    className="object-contain opacity-60 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                    priority
                />
                {/* Advanced Blending Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/40" />

                <div className="relative z-10 flex flex-col justify-between h-full w-full p-16">
                    <Link href="/" className="flex items-center space-x-3 group w-fit">
                        <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 group-hover:scale-110 transition-transform">
                            <Image width={40} height={40} src="/images/webdevstudiohq-logo.png" alt="logo" className="object-contain" />
                        </div>
                        <h1 className="text-3xl font-black uppercase tracking-tighter italic text-white drop-shadow-lg">
                            webdevstudio<span className="text-primary truncate">HQ</span>
                        </h1>
                    </Link>

                    <div className="space-y-6 max-w-lg">
                        <div className="space-y-4">
                            <h2 className="text-6xl font-black text-white leading-none uppercase tracking-tighter italic drop-shadow-2xl">
                                Capturing Digital <br />
                                <span className="text-primary">Excellence.</span>
                            </h2>
                            <div className="w-24 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
                        </div>
                        <p className="text-slate-200 font-semibold text-xl italic leading-relaxed backdrop-blur-sm bg-black/10 p-6 rounded-3xl border-l-4 border-primary">
                            "Where premium aesthetics meet cutting-edge full-stack solutions. Welcome to the workspace of the future."
                        </p>
                    </div>

                    <div className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] italic">
                        © 2026 webdevstudioHQ — Established for Innovation
                    </div>
                </div>
            </div>

            {/* Right Side: Authentication */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-16 relative">
                {/* Back Link */}
                <Link
                    href="/"
                    className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12 flex items-center space-x-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all group z-20"
                >
                    <HiArrowLongLeft className="w-5 h-5 sm:w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Website</span>
                </Link>

                {/* Mobile Header (Refined sizing) */}
                <div className="lg:hidden flex flex-col items-center mb-8 sm:mb-12 text-center">
                    <div className="bg-primary/10 p-3 rounded-2xl mb-3 shadow-lg shadow-primary/5">
                        <Image width={40} height={40} src="/images/webdevstudiohq-logo.png" alt="logo" className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />
                    </div>
                    <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tighter italic opacity-90">
                        webdevstudio<span className="text-primary">HQ</span>
                    </h1>
                </div>

                <div className="w-full max-w-[400px] sm:max-w-[440px] space-y-8 sm:space-y-10">
                    <div className="text-center lg:text-left space-y-2">
                        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter italic leading-none">
                            Welcome <span className="text-primary">Back</span>
                        </h1>
                        <p className="text-muted-foreground font-bold italic text-sm sm:text-lg opacity-80 decoration-primary/30 underline-offset-4 decoration-2">
                            "Your premium experience continues here."
                        </p>
                    </div>

                    <SignIn
                        appearance={{
                            baseTheme: isDark ? dark : undefined,
                            variables: {
                                colorPrimary: "#3b82f6",
                                colorBackground: isDark ? "#020617" : "#ffffff",
                                colorText: isDark ? "#f1f5f9" : "#0f172a",
                                colorInputBackground: isDark ? "#1e293b" : "#f1f5f9",
                                colorInputText: isDark ? "#f1f5f9" : "#0f172a",
                            },
                            layout: {
                                logoPlacement: "none",
                            },
                            elements: {
                                card: "bg-transparent shadow-none border-none p-0 w-full",
                                headerTitle: "hidden",
                                headerSubtitle: "hidden",
                                formButtonPrimary: "bg-primary hover:bg-primary/90 text-[10px] sm:text-xs font-black uppercase tracking-widest italic shadow-xl shadow-primary/20 h-12 transition-all rounded-2xl border-none",
                                socialButtonsBlockButton: "border-border hover:bg-muted transition-all rounded-2xl h-12 bg-secondary/50",
                                socialButtonsBlockButtonText: "font-bold italic uppercase tracking-widest text-[9px] sm:text-[10px] text-foreground",
                                formFieldLabel: "text-foreground font-black uppercase tracking-[0.2em] text-[10px] mb-3 opacity-60",
                                formFieldInput: "bg-secondary/50 border-none focus:ring-2 focus:ring-primary/50 transition-all rounded-2xl h-12 sm:h-14 px-5 sm:px-6 italic font-bold text-sm sm:text-base",
                                footerActionLink: "text-primary hover:text-primary/80 font-black italic underline decoration-2 underline-offset-4",
                                dividerLine: "bg-border/50",
                                dividerText: "text-muted-foreground font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] px-4 sm:px-6",
                                formFieldAction: "text-primary hover:text-primary/80 font-black text-[10px] sm:text-xs italic",
                                identityPreviewText: "font-bold text-foreground",
                                footerActionText: "font-semibold italic text-muted-foreground",
                                internalLogo: "hidden"
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
