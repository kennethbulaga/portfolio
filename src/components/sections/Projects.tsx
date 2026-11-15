"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Cpu,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  flagshipProjects,
  clientProjects,
  heroLedger,
  shippingSoonProjects,
  FlagshipProject,
  ClientProject,
} from "@/data/portfolio";

interface ProjectsProps {
  previewMode?: boolean;
}

interface ZoomState {
  projectTitle: string;
  images: { label: string; image: string; primitive?: string }[];
  currentIndex: number;
}

function ContactSheetProject({
  project,
  indexNumber,
  onZoom,
}: {
  project: FlagshipProject;
  indexNumber: string;
  onZoom: (initialIndex: number) => void;
}) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const screenshots =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : project.image
      ? [{ label: project.title, image: project.image }]
      : [];

  const activeScreen = screenshots[activeScreenshotIdx];
  const activeImage = activeScreen?.image || project.image;

  return (
    <article className="@container rounded-[20px] sm:rounded-[22px] border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-foreground/25">
      {/* Contact-Sheet Frame Header Bar */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-border bg-muted/20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {project.logo && (
            <div className="relative size-9 rounded-[8px] overflow-hidden bg-background shrink-0 border border-border p-0.5 image-outline">
              <Image
                src={project.logo}
                alt={project.title}
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold tracking-[-0.015em] text-foreground text-balance leading-snug">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-muted-foreground text-pretty leading-snug">
              {project.focus}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 shrink-0 ml-auto">
          {project.link && project.link !== "#" ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="btn btn-light h-9 px-3.5 text-xs font-mono relative after:absolute after:-inset-1 after:content-['']"
            >
              <span>Live App</span>
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          ) : (
            <span className="nav-pill font-mono">Gov Production</span>
          )}
        </div>
      </div>

      {/* Main Split Contact-Sheet Body — Holds 12-col split until container drops below 672px */}
      <div className="grid grid-cols-1 @2xl:grid-cols-12">
        {/* Left Stage: Screenshot Proof + Primitive Cutaway Callout + Frame Selector */}
        {activeImage && (
          <div className="@2xl:col-span-7 flex flex-col justify-between bg-muted/15 p-2 sm:p-5 border-b @2xl:border-b-0 @2xl:border-r border-border gap-3">
            <div className="flex flex-col gap-2.5">
              {/* Clickable & Touch-Swipeable Image Preview Container */}
              <div
                onClick={() => onZoom(activeScreenshotIdx)}
                onTouchStart={(e) => {
                  const t = e.touches[0];
                  swipeStartRef.current = { x: t.clientX, y: t.clientY };
                }}
                onTouchEnd={(e) => {
                  if (!swipeStartRef.current || screenshots.length <= 1) return;
                  const t = e.changedTouches[0];
                  const dx = t.clientX - swipeStartRef.current.x;
                  const dy = t.clientY - swipeStartRef.current.y;
                  swipeStartRef.current = null;
                  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                    e.stopPropagation();
                    setActiveScreenshotIdx((prev) =>
                      dx < 0
                        ? (prev + 1) % screenshots.length
                        : (prev - 1 + screenshots.length) % screenshots.length
                    );
                  }
                }}
                className="relative aspect-[16/10] rounded-[12px] sm:rounded-[10px] overflow-hidden bg-background border border-border group cursor-zoom-in image-outline touch-pan-y"
                title="Click to inspect full resolution"
              >
                {screenshots.map((screen, idx) => (
                  <div
                    key={screen.image}
                    className={`absolute inset-0 transition-opacity duration-200 ${
                      activeScreenshotIdx === idx
                        ? "opacity-100 z-1"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={screen.image}
                      alt={`${project.title} — ${screen.label}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 560px"
                      priority={project.id === "jp-connect" && idx === 0}
                      className="object-cover transition-transform duration-200 ease-[var(--ease-out)] group-hover:scale-[1.02]"
                    />
                  </div>
                ))}

                {/* Prev / Next Arrow Overlay for Multiple Screenshots */}
                {screenshots.length > 1 && (
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 ease-[var(--ease-out)]">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx((prev) =>
                          prev > 0 ? prev - 1 : screenshots.length - 1
                        );
                      }}
                      className="pointer-events-auto min-h-11 min-w-11 size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={16} strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx((prev) =>
                          prev < screenshots.length - 1 ? prev + 1 : 0
                        );
                      }}
                      className="pointer-events-auto min-h-11 min-w-11 size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                )}

                {/* Frame Counter Pill */}
                {screenshots.length > 1 && (
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-zinc-950/80 px-2 py-0.5 rounded-full border border-white/15 text-[10px] font-mono tabular-nums text-white/95">
                    <span>
                      {String(activeScreenshotIdx + 1).padStart(2, "0")}/
                      {String(screenshots.length).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Hover Zoom Indicator */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                  <div className="px-3 py-1.5 rounded-full bg-zinc-950/90 text-white text-xs font-mono flex items-center gap-1.5 border border-white/20">
                    <ZoomIn size={13} className="text-white" />
                    <span>Inspect Frame</span>
                  </div>
                </div>
              </div>

              {/* Primitive Cutaway Callout Bar */}
              {activeScreen?.primitive && (
                <div className="min-h-[52px] sm:min-h-0 px-3 py-2 rounded-[8px] border border-border bg-background flex items-start gap-2">
                  <Terminal size={14} strokeWidth={1.5} className="text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold tabular-nums">
                      [{String(activeScreenshotIdx + 1).padStart(2, "0")}]{" "}
                      {activeScreen.label}:
                    </span>{" "}
                    {activeScreen.primitive}
                  </p>
                </div>
              )}
            </div>

            {/* Numbered Contact-Sheet Frame Switcher */}
            {screenshots.length > 1 && (
              <div className="flex overflow-x-auto no-scrollbar gap-2 pt-0.5 sm:grid sm:grid-cols-2 @lg:grid-cols-3 sm:gap-1.5">
                {screenshots.map((screen, idx) => {
                  const active = activeScreenshotIdx === idx;
                  return (
                    <button
                      type="button"
                      key={screen.label}
                      title={screen.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx(idx);
                      }}
                      className={`min-h-11 sm:min-h-0 px-3 sm:px-2.5 py-2 sm:py-1.5 rounded-[8px] text-[11px] font-mono transition-[background-color,color,border-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] flex items-center gap-1.5 text-left border shrink-0 whitespace-nowrap sm:whitespace-normal ${
                        active
                          ? "bg-foreground text-background border-foreground font-semibold"
                          : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      <span className="tabular-nums opacity-65 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-tight">{screen.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Right Column: Engineering Specification & Hairline Ledger */}
        <div className="@2xl:col-span-5 p-4 sm:p-5 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.description}
            </p>

            {/* Hairline Key-Value Metrics Ledger */}
            {project.metrics && (
              <dl className="divide-y divide-border border-y border-border">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div
                    key={key}
                    className="py-2 flex items-baseline justify-between gap-3"
                  >
                    <dt className="text-xs font-mono text-muted-foreground">
                      {key}
                    </dt>
                    <dd className="text-xs sm:text-sm font-mono font-semibold tabular-nums text-foreground text-right">
                      {val}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ClientContactSheetCard({
  project,
  indexNumber,
  onZoom,
}: {
  project: ClientProject;
  indexNumber: string;
  onZoom: (initialIndex: number) => void;
}) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);

  const screenshots =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : project.image
      ? [{ label: project.title, image: project.image }]
      : [];

  const activeScreen = screenshots[activeScreenshotIdx];
  const activeImage = activeScreen?.image || project.image;

  return (
    <article className="@container rounded-[20px] sm:rounded-[22px] border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-foreground/25 w-full">
      {/* Header Bar */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-border bg-muted/20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {project.logo && (
            <div className="relative size-9 rounded-[8px] overflow-hidden bg-background shrink-0 border border-border p-0.5 image-outline">
              <Image
                src={project.logo}
                alt={project.title}
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
          )}
          <div className="min-w-0">
            <h4 className="text-base font-semibold tracking-[-0.015em] text-foreground text-balance leading-snug">
              {project.title}
            </h4>
            <p className="text-xs font-mono text-muted-foreground text-pretty leading-snug">
              {project.client}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 shrink-0">
          <span className="nav-pill font-mono">Gov Production</span>
        </div>
      </div>

      <div className="grid grid-cols-1 @2xl:grid-cols-12">
        {/* Left Screenshot Stage */}
        {activeImage && (
          <div className="@2xl:col-span-7 p-2 sm:p-5 border-b @2xl:border-b-0 @2xl:border-r border-border bg-muted/15 flex flex-col gap-3">
            <div
              onClick={() => onZoom(activeScreenshotIdx)}
              onTouchStart={(e) => {
                const t = e.touches[0];
                swipeStartRef.current = { x: t.clientX, y: t.clientY };
              }}
              onTouchEnd={(e) => {
                if (!swipeStartRef.current || screenshots.length <= 1) return;
                const t = e.changedTouches[0];
                const dx = t.clientX - swipeStartRef.current.x;
                const dy = t.clientY - swipeStartRef.current.y;
                swipeStartRef.current = null;
                if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                  e.stopPropagation();
                  setActiveScreenshotIdx((prev) =>
                    dx < 0
                      ? (prev + 1) % screenshots.length
                      : (prev - 1 + screenshots.length) % screenshots.length
                  );
                }
              }}
              className="relative w-full aspect-[16/10] rounded-[12px] sm:rounded-[10px] overflow-hidden border border-border bg-background cursor-zoom-in group/img image-outline touch-pan-y"
              title="Click to inspect full resolution"
            >
              {screenshots.map((screen, idx) => (
                <div
                  key={screen.image}
                  className={`absolute inset-0 transition-opacity duration-200 ${
                    activeScreenshotIdx === idx
                      ? "opacity-100 z-1"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={screen.image}
                    alt={`${project.title} — ${screen.label}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 520px"
                    className="object-cover transition-transform duration-200 ease-[var(--ease-out)] group-hover/img:scale-[1.02]"
                  />
                </div>
              ))}

              {screenshots.length > 1 && (
                <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-zinc-950/80 px-2 py-0.5 rounded-full border border-white/15 text-[10px] font-mono tabular-nums text-white/95">
                  <span>
                    {String(activeScreenshotIdx + 1).padStart(2, "0")}/
                    {String(screenshots.length).padStart(2, "0")}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                <div className="bg-zinc-950/90 text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                  <ZoomIn size={13} />
                  <span>Inspect Frame</span>
                </div>
              </div>
            </div>

            {activeScreen?.primitive && (
              <div className="min-h-[52px] sm:min-h-0 px-3 py-2 rounded-[8px] border border-border bg-background flex items-start gap-2">
                <Terminal size={14} strokeWidth={1.5} className="text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold tabular-nums">
                    [{String(activeScreenshotIdx + 1).padStart(2, "0")}]{" "}
                    {activeScreen.label}:
                  </span>{" "}
                  {activeScreen.primitive}
                </p>
              </div>
            )}

            {screenshots.length > 1 && (
              <div className="flex overflow-x-auto no-scrollbar gap-2 pt-0.5 sm:grid sm:grid-cols-2 sm:gap-1.5">
                {screenshots.map((screen, idx) => {
                  const active = activeScreenshotIdx === idx;
                  return (
                    <button
                      type="button"
                      key={screen.label}
                      title={screen.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx(idx);
                      }}
                      className={`min-h-11 sm:min-h-0 px-3 sm:px-2.5 py-2 sm:py-1.5 rounded-[8px] text-[11px] font-mono transition-[background-color,color,border-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] flex items-center gap-1.5 text-left border shrink-0 whitespace-nowrap sm:whitespace-normal ${
                        active
                          ? "bg-foreground text-background border-foreground font-semibold"
                          : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      <span className="tabular-nums opacity-65 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-tight">{screen.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Right Specification Column */}
        <div className="@2xl:col-span-5 p-4 sm:p-5 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.objective}
            </p>

            {project.impact && (
              <div className="p-3 rounded-[10px] bg-muted/35 border border-border text-xs text-foreground leading-relaxed flex items-start gap-2">
                <Cpu size={14} strokeWidth={1.5} className="text-muted-foreground shrink-0 mt-0.5" />
                <span>{project.impact}</span>
              </div>
            )}
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects({ previewMode = false }: ProjectsProps) {
  const [zoomState, setZoomState] = useState<ZoomState | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const visibleFlagships = previewMode
    ? flagshipProjects.slice(0, 2)
    : flagshipProjects;

  const handleOpenZoom = (
    project: FlagshipProject | ClientProject,
    initialIdx: number = 0
  ) => {
    const images =
      "screenshots" in project &&
      project.screenshots &&
      project.screenshots.length > 0
        ? project.screenshots
        : project.image
        ? [{ label: project.title, image: project.image }]
        : [];

    if (images.length > 0) {
      setZoomState({
        projectTitle: project.title,
        images,
        currentIndex: initialIdx,
      });
    }
  };

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomState((prev) => {
      if (!prev || prev.images.length <= 1) return prev;
      return {
        ...prev,
        currentIndex:
          (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
      };
    });
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomState((prev) => {
      if (!prev || prev.images.length <= 1) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      };
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomState(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (zoomState) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [zoomState, handlePrev, handleNext]);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Section Header Row */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-foreground text-balance">
              {previewMode ? "Featured Production Systems" : "Production Systems & Proof Sheet"}
            </h2>
            <span className="text-xs font-mono tabular-nums text-muted-foreground">
              {previewMode ? "02 OF 04 SYSTEMS" : "04 DEPLOYED PLATFORMS"}
            </span>
          </div>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
            Live multi-role software serving college departments, regional government units, and campus-wide tournaments. Switch numbered frames to inspect screenshots and underlying primitives.
          </p>
        </div>

        {/* High-Contrast Tabular Production Scale Ledger — Holds 4 cols down to 576px container width */}
        <div className="@container rounded-[14px] border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-2 @xl:grid-cols-4">
            {heroLedger.map((item, idx) => (
              <div
                key={item.label}
                className={`p-3 sm:p-5 flex flex-col gap-1 border-border ${
                  idx % 2 === 1 ? "border-l" : ""
                } ${idx >= 2 ? "border-t @xl:border-t-0 @xl:border-l" : ""}`}
              >
                <p className="text-xl sm:text-2xl font-semibold font-mono tabular-nums tracking-[-0.03em] text-foreground leading-none">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-foreground pt-1">
                  {item.label}
                </p>
                <p className="text-[11px] font-mono text-muted-foreground">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Contact-Sheet Frames */}
        <div className="flex flex-col gap-6">
          {visibleFlagships.map((project, idx) => (
            <ContactSheetProject
              key={project.id}
              project={project}
              indexNumber={String(idx + 1).padStart(2, "0")}
              onZoom={(screenIdx) => handleOpenZoom(project, screenIdx)}
            />
          ))}
        </div>

        {previewMode ? (
          <div className="rounded-[14px] border border-border bg-card px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-semibold text-foreground">
                More Deployed Systems & Active Lab Builds
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                Includes JP Intrams (23 sports divisions), OWWA SPRS Platform, and DavaoSpots (Shipping Soon)
              </p>
            </div>
            <Link
              href="/systems"
              className="btn btn-light h-10 px-4 text-xs font-mono shrink-0"
            >
              <span>Inspect All Systems (04 + Lab)</span>
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {clientProjects.map((project, idx) => (
                <ClientContactSheetCard
                  key={project.id}
                  project={project}
                  indexNumber={String(
                    flagshipProjects.length + idx + 1
                  ).padStart(2, "0")}
                  onZoom={(screenIdx) => handleOpenZoom(project, screenIdx)}
                />
              ))}
            </div>

            {/* Building in Public / Shipping Soon Section */}
            {shippingSoonProjects && shippingSoonProjects.length > 0 && (
              <div id="shipping-soon" className="pt-4 flex flex-col gap-4 scroll-mt-24">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-medium tracking-[-0.02em] text-foreground text-balance">
                    Building in Public · Lab
                  </h3>
                  <span className="text-xs font-mono tabular-nums text-muted-foreground">
                    ACTIVE DEVELOPMENT
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {shippingSoonProjects.map((item, idx) => (
                    <article
                      key={item.id}
                      className="rounded-[22px] border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-foreground/25"
                    >
                      <div className="px-4 sm:px-5 py-3.5 border-b border-border bg-muted/20 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="size-9 rounded-[8px] bg-background border border-border flex items-center justify-center shrink-0">
                            <Rocket size={16} strokeWidth={1.5} className="text-muted-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-base font-semibold tracking-[-0.015em] text-foreground text-balance leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs font-mono text-muted-foreground text-pretty leading-snug">
                              {item.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto shrink-0">
                          <span className="text-[11px] font-mono tabular-nums text-muted-foreground px-2 py-0.5 rounded-[6px] border border-border bg-background">
                            LAB {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="soon font-mono">{item.eta}</span>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 flex flex-col gap-4">
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty max-w-3xl">
                          {item.description}
                        </p>

                        <div className="flex flex-col gap-2">
                          {item.plannedPrimitives.map((prim, pIdx) => (
                            <div
                              key={pIdx}
                              className="px-3 py-2 rounded-[8px] border border-border bg-muted/15 flex items-start gap-2"
                            >
                              <Terminal
                                size={14}
                                strokeWidth={1.5}
                                className="text-muted-foreground mt-0.5 shrink-0"
                              />
                              <p className="text-xs font-mono text-foreground/90 leading-relaxed">
                                {prim}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Full-Resolution Lightbox Modal */}
      <AnimatePresence>
        {zoomState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { type: "spring", duration: 0.3, bounce: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 pt-[max(12px,env(safe-area-inset-top))] pb-[max(12px,env(safe-area-inset-bottom))] bg-black/92 backdrop-blur-md select-none overscroll-contain"
            onClick={() => setZoomState(null)}
          >
            {/* Top Floating Control Bar */}
            <div
              className="w-full max-w-5xl flex items-center justify-between px-4 py-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-white z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 min-w-0 flex-wrap">
                <span className="text-xs sm:text-sm font-semibold font-mono text-zinc-200">
                  {zoomState.projectTitle}
                </span>
                <span className="text-zinc-500 font-mono text-xs">/</span>
                <span className="text-xs sm:text-sm text-zinc-400">
                  {zoomState.images[zoomState.currentIndex]?.label}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-3">
                {zoomState.images.length > 1 && (
                  <span className="text-xs font-mono tabular-nums text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-700">
                    {String(zoomState.currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(zoomState.images.length).padStart(2, "0")}
                  </span>
                )}
                <button
                  onClick={() => setZoomState(null)}
                  className="min-h-11 min-w-11 size-11 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Close image preview"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Central Stage */}
            <div
              className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {zoomState.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-30 min-h-[44px] min-w-[44px] size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white border border-white/20 transition-transform active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              <div className="relative w-full h-full max-h-[76vh] flex items-center justify-center">
                <motion.div
                  key={zoomState.currentIndex}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="relative w-full h-full max-h-[76vh] flex items-center justify-center"
                >
                  <Image
                    src={zoomState.images[zoomState.currentIndex].image}
                    alt={zoomState.images[zoomState.currentIndex].label}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain rounded-[10px]"
                    priority
                  />
                </motion.div>
              </div>

              {zoomState.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-30 min-h-[44px] min-w-[44px] size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white border border-white/20 transition-transform active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              )}
            </div>

            {/* Bottom Primitive Note & Indicator Dots */}
            <div
              className="w-full max-w-3xl flex flex-col items-center gap-2 z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {zoomState.images[zoomState.currentIndex]?.primitive && (
                <p className="text-xs font-mono text-zinc-300 text-center px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800">
                  {zoomState.images[zoomState.currentIndex].primitive}
                </p>
              )}
              {zoomState.images.length > 1 && (
                <div className="flex items-center gap-4 py-1">
                  {zoomState.images.map((img, idx) => (
                    <button
                      key={img.label}
                      onClick={() =>
                        setZoomState((prev) =>
                          prev ? { ...prev, currentIndex: idx } : null
                        )
                      }
                      className={`relative h-2 transition-[width,background-color] duration-200 ease-[var(--ease-out)] rounded-full after:absolute after:-inset-3 after:content-[''] ${
                        zoomState.currentIndex === idx
                          ? "w-7 bg-white"
                          : "w-2 bg-zinc-600 hover:bg-zinc-400"
                      }`}
                      aria-label={`Jump to ${img.label}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
