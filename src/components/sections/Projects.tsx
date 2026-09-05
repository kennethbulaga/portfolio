"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers, ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { flagshipProjects, clientProjects, FlagshipProject } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/motion";

interface ProjectsProps {
  onOpenCaseStudy: (studyId?: string) => void;
}

interface ZoomState {
  projectTitle: string;
  images: { label: string; image: string }[];
  currentIndex: number;
}

function FlagshipCard({
  project,
  onOpenCaseStudy,
  onZoom,
}: {
  project: FlagshipProject;
  onOpenCaseStudy: (studyId: string) => void;
  onZoom: (initialIndex: number) => void;
}) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const activeImage =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots[activeScreenshotIdx]?.image || project.image
      : project.image;

  const currentLabel =
    project.screenshots && project.screenshots.length > 0
      ? `${project.title} — ${project.screenshots[activeScreenshotIdx]?.label}`
      : project.title;

  return (
    <SpotlightCard className="overflow-hidden rounded-2xl border border-border/80 bg-card hover:border-primary/40 transition-[border-color,box-shadow] duration-200 shadow-sm hover:shadow-xl">
      {/* Mobile Header: Logo, Title & Live Link First (Mobile Only) */}
      <div className="md:hidden p-4 pb-3 border-b border-border/70 flex items-start justify-between gap-3 bg-muted/15">
        <div className="flex items-center gap-3">
          {project.logo && (
            <div className="relative size-9 rounded-lg overflow-hidden bg-background shrink-0 border border-border/70 p-0.5 image-outline">
              <Image
                src={project.logo}
                alt={project.title}
                fill
                sizes="40px"
                className="object-contain p-0.5"
              />
            </div>
          )}
          <div>
            <CardTitle className="text-base font-bold text-foreground text-balance">
              {project.title}
            </CardTitle>
            <p className="text-xs text-primary font-medium">
              {project.focus}
            </p>
          </div>
        </div>

        {project.link && project.link !== "#" ? (
          <Button asChild size="sm" variant="ghost" className="gap-1 shrink-0 text-xs h-8 px-2.5">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <span>Live App</span>
              <ArrowUpRight size={15} />
            </a>
          </Button>
        ) : (
          <Badge variant="success" className="text-[10px] px-2 py-0.5 shrink-0">
            Gov Production
          </Badge>
        )}
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Visual Showcase & 2x2 Tabs */}
        {activeImage && (
          <div className="md:w-[48%] lg:w-[46%] shrink-0 flex flex-col bg-muted/25 p-3.5 sm:p-4 border-b md:border-b-0 md:border-r border-border/70 gap-3.5">
            <div className="flex flex-col gap-2.5">
              {/* Clickable Image Preview Container with Preloaded Instant Switcher */}
              <div
                onClick={() => onZoom(activeScreenshotIdx)}
                className="relative aspect-[16/10] rounded-xl overflow-hidden bg-background border border-border/80 shadow-xs group cursor-zoom-in image-outline"
                title="Click to view full resolution"
              >
                {project.screenshots && project.screenshots.length > 0 ? (
                  project.screenshots.map((screen, idx) => (
                    <div
                      key={screen.image}
                      className={`absolute inset-0 transition-opacity duration-200 ${
                        activeScreenshotIdx === idx ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={screen.image}
                        alt={`${project.title} — ${screen.label}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))
                ) : (
                  <Image
                    src={activeImage}
                    alt={currentLabel}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    priority={project.id === "jp-connect"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
                
                {/* Clean Hover Zoom Indicator */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                  <div className="px-3 py-1.5 rounded-full bg-zinc-900/90 text-white text-xs font-medium backdrop-blur-md shadow-md flex items-center gap-1.5 border border-white/20">
                    <ZoomIn size={13} className="text-white" />
                    <span>Click to Zoom</span>
                  </div>
                </div>
              </div>

              {/* Multi-Screenshot 2x2 Switcher (Full Text, Zero Truncation) */}
              {project.screenshots && project.screenshots.length > 1 && (
                <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                  {project.screenshots.map((screen, idx) => (
                    <button
                      type="button"
                      key={screen.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx(idx);
                      }}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-center font-medium ${
                        activeScreenshotIdx === idx
                          ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                          : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Left Column Highlights (Desktop Only to keep Mobile Compact & Fast to Scroll) */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="hidden md:flex flex-col gap-1.5 pt-3 border-t border-border/60">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-primary shrink-0" />
                  <span>Key Architecture Highlights</span>
                </p>
                <ul className="flex flex-col gap-1.5">
                  {project.highlights.map((hl, i) => (
                    <li key={i} className="text-[11px] text-muted-foreground leading-snug flex items-start gap-1.5">
                      <span className="text-primary font-bold mt-0.5 shrink-0">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Right Column: Information, Full-Width Non-Truncated Metrics & Tech Stack */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3.5">
            {/* Desktop-Only Header */}
            <div className="hidden md:flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.logo && (
                  <div className="relative size-9 sm:size-10 rounded-lg overflow-hidden bg-background shrink-0 border border-border/70 p-0.5 image-outline">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      sizes="40px"
                      className="object-contain p-0.5"
                    />
                  </div>
                )}
                <div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground text-balance">
                    {project.title}
                  </CardTitle>
                  <p className="text-xs text-primary font-medium">
                    {project.focus}
                  </p>
                </div>
              </div>

              {project.link && project.link !== "#" ? (
                <Button asChild size="sm" variant="ghost" className="gap-1 shrink-0 text-xs h-8 px-2.5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <span>Live App</span>
                    <ArrowUpRight size={15} />
                  </a>
                </Button>
              ) : (
                <Badge variant="success" className="text-[10px] px-2 py-0.5 shrink-0">
                  Gov Production
                </Badge>
              )}
            </div>

            {/* Concise Description */}
            <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.description}
            </CardDescription>

            {/* 2x2 Metrics Grid (Spacious, Zero Truncation, Tabular Nums) */}
            {project.metrics && (
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-2.5 rounded-lg bg-muted/40 border border-border/60"
                  >
                    <p className="text-sm sm:text-base font-bold font-mono tabular-nums text-foreground leading-none mb-1">
                      {val}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono leading-tight">
                      {key}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row: Tech Stack & Case Study Action */}
          <div className="pt-3 flex flex-wrap items-center justify-between gap-2.5 border-t border-border/50">
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-[10px] font-mono px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.hasCaseStudy && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onOpenCaseStudy(project.id)}
                className="gap-1.5 text-xs text-primary hover:text-primary font-medium h-8"
              >
                <Layers size={13} />
                <span>Inspect Architecture</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const [zoomState, setZoomState] = useState<ZoomState | null>(null);

  const handleOpenZoom = (project: FlagshipProject, initialIdx: number = 0) => {
    const images =
      project.screenshots && project.screenshots.length > 0
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

  // Keyboard navigation for lightbox
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
    <motion.section
      id="projects"
      className="py-12 sm:py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="flex flex-col gap-2 mb-8 sm:mb-12" variants={fadeInUp}>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Featured Systems & Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
            Mission-critical institutional platforms, real-time community systems, and client solutions built with modern full-stack architectures.
          </p>
        </motion.div>

        {/* Flagship Projects: Horizontal Split-Card Layout */}
        <div className="mb-14">
          <motion.div
            className="grid gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {flagshipProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <FlagshipCard
                  project={project}
                  onOpenCaseStudy={onOpenCaseStudy}
                  onZoom={(idx) => handleOpenZoom(project, idx)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Client & Departmental Solutions */}
        <div>
          <div className="mb-5 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground text-balance">
                Client & Government Solutions
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-pretty">
                Custom systems and tooling built for government services, academic events, and private clients.
              </p>
            </div>
            <span className="sm:hidden text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
              <span>Swipe →</span>
            </span>
          </div>

          <motion.div
            className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 pb-2 sm:pb-0 no-scrollbar sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clientProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center flex"
              >
                <SpotlightCard className="rounded-2xl hover:border-primary/40 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md h-full w-full flex flex-col justify-between bg-card/60">
                  <div className="p-4 sm:p-5 pb-2">
                    <div className="flex items-start gap-3">
                      {project.logo && (
                        <div className="relative size-9 rounded-lg overflow-hidden bg-background shrink-0 border border-border/60 p-0.5 image-outline">
                          <Image
                            src={project.logo}
                            alt={project.title}
                            fill
                            sizes="36px"
                            className="object-contain p-0.5"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-0.5">
                        <CardTitle className="text-sm sm:text-base font-semibold text-foreground text-balance">
                          {project.title}
                        </CardTitle>
                        <p className="text-[11px] sm:text-xs text-primary font-medium">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0 flex flex-col gap-3">
                    <CardDescription className="text-xs leading-relaxed text-muted-foreground text-pretty">
                      {project.objective}
                    </CardDescription>

                    {/* Visual Key Impact Callout */}
                    {project.impact && (
                      <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/15 text-[11px] text-foreground leading-snug flex items-start gap-1.5">
                        <span className="text-primary font-bold shrink-0">⚡</span>
                        <span>{project.impact}</span>
                      </div>
                    )}

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-[10px] font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Immersive Frameless Image Zoom Lightbox Modal */}
      <AnimatePresence>
        {zoomState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 bg-black/92 backdrop-blur-md select-none"
            onClick={() => setZoomState(null)}
          >
            {/* Top Floating Control Bar */}
            <div
              className="w-full max-w-5xl flex items-center justify-between px-4 py-2.5 rounded-full bg-zinc-900/85 border border-zinc-800 text-white backdrop-blur-md shadow-lg z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs sm:text-sm font-semibold font-mono text-zinc-200 truncate">
                  {zoomState.projectTitle}
                </span>
                <span className="text-zinc-500 font-mono text-xs">/</span>
                <span className="text-xs sm:text-sm text-zinc-400 truncate">
                  {zoomState.images[zoomState.currentIndex]?.label}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-3">
                {zoomState.images.length > 1 && (
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-800/90 px-2.5 py-1 rounded-full border border-zinc-700/50">
                    {zoomState.currentIndex + 1} / {zoomState.images.length}
                  </span>
                )}
                <button
                  onClick={() => setZoomState(null)}
                  className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Close image preview"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Central Stage: Image & Left/Right Chevrons */}
            <div
              className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              {zoomState.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              {/* Seamless Full-Res Image (Zero White Letterboxing) */}
              <div className="relative w-full h-full max-h-[78vh] flex items-center justify-center">
                <motion.div
                  key={zoomState.currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full max-h-[78vh] flex items-center justify-center"
                >
                  <Image
                    src={zoomState.images[zoomState.currentIndex].image}
                    alt={zoomState.images[zoomState.currentIndex].label}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain rounded-xl shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Next Button */}
              {zoomState.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>

            {/* Bottom Indicator Dots */}
            {zoomState.images.length > 1 ? (
              <div
                className="flex items-center gap-2 py-1 z-20 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                {zoomState.images.map((img, idx) => (
                  <button
                    key={img.label}
                    onClick={() =>
                      setZoomState((prev) =>
                        prev ? { ...prev, currentIndex: idx } : null
                      )
                    }
                    className={`h-2 transition-all rounded-full ${
                      zoomState.currentIndex === idx
                        ? "w-7 bg-white shadow-sm"
                        : "w-2 bg-zinc-600 hover:bg-zinc-400"
                    }`}
                    aria-label={`Jump to ${img.label}`}
                  />
                ))}
              </div>
            ) : (
              <div className="h-4" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
