"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { useDialogFocusTrap } from "@/hooks/use-dialog-focus-trap";
import {
  X,
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

interface EducationProps {
  previewMode?: boolean;
}

export function Education({ previewMode = false }: EducationProps) {
  const [activeCert, setActiveCert] = useState<Credential | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
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

  const isCertOpen = Boolean(activeCert);
  const closeCert = useCallback(() => setActiveCert(null), []);

  const handleArrowKeys = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && gallery.length > 1) {
        handlePrevSlide();
      } else if (e.key === "ArrowRight" && gallery.length > 1) {
        handleNextSlide();
      }
    },
    [gallery.length, handlePrevSlide, handleNextSlide]
  );

  useDialogFocusTrap(isCertOpen, modalRef, closeCert, handleArrowKeys);

  return (
    <>
      <section id="education" className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 sm:gap-12">
          {/* Page Header */}
          <div className="flex flex-col gap-2">
            {previewMode ? (
              <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-foreground text-balance">
                Credentials
              </h2>
            ) : (
              <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-foreground text-balance">
                Credentials & Education
              </h1>
            )}
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
              Signed government certificates, hackathon awards, academic degree, and student leadership records.
            </p>
          </div>

          {/* Verified Credentials List (Compact Thumbnail Rows) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-medium text-muted-foreground">
                Verified Proofs
              </h2>
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {String(visibleCredentials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="border-y border-border divide-y divide-border">
              {visibleCredentials.map((item) => {
                const thumb = item.gallery?.[0]?.image || item.image;
                const frameCount = item.gallery?.length ?? (item.image ? 1 : 0);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleOpenCert(item, 0)}
                    className="w-full text-left py-3.5 px-2.5 -mx-2.5 rounded-[12px] hover:bg-[var(--hover)] active:scale-[0.99] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      {thumb && (
                        <div className="relative w-16 h-11 sm:w-[76px] sm:h-12 rounded-[8px] overflow-hidden bg-muted border border-border shrink-0 image-outline">
                          <Image
                            src={thumb}
                            alt={item.title}
                            fill
                            sizes="76px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug text-pretty">
                          {item.title}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-snug text-pretty mt-0.5">
                          {item.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="hidden sm:inline text-xs font-mono tabular-nums text-muted-foreground">
                        {frameCount > 1 ? `${frameCount} frames` : item.period}
                      </span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-[var(--ease-out)]"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {previewMode ? (
            <div className="flex justify-end">
              <Link
                href="/credentials"
                className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
              >
                <span>View all credentials</span>
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </Link>
            </div>
          ) : (
            <>
              {/* Education Hairline List */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-sm font-medium text-muted-foreground">
                    Education
                  </h2>
                  <span className="text-xs font-mono tabular-nums text-muted-foreground">
                    {String(education.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="border-y border-border divide-y divide-border">
                  {education.map((edu) => (
                    <div
                      key={`${edu.institution}-${edu.level}`}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {edu.logo && (
                          <div className="relative size-9 rounded-[8px] overflow-hidden bg-background border border-border shrink-0 p-0.5 image-outline">
                            <Image
                              src={edu.logo}
                              alt={edu.institution}
                              fill
                              sizes="36px"
                              className="object-contain p-0.5"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug text-pretty">
                            {edu.institution}
                          </p>
                          {edu.program && (
                            <p className="text-xs sm:text-sm text-muted-foreground leading-snug text-pretty">
                              {edu.program}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:text-right shrink-0 pl-12 sm:pl-0">
                        <span className="text-xs font-mono text-muted-foreground">
                          {edu.level}
                        </span>
                        {edu.status && (
                          <span className="text-xs font-mono tabular-nums text-[var(--green-ink)]">
                            · {edu.status}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Hairline List */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-sm font-medium text-muted-foreground">
                    Institutional Leadership
                  </h2>
                  <span className="text-xs font-mono tabular-nums text-muted-foreground">
                    {String(leadership.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="border-y border-border divide-y divide-border">
                  {leadership.map((position) => {
                    const content = (
                      <div className="py-4 px-2.5 -mx-2.5 rounded-[12px] hover:bg-[var(--hover)] active:scale-[0.99] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 group">
                        <div className="flex items-center gap-3 min-w-0">
                          {position.logo && (
                            <div className="relative size-9 rounded-[8px] overflow-hidden bg-background border border-border shrink-0 p-0.5 image-outline">
                              <Image
                                src={position.logo}
                                alt={position.organization}
                                fill
                                sizes="36px"
                                className="object-contain p-0.5"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug text-pretty">
                              {position.organization}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-snug text-pretty">
                              {position.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 pl-12 sm:pl-0">
                          <span className="text-xs font-mono tabular-nums text-muted-foreground">
                            {position.period}
                          </span>
                          {position.link && (
                            <ArrowUpRight
                              size={14}
                              strokeWidth={1.5}
                              className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-[var(--ease-out)]"
                            />
                          )}
                        </div>
                      </div>
                    );

                    return position.link ? (
                      <a
                        key={`${position.organization}-${position.role}`}
                        href={position.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={`${position.organization}-${position.role}`}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Certificate & Presentation Multi-Slide High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {activeCert && gallery.length > 0 && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="education-lightbox-title"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pt-[max(12px,env(safe-area-inset-top))] pb-[max(12px,env(safe-area-inset-bottom))] bg-black/92 backdrop-blur-md select-none overscroll-contain"
            onClick={closeCert}
          >
            <m.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={shouldReduceMotion ? { duration: 0.15 } : { type: "spring", duration: 0.3, bounce: 0 }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Control Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <div className="flex flex-col gap-0.5 min-w-0 pr-4">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <p
                      id="education-lightbox-title"
                      className="text-xs sm:text-base font-semibold text-balance leading-snug"
                    >
                      {activeCert.title}
                    </p>
                    {gallery.length > 1 && (
                      <span className="text-xs font-mono tabular-nums text-zinc-400 shrink-0">
                        {String(activeSlide + 1).padStart(2, "0")} /{" "}
                        {String(gallery.length).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono tabular-nums">
                    {activeCert.issuer} · {activeCert.period}
                  </p>
                  {activeCert.description && (
                    <p className="text-xs text-zinc-300 leading-relaxed text-pretty pt-0.5">
                      {activeCert.description}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setActiveCert(null)}
                  className="min-h-11 min-w-11 size-11 rounded-full bg-zinc-900/90 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] border border-white/15 shrink-0 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Main Image Stage with Left / Right Arrows */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[72vh] flex items-center justify-center touch-pan-y">
                {gallery.length > 1 && (
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 sm:left-4 z-30 min-h-[44px] min-w-[44px] size-11 rounded-full bg-zinc-950/85 hover:bg-zinc-950 text-white border border-white/20 transition-transform active:scale-[0.96] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                <m.div
                  key={activeSlide}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={gallery[activeSlide].image}
                    alt={gallery[activeSlide].label}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1000px"
                    className="object-contain rounded-[10px]"
                  />
                </m.div>

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
                        className={`relative h-1.5 transition-[width,background-color] rounded-full after:absolute after:-inset-4 after:content-[''] ${
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
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
