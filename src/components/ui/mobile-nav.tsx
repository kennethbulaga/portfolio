"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Eye,
  Download,
  ArrowRight,
  Github,
  Linkedin,
  User,
  Layers,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, resumePath, socialLinks } from "@/data/portfolio";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy?: (studyId?: string) => void;
}

const navIconMap: Record<string, React.ElementType> = {
  About: User,
  Stack: Layers,
  Projects: FolderGit2,
  Experience: Briefcase,
  Education: GraduationCap,
  Contact: Mail,
};

function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function MobileNav({ isOpen, onClose, onOpenCaseStudy }: MobileNavProps) {
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
  const xLink = socialLinks.find((l) => l.platform === "X");
  const facebookLink = socialLinks.find((l) => l.platform === "Facebook");
  const tiktokLink = socialLinks.find((l) => l.platform === "TikTok");

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
            className="relative w-[88%] max-w-sm h-full bg-background border-l border-border shadow-2xl flex flex-col justify-between p-5 sm:p-6 z-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Area: Logo, Theme, Status & Links */}
            <div className="flex flex-col gap-5">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border/80">
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
                    className="size-8 rounded-lg text-muted-foreground hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </Button>
                </div>
              </div>

              {/* Status Banner */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                <span className="relative flex size-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
                </span>
                <span className="truncate">Freelancing & Open to Full-Time</span>
              </div>

              {/* Navigation Links with Icons */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold px-2 pb-1">
                  Navigation
                </p>
                <nav className="flex flex-col gap-0.5">
                  {navItems.map((item) => {
                    const Icon = navIconMap[item.label] || ArrowRight;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors group"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon size={15} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          <span>{item.label}</span>
                        </span>
                        <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform text-primary" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Flagship Case Studies Quick Action */}
              {onOpenCaseStudy && (
                <div className="flex flex-col gap-1.5 pt-3 border-t border-border/70">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold px-2 pb-0.5 flex items-center gap-1">
                    <Sparkles size={11} className="text-primary" />
                    <span>System Architecture Deep-Dives</span>
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCaseStudy("jp-connect");
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 text-left transition-[background-color,border-color,box-shadow,transform] duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          ⚡
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            JP Connect Architecture
                          </p>
                          <p className="text-[10px] font-mono text-muted-foreground truncate">
                            5,536 Users · 658 Exams
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-1.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCaseStudy("owwa-csmr");
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 text-left transition-[background-color,border-color,box-shadow,transform] duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          🏛️
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            OWWA CSMR Platform
                          </p>
                          <p className="text-[10px] font-mono text-muted-foreground truncate">
                            4,632 Responses · 10 Units · &lt;1s
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-1.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCaseStudy("jp-intrams");
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 text-left transition-[background-color,border-color,box-shadow,transform] duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          🏆
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            JP Intrams Arena Engine
                          </p>
                          <p className="text-[10px] font-mono text-muted-foreground truncate">
                            9 Units · 23 Events · &lt;500ms
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-1.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Section: Resume Actions & Full Socials */}
            <div className="pt-4 border-t border-border/80 flex flex-col gap-3.5">
              <div className="grid grid-cols-2 gap-2">
                <Button asChild size="sm" variant="default" className="h-9 gap-1.5 text-xs">
                  <a href={resumePath} target="_blank" rel="noopener noreferrer">
                    <Eye size={14} />
                    <span>View PDF</span>
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="h-9 gap-1.5 text-xs">
                  <a
                    href={resumePath}
                    download="KennethBulaga_FullStackDev_Jan2026.pdf"
                    rel="noopener noreferrer"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </Button>
              </div>

              {/* Full Social Channels Row */}
              <div className="flex items-center justify-between pt-1 text-muted-foreground">
                <div className="flex items-center justify-center gap-1.5 w-full">
                  {githubLink && (
                    <a
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:text-foreground hover:bg-muted/70 transition-colors border border-border/50"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {linkedinLink && (
                    <a
                      href={linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:text-foreground hover:bg-muted/70 transition-colors border border-border/50"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={15} />
                    </a>
                  )}
                  {xLink && (
                    <a
                      href={xLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:text-foreground hover:bg-muted/70 transition-colors border border-border/50"
                      aria-label="X (Twitter)"
                    >
                      <XIcon className="size-3.5 text-foreground" />
                    </a>
                  )}
                  {facebookLink && (
                    <a
                      href={facebookLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:text-foreground hover:bg-muted/70 transition-colors border border-border/50"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="size-3.5 text-foreground" />
                    </a>
                  )}
                  {tiktokLink && (
                    <a
                      href={tiktokLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:text-foreground hover:bg-muted/70 transition-colors border border-border/50"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="size-3.5 text-foreground" />
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
