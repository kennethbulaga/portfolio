"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Check, Copy, ArrowUpRight, MessageSquare, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { socialLinks, personalInfo } from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Human Behind the Code Profile & Contact Card */}
        <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl border border-border/80 bg-card/70 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative z-10 text-center md:text-left">
            {/* Portrait Frame with Status Ping */}
            <div className="relative shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-border/80 bg-muted/60 shadow-md">
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
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background" />
              </span>
            </div>

            {/* Profile Intro & Bio */}
            <div className="space-y-3 flex-1">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {personalInfo.name}
                  </h3>
                  <Badge variant="outline" className="text-xs font-mono">
                    {personalInfo.nickname}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-primary font-medium">
                  {personalInfo.subHeadline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
                Open for full-time software engineering roles, independent contracting, and building mission-critical web & mobile platforms.
              </p>

              {/* Location Meta */}
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-muted-foreground pt-1">
                <MapPin size={13} className="text-primary shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons (Copy Email & Direct Message) */}
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="default"
                onClick={handleCopyEmail}
                className="gap-2 shadow-xs transition-transform active:scale-95"
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
            </div>

            <p className="text-xs font-mono text-muted-foreground">
              {personalInfo.email}
            </p>
          </div>
        </SpotlightCard>

        {/* Segmented Engineering & Social Media Channels */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-center gap-1.5">
              <MessageSquare size={13} className="text-primary" />
              <span>Connect Across Platforms</span>
            </p>
          </div>

          {/* Primary Professional Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <SpotlightCard className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 transition-all group shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                      <Github size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                        GitHub
                      </p>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {githubLink.username}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-foreground transition-colors" />
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
                <SpotlightCard className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-card/60 hover:bg-card hover:border-primary/40 transition-all group shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {linkedinLink.username}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-foreground transition-colors" />
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
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-all shadow-xs"
              >
                <XIcon className="w-3.5 h-3.5 text-foreground" />
                <span>X (Twitter)</span>
              </a>
            )}

            {facebookLink && (
              <a
                href={facebookLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-all shadow-xs"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-foreground" />
                <span>Facebook</span>
              </a>
            )}

            {tiktokLink && (
              <a
                href={tiktokLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-all shadow-xs"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-foreground" />
                <span>TikTok</span>
              </a>
            )}
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>
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
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-zinc-900/95 dark:bg-zinc-100/95 text-zinc-100 dark:text-zinc-900 text-xs font-mono font-medium shadow-2xl backdrop-blur-md border border-white/20 dark:border-black/20 flex items-center gap-2 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Copied email to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
