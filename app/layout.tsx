import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased transition-colors duration-300",
          "bg-[#030014] dark:bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarsCanvas />
          <Navbar />
          {children}
          <ThemeToggle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
