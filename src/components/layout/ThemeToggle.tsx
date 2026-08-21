"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if (typeof window !== "undefined") {
      localStorage.removeItem("theme");
    }
  }, []);

  return null;
}
