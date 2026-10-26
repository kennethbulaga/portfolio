"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  User,
  Layers,
  FolderGit2,
  Briefcase,
  Award,
  FileText,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/ui/mobile-nav";
import { PixelName } from "@/components/ui/pixel-name";
import { IWasHereButton } from "@/components/ui/i-was-here";
import {
  navItems,
  personalInfo,
  resumePath,
  socialLinks,
  shippingSoonProjects,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navIconMap: Record<string, React.ElementType> = {
  "/": User,
  "/systems": FolderGit2,
  "/experience": Briefcase,
  "/credentials": Award,
  "/stack": Layers,
};

function DavaoClock() {
  const [time, setTime] = useState<string>("UTC+8");

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Manila",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setTime(`UTC+8 · ${formatted}`);
      } catch {
        setTime("UTC+8");
      }
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-[11px] tabular-nums text-muted-foreground">{time}</span>;
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const showScrolledName = pathname !== "/" || isScrolled;

  const githubLink = socialLinks.find((l) => l.platform === "GitHub");
  const linkedinLink = socialLinks.find((l) => l.platform === "LinkedIn");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-foreground focus:text-background focus:text-xs focus:font-mono focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Desktop Floating Left Rail */}
      <aside
        aria-label="Primary Sidebar Navigation"
        className="hidden lg:block sticky top-3 h-[calc(100dvh-24px)] w-[264px] shrink-0 my-3 ml-3 z-30"
      >
        <div className="rail-shell h-full">
          <div className="rail-panel h-full flex flex-col justify-between p-3.5 overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-3.5">
              {/* Top Identity */}
              <div className="flex items-center justify-between pl-1.5 pr-1 pt-0.5">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground"
                >
                  <Image
                    src={personalInfo.logo.light}
                    alt={personalInfo.name}
                    width={26}
                    height={26}
                    className="size-6.5 rounded-[6px] shrink-0 dark:hidden"
                  />
                  <Image
                    src={personalInfo.logo.dark}
                    alt={personalInfo.name}
                    width={26}
                    height={26}
                    className="size-6.5 rounded-[6px] shrink-0 hidden dark:block"
                  />
                  <PixelName text={personalInfo.name} />
                </Link>
              </div>

              {/* Tactile Copy-Email Pill CTA with Live Availability Dot */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={cn(
                  "rail-cta w-full h-10 rounded-full px-4 flex items-center justify-between text-left text-sm font-medium cursor-pointer",
                  copied ? "text-[#1e6b3a] dark:text-[#5fd08a]" : "text-foreground"
                )}
                aria-label="Copy Kenneth Bulaga's email address"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  {copied ? (
                    <>
                      <Check size={15} className="shrink-0" />
                      <span>Email copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-muted-foreground shrink-0" />
                      <span>Copy email</span>
                    </>
                  )}
                </span>
                <span
                  className="size-2 rounded-full bg-[#2f9e5b] ring-3 ring-[#2f9e5b]/20 shrink-0"
                  title={personalInfo.availability.message}
                />
              </button>

              {/* Section & Page Index Navigation */}
              <nav aria-label="Section Index" className="flex flex-col gap-3.5 pt-0.5">
                <div className="flex flex-col gap-0.5">
                  <div className="px-2.5 pb-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Index
                  </div>
                  {navItems.map((item) => {
                    const Icon = navIconMap[item.href] || Layers;
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "h-8.5 px-2.5 rounded-[10px] flex items-center gap-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-muted text-foreground border border-border"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent"
                        )}
                      >
                        <Icon
                          size={15}
                          className={cn(
                            "shrink-0",
                            isActive ? "text-foreground" : "text-muted-foreground"
                          )}
                        />
                        <span className="truncate">{item.label}</span>
                        {"count" in item && item.count && (
                          <span className="ml-auto font-mono text-[11px] tabular-nums text-muted-foreground">
                            {item.count}
                          </span>
                        )}
                      </Link>
                    );
                  })}

                  <a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8.5 px-2.5 rounded-[10px] flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border border-transparent"
                  >
                    <FileText size={15} className="shrink-0 text-muted-foreground" />
                    <span className="truncate">Resume PDF</span>
                    <ArrowUpRight size={14} className="ml-auto text-muted-foreground" />
                  </a>
                </div>

                {/* Building / Shipping Soon Group */}
                <div className="flex flex-col gap-0.5">
                  <div className="px-2.5 pb-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Building
                  </div>
                  {shippingSoonProjects.map((app) => (
                    <Link
                      key={app.id}
                      href={app.href}
                      className="h-8.5 px-2.5 rounded-[10px] flex items-center gap-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <Rocket size={14} className="shrink-0 text-amber-500" />
                      <span className="truncate">{app.title}</span>
                      <span className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold bg-amber-500/12 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Soon
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Bottom Visitor Stamp + Rail Footer */}
            <div className="flex flex-col mt-auto pt-2">
              <div className="-mx-1.5 border-t border-border/60 pt-1">
                <IWasHereButton />
              </div>

              <div className="-mx-3.5 -mb-3.5 mt-1 px-4 py-3 border-t border-border bg-muted/20 flex items-center justify-between gap-2">
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-medium text-foreground truncate">
                    Davao City, PH
                  </span>
                  <DavaoClock />
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {githubLink && (
                    <a
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="size-8 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {linkedinLink && (
                    <a
                      href={linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="size-8 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin size={14} />
                    </a>
                  )}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile & Tablet Top Bar (<1024px) */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-40 h-14 bg-background/90 backdrop-blur-md border-b border-border px-4 flex items-center justify-between">
        <Link
          href="/"
          aria-label={personalInfo.name}
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-foreground tracking-tight"
        >
          <Image
            src={personalInfo.logo.light}
            alt={personalInfo.name}
            width={30}
            height={30}
            className="size-7.5 rounded-[7px] shrink-0 dark:hidden"
          />
          <Image
            src={personalInfo.logo.dark}
            alt={personalInfo.name}
            width={30}
            height={30}
            className="size-7.5 rounded-[7px] shrink-0 hidden dark:block"
          />
          <span
            className={cn(
              "transition-all duration-200 overflow-hidden whitespace-nowrap",
              showScrolledName
                ? "max-w-[200px] opacity-100 translate-x-0"
                : "max-w-0 opacity-0 -translate-x-1"
            )}
          >
            {personalInfo.name}
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="size-9 text-muted-foreground hover:text-foreground rounded-lg"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={17} />
          </Button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
