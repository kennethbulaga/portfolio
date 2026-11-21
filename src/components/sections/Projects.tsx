"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Rocket,
} from "lucide-react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { useDialogFocusTrap } from "@/hooks/use-dialog-focus-trap";
import {
  flagshipProjects,
  shippingSoonProjects,
  FlagshipProject,
  ClientProject,
} from "@/data/portfolio";

interface ProjectsProps {
  previewMode?: boolean;
  projectId?: string;
}

function ProjectIndexRow({ project }: { project: FlagshipProject }) {
  return (
    <Link
      href={`/systems/${project.id}`}
      className="py-3.5 px-2.5 -mx-2.5 rounded-[12px] hover:bg-[var(--hover)] active:scale-[0.99] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] flex items-center justify-between gap-4 group"
    >
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        {project.image && (
          <div className="relative w-16 h-11 sm:w-[76px] sm:h-12 rounded-[8px] overflow-hidden bg-muted border border-border shrink-0 image-outline">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="76px"
              className="object-cover"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug text-pretty">
            {project.title}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-snug text-pretty line-clamp-2 sm:line-clamp-1 mt-0.5">
            {project.summary || project.focus}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 shrink-0">
        {project.clientTag && (
          <span className="hidden sm:inline text-xs font-mono text-muted-foreground">
            {project.clientTag}
          </span>
        )}
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-[var(--ease-out)]"
        />
      </div>
    </Link>
  );
}

function UpcomingIndexRow({ item }: { item: (typeof shippingSoonProjects)[number] }) {
  return (
    <Link
      href={item.href}
      className="py-3.5 px-2.5 -mx-2.5 rounded-[12px] hover:bg-[var(--hover)] active:scale-[0.99] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] flex items-center justify-between gap-4 group"
    >
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        <div className="w-16 h-11 sm:w-[76px] sm:h-12 rounded-[8px] bg-muted/60 border border-border shrink-0 flex items-center justify-center">
          <Rocket size={16} strokeWidth={1.5} className="text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug">
              {item.title}
            </p>
            <span className="soon font-mono">Soon</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-snug text-pretty line-clamp-1 mt-0.5">
            {item.tagline}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={15}
        strokeWidth={1.5}
        className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-[var(--ease-out)] shrink-0"
      />
    </Link>
  );
}

interface ZoomState {
  projectTitle: string;
  images: { label: string; image: string; primitive?: string }[];
  currentIndex: number;
}

function ContactSheetProject({
  project,
  onZoom,
}: {
  project: FlagshipProject;
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
    <article
      id={project.id}
      className="@container scroll-mt-24 rounded-[20px] sm:rounded-[22px] border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-foreground/25"
    >
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
          <div className="@2xl:col-span-7 flex flex-col justify-between bg-muted/15 p-2 sm:p-3 border-b @2xl:border-b-0 @2xl:border-r border-border gap-3">
            <div className="flex flex-col gap-2.5">
              {/* Clickable & Touch-Swipeable Image Preview Container */}
              <button
                type="button"
                onClick={() => onZoom(activeScreenshotIdx)}
                aria-label={`Inspect ${project.title} screenshot gallery`}
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
                className="relative w-full text-left aspect-[16/10] rounded-[12px] sm:rounded-[10px] overflow-hidden bg-background border border-border group cursor-zoom-in image-outline touch-pan-y"
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
                      className="object-cover transition-transform duration-200 ease-[var(--ease-out)] group-hover:scale-[1.02]"
                    />
                  </div>
                ))}

                {/* Hover Zoom Indicator */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                  <div className="px-3 py-1.5 rounded-full bg-zinc-950/90 text-white text-xs font-mono flex items-center gap-1.5 border border-white/20">
                    <ZoomIn size={13} className="text-white" />
                    <span>Inspect Frame</span>
                  </div>
                </div>
              </button>

              {/* Primitive Cutaway Editorial Caption */}
              {activeScreen?.primitive && (
                <div className="border-l-2 border-foreground/25 pl-3 py-1 mb-0.5 flex items-start gap-2">
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
  onZoom,
}: {
  project: ClientProject;
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
    <article className="rounded-[18px] border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-foreground/25 flex flex-col justify-between w-full">
      <div className="flex flex-col">
        {/* Compact Header Bar */}
        <div className="px-4 py-3 border-b border-border bg-muted/20 flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            {project.logo && (
              <div className="relative size-8 rounded-[8px] overflow-hidden bg-background shrink-0 border border-border p-0.5 image-outline">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  sizes="32px"
                  className="object-contain p-0.5"
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold tracking-[-0.015em] text-foreground text-balance leading-snug truncate">
                {project.title}
              </h3>
              <p className="text-[11px] font-mono text-muted-foreground text-pretty leading-snug truncate">
                {project.client}
              </p>
            </div>
          </div>

          <span className="nav-pill font-mono shrink-0">Production</span>
        </div>

        {/* 16/10 Preview Frame */}
        {activeImage && (
          <div className="p-2 border-b border-border bg-muted/15 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => onZoom(activeScreenshotIdx)}
              aria-label={`Inspect ${project.title} screenshot gallery`}
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
              className="relative w-full text-left aspect-[16/10] rounded-[10px] overflow-hidden border border-border bg-background cursor-zoom-in group/img image-outline touch-pan-y"
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
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover transition-transform duration-200 ease-[var(--ease-out)] group-hover/img:scale-[1.02]"
                  />
                </div>
              ))}

              {screenshots.length > 1 && (
                <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-zinc-950/80 px-2 py-0.5 rounded-full border border-white/15 text-[10px] font-mono tabular-nums text-white/95">
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
            </button>

            {screenshots.length > 1 && (
              <div className="flex overflow-x-auto no-scrollbar gap-1.5">
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
                      className={`min-h-11 sm:min-h-8 px-2.5 py-1 rounded-[8px] text-[11px] font-mono transition-[background-color,color,border-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] flex items-center gap-1.5 text-left border shrink-0 whitespace-nowrap ${
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
      </div>

      {/* Concise 2-Row Summary & Inline Stack */}
      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
        <div className="flex flex-col gap-2.5">
          <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
            {project.objective}
          </p>

          {project.impact && (
            <p className="border-l-2 border-foreground/20 pl-2.5 text-xs text-foreground leading-relaxed text-pretty">
              {project.impact}
            </p>
          )}
        </div>

        {project.techStack && project.techStack.length > 0 && (
          <p className="pt-2.5 border-t border-border text-[11px] font-mono text-muted-foreground">
            {project.techStack.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}

export function Projects({ previewMode = false, projectId }: ProjectsProps) {
  const [zoomState, setZoomState] = useState<ZoomState | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const selectedFlagship = projectId
    ? flagshipProjects.find((p) => p.id === projectId)
    : undefined;
  const selectedUpcoming = projectId
    ? shippingSoonProjects.find((p) => p.id === projectId)
    : undefined;

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

  const isZoomOpen = Boolean(zoomState);
  const closeZoom = useCallback(() => setZoomState(null), []);
  const handleArrowKeys = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [handlePrev, handleNext]
  );

  useDialogFocusTrap(isZoomOpen, modalRef, closeZoom, handleArrowKeys);

  if (previewMode) {
    return (
      <section id="projects" className="py-0">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              Systems
            </h2>
            <Link
              href="/systems"
              className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
            >
              <span className="tabular-nums">
                View all ({String(flagshipProjects.length).padStart(2, "0")})
              </span>
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="border-y border-border divide-y divide-border">
            {flagshipProjects.map((project) => (
              <ProjectIndexRow key={project.id} project={project} />
            ))}
            {shippingSoonProjects.map((item) => (
              <UpcomingIndexRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Dedicated Single-System Detail View (/systems/[slug])
  if (projectId) {
    return (
      <section id="projects" className="py-0">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="lg:pt-1">
            <Link
              href="/systems"
              className="relative inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-y-3 after:-inset-x-3 after:content-['']"
            >
              <ArrowLeft size={14} />
              <span>All Systems</span>
            </Link>
          </div>

          {selectedFlagship && (
            <>
              <ContactSheetProject
                project={selectedFlagship}
                onZoom={(screenIdx) => handleOpenZoom(selectedFlagship, screenIdx)}
              />

              {selectedFlagship.highlights && selectedFlagship.highlights.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h2 className="text-sm font-medium text-muted-foreground">
                    Key Outcomes & Details
                  </h2>
                  <div className="border-y border-border divide-y divide-border">
                    {selectedFlagship.highlights.map((hl, idx) => (
                      <p
                        key={idx}
                        className="py-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty max-w-[72ch]"
                      >
                        {hl}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {selectedUpcoming && (
            <article className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-foreground text-balance">
                    {selectedUpcoming.title}
                  </h1>
                  <span className="soon font-mono">{selectedUpcoming.eta}</span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                  {selectedUpcoming.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty max-w-[68ch]">
                {selectedUpcoming.description}
              </p>

              <div className="flex flex-col gap-2">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Planned Features
                </h2>
                <div className="border-y border-border divide-y divide-border">
                  {selectedUpcoming.plannedPrimitives.map((prim, idx) => (
                    <div key={idx} className="py-3 flex items-start gap-2.5">
                      <Terminal
                        size={14}
                        strokeWidth={1.5}
                        className="text-muted-foreground mt-1 shrink-0"
                      />
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                        {prim}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {selectedUpcoming.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          )}
        </div>

        {/* Full-Resolution Lightbox Modal */}
        <AnimatePresence>
          {zoomState && (
            <m.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="projects-lightbox-title"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0.15 } : { type: "spring", duration: 0.3, bounce: 0 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 pt-[max(12px,env(safe-area-inset-top))] pb-[max(12px,env(safe-area-inset-bottom))] bg-black/92 backdrop-blur-md select-none overscroll-contain"
              onClick={closeZoom}
            >
              <div
                className="w-full max-w-5xl flex items-center justify-between px-1 py-1 text-white z-20 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2 min-w-0 flex-wrap">
                  <span
                    id="projects-lightbox-title"
                    className="text-xs sm:text-sm font-semibold font-mono text-zinc-100"
                  >
                    {zoomState.projectTitle}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">/</span>
                  <span className="text-xs sm:text-sm text-zinc-400">
                    {zoomState.images[zoomState.currentIndex]?.label}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-3">
                  {zoomState.images.length > 1 && (
                    <span className="text-xs font-mono tabular-nums text-zinc-400">
                      {String(zoomState.currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(zoomState.images.length).padStart(2, "0")}
                    </span>
                  )}
                  <button
                    onClick={() => setZoomState(null)}
                    className="min-h-11 min-w-11 size-11 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/15 transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                    aria-label="Close image preview"
                  >
                    <X size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

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
                  <m.div
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
                    />
                  </m.div>
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

              <div
                className="w-full max-w-3xl flex flex-col items-center gap-2 z-20 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                {zoomState.images[zoomState.currentIndex]?.primitive && (
                  <p className="text-xs font-mono text-zinc-400 text-center text-pretty px-2">
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
                        className={`relative h-2 transition-[width,background-color] duration-200 ease-[var(--ease-out)] rounded-full after:absolute after:-inset-4 after:content-[''] ${
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
            </m.div>
          )}
        </AnimatePresence>
      </section>
    );
  }

  // Systems Index Page (/systems)
  return (
    <section id="projects" className="py-0">
      <div className="flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-foreground text-balance">
            Systems
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
            Working web software built for real operations, from school scheduling and clearance to government reporting and live events.
          </p>
        </div>

        {/* Deployed Systems List */}
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              Deployed Systems
            </h2>
            <span className="text-xs font-mono tabular-nums text-muted-foreground">
              {String(flagshipProjects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="border-y border-border divide-y divide-border">
            {flagshipProjects.map((project) => (
              <ProjectIndexRow key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Upcoming Builds */}
        {shippingSoonProjects.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-medium text-muted-foreground">
                Upcoming
              </h2>
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {String(shippingSoonProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="border-y border-border divide-y divide-border">
              {shippingSoonProjects.map((item) => (
                <UpcomingIndexRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full-Resolution Lightbox Modal */}
      <AnimatePresence>
        {zoomState && (
          <m.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-lightbox-title"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { type: "spring", duration: 0.3, bounce: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 pt-[max(12px,env(safe-area-inset-top))] pb-[max(12px,env(safe-area-inset-bottom))] bg-black/92 backdrop-blur-md select-none overscroll-contain"
            onClick={closeZoom}
          >
            {/* Top Control Bar */}
            <div
              className="w-full max-w-5xl flex items-center justify-between px-1 py-1 text-white z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 min-w-0 flex-wrap">
                <span
                  id="projects-lightbox-title"
                  className="text-xs sm:text-sm font-semibold font-mono text-zinc-100"
                >
                  {zoomState.projectTitle}
                </span>
                <span className="text-zinc-500 font-mono text-xs">/</span>
                <span className="text-xs sm:text-sm text-zinc-400">
                  {zoomState.images[zoomState.currentIndex]?.label}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-3">
                {zoomState.images.length > 1 && (
                  <span className="text-xs font-mono tabular-nums text-zinc-400">
                    {String(zoomState.currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(zoomState.images.length).padStart(2, "0")}
                  </span>
                )}
                <button
                  onClick={() => setZoomState(null)}
                  className="min-h-11 min-w-11 size-11 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/15 transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
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
                <m.div
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
                  />
                </m.div>
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
                <p className="text-xs font-mono text-zinc-400 text-center text-pretty px-2">
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
                      className={`relative h-2 transition-[width,background-color] duration-200 ease-[var(--ease-out)] rounded-full after:absolute after:-inset-4 after:content-[''] ${
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
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
