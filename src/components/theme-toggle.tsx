"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const baseClass =
    "relative size-8 rounded-[10px] border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] cursor-pointer after:absolute after:-inset-1.5 after:content-['']";

  if (!mounted) {
    return (
      <button type="button" className={baseClass} disabled aria-label="Toggle theme">
        <Sun size={16} strokeWidth={1.5} />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={baseClass}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          transition={shouldReduceMotion ? { duration: 0.12 } : { type: "spring", duration: 0.3, bounce: 0 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun size={16} strokeWidth={1.5} />
          ) : (
            <Moon size={16} strokeWidth={1.5} />
          )}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
