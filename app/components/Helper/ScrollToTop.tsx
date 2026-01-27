"use client";

import { useState, useEffect } from "react";
import { useDesignMode } from "@/app/context/DesignContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { designMode } = useDesignMode();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
                fixed right-6 z-[9999] transition-all duration-300 ease-in-out transform
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }
                ${
                  designMode === "sap"
                    ? "w-12 h-12 rounded-lg bg-sap-primary text-white shadow-lg hover:bg-sap-primary-dark hover:shadow-xl"
                    : "w-14 h-14 rounded-none bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-primary/25"
                }
            `}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      {/* Up Arrow Icon */}
      <svg
        className="w-6 h-6 mx-auto"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
