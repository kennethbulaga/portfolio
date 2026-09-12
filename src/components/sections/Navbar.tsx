"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/ui/mobile-nav";
import { navItems, resumePath } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenCaseStudy?: (studyId?: string) => void;
  onOpenCommandMenu?: () => void;
}

export function Navbar({ onOpenCaseStudy, onOpenCommandMenu }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,box-shadow] duration-200",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
            : "bg-background/55 backdrop-blur-md"
        )}
      >
        <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Monogram: Kenzo / dev */}
            <Link
              href="/"
              className="group flex items-center gap-1.5 font-mono text-base sm:text-lg font-bold text-foreground hover:text-primary transition-all active:scale-[0.98] tracking-tight"
            >
              <span>Kenzo</span>
              <span className="text-primary font-normal">/</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">dev</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-muted/60 active:scale-[0.98]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="ml-1 flex items-center gap-2">
                {/* Cmd+K Quick Action Trigger */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenCommandMenu}
                  className="h-8 gap-2 px-2.5 text-xs text-muted-foreground hover:text-foreground font-normal border-border/60 bg-muted/30 rounded-xl"
                  aria-label="Open command palette (Press ⌘K or Ctrl+K)"
                >
                  <Search size={13} className="text-muted-foreground" />
                  <span className="hidden lg:inline">Search...</span>
                  <kbd className="pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded border border-border/70 bg-background/80 px-1 font-mono text-[10px] font-medium text-muted-foreground">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>

                <ThemeToggle />

                {/* Resume Link */}
                <Button asChild size="sm" variant="outline" className="gap-1.5 text-xs rounded-xl">
                  <a href={resumePath} target="_blank" rel="noopener noreferrer">
                    <Eye size={14} />
                    <span>Resume</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                className="size-9 text-muted-foreground hover:text-foreground"
                onClick={onOpenCommandMenu}
                aria-label="Open command palette"
              >
                <Search size={16} />
              </Button>
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                className="size-9 text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileNavOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={18} />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Accessible Mobile Slide-Over Sheet */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenCaseStudy={onOpenCaseStudy}
      />
    </>
  );
}
