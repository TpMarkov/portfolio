"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";
import { DesignProvider } from "@/app/context/DesignContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DesignProvider>{children}</DesignProvider>
    </ThemeProvider>
  );
}
