"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <SunIcon className="h-6 w-6 text-yellow-500 dark:hidden" />
      <MoonIcon className="h-6 w-6 text-blue-500 hidden dark:block" />
    </button>
  );
} 