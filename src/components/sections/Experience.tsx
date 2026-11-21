"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";

interface ExperienceProps {
  previewMode?: boolean;
}

function ExperienceRow({
  exp,
  initialCount = 2,
}: {
  exp: (typeof experience)[number];
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const highlights = exp.highlights ?? [];
  const remaining = Math.max(0, highlights.length - initialCount);
  const hasMore = remaining > 0;
  const visibleHighlights = expanded
    ? highlights
    : highlights.slice(0, initialCount);

  return (
    <article className="py-5 sm:py-6 flex flex-col gap-3">
      {/* Header Row: Logo + Role & Organization sub-text on left, Period on right */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4">
        <div className="flex items-start gap-3 min-w-0">
          {exp.logo && (
            <div className="relative size-9 rounded-[8px] overflow-hidden bg-background border border-border shrink-0 p-0.5 image-outline mt-0.5">
              <Image
                src={exp.logo}
                alt={exp.organization}
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-sm sm:text-[15px] font-medium text-foreground leading-snug text-pretty">
              {exp.role}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug text-pretty mt-0.5">
              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {exp.organization}
                  </span>
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="inline-block align-middle ml-1 opacity-70 group-hover:opacity-100 transition-[opacity,transform] duration-150 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : (
                exp.organization
              )}
            </p>
          </div>
        </div>

        <span className="text-xs font-mono tabular-nums text-muted-foreground shrink-0 pl-12 sm:pl-0 sm:pt-0.5">
          {exp.period}
        </span>
      </div>

      {/* Concise Outcome Bullets */}
      {visibleHighlights.length > 0 && (
        <ul className="flex flex-col gap-2 max-w-[68ch] sm:pl-12">
          {visibleHighlights.map((hl, i) => (
            <li
              key={i}
              className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5 text-pretty"
            >
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-muted-foreground/70 mt-2 shrink-0"
              />
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Expand / Collapse & Secondary Stack */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5 sm:pl-12">
        {hasMore ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="relative text-xs font-medium text-muted-foreground hover:text-foreground transition-colors active:scale-[0.98] cursor-pointer after:absolute after:-inset-2 after:content-['']"
          >
            {expanded ? "Show less" : `+ ${remaining} more`}
          </button>
        ) : (
          <span />
        )}

        {exp.techStack && exp.techStack.length > 0 && (
          <p className="text-[11px] font-mono text-muted-foreground/80">
            {exp.techStack.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}

export function Experience({ previewMode = false }: ExperienceProps) {
  return (
    <section
      id="work-experience"
      className={previewMode ? "py-0" : "py-12 sm:py-16"}
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Section Header */}
        {previewMode ? (
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              Experience
            </h2>
            <Link
              href="/experience"
              className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
            >
              <span>View all</span>
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-2 pb-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-foreground text-balance">
                Experience
              </h1>
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {String(experience.length).padStart(2, "0")} ROLES
              </span>
            </div>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
              Software built and deployed under a paid school contract and a regional government internship.
            </p>
          </div>
        )}

        {/* Single-Column Editorial Timeline */}
        <div className="border-y border-border divide-y divide-border">
          {experience.map((exp) => (
            <ExperienceRow
              key={`${exp.organization}-${exp.role}`}
              exp={exp}
              initialCount={previewMode ? 1 : 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
