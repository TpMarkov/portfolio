"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCookieBite, FaTimes } from "react-icons/fa";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted
        const hasAccepted = localStorage.getItem("cookieConsentAccepted");
        if (!hasAccepted) {
            // Small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsentAccepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-[9999] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-card/95 backdrop-blur-xl border-2 border-primary/20 p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Icon Section */}
                <div className="hidden md:flex p-5 bg-primary/10 rounded-2xl">
                    <FaCookieBite className="w-8 h-8 text-primary animate-pulse" />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-foreground font-black uppercase tracking-tighter text-xl mb-2">
                        Privacy & <span className="text-primary">Cookies</span>
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
                        We value your privacy. By continuing to use our site, you acknowledge that you have read and agree to our{" "}
                        <Link href="/privacy-policy" className="text-primary hover:underline font-bold underline-offset-4">
                            Privacy Policy
                        </Link> and consent to our use of essential cookies.
                    </p>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-8 py-4 bg-primary text-primary-foreground font-black rounded-xl hover:opacity-90 transition-all active:scale-95 uppercase tracking-tighter italic cursor-pointer shadow-lg shadow-primary/20"
                    >
                        Accept All
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-4 bg-secondary text-foreground rounded-xl hover:bg-muted transition-all active:scale-95 cursor-pointer border border-border"
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
