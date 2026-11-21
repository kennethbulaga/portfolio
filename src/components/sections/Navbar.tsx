"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
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
import { ThemeToggle } from "@/components/theme-toggle";
import { PixelName } from "@/components/ui/pixel-name";
import { IWasHereButton } from "@/components/ui/i-was-here";
import { useCopyEmail } from "@/hooks/use-copy-email";
import { useDialogFocusTrap } from "@/hooks/use-dialog-focus-trap";
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

const subscribeMedia = (cb: () => void) => {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getDesktopSnapshot = () => window.matchMedia("(min-width: 1024px)").matches;
const getDesktopServerSnapshot = () => true;

export function Navbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showMobileName, setShowMobileName] = useState(false);
  const [activeSection, setActiveSection] = useState<"about" | "projects">("about");
  const { copied, copyEmail } = useCopyEmail(personalInfo.email);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const asideRef = useRef<HTMLElement>(null);
  const isDesktop = useSyncExternalStore(
    subscribeMedia,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  );

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  useDialogFocusTrap(!isDesktop && isDrawerOpen, asideRef, closeDrawer);

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => setShowMobileName(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    if (
      typeof window !== "undefined" &&
      window.innerWidth < 1024 &&
      sessionStorage.getItem("reopen-nav-drawer") === "1"
    ) {
      const id = requestAnimationFrame(() => {
        sessionStorage.removeItem("reopen-nav-drawer");
        setIsDrawerOpen(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const aboutEl = document.getElementById("about");
    const projectsEl = document.getElementById("projects");
    if (!aboutEl || !projectsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target.id === "projects") {
            setActiveSection("projects");
          } else if (entry.target.id === "about") {
            setActiveSection("about");
          }
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    );

    observer.observe(aboutEl);
    observer.observe(projectsEl);
    return () => observer.disconnect();
  }, [pathname]);

  const githubLink = socialLinks.find((l) => l.platform === "GitHub");
  const linkedinLink = socialLinks.find((l) => l.platform === "LinkedIn");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-foreground focus:text-background focus:text-xs focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Mobile Top Bar (<1024px) across all routes */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-40 min-h-14 pt-safe-standalone bg-background/90 backdrop-blur-md border-b border-border px-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open navigation menu"
            className="size-11 rounded-[10px] flex items-center justify-center text-foreground hover:bg-muted active:scale-[0.96] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] motion-reduce:transition-none cursor-pointer shrink-0"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
          <Link
            href="/"
            aria-label={personalInfo.name}
            className="relative inline-flex items-center h-7 text-[16px] font-semibold tracking-[-0.01em] text-foreground whitespace-nowrap"
          >
            <Image
              src={personalInfo.logo.dark}
              alt={personalInfo.name}
              width={26}
              height={26}
              className={cn(
                "absolute left-0 size-6.5 rounded-[6px] shrink-0 image-outline transition-[opacity,transform] duration-200 ease-[var(--ease-out)] motion-reduce:transition-none",
                pathname !== "/" || showMobileName
                  ? "opacity-0 -translate-y-1.5 pointer-events-none"
                  : "opacity-100 translate-y-0"
              )}
            />
            <span
              aria-hidden={pathname === "/" && !showMobileName}
              className={cn(
                "truncate transition-[opacity,transform] duration-200 ease-[var(--ease-out)] motion-reduce:transition-none",
                pathname !== "/" || showMobileName
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1.5 pointer-events-none"
              )}
            >
              {personalInfo.name}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className={cn(
              "relative min-h-9 px-3 rounded-full border border-border bg-card inline-flex items-center gap-1.5 text-xs font-medium transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] cursor-pointer after:absolute after:-inset-y-1.5 after:-inset-x-0.5 after:content-['']",
              copied ? "text-[var(--green-ink)]" : "text-foreground"
            )}
          >
            <span className="size-1.5 rounded-full bg-[var(--green)] shrink-0" />
            <span>{copied ? "Copied" : "Copy email"}</span>
          </button>
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Scrim (<1024px) */}
      {isDrawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/45 backdrop-blur-[2px]"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Unified Floating Left Rail (Desktop) & Left-Sliding Drawer (Mobile) */}
      <aside
        ref={asideRef}
        aria-label="Primary Sidebar Navigation"
        role={!isDesktop && isDrawerOpen ? "dialog" : undefined}
        aria-modal={!isDesktop && isDrawerOpen ? true : undefined}
        inert={!isDesktop && !isDrawerOpen ? true : undefined}
        onTouchStart={(e) => {
          if (!isDrawerOpen) return;
          const t = e.touches[0];
          touchStartRef.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          if (!isDrawerOpen || !touchStartRef.current) return;
          const t = e.changedTouches[0];
          const dx = t.clientX - touchStartRef.current.x;
          const dy = t.clientY - touchStartRef.current.y;
          touchStartRef.current = null;
          if (dx < -48 && Math.abs(dx) > Math.abs(dy)) {
            closeDrawer();
          }
        }}
        className={cn(
          "lg:block lg:sticky lg:top-3 lg:bottom-auto lg:h-[calc(100dvh-24px)] lg:w-[264px] lg:shrink-0 lg:my-3 lg:ml-3 lg:z-30 lg:translate-x-0",
          "fixed top-[max(12px,env(safe-area-inset-top))] bottom-[max(12px,env(safe-area-inset-bottom))] left-[max(12px,env(safe-area-inset-left))] z-50 w-[296px] transition-transform duration-[240ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          isDrawerOpen ? "translate-x-0" : "-translate-x-[115%] lg:translate-x-0"
        )}
      >
        <div className="rail-shell h-full rounded-[20px] lg:rounded-[18px]">
          <div className="rail-panel h-full rounded-[20px] lg:rounded-[18px] flex flex-col justify-between p-3 lg:p-3.5 overflow-y-auto overscroll-contain no-scrollbar">
            <div className="flex flex-col gap-4">
              {/* Top Identity */}
              <div className="flex items-center justify-between pl-1.5 pr-0.5 pt-0.5">
                <Link
                  href="/"
                  onClick={closeDrawer}
                  className="group inline-flex items-center gap-2 text-[18px] font-semibold tracking-[-0.02em] text-foreground"
                >
                  <Image
                    src={personalInfo.logo.dark}
                    alt={personalInfo.name}
                    width={26}
                    height={26}
                    className="size-6.5 rounded-[6px] shrink-0 image-outline"
                  />
                  <PixelName text={personalInfo.name} />
                </Link>

                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close navigation menu"
                  className="lg:hidden size-11 rounded-[10px] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted active:scale-[0.96] transition-[colors,transform] duration-150 ease-[var(--ease-out)] motion-reduce:transition-none cursor-pointer"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Tactile Copy-Email Pill CTA with Live Availability Dot */}
              <button
                type="button"
                onClick={copyEmail}
                className={cn(
                  "rail-cta w-full h-11 rounded-full px-4 flex items-center justify-between text-left text-[15px] font-medium cursor-pointer",
                  copied ? "text-[var(--green-ink)]" : "text-foreground"
                )}
                aria-label="Copy Kenneth Bulaga's email address"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  {copied ? (
                    <>
                      <Check size={16} strokeWidth={1.5} className="shrink-0" />
                      <span>Email copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} strokeWidth={1.5} className="text-[var(--faint)] shrink-0" />
                      <span>Copy email</span>
                    </>
                  )}
                </span>
                <span
                  className="size-2 rounded-full bg-[var(--green)] ring-3 ring-[var(--green)]/20 shrink-0"
                  title={personalInfo.availability.message}
                />
              </button>

              {/* Section & Page Index Navigation */}
              <nav aria-label="Section Index" className="flex flex-col gap-4 pt-0.5">
                <div className="flex flex-col gap-0.5">
                  <div className="px-2.5 pb-1 text-xs font-medium text-[var(--subtle)] tracking-[0.01em]">
                    Index
                  </div>
                  {navItems.map((item) => {
                    const Icon = navIconMap[item.href] || Layers;
                    const isCurrentRoute = pathname === item.href;
                    const isActive =
                      pathname === "/"
                        ? activeSection === "projects"
                          ? item.href === "/systems"
                          : item.href === "/"
                        : isCurrentRoute;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeDrawer}
                        aria-current={isCurrentRoute ? "page" : undefined}
                        className={cn(
                          "h-10 px-3 rounded-[12px] flex items-center gap-3 text-[15px] font-medium transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]",
                          isActive
                            ? "bg-[var(--hover)] text-foreground shadow-[inset_0_0_0_1px_var(--line-strong),inset_0_1px_0_var(--highlight),0_1px_2px_rgba(17,17,19,0.06)]"
                            : "text-[var(--ink-2)] hover:text-foreground hover:bg-[var(--hover)]"
                        )}
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          className={cn(
                            "shrink-0",
                            isActive ? "text-foreground" : "text-[var(--faint)]"
                          )}
                        />
                        <span className="truncate">{item.label}</span>
                        {"count" in item && item.count && (
                          <span className="ml-auto text-xs font-medium tabular-nums text-[var(--subtle)]">
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
                    className="h-10 px-3 rounded-[12px] flex items-center gap-3 text-[15px] font-medium text-[var(--ink-2)] hover:text-foreground hover:bg-[var(--hover)] transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]"
                  >
                    <FileText size={16} strokeWidth={1.5} className="shrink-0 text-[var(--faint)]" />
                    <span className="truncate">Resume PDF</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} className="ml-auto text-[var(--faint)]" />
                  </a>
                </div>

                {/* Building / Shipping Soon Group */}
                <div className="flex flex-col gap-0.5">
                  <div className="px-2.5 pb-1 text-xs font-medium text-[var(--subtle)] tracking-[0.01em]">
                    Building
                  </div>
                  {shippingSoonProjects.map((app) => (
                    <Link
                      key={app.id}
                      href={app.href}
                      onClick={closeDrawer}
                      className="h-10 px-3 rounded-[12px] flex items-center gap-3 text-[14px] font-medium text-[var(--ink-2)] hover:text-foreground hover:bg-[var(--hover)] transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]"
                    >
                      <Rocket size={16} strokeWidth={1.5} className="shrink-0 text-[var(--faint)]" />
                      <span className="truncate">{app.title}</span>
                      <span className="soon ml-auto">Soon</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Bottom Visitor Stamp + Rail Footer */}
            <div className="flex flex-col mt-auto pt-2">
              <div className="-mx-1.5 border-t border-border pt-1">
                <IWasHereButton />
              </div>

              <div className="-mx-3.5 -mb-3.5 mt-1 px-4 py-3 border-t border-border flex items-center justify-between gap-2">
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-medium text-[var(--ink-2)] truncate">
                    Davao City, PH
                  </span>
                  <DavaoClock />
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {githubLink && (
                    <a
                      href={githubLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="relative size-8 rounded-[10px] border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] after:absolute after:-inset-1.5 after:content-['']"
                    >
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                  )}
                  {linkedinLink && (
                    <a
                      href={linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="relative size-8 rounded-[10px] border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] after:absolute after:-inset-1.5 after:content-['']"
                    >
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                  )}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
