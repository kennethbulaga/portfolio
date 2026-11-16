"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MapPin, ArrowDown, Copy, Check, X, ArrowUpRight } from "lucide-react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  personalInfo,
  heroHeadline,
  institutionalTrust,
} from "@/data/portfolio";
import { useCopyEmail } from "@/hooks/use-copy-email";
import { useDialogFocusTrap } from "@/hooks/use-dialog-focus-trap";
import { PixelName } from "@/components/ui/pixel-name";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  const [isAvatarZoomed, setIsAvatarZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { copied, copyEmail } = useCopyEmail(personalInfo.email);
  const shouldReduceMotion = useReducedMotion();

  const closeAvatarModal = useCallback(() => setIsAvatarZoomed(false), []);
  useDialogFocusTrap(isAvatarZoomed, modalRef, closeAvatarModal);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  return (
    <section id="about" className="pt-0 flex flex-col gap-6 sm:gap-7">
      {/* Top Identity Row & Availability Status Pill */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border">
        <div className="flex items-center gap-4">
          {personalInfo.avatar && (
            <button
              type="button"
              onClick={() => setIsAvatarZoomed(true)}
              aria-label="Enlarge portrait"
              className="relative size-20 sm:size-24 rounded-[18px] overflow-hidden bg-muted border border-border shrink-0 image-outline cursor-zoom-in group transition-[transform,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:ring-2 hover:ring-ring/40 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                priority
                fetchPriority="high"
                className="object-cover object-[50%_18%] scale-[1.15] transition-transform duration-150 ease-[var(--ease-out)] group-hover:scale-[1.18]"
              />
            </button>
          )}
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-[-0.015em] text-foreground">
              <PixelName text={personalInfo.name} />
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              {personalInfo.subHeadline}
            </span>
          </div>
        </div>

        <div className="nav-pill px-3 py-1.5 text-xs font-medium">
          <span className="size-2 rounded-full bg-[var(--green)]" />
          <span>{personalInfo.availability.message}</span>
        </div>
      </div>

      {/* Main Thesis Headline (Single Italic Serif Emphasis Word) & Bio */}
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] leading-[1.16] text-foreground text-balance max-w-[24ch]">
          {heroHeadline.prefix}
          <span className="serif-emphasis font-normal">{heroHeadline.emphasis}</span>
          {heroHeadline.suffix}
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground max-w-[68ch] leading-[1.65] text-pretty">
          {personalInfo.bio}
        </p>

        {/* Location Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground pt-0.5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} strokeWidth={1.5} className="text-muted-foreground shrink-0" />
            <span>{personalInfo.location}</span>
          </span>
        </div>

        {/* Tactile Pill Action Bar */}
        <div className="pt-1 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={scrollToProjects}
            className="btn btn-dark h-11 px-5 text-xs font-medium cursor-pointer"
          >
            <span>Inspect Production Systems</span>
            <ArrowDown size={16} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={copyEmail}
            className="btn btn-light h-11 px-4 text-xs font-medium cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} strokeWidth={1.5} className="text-[var(--green-ink)]" />
                <span className="text-[var(--green-ink)]">Email copied</span>
              </>
            ) : (
              <>
                <Copy size={16} strokeWidth={1.5} className="text-muted-foreground" />
                <span>Get in Touch</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Institutional Provenance Hairline Rows */}
      <div className="pt-4 border-t border-border flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-medium text-muted-foreground">
            Institutional & Regional Deployments
          </h2>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">02</span>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {institutionalTrust.map((partner) => {
            const inner = (
              <div className="py-3.5 px-2.5 -mx-2.5 rounded-[12px] hover:bg-[var(--hover)] active:scale-[0.98] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative size-9 rounded-lg overflow-hidden bg-card border border-border shrink-0 p-1 image-outline">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="36px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground text-pretty leading-snug">
                      {partner.name}
                    </p>
                    <p className="text-xs text-muted-foreground text-pretty leading-snug">
                      {partner.role}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-[var(--ease-out)] shrink-0"
                />
              </div>
            );

            return partner.link ? (
              <a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={partner.name}>{inner}</div>
            );
          })}
        </div>
      </div>

      <TechMarquee />

      {/* Avatar High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {isAvatarZoomed && personalInfo.avatar && (
          <m.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="hero-avatar-dialog-title"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md select-none cursor-zoom-out"
            onClick={closeAvatarModal}
          >
            <h2 id="hero-avatar-dialog-title" className="sr-only">
              {personalInfo.name} portrait preview
            </h2>
            <m.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.15 }
                  : { type: "spring", duration: 0.3, bounce: 0 }
              }
              drag={shouldReduceMotion ? false : "y"}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.45 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 90 || info.velocity.y > 400) {
                  closeAvatarModal();
                }
              }}
              className="relative aspect-square w-full max-w-[360px] rounded-[20px] overflow-hidden bg-zinc-950 shadow-[0_24px_60px_oklch(0_0_0/0.55)] cursor-default image-outline"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="360px"
                priority
                className="object-cover pointer-events-none"
              />

              <button
                type="button"
                onClick={closeAvatarModal}
                className="absolute top-3 right-3 z-10 min-h-11 min-w-11 size-11 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-md text-white transition-[background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96] border border-[oklch(1_0_0/0.14)] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close photo preview"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
