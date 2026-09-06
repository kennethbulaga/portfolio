"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Cloud, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experience, cloudCertifications } from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

export function Experience() {
  return (
    <motion.section
      id="work-experience"
      className="py-12 sm:py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <motion.div className="flex flex-col gap-2 mb-2 sm:mb-4" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-pretty">
            Contract engagements, institutional engineering roles, and public solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <Card className="rounded-2xl transition-[box-shadow,border-color] duration-200 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Briefcase size={20} className="text-primary" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <ul className="flex flex-col gap-6 sm:gap-8">
                {experience.map((exp, index) => (
                  <li key={index} className="relative pl-12">
                    {/* Timeline logo or indicator */}
                    <div className="absolute left-0 size-10 flex items-center justify-center">
                      {exp.logo ? (
                        <div className="relative size-10 rounded-full overflow-hidden bg-background border-2 border-border z-10 image-outline">
                          <Image
                            src={exp.logo}
                            alt={exp.organization}
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        </div>
                      ) : (
                        <div className="size-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-sm">
                          <div className="size-3 rounded-full bg-primary" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    {(() => {
                      const content = (
                        <div className="flex flex-col gap-1.5">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-3">
                            <h4 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                              {exp.organization}
                            </h4>
                            <span className="text-xs font-mono tabular-nums text-muted-foreground whitespace-nowrap shrink-0">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-primary font-medium">
                            {exp.role}
                          </p>

                          {exp.description && (
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0.5 text-pretty">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      );

                      return exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      );
                    })()}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dedicated: Active Cloud & Technical Certifications */}
        {cloudCertifications && cloudCertifications.length > 0 && (
          <Card className="rounded-2xl transition-[box-shadow,border-color] duration-200 hover:shadow-lg border-border/80 bg-card/70 overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/60 bg-muted/20">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground text-balance">
                  <Cloud size={19} className="text-amber-500 shrink-0" />
                  <span>Active Cloud Certifications & Upskilling</span>
                </CardTitle>
                <Badge variant="warning" className="text-[11px] px-2.5 py-1 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>In Progress (2026)</span>
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 flex flex-col gap-4">
              {cloudCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 sm:p-5 rounded-xl border border-border/70 bg-card/50 hover:bg-card hover:border-primary/40 transition-[background-color,border-color,box-shadow] duration-200 flex flex-col gap-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-foreground text-base sm:text-lg text-balance">
                          {cert.title}
                        </h4>
                        {cert.code && (
                          <Badge variant="warning" className="text-xs px-2 py-0">
                            {cert.code}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {cert.issuer} · <span className="font-mono tabular-nums text-xs">{cert.period}</span>
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

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
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
      </div>
    </motion.section>
  );
}
