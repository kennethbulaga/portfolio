"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  Cloud,
  Code,
  Landmark,
  Trophy,
  ZoomIn,
  X,
  FileCheck,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  education,
  leadership,
  featuredCredentials,
  Credential,
} from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

const categoryIconMap: Record<string, React.ElementType> = {
  "Cloud & Industry": Cloud,
  "Public Sector": Landmark,
  "Government & Public Sector": Landmark,
  "Hackathons & Competitions": Code,
  "Institutional Honors": Trophy,
  "Student Leadership": Award,
};

function CredentialCard({
  item,
  onOpenCert,
}: {
  item: Credential;
  onOpenCert: (cert: Credential, slideIdx?: number) => void;
}) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const CategoryIcon = categoryIconMap[item.category] || BadgeCheck;

  const gallery =
    item.gallery && item.gallery.length > 0
      ? item.gallery
      : item.image
      ? [{ label: item.title, image: item.image }]
      : [];

  const activeImage = gallery[activePhotoIdx]?.image || item.image;

  return (
    <div className="w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center rounded-2xl border border-border/80 bg-card overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div className="flex flex-col">
        {/* Flush Certificate / Presentation Photo Preview */}
        {activeImage && (
          <div
            onClick={() => onOpenCert(item, activePhotoIdx)}
            className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/70 bg-muted/20 cursor-zoom-in group/img"
            title="Click to inspect full resolution"
          >
            {gallery.map((g, idx) => (
              <div
                key={g.image}
                className={`absolute inset-0 transition-opacity duration-200 ${
                  activePhotoIdx === idx ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={g.image}
                  alt={`${item.title} — ${g.label}`}
                  fill
                  sizes="(max-width: 768px) 85vw, 450px"
                  className="object-cover transition-transform duration-300 group-hover/img:scale-[1.03]"
                />
              </div>
            ))}

            {/* Prev / Next Arrow Overlay for Multiple Photos */}
            {gallery.length > 1 && (
              <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20 opacity-0 group-hover/img:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
                  }}
                  className="pointer-events-auto size-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-md transition-transform active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
                  }}
                  className="pointer-events-auto size-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-md transition-transform active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}

            {/* Multi-Photo Indicator Pill Overlay */}
            {gallery.length > 1 && (
              <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/15 text-[10px] font-mono text-white/90">
                <span>{activePhotoIdx + 1}/{gallery.length}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
              <div className="px-2.5 py-1 rounded-full bg-zinc-900/90 text-white text-[11px] font-medium backdrop-blur-md flex items-center gap-1 border border-white/20 shadow-md">
                <ZoomIn size={12} />
                <span>Click to Zoom</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
          {/* Badges: Category & Status */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted/60 flex items-center gap-1 border border-border/40">
              <CategoryIcon size={11} className="text-primary shrink-0" />
              <span>{item.category}</span>
            </span>

            {item.status === "Active Production" ? (
              <Badge variant="success" className="text-[10px] px-2 py-0.5 flex items-center gap-1 shrink-0">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Production</span>
              </Badge>
            ) : item.status === "Highest Honor" ? (
              <Badge variant="warning" className="text-[10px] px-2 py-0.5 flex items-center gap-1 shrink-0">
                <span className="size-1.5 rounded-full bg-amber-500" />
                <span>Highest Honor</span>
              </Badge>
            ) : (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                {item.status}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="font-bold text-foreground text-sm sm:text-base leading-snug text-balance">
            {item.title}
          </h4>

          {/* Date and Issuer */}
          <div className="flex flex-col gap-0.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-mono text-xs text-foreground/80">
              <Calendar size={12} className="text-primary shrink-0" />
              <span className="tabular-nums">{item.period}</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-snug text-pretty">
              {item.issuer}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
            {item.description}
          </p>

          {/* Technical Skills / Focus Tags */}
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1 mt-auto">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Clean Full-Width Interactive Footer Action */}
      <button
        type="button"
        onClick={() => onOpenCert(item, activePhotoIdx)}
        className="w-full py-2.5 px-4 bg-muted/30 hover:bg-muted text-xs font-semibold text-foreground flex items-center justify-center gap-2 border-t border-border/60 transition-colors group/btn font-mono"
      >
        <BadgeCheck size={14} className="text-primary shrink-0" />
        <span>{gallery.length > 1 ? `View Presentation Gallery (${gallery.length} Photos)` : "View Full Certificate"}</span>
      </button>
    </div>
  );
}

export function Education() {
  const [activeCert, setActiveCert] = useState<Credential | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const gallery =
    activeCert?.gallery && activeCert.gallery.length > 0
      ? activeCert.gallery
      : activeCert?.image
      ? [{ label: activeCert.title, image: activeCert.image }]
      : [];

  const handleOpenCert = (cert: Credential, slideIdx: number = 0) => {
    setActiveCert(cert);
    setActiveSlide(slideIdx);
  };

  const handlePrevSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }, [gallery.length]);

  const handleNextSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveSlide((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }, [gallery.length]);

  // Keyboard shortcut listener for Escape, ArrowLeft, and ArrowRight
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeCert) return;
      if (e.key === "Escape") {
        setActiveCert(null);
      } else if (e.key === "ArrowLeft" && gallery.length > 1) {
        handlePrevSlide();
      } else if (e.key === "ArrowRight" && gallery.length > 1) {
        handleNextSlide();
      }
    },
    [activeCert, gallery.length, handlePrevSlide, handleNextSlide]
  );

  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCert, handleKeyDown]);

  return (
    <>
      <motion.section
        id="education"
        className="py-12 sm:py-16 md:py-24 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {/* Section Header */}
          <motion.div className="flex items-start justify-between flex-wrap gap-2 mb-2 sm:mb-4" variants={fadeInUp}>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
                Education & Leadership
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base text-pretty">
                Academic degree credentials, student governance appointments, and technical milestones.
              </p>
            </div>
            <span className="md:hidden text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 mt-1">
              <span>Swipe →</span>
            </span>
          </motion.div>

          {/* Two Column Layout: Degree & Student Leadership (Mobile Snap Carousel) */}
          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-2 md:pb-0 no-scrollbar md:grid-cols-2">
            {/* Education Column - Timeline */}
            <Card className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 md:shrink snap-center flex flex-col rounded-2xl transition-[box-shadow,border-color] duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap size={20} className="text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

                  <ul className="flex flex-col gap-6">
                    {education.map((edu, index) => (
                      <li key={index} className="relative pl-12">
                        {/* Timeline dot/logo */}
                        <div className="absolute left-0 size-10 flex items-center justify-center">
                          {edu.logo ? (
                            <div className="relative size-10 rounded-full overflow-hidden bg-background border-2 border-border z-10 image-outline">
                              <Image
                                src={edu.logo}
                                alt={edu.institution}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className={`size-3 rounded-full z-10 ${
                                edu.isCurrent
                                  ? "bg-primary ring-4 ring-primary/20"
                                  : "bg-muted-foreground"
                              }`}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-medium uppercase tracking-wide text-foreground">
                              {edu.level}
                            </span>
                            {edu.status && (
                              <span className="text-[11px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {edu.status}
                              </span>
                            )}
                          </div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {edu.institution}
                          </h4>
                          {edu.program && (
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {edu.program}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Column - Timeline */}
            <Card className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 md:shrink snap-center flex flex-col rounded-2xl transition-[box-shadow,border-color] duration-200 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award size={20} className="text-primary" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

                  <ul className="flex flex-col gap-6">
                    {leadership.map((position, index) => {
                      const content = (
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                              {position.organization}
                            </h4>
                            {position.isCurrent && (
                              <Badge variant="success" className="text-[11px] px-2 py-0.5">
                                Active
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {position.role}
                          </p>
                          <p className="text-[11px] font-mono tabular-nums text-muted-foreground">
                            {position.period}
                          </p>
                        </div>
                      );

                      return (
                        <li key={index} className="relative pl-12">
                          {/* Timeline dot/logo */}
                          <div className="absolute left-0 size-10 flex items-center justify-center">
                            {position.logo ? (
                              <div
                                className={`relative size-10 rounded-full overflow-hidden bg-background border-2 z-10 image-outline ${
                                  position.isCurrent ? "border-primary" : "border-border"
                                }`}
                              >
                                <Image
                                  src={position.logo}
                                  alt={position.organization}
                                  fill
                                  sizes="40px"
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div
                                className={`size-3 rounded-full z-10 ${
                                  position.isCurrent
                                    ? "bg-primary ring-4 ring-primary/20"
                                    : "bg-muted-foreground"
                                }`}
                              />
                            )}
                          </div>

                          {/* Content */}
                          {position.link ? (
                            <a
                              href={position.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              {content}
                            </a>
                          ) : (
                            content
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dedicated Section: Featured Technical Milestones & Institutional Honors */}
          {featuredCredentials && featuredCredentials.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={20} className="text-primary shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Technical Milestones & Institutional Honors
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="sm:hidden text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span>Swipe →</span>
                  </span>
                  <span className="text-[11px] font-mono font-medium text-muted-foreground flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-full border border-border/70">
                    <FileCheck size={13} className="text-primary" />
                    <span>{featuredCredentials.length} Verified Credentials</span>
                  </span>
                </div>
              </div>

              {/* Responsive Layout: Horizontal Snap Carousel on Mobile, 2-Column Grid on Desktop */}
              <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 pb-2 sm:pb-0 no-scrollbar sm:grid-cols-2">
                {featuredCredentials.map((item) => (
                  <CredentialCard
                    key={item.id}
                    item={item}
                    onOpenCert={handleOpenCert}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* Certificate & Presentation Multi-Slide High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {activeCert && gallery.length > 0 && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md select-none"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Floating Action Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <div className="flex flex-col gap-0.5 min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <p className="text-xs sm:text-base font-bold truncate">
                      {activeCert.title}
                    </p>
                    {gallery.length > 1 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                        {activeSlide + 1} of {gallery.length}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono tabular-nums">
                    {activeCert.issuer} · {activeCert.period}
                  </p>
                </div>

                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 rounded-full bg-zinc-800/90 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors border border-white/10 shrink-0"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Image Stage with Left / Right Arrows */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[72vh] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/60 flex items-center justify-center">
                {/* Previous Button */}
                {gallery.length > 1 && (
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 sm:left-4 z-30 p-2 sm:p-2.5 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={gallery[activeSlide].image}
                    alt={gallery[activeSlide].label}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1000px"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Next Button */}
                {gallery.length > 1 && (
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full bg-black/75 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Slide Caption & Dots */}
              <div className="w-full pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">
                    {gallery[activeSlide].label}
                  </p>
                  {gallery[activeSlide].caption && (
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      {gallery[activeSlide].caption}
                    </p>
                  )}
                </div>

                {/* Indicator Dots */}
                {gallery.length > 1 && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    {gallery.map((g, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-1.5 transition-all rounded-full ${
                          activeSlide === idx
                            ? "w-6 bg-white"
                            : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                        }`}
                        aria-label={`Jump to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Signatories Footer Note on Certificate Slide */}
              {activeSlide === 0 && activeCert.signatories && activeCert.signatories.length > 0 && (
                <div className="w-full pt-2 text-center border-t border-white/10 mt-2">
                  <p className="text-[11px] text-zinc-400 font-mono">
                    Signatories: {activeCert.signatories.join(" · ")}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
