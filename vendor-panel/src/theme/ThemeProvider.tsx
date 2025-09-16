// src/theme/ThemeProvider.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";
type Ctx = { theme: Theme; resolved: "light" | "dark"; setTheme: (t: Theme) => void };

const ThemeCtx = createContext<Ctx | null>(null);

function getSystem(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const resolved = useMemo(() => (theme === "system" ? getSystem() : theme), [theme]);

  // اعمال روی html[data-theme]
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", resolved);
    localStorage.setItem("theme", theme);

    // sync با تغییر سیستم
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        const sys = mq.matches ? "dark" : "light";
        root.setAttribute("data-theme", sys);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme, resolved]);

  const value = useMemo<Ctx>(() => ({ theme, resolved, setTheme: setThemeState }), [theme, resolved]);

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
