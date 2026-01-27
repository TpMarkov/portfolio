"use client";

import React from "react";
import { useDesignMode } from "@/app/context/DesignContext";
import { FaPalette } from "react-icons/fa";
import { SiSap } from "react-icons/si";

const DesignSwitcher = () => {
  const { designMode, toggleDesignMode } = useDesignMode();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Toggle Button */}
        <button
          onClick={toggleDesignMode}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300
            ${
              designMode === "sap"
                ? "bg-[#0070f2] text-white hover:bg-[#0060d9]"
                : "bg-[#2563eb] text-white hover:bg-[#1d4ed8] border border-[#1d4ed8]"
            }
          `}
          aria-label={`Switch to ${designMode === "original" ? "SAP" : "Original"} design`}
          title={`Current: ${designMode === "original" ? "Original Design" : "SAP Design"} - Click to switch`}
        >
          {designMode === "sap" ? (
            <>
              <SiSap className="text-lg" />
              <span className="font-semibold text-sm">SAP Design</span>
            </>
          ) : (
            <>
              <FaPalette className="text-lg" />
              <span className="font-semibold text-sm">Original</span>
            </>
          )}
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
            {designMode === "original"
              ? "Click to switch to SAP enterprise design"
              : "Click to switch back to original design"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignSwitcher;

// Alternative: Compact version for navbar integration
export const DesignSwitcherCompact = () => {
  const { designMode, toggleDesignMode } = useDesignMode();

  return (
    <button
      onClick={toggleDesignMode}
      className={`
        p-2 rounded-md transition-all duration-200
        ${
          designMode === "sap"
            ? "bg-[#e5f1ff] text-[#0070f2] hover:bg-[#0070f2] hover:text-white"
            : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700"
        }
      `}
      aria-label={`Switch design mode`}
      title={`Design: ${designMode === "original" ? "Original" : "SAP"}`}
    >
      <SiSap className={designMode === "sap" ? "text-xl" : "text-lg"} />
    </button>
  );
};
