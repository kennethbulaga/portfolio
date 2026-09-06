"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Check, Copy, ArrowUpRight, MessageSquare, MapPin, Coffee, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { IWasHereButton } from "@/components/ui/i-was-here";
import { socialLinks, personalInfo, personalInterests, spotifyPlaylists } from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

function XIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [activePlaylistIdx, setActivePlaylistIdx] = useState(0);

  const activePlaylist = spotifyPlaylists[activePlaylistIdx] || spotifyPlaylists[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const githubLink = socialLinks.find((l) => l.platform === "GitHub");
  const linkedinLink = socialLinks.find((l) => l.platform === "LinkedIn");
  const xLink = socialLinks.find((l) => l.platform === "X");
  const facebookLink = socialLinks.find((l) => l.platform === "Facebook");
  const tiktokLink = socialLinks.find((l) => l.platform === "TikTok");

  return (
    <motion.footer
      id="contact"
      className="py-16 sm:py-20 md:py-28 border-t border-border/70 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Human Behind the Code Profile & Contact Card */}
        <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl border border-border/80 bg-card/70 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative z-10 text-center md:text-left">
            {/* Portrait Frame with Status Ping */}
            <div className="relative shrink-0">
              <div className="relative size-24 sm:size-28 rounded-2xl overflow-hidden border-2 border-border/80 bg-muted/60 shadow-md image-outline">
                {personalInfo.avatar && !imageError ? (
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-muted text-foreground font-mono font-bold text-2xl">
                    <span>KB</span>
                  </div>
                )}
              </div>

              {/* Active Availability Badge Dot */}
              <span className="absolute -bottom-1 -right-1 flex size-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-4 bg-emerald-500 border-2 border-background" />
              </span>
            </div>

            {/* Profile Intro & Bio */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground text-balance">
                    {personalInfo.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-primary font-medium">
                  {personalInfo.subHeadline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Available for full-time engineering roles, freelance contracts, and building high-utility web applications & automated workflows.
              </p>

              {/* Location Meta */}
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-muted-foreground pt-1">
                <MapPin size={13} className="text-primary shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Personal Touch: Outside of Coding */}
          <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-2.5 text-left">
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
              <Coffee size={13} className="text-primary" />
              <span>Beyond the Terminal / Outside of Coding</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {personalInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl border border-border/70 bg-muted/25 flex items-start gap-2.5 text-left hover:border-primary/30 transition-colors"
                >
                  {interest.svgIcon ? (
                    <div className="relative size-5 rounded-md shrink-0 select-none mt-0.5 overflow-hidden flex items-center justify-center image-outline">
                      <Image
                        src={interest.svgIcon}
                        alt={interest.label}
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-base shrink-0 select-none mt-0.5">{interest.icon}</span>
                  )}
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <p className="text-xs font-semibold text-foreground font-mono truncate">
                      {interest.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      {interest.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Vibing / Multi-Playlist Spotify Switcher */}
          <div className="mt-5 pt-4 border-t border-border/60 flex flex-col gap-2.5 text-left">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                <Headphones size={13} className="text-emerald-500" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Currently Vibing / On Repeat
                </span>
              </div>

              {/* Navigation Tabs & Chevrons */}
              <div className="flex items-center gap-1.5 max-w-full">
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 max-w-[280px] sm:max-w-none">
                  {spotifyPlaylists.map((pl, idx) => (
                    <button
                      key={pl.id}
                      type="button"
                      onClick={() => setActivePlaylistIdx(idx)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors font-medium shrink-0 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ${
                        activePlaylistIdx === idx
                          ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 font-semibold shadow-2xs"
                          : "text-muted-foreground hover:text-foreground bg-muted/40 border border-transparent"
                      }`}
                    >
                      {pl.title}
                    </button>
                  ))}
                </div>

                {spotifyPlaylists.length > 1 && (
                  <div className="flex items-center gap-0.5 ml-1 border-l border-border/60 pl-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setActivePlaylistIdx(
                          (prev) => (prev - 1 + spotifyPlaylists.length) % spotifyPlaylists.length
                        )
                      }
                      className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Previous playlist"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActivePlaylistIdx((prev) => (prev + 1) % spotifyPlaylists.length)
                      }
                      className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Next playlist"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Embedded Spotify Player with Dynamic Key */}
            <div className="rounded-xl overflow-hidden border border-border/80 bg-background/50 shadow-xs image-outline">
              <iframe
                key={activePlaylist.id}
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src={activePlaylist.embedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Playlist - ${activePlaylist.title}`}
                className="w-full"
              />
            </div>
          </div>

          {/* Primary Action Buttons (Copy Email & Direct Message) */}
          <div className="mt-6 pt-5 border-t border-border/60 flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="default"
                onClick={handleCopyEmail}
                className="gap-2 shadow-xs"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </Button>

              <Button asChild size="default" variant="outline" className="gap-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={16} />
                  <span>Open in Gmail</span>
                </a>
              </Button>

              <IWasHereButton />
            </div>

            <p className="text-xs font-mono text-muted-foreground tabular-nums">
              {personalInfo.email}
            </p>
          </div>
        </SpotlightCard>

        {/* Segmented Engineering & Social Media Channels */}
        <div className="flex flex-col gap-4">
          <div className="text-center flex flex-col gap-1">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-center gap-1.5">
              <MessageSquare size={13} className="text-primary" />
              <span>Connect Across Platforms</span>
            </p>
          </div>

          {/* Primary Professional Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto w-full">
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <SpotlightCard className="p-3.5 rounded-2xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 transition-[background-color,border-color,box-shadow] duration-200 group shadow-xs">
                  <div className="flex items-center justify-between w-full gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="size-9 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:text-primary transition-colors shrink-0">
                        <Github size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                          GitHub
                        </p>
                        <p className="text-[11px] font-mono text-muted-foreground truncate">
                          {githubLink.username}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  </div>
                </SpotlightCard>
              </a>
            )}

            {linkedinLink && (
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <SpotlightCard className="p-3.5 rounded-2xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 transition-[background-color,border-color,box-shadow] duration-200 group shadow-xs">
                  <div className="flex items-center justify-between w-full gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="size-9 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:text-primary transition-colors shrink-0">
                        <Linkedin size={18} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                          LinkedIn
                        </p>
                        <p className="text-[11px] font-mono text-muted-foreground truncate">
                          {linkedinLink.username}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  </div>
                </SpotlightCard>
              </a>
            )}
          </div>

          {/* Secondary Creator & Social Links Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {xLink && (
              <a
                href={xLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-[background-color,border-color,color] duration-200 shadow-xs active:scale-[0.96]"
              >
                <XIcon className="size-3.5 text-foreground" />
                <span>X (Twitter)</span>
              </a>
            )}

            {facebookLink && (
              <a
                href={facebookLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-[background-color,border-color,color] duration-200 shadow-xs active:scale-[0.96]"
              >
                <FacebookIcon className="size-3.5 text-foreground" />
                <span>Facebook</span>
              </a>
            )}

            {tiktokLink && (
              <a
                href={tiktokLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-[background-color,border-color,color] duration-200 shadow-xs active:scale-[0.96]"
              >
                <TikTokIcon className="size-3.5 text-foreground" />
                <span>TikTok</span>
              </a>
            )}
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p className="tabular-nums">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Micro-Haptic Copy Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-foreground text-background text-xs font-mono font-medium shadow-2xl backdrop-blur-md border border-border/20 flex items-center gap-2 pointer-events-none"
          >
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Copied email to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
