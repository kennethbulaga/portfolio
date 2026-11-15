"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  Code,
  Landmark,
  Trophy,
  ZoomIn,
  X,
  FileCheck,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  education,
  leadership,
  featuredCredentials,
  Credential,
} from "@/data/portfolio";

const categoryIconMap: Record<string, React.ElementType> = {
  "Public Sector": Landmark,
  "Hackathons & Competitions": Code,
  "Institutional Honors": Trophy,
};

function CredentialCard({
  item,
  indexNumber,
  onOpenCert,
}: {
  item: Credential;
  indexNumber: string;
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
    <article className="rounded-[14px] border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-foreground/25 flex flex-col justify-between group">
      <div className="flex flex-col">
        {/* Flush Certificate / Presentation Photo Preview */}
        {activeImage && (
          <div
            onClick={() => onOpenCert(item, activePhotoIdx)}
            className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted/20 cursor-zoom-in group/img image-outline"
            title="Click to inspect full resolution"
          >
            {gallery.map((g, idx) => (
              <div
                key={g.image}
                className={`absolute inset-0 transition-opacity duration-200 ${
                  activePhotoIdx === idx
                    ? "opacity-100 z-1"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={g.image}
                  alt={`${item.title} — ${g.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-200 ease-[var(--ease-out)] group-hover/img:scale-[1.02]"
                />
              </div>
            ))}

            {/* Prev / Next Arrow Overlay for Multiple Photos */}
            {gallery.length > 1 && (
              <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20 opacity-100 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx((prev) =>
                      prev > 0 ? prev - 1 : gallery.length - 1
                    );
                  }}
                  className="pointer-events-auto min-h-11 min-w-11 size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={16} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx((prev) =>
                      prev < gallery.length - 1 ? prev + 1 : 0
                    );
                  }}
                  className="pointer-events-auto min-h-11 min-w-11 size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            )}

            {/* Multi-Photo Indicator Pill Overlay */}
            {gallery.length > 1 && (
              <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-zinc-950/80 px-2 py-0.5 rounded-full border border-white/15 text-[10px] font-mono tabular-nums text-white/95">
                <span>
                  {String(activePhotoIdx + 1).padStart(2, "0")}/
                  {String(gallery.length).padStart(2, "0")}
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
              <div className="px-2.5 py-1 rounded-full bg-zinc-950/90 text-white text-[11px] font-mono flex items-center gap-1.5 border border-white/20">
                <ZoomIn size={12} />
                <span>Inspect Proof</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Area — Heading First (Zero Eyebrow Kicker Above Heading) */}
        <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2.5">
            <h4 className="font-semibold text-foreground text-sm sm:text-base leading-snug text-balance">
              {item.title}
            </h4>
            <span className="text-[10px] font-mono tabular-nums text-muted-foreground px-2 py-0.5 rounded-[6px] border border-border bg-background shrink-0">
              {indexNumber}
            </span>
          </div>

          {/* Inline Metadata Row Below Heading */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
              <CategoryIcon size={13} strokeWidth={1.5} className="text-foreground/75 shrink-0" />
              <span>{item.category}</span>
            </span>

            {item.status === "Active Production" ? (
              <span className="nav-pill font-mono shrink-0">
                <span className="size-1.5 rounded-full bg-[var(--green)]" />
                <span>Active Production</span>
              </span>
            ) : item.status === "Highest Honor" ? (
              <span className="soon font-mono shrink-0">Highest Honor</span>
            ) : (
              <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-mono text-secondary-foreground shrink-0">
                {item.status}
              </span>
            )}
          </div>

          {/* Date and Issuer */}
          <div className="flex flex-col gap-0.5 text-xs text-muted-foreground pt-0.5 border-t border-border">
            <div className="flex items-center gap-1.5 font-mono text-xs text-foreground/85 pt-2">
              <Calendar size={12} className="text-muted-foreground shrink-0" />
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
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-mono text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Footer Action */}
      <button
        type="button"
        onClick={() => onOpenCert(item, activePhotoIdx)}
        className="w-full min-h-11 py-2.5 px-4 bg-muted/25 hover:bg-muted/60 text-xs font-mono font-medium text-foreground flex items-center justify-center gap-2 border-t border-border transition-[background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] cursor-pointer"
      >
        <BadgeCheck size={15} strokeWidth={1.5} className="text-muted-foreground shrink-0" />
        <span>
          {gallery.length > 1
            ? `Inspect Proof Gallery (${gallery.length} Frames)`
            : "Inspect Signed Certificate"}
        </span>
      </button>
    </article>
  );
}

interface EducationProps {
  previewMode?: boolean;
}

export function Education({ previewMode = false }: EducationProps) {
  const [activeCert, setActiveCert] = useState<Credential | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const visibleCredentials = previewMode
    ? featuredCredentials.slice(0, 2)
    : featuredCredentials;

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

  const handlePrevSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setActiveSlide((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
    },
    [gallery.length]
  );

  const handleNextSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setActiveSlide((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
    },
    [gallery.length]
  );

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
      <section
        id="education"
        className="py-12 sm:py-16"
      >
        <div className="flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-foreground text-balance">
                {previewMode ? "Verified Credentials & Proofs" : "Credentials, Honors & Education"}
              </h2>
              <span className="text-xs font-mono tabular-nums text-muted-foreground flex items-center gap-1.5">
                <FileCheck size={14} strokeWidth={1.5} className="text-muted-foreground" />
                <span>
                  {previewMode
                    ? "02 OF 04 PROOFS"
                    : `${String(featuredCredentials.length).padStart(2, "0")} VERIFIED PROOFS`}
                </span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
              Signed government certificates of recognition, national hackathon awards, academic degree, and campus leadership records.
            </p>
          </div>

          {/* Verified Credentials Contact-Sheet Grid */}
          {visibleCredentials && visibleCredentials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {visibleCredentials.map((item, idx) => (
                <CredentialCard
                  key={item.id}
                  item={item}
                  indexNumber={String(idx + 1).padStart(2, "0")}
                  onOpenCert={handleOpenCert}
                />
              ))}
            </div>
          )}

          {previewMode ? (
            <div className="rounded-[14px] border border-border bg-card px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-foreground">
                  Academic Background, Hackathons & Leadership Dossier
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Includes OWWA SPRS Certificate, Davao HackEstate 2025, BSIT Degree & SSC Senator roles
                </p>
              </div>
              <Link
                href="/credentials"
                className="btn btn-light h-10 px-4 text-xs font-mono shrink-0"
              >
                <span>Inspect All Credentials (04)</span>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          ) : (
            /* Two Column Layout: Academic Degree & Student Leadership */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Academic Degree Dossier */}
              <div className="rounded-[14px] border border-border bg-card overflow-hidden flex flex-col">
                <div className="px-5 py-3.5 border-b border-border bg-muted/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={17} className="text-foreground shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      Academic Background
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono tabular-nums text-muted-foreground">
                    BSIT · 2022–2026
                  </span>
                </div>

                <ul className="divide-y divide-border">
                  {education.map((edu) => (
                    <li
                      key={`${edu.institution}-${edu.level}`}
                      className="p-4 sm:p-5 flex items-start gap-3.5"
                    >
                      {edu.logo && (
                        <div className="relative size-10 rounded-[10px] overflow-hidden bg-background border border-border shrink-0 p-0.5 image-outline">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <h4 className="font-semibold text-foreground text-sm leading-snug">
                            {edu.institution}
                          </h4>
                          <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                            {edu.level}
                          </span>
                        </div>
                        {edu.program && (
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {edu.program}
                          </p>
                        )}
                        {edu.status && (
                          <p className="text-[11px] font-mono tabular-nums text-[var(--green-ink)]">
                            {edu.status}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leadership Dossier */}
              <div className="rounded-[14px] border border-border bg-card overflow-hidden flex flex-col">
                <div className="px-5 py-3.5 border-b border-border bg-muted/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Award size={17} className="text-foreground shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      Institutional Leadership
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono tabular-nums text-muted-foreground">
                    {String(leadership.length).padStart(2, "0")} ROLES
                  </span>
                </div>

                <ul className="divide-y divide-border">
                  {leadership.map((position) => (
                    <li
                      key={`${position.organization}-${position.role}`}
                      className="p-4 sm:p-5 flex items-start gap-3.5"
                    >
                      {position.logo && (
                        <div className="relative size-10 rounded-[10px] overflow-hidden bg-background border border-border shrink-0 p-0.5 image-outline">
                          <Image
                            src={position.logo}
                            alt={position.organization}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h4 className="font-semibold text-foreground text-sm leading-snug">
                            {position.organization}
                          </h4>
                          {position.link && (
                            <a
                              href={position.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`Visit ${position.organization}`}
                            >
                              <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {position.role}
                        </p>
                        <p className="text-[11px] font-mono tabular-nums text-muted-foreground">
                          {position.period}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Certificate & Presentation Multi-Slide High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {activeCert && gallery.length > 0 && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md select-none"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={shouldReduceMotion ? { duration: 0.15 } : { type: "spring", duration: 0.3, bounce: 0 }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Floating Action Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <div className="flex flex-col gap-0.5 min-w-0 pr-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-xs sm:text-base font-bold text-balance leading-snug">
                      {activeCert.title}
                    </p>
                    {gallery.length > 1 && (
                      <span className="text-[10px] font-mono tabular-nums px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                        {String(activeSlide + 1).padStart(2, "0")} /{" "}
                        {String(gallery.length).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono tabular-nums">
                    {activeCert.issuer} · {activeCert.period}
                  </p>
                </div>

                <button
                  onClick={() => setActiveCert(null)}
                  className="min-h-11 min-w-11 size-11 rounded-full bg-zinc-800/90 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors border border-white/10 shrink-0 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Close modal"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Main Image Stage with Left / Right Arrows */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[72vh] rounded-[12px] overflow-hidden border border-white/15 bg-black/60 flex items-center justify-center image-outline">
                {gallery.length > 1 && (
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 sm:left-4 z-30 min-h-[44px] min-w-[44px] size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white border border-white/20 transition-transform active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                <motion.div
                  key={activeSlide}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={shouldReduceMotion ? { duration: 0.12 } : { duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
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

                {gallery.length > 1 && (
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 sm:right-4 z-30 min-h-[44px] min-w-[44px] size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white border border-white/20 transition-transform active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Slide Caption & Dots */}
              <div className="w-full pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-semibold text-white text-balance leading-snug">
                    {gallery[activeSlide].label}
                  </p>
                  {gallery[activeSlide].caption && (
                    <p className="text-[11px] text-zinc-400 leading-snug text-pretty">
                      {gallery[activeSlide].caption}
                    </p>
                  )}
                </div>

                {gallery.length > 1 && (
                  <div className="flex items-center gap-2 shrink-0">
                    {gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`relative h-1.5 transition-[width,background-color] rounded-full after:absolute after:-inset-3 after:content-[''] ${
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

              {activeSlide === 0 &&
                activeCert.signatories &&
                activeCert.signatories.length > 0 && (
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
