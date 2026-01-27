"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type DesignMode = "original" | "sap";

interface DesignContextType {
  designMode: DesignMode;
  setDesignMode: (mode: DesignMode) => void;
  toggleDesignMode: () => void;
}

// Default values for when context is not available
const defaultContextValue: DesignContextType = {
  designMode: "original",
  setDesignMode: () => {},
  toggleDesignMode: () => {},
};

export const DesignContext = React.createContext<DesignContextType | undefined>(
  undefined,
);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [designMode, setDesignMode] = useState<DesignMode>("original");
  const [mounted, setMounted] = useState(false);

  // Load saved preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("designMode") as DesignMode;
    if (savedMode && (savedMode === "original" || savedMode === "sap")) {
      setDesignMode(savedMode);
    }
    setMounted(true);
  }, []);

  // Save preference to localStorage when it changes
  const handleSetDesignMode = (mode: DesignMode) => {
    setDesignMode(mode);
    localStorage.setItem("designMode", mode);
  };

  const toggleDesignMode = () => {
    const newMode = designMode === "original" ? "sap" : "original";
    handleSetDesignMode(newMode);
  };

  // Prevent hydration mismatch - use default until mounted
  if (!mounted) {
    return (
      <DesignContext.Provider value={defaultContextValue}>
        {children}
      </DesignContext.Provider>
    );
  }

  return (
    <DesignContext.Provider
      value={{
        designMode,
        setDesignMode: handleSetDesignMode,
        toggleDesignMode,
      }}
    >
      <div data-design-mode={designMode}>{children}</div>
    </DesignContext.Provider>
  );
}

export function useDesignMode(): DesignContextType {
  // Always return a valid context object, never throw
  const context = React.useContext(DesignContext);
  return context !== undefined ? context : defaultContextValue;
}

// Hook to get design-specific class names
export function useDesignClass(
  originalClass: string,
  sapClass: string,
): string {
  const context = React.useContext(DesignContext);
  const designMode = context !== undefined ? context.designMode : "original";
  return designMode === "sap" ? sapClass : originalClass;
}

// Hook for conditional styling based on design mode
export function useDesignStyle(
  originalStyle: React.CSSProperties,
  sapStyle: React.CSSProperties,
): React.CSSProperties {
  const context = React.useContext(DesignContext);
  const designMode = context !== undefined ? context.designMode : "original";
  return designMode === "sap" ? sapStyle : originalStyle;
}

// Check if design mode is SAP (safe to use anywhere)
export function isSapMode(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  const savedMode = localStorage.getItem("designMode");
  return savedMode === "sap";
}
