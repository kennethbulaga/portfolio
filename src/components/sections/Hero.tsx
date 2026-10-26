"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowDown, FileText, ArrowUpRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  personalInfo,
  heroHeadline,
  institutionalTrust,
  resumePath,
} from "@/data/portfolio";
import { PixelName } from "@/components/ui/pixel-name";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  const [isAvatarZoomed, setIsAvatarZoomed] = useState(false);

  useEffect(() => {
    if (!isAvatarZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsAvatarZoomed(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAvatarZoomed]);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="pt-2 sm:pt-4 flex flex-col gap-8">
      {/* Top Identity Row & Availability Status Pill */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
        <div className="flex items-center gap-3.5">
          {personalInfo.avatar && (
            <button
              type="button"
              onClick={() => setIsAvatarZoomed(true)}
              className="relative size-14 rounded-full overflow-hidden bg-muted border border-border shrink-0 image-outline cursor-zoom-in group transition-transform active:scale-95 focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="View portrait photo in full resolution"
              title="Click to view portrait photo"
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="56px"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ZoomIn size={16} />
              </span>
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

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f9e5b]/30 bg-[#2f9e5b]/10 text-xs font-medium text-[#1e6b3a] dark:text-[#5fd08a]">
          <span className="size-2 rounded-full bg-[#2f9e5b]" />
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

        {/* Location & Direct Email Meta */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground pt-0.5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-muted-foreground shrink-0" />
            <span>{personalInfo.location}</span>
          </span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors underline decoration-border hover:decoration-foreground"
          >
            <Mail size={14} className="text-muted-foreground shrink-0" />
            <span className="font-mono">{personalInfo.email}</span>
          </a>
        </div>

        {/* Tactile Pill Action Bar */}
        <div className="pt-1 flex flex-wrap items-center gap-2.5">
          <Button
            onClick={scrollToProjects}
            className="h-10 px-5 rounded-full gap-2 text-xs font-medium cursor-pointer"
          >
            <span>Inspect Production Systems</span>
            <ArrowDown size={14} />
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-10 px-4 rounded-full gap-2 text-xs font-medium bg-card hover:bg-muted"
          >
            <a href={resumePath} target="_blank" rel="noopener noreferrer">
              <FileText size={14} className="text-muted-foreground" />
              <span>Resume PDF</span>
            </a>
          </Button>
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
            const row = (
              <div className="py-3.5 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-between gap-4 group">
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
                  size={15}
                  className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
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
                {row}
              </a>
            ) : (
              <div key={partner.name}>{row}</div>
            );
          })}
        </div>
      </div>

      <TechMarquee />

      {/* Avatar High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {isAvatarZoomed && personalInfo.avatar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md select-none cursor-zoom-out"
            onClick={() => setIsAvatarZoomed(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[360px] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                sizes="360px"
                priority
                className="object-cover"
              />

              <button
                type="button"
                onClick={() => setIsAvatarZoomed(false)}
                className="absolute top-3 right-3 size-8 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white transition-colors border border-white/20 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close photo preview"
              >
                <X size={16} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
