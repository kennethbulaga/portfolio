"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Download,
  Copy,
  Check,
  Sun,
  Moon,
  FolderGit2,
  FileCode,
  GraduationCap,
  Briefcase,
  Mail,
  X,
  Sparkles,
} from "lucide-react";
import { useTheme } from "next-themes";
import { personalInfo, resumePath, socialLinks } from "@/data/portfolio";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy: (studyId?: string) => void;
}

interface CommandItem {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  badge?: string;
}

interface CommandCategory {
  category: string;
  items: CommandItem[];
}

export function CommandMenu({ isOpen, onClose, onOpenCaseStudy }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const { theme, setTheme } = useTheme();

  // Reset query when closed without triggering cascading render effect
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setQuery("");
    }
  }


  // Keyboard shortcut listener for Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
    }
  }, []);

  const navigateTo = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commandItems: CommandCategory[] = [
    {
      category: "Navigation",
      items: [
        {
          id: "nav-about",
          label: "About & Introduction",
          icon: FileCode,
          action: () => navigateTo("#about"),
        },
        {
          id: "nav-stack",
          label: "What I Build With (Tech Stack)",
          icon: Sparkles,
          action: () => navigateTo("#stack"),
        },
        {
          id: "nav-projects",
          label: "Flagship & Client Projects",
          icon: FolderGit2,
          action: () => navigateTo("#projects"),
        },
        {
          id: "nav-experience",
          label: "Work Experience & History",
          icon: Briefcase,
          action: () => navigateTo("#work-experience"),
        },
        {
          id: "nav-education",
          label: "Education & Leadership",
          icon: GraduationCap,
          action: () => navigateTo("#education"),
        },
        {
          id: "nav-contact",
          label: "Contact & Availability",
          icon: Mail,
          action: () => navigateTo("#contact"),
        },
      ],
    },
    {
      category: "System Deep-Dives",
      items: [
        {
          id: "case-study-jpconnect",
          label: "Inspect JP Connect Architecture (5,536 Users)",
          icon: Sparkles,
          action: () => {
            onClose();
            onOpenCaseStudy("jp-connect");
          },
          badge: "Institutional",
        },
        {
          id: "case-study-owwacsmr",
          label: "Inspect OWWA CSMR Architecture (4,632 Survey Responses)",
          icon: Sparkles,
          action: () => {
            onClose();
            onOpenCaseStudy("owwa-csmr");
          },
          badge: "Gov Production",
        },
        {
          id: "case-study-jpintrams",
          label: "Inspect JP Intrams Arena Architecture (Real-Time Websockets)",
          icon: Sparkles,
          action: () => {
            onClose();
            onOpenCaseStudy("jp-intrams");
          },
          badge: "Real-Time",
        },
      ],
    },
    {
      category: "Actions & Links",
      items: [
        {
          id: "act-copy-email",
          label: copied ? "Email Copied to Clipboard!" : `Copy Email (${personalInfo.email})`,
          icon: copied ? Check : Copy,
          action: handleCopyEmail,
        },
        {
          id: "act-resume-view",
          label: "View Resume PDF",
          icon: ExternalLink,
          action: () => {
            window.open(resumePath, "_blank");
            onClose();
          },
        },
        {
          id: "act-resume-download",
          label: "Download Resume PDF",
          icon: Download,
          action: () => {
            const link = document.createElement("a");
            link.href = resumePath;
            link.download = "KennethBulaga_Resume.pdf";
            link.click();
            onClose();
          },
        },
        {
          id: "act-theme",
          label: `Toggle Theme (Currently ${theme === "dark" ? "Dark" : "Light"})`,
          icon: theme === "dark" ? Sun : Moon,
          action: () => {
            setTheme(theme === "dark" ? "light" : "dark");
          },
        },
        {
          id: "act-github",
          label: "GitHub Profile (@kennethbulaga)",
          icon: ExternalLink,
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "GitHub")?.url, "_blank");
            onClose();
          },
        },
        {
          id: "act-linkedin",
          label: "LinkedIn Profile (kenneth-bulaga)",
          icon: ExternalLink,
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "LinkedIn")?.url, "_blank");
            onClose();
          },
        },
        {
          id: "act-x",
          label: "X / Twitter (@kenzodev69)",
          icon: ExternalLink,
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "X")?.url, "_blank");
            onClose();
          },
        },
        {
          id: "act-facebook",
          label: "Facebook Profile (bulagakenneth)",
          icon: ExternalLink,
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "Facebook")?.url, "_blank");
            onClose();
          },
        },
        {
          id: "act-tiktok",
          label: "TikTok Channel (@bulagakenneth)",
          icon: ExternalLink,
          action: () => {
            window.open(socialLinks.find((s) => s.platform === "TikTok")?.url, "_blank");
            onClose();
          },
        },
      ],
    },
  ];

  const filteredCategories = commandItems
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-border">
              <Search size={18} className="text-muted-foreground mr-2 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent py-3.5 text-base sm:text-sm outline-none placeholder:text-muted-foreground text-foreground"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close command palette"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border/40">
              {filteredCategories.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No matching commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredCategories.map((group) => (
                  <div key={group.category} className="py-2 first:pt-0 last:pb-0">
                    <p className="px-2 pb-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      {group.category}
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={item.action}
                            className="w-full flex items-center justify-between px-2.5 py-2 text-xs sm:text-sm rounded-lg hover:bg-muted/80 text-foreground transition-[background-color,color] duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-left group"
                          >
                            <span className="flex items-center gap-2.5">
                              <Icon
                                size={16}
                                className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                              />
                              <span>{item.label}</span>
                            </span>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary">
                                {item.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-border bg-muted/40 text-[11px] text-muted-foreground font-mono">
              <span>Navigate with mouse or touch</span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded border border-border bg-background text-[10px]">
                  ESC
                </kbd>
                <span>to close</span>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
