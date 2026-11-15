"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { experience } from "@/data/portfolio";

interface ExperienceProps {
  previewMode?: boolean;
}

export function Experience({ previewMode = false }: ExperienceProps) {
  return (
    <section
      id="work-experience"
      className="py-12 sm:py-16"
    >
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-foreground text-balance">
              Work Experience
            </h2>
            {previewMode ? (
              <Link
                href="/experience"
                className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
              >
                <span>Full experience dossier</span>
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            ) : (
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {String(experience.length).padStart(2, "0")} ROLES
              </span>
            )}
          </div>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-pretty">
            Production software engineering across a paid institutional contract and a regional government internship.
          </p>
        </div>

        {/* Hairline Experience Dossier */}
        <div className="rounded-[14px] border border-border bg-card overflow-hidden divide-y divide-border">
          {experience.map((exp, index) => {
            const visibleHighlights = previewMode
              ? exp.highlights?.slice(0, 2)
              : exp.highlights;

            return (
              <article
                key={`${exp.organization}-${exp.role}`}
                className="@container p-5 sm:p-6 flex flex-col gap-4 transition-colors hover:bg-muted/15"
              >
                {/* Role Header Row — Holds horizontal alignment until content genuinely wraps */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5 min-w-0">
                    {exp.logo && (
                      <div className="relative size-10 rounded-[10px] overflow-hidden bg-background border border-border shrink-0 p-1 image-outline">
                        <Image
                          src={exp.logo}
                          alt={exp.organization}
                          fill
                          className="object-contain p-1"
                          sizes="40px"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground text-base sm:text-lg text-balance leading-snug">
                          {exp.organization}
                        </h3>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
                            aria-label={`Visit ${exp.organization}`}
                          >
                            <ArrowUpRight size={15} strokeWidth={1.5} />
                          </a>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-foreground/80 mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start">
                    <span className="text-[11px] font-mono tabular-nums text-muted-foreground px-2.5 py-1 rounded-[6px] border border-border bg-background">
                      {String(index + 1).padStart(2, "0")} · {exp.period}
                    </span>
                  </div>
                </div>

                {/* Engineering Highlights */}
                {visibleHighlights && visibleHighlights.length > 0 && (
                  <ul className="flex flex-col gap-2 pl-0 sm:pl-[54px]">
                    {visibleHighlights.map((hl, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5 text-pretty"
                      >
                        <Terminal
                          size={14}
                          strokeWidth={1.5}
                          className="text-muted-foreground mt-1 shrink-0"
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-[54px] pt-1">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
