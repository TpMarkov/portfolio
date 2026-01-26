"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement("script");
        script.id = "usercentrics-ppg";
        script.src = "https://policygenerator.usercentrics.eu/api/privacy-policy";
        script.setAttribute("privacy-policy-id", "ea62842a-027a-49d0-b557-1a55156a5cc0");
        script.setAttribute("data-language", "en");
        script.async = true;

        // Append to head
        document.head.appendChild(script);

        // Cleanup on unmount
        return () => {
            const existingScript = document.getElementById("usercentrics-ppg");
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-0">
            <div className="w-[90%] xl:w-[60%] mx-auto">
                <Link
                    href="/#home"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-bold uppercase tracking-widest text-xs mb-12"
                >
                    <FaArrowLeft /> Back to Home
                </Link>

                <div className="space-y-12">
                    <div className="border-b border-border pb-12">
                        <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                            <FaShieldAlt className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                    </div>

                    <div className="uc-privacy-policy"></div>
                </div>

                <div className="mt-20 pt-8 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                        © 2026 webdevstudioHQ • Designed for global digital safety
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
