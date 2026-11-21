import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
            {previewMode ? (
              <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-foreground text-balance">
                Work Experience
              </h2>
            ) : (
              <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-foreground text-balance">
                Work Experience
              </h1>
            )}
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
            Software built and deployed under a paid school contract and a regional government internship.
          </p>
        </div>

        {/* Open Editorial Timeline */}
        <div className="border-t border-border divide-y divide-border">
          {experience.map((exp, index) => {
            const visibleHighlights = previewMode
              ? exp.highlights?.slice(0, 2)
              : exp.highlights;

            return (
              <article
                key={`${exp.organization}-${exp.role}`}
                className="py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8"
              >
                {/* Left Column: Index · Period, Organization & Role */}
                <div className="lg:col-span-5 flex flex-col gap-3 min-w-0">
                  <span className="text-xs font-mono tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} · {exp.period}
                  </span>

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
                      <h3 className="font-semibold text-foreground text-base sm:text-lg text-balance leading-snug">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline after:absolute after:-inset-2 after:content-['']"
                            aria-label={`Visit ${exp.organization}`}
                          >
                            <span className="group-hover:underline underline-offset-4">
                              {exp.organization}
                            </span>
                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.5}
                              className="inline-block align-middle ml-1.5 text-muted-foreground group-hover:text-foreground transition-[color,transform] duration-150 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          exp.organization
                        )}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-foreground/80 mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Engineering Highlights & Inline Tech Stack */}
                <div className="lg:col-span-7 flex flex-col gap-4 min-w-0">
                  {visibleHighlights && visibleHighlights.length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {visibleHighlights.map((hl, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5 text-pretty"
                        >
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-muted-foreground/60 mt-2 shrink-0"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.techStack && exp.techStack.length > 0 && (
                    <p className="text-xs font-mono text-muted-foreground pt-1">
                      {exp.techStack.join(" · ")}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
