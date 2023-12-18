import type { Metadata } from "next";
import React from "react";
import "../styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "hello world",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="bg-background text-foreground">{children}</body>
      </ThemeProvider>
    </html>
  );
}
