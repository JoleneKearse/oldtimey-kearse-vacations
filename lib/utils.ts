import type { Theme } from "@/context/theme-context";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      return "dark";
    }
  }
  return "light";
}
