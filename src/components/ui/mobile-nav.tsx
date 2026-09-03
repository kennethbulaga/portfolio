"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, resumePath, socialLinks } from "@/data/portfolio";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const githubLink = socialLinks.find((l) => l.platform === "GitHub");
  const linkedinLink = socialLinks.find((l) => l.platform === "LinkedIn");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-Over Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-[85%] max-w-sm h-full bg-background border-l border-border shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar: Logo, Theme & Close */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border/80">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-1.5 font-mono text-base font-bold text-foreground"
                >
                  <span>Kenzo</span>
                  <span className="text-primary font-normal">/</span>
                  <span className="text-muted-foreground font-medium">dev</span>
                </Link>

                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="h-8 w-8 rounded-lg"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </Button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold px-2 pb-1">
                  Navigation
                </p>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Bottom Section: Resume & Socials */}
            <div className="pt-6 border-t border-border/80 space-y-4">
              <div className="space-y-2">
                <Button asChild size="sm" variant="default" className="w-full gap-2">
                  <a href={resumePath} target="_blank" rel="noopener noreferrer">
                    <Eye size={15} />
                    <span>View Resume PDF</span>
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="w-full gap-2">
                  <a
                    href={resumePath}
                    download="KennethBulaga_FullStackDev_Jan2026.pdf"
                    rel="noopener noreferrer"
                  >
                    <Download size={15} />
                    <span>Download PDF</span>
                  </a>
                </Button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  {githubLink && (
                    <a
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors p-1"
                      aria-label="GitHub"
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {linkedinLink && (
                    <a
                      href={linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors p-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={17} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
