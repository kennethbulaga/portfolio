"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/data/portfolio";
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="flex flex-col gap-2 mb-8 sm:mb-12" variants={fadeInUp}>
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
      </div>
    </motion.section>
  );
}
