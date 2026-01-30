"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

import { Toaster } from "./ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      defaultTheme="system"
      attribute="class"
    >
      <AppProgressProvider
        color="var(--foreground)"
        height="2px"
        delay={500}
        options={{ showSpinner: false }}
      >
        {children}
      </AppProgressProvider>

      <Toaster position="top-center" />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
