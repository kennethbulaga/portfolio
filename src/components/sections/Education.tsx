"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  Cloud,
  Code,
  Landmark,
  Trophy,
  ExternalLink,
  ZoomIn,
  X,
  FileCheck,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  education,
  leadership,
  cloudCertifications,
  featuredCredentials,
  Credential,
} from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

const categoryIconMap: Record<string, React.ElementType> = {
  "Cloud & Industry": Cloud,
  "Government & Public Sector": Landmark,
  "Hackathons & Competitions": Code,
  "Institutional Honors": Trophy,
  "Student Leadership": Award,
};

export function Education() {
  const [activeCert, setActiveCert] = useState<Credential | null>(null);

  // Keyboard shortcut listener for Escape key to close certificate zoom modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCert) {
        setActiveCert(null);
      }
    },
    [activeCert]
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
      <motion.section
        id="education"
        className="py-12 sm:py-16 md:py-24 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section Header */}
          <motion.div className="space-y-2 mb-2 sm:mb-4" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Education & Leadership
            </h2>
            <p className="text-muted-foreground">
              Academic degree credentials, student governance appointments, and technical milestones.
            </p>
          </motion.div>

          {/* Two Column Layout: Degree & Student Leadership */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Column - Timeline */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap size={20} className="text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

                  <ul className="space-y-6">
                    {education.map((edu, index) => (
                      <li key={index} className="relative pl-12">
                        {/* Timeline dot/logo */}
                        <div className="absolute left-0 w-10 h-10 flex items-center justify-center">
                          {edu.logo ? (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-background border-2 border-border z-10">
                              <Image
                                src={edu.logo}
                                alt={edu.institution}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-3 h-3 rounded-full z-10 ${
                                edu.isCurrent
                                  ? "bg-primary ring-4 ring-primary/20"
                                  : "bg-muted-foreground"
                              }`}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-medium uppercase tracking-wide text-foreground">
                              {edu.level}
                            </span>
                            {edu.status && (
                              <span className="text-[11px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {edu.status}
                              </span>
                            )}
                          </div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {edu.institution}
                          </h4>
                          {edu.program && (
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {edu.program}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Column - Timeline */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award size={20} className="text-primary" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

                  <ul className="space-y-6">
                    {leadership.map((position, index) => {
                      const content = (
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                              {position.organization}
                            </h4>
                            {position.isCurrent && (
                              <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {position.role}
                          </p>
                          <p className="text-[11px] font-mono text-muted-foreground">
                            {position.period}
                          </p>
                        </div>
                      );

                      return (
                        <li key={index} className="relative pl-12">
                          {/* Timeline dot/logo */}
                          <div className="absolute left-0 w-10 h-10 flex items-center justify-center">
                            {position.logo ? (
                              <div
                                className={`relative w-10 h-10 rounded-full overflow-hidden bg-background border-2 z-10 ${
                                  position.isCurrent ? "border-primary" : "border-border"
                                }`}
                              >
                                <Image
                                  src={position.logo}
                                  alt={position.organization}
                                  fill
                                  sizes="40px"
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div
                                className={`w-3 h-3 rounded-full z-10 ${
                                  position.isCurrent
                                    ? "bg-primary ring-4 ring-primary/20"
                                    : "bg-muted-foreground"
                                }`}
                              />
                            )}
                          </div>

                          {/* Content */}
                          {position.link ? (
                            <a
                              href={position.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              {content}
                            </a>
                          ) : (
                            content
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dedicated Section 1: Active Cloud & Technical Certifications */}
          {cloudCertifications && cloudCertifications.length > 0 && (
            <Card className="transition-all duration-300 hover:shadow-lg border-border/80 bg-card/70 overflow-hidden">
              <CardHeader className="pb-3 border-b border-border/60 bg-muted/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground">
                    <Cloud size={19} className="text-amber-500 shrink-0" />
                    <span>Active Cloud Certifications & Upskilling</span>
                  </CardTitle>
                  <span className="text-[11px] font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>In Progress (2026)</span>
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 space-y-4">
                {cloudCertifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 sm:p-5 rounded-xl border border-border/70 bg-card/50 hover:bg-card hover:border-primary/40 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-foreground text-base sm:text-lg">
                            {cert.title}
                          </h4>
                          {cert.code && (
                            <Badge variant="outline" className="font-mono text-xs px-2 py-0 border-amber-500/40 text-amber-600 dark:text-amber-400">
                              {cert.code}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {cert.issuer} · <span className="font-mono text-xs">{cert.period}</span>
                        </p>
                      </div>

                      {cert.link && (
                        <Button asChild size="sm" variant="outline" className="h-8 px-3 text-xs gap-1.5 shrink-0">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <span>Syllabus & Exam Roadmap</span>
                            <ExternalLink size={13} />
                          </a>
                        </Button>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {cert.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted/70 text-muted-foreground border border-border/50"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Dedicated Section 2: Featured Technical Milestones & Institutional Honors */}
          {featuredCredentials && featuredCredentials.length > 0 && (
            <Card className="transition-all duration-300 hover:shadow-lg border-border/80 bg-card/70 overflow-hidden">
              <CardHeader className="pb-3 border-b border-border/60 bg-muted/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground">
                    <BadgeCheck size={19} className="text-primary shrink-0" />
                    <span>Technical Milestones & Institutional Honors</span>
                  </CardTitle>
                  <span className="text-[11px] font-mono font-medium text-muted-foreground flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-full border border-border/70">
                    <FileCheck size={13} className="text-primary" />
                    <span>Verified Credentials</span>
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredCredentials.map((item) => {
                    const CategoryIcon = categoryIconMap[item.category] || BadgeCheck;
                    return (
                      <div
                        key={item.id}
                        className="p-4 rounded-xl border border-border/70 bg-card/50 hover:bg-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-3.5 shadow-xs group"
                      >
                        <div className="space-y-3">
                          {/* Certificate Thumbnail Preview */}
                          {item.image && (
                            <div
                              onClick={() => setActiveCert(item)}
                              className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border/80 bg-background cursor-zoom-in group/img shadow-2xs"
                              title="Click to inspect full resolution certificate"
                            >
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover transition-transform duration-300 group-hover/img:scale-[1.03]"
                              />
                              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <div className="px-2.5 py-1 rounded-full bg-zinc-900/90 text-white text-[11px] font-medium backdrop-blur-md flex items-center gap-1 border border-white/20 shadow-md">
                                  <ZoomIn size={12} />
                                  <span>Inspect Certificate</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Title & Metadata */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted/60 flex items-center gap-1 border border-border/40">
                                <CategoryIcon size={11} className="text-primary shrink-0" />
                                <span>{item.category}</span>
                              </span>
                              
                              {item.status === "Active Production" ? (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  <span>Active Production</span>
                                </span>
                              ) : item.status === "Highest Honor" ? (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                  <span>Highest Honor</span>
                                </span>
                              ) : (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary border border-primary/20">
                                  {item.status}
                                </span>
                              )}
                            </div>

                            <h4 className="font-bold text-foreground text-sm sm:text-base leading-snug pt-0.5">
                              {item.title}
                            </h4>

                            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <Calendar size={12} className="text-primary shrink-0" />
                              <span>{item.period} · {item.issuer}</span>
                            </p>
                          </div>

                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Footer Actions & Signatories */}
                        <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {item.skills?.slice(0, 3).map((s) => (
                              <span
                                key={s}
                                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40"
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => setActiveCert(item)}
                            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 font-mono shrink-0"
                          >
                            <BadgeCheck size={13} />
                            <span>View Full</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </motion.section>

      {/* Certificate High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {activeCert && activeCert.image && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Floating Action Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <div className="space-y-0.5 min-w-0 pr-4">
                  <p className="text-xs sm:text-sm font-semibold truncate">
                    {activeCert.title}
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {activeCert.issuer} · {activeCert.period}
                  </p>
                </div>

                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 rounded-full bg-zinc-800/90 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors border border-white/10 shrink-0"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[75vh] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/50">
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1000px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Signatories Footer Note */}
              {activeCert.signatories && activeCert.signatories.length > 0 && (
                <div className="w-full pt-3 text-center">
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
