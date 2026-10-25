"use client";

import { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const externalChannels = socialLinks.filter(
    (l) => l.platform !== "Email" && l.platform !== "TikTok"
  );

  return (
    <footer
      id="contact"
      className="pt-10 pb-6 border-t border-border flex flex-col gap-6"
    >
      {/* Top Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-foreground">
            {personalInfo.availability.message}
          </p>
          <p className="text-xs text-muted-foreground">
            Reach out directly for full-time software engineering roles or institutional web builds.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              personalInfo.email
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-3.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity inline-flex items-center gap-1.5 text-xs font-medium"
          >
            <Mail size={13} />
            <span>Open in Gmail</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="h-9 px-3.5 rounded-full border border-border bg-card hover:bg-muted transition-colors inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Hairline Bar: Copyright & Inline Social Links */}
      <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground">
        <p className="font-mono tabular-nums">
          © {currentYear} {personalInfo.name} · Davao City, PH
        </p>

        <nav aria-label="Social Links" className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {externalChannels.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>{link.platform}</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
