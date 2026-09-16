"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  HelpCircle,
  CheckCircle2,
  Users,
  Database,
  Calendar,
  AlertTriangle,
  Cloud,
  MessageSquareQuote,
  Tv,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { caseStudies, jpConnectCaseStudy, flagshipProjects } from "@/data/portfolio";

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  studyId?: string | null;
}

type TabType = "overview" | "engineering";

export function CaseStudyDrawer({ isOpen, onClose, studyId }: CaseStudyDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [prevStudyKey, setPrevStudyKey] = useState<string | null>(null);

  const currentStudyKey = isOpen ? (studyId || "default") : null;
  if (currentStudyKey !== prevStudyKey) {
    setPrevStudyKey(currentStudyKey);
    if (isOpen) {
      setActiveTab("overview");
    }
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const study = studyId ? caseStudies[studyId] || jpConnectCaseStudy : jpConnectCaseStudy;
  const project = flagshipProjects.find((p) => p.id === study.id);
  const projectScreenshots = project?.screenshots || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[92dvh] max-w-4xl flex flex-col overflow-hidden rounded-none sm:rounded-3xl border-0 sm:border border-border/70 bg-card text-card-foreground shadow-2xl z-10 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-border/60 bg-card/95 sm:bg-card/70 backdrop-blur-xl shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <Badge variant="outline" className="text-[10px] sm:text-xs bg-primary/10 text-primary border-primary/20 px-2.5 py-0.5 rounded-full">
                      Production Case Study
                    </Badge>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
                    {study.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
                    {study.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                  {project?.link && project.link !== "#" && (
                    <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex gap-1 text-xs h-8 rounded-xl">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span>Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    </Button>
                  )}
                  <button
                    onClick={onClose}
                    className="min-h-[44px] min-w-[44px] size-11 sm:size-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all border border-border/60 flex items-center justify-center active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Tabs Navigation: Apple iOS Segmented Control (Full-width 2-column grid on mobile, inline-flex on desktop) */}
              <div className="w-full sm:w-auto sm:inline-flex grid grid-cols-2 p-1 rounded-xl bg-muted/80 border border-border/50 mt-3 sm:mt-4 gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`w-full justify-center px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeTab === "overview"
                      ? "bg-background text-foreground shadow-xs border border-border/40 font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Layers size={13} />
                  <span>Overview & Impact</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("engineering")}
                  className={`w-full justify-center px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeTab === "engineering"
                      ? "bg-background text-foreground shadow-xs border border-border/40 font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Cpu size={13} />
                  <span>Engineering & Decisions</span>
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* TAB 1: OVERVIEW & METRICS */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Executive Summary */}
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      Project Scope & Context
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
                      {study.scaleSummary}
                    </p>
                  </div>

                  {/* Production Metrics Grid */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      Production Metrics ({study.id === "owwa-csmr" ? "8 Reporting Cycles Active" : study.id === "jp-intrams" || study.id === "sjp2cd-leaderboard" ? "2 Tournament Seasons (2025 Archive & 2026 Live)" : "2 Semesters Active"})
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {study.metrics.map((m, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-border bg-card/60 flex flex-col justify-between min-h-[115px]">
                          <div>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                              {idx === 0 && <Users size={14} className="text-primary shrink-0" />}
                              {idx === 1 && <Database size={14} className="text-primary shrink-0" />}
                              {idx === 2 && <Calendar size={14} className="text-primary shrink-0" />}
                              {idx === 3 && <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />}
                              <span className="truncate font-mono text-[11px]">{m.value}</span>
                            </div>
                            <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                              {m.label}
                            </p>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cost-Aware Cloud Architecture */}
                  {study.costArchitecture && (
                    <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                        <Cloud size={13} className="text-primary" />
                        <span>{study.costArchitecture.title}</span>
                      </p>
                      <ul className="space-y-1.5">
                        {study.costArchitecture.points.map((pt, i) => (
                          <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Problem Statements Solved */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      Operational Challenges Solved
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {study.problemStatements.map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-border bg-card/40 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 rounded-full bg-primary/10 text-primary font-mono text-[11px] items-center justify-center font-bold">
                              {idx + 1}
                            </span>
                            <h4 className="text-xs font-semibold text-foreground">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-[11px] leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stakeholder Endorsement & Institutional Feedback */}
                  {study.endorsement && (
                    <div className="p-4 sm:p-5 rounded-xl border border-primary/30 bg-primary/5 space-y-3 relative overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
                          <MessageSquareQuote size={15} />
                          <span>Stakeholder Endorsement & Commendation</span>
                        </p>
                        <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full font-medium">
                          Official Commendation
                        </span>
                      </div>

                      <blockquote className="text-sm sm:text-base italic text-foreground font-medium leading-relaxed pl-3 border-l-2 border-primary">
                        &ldquo;{study.endorsement.quote}&rdquo;
                      </blockquote>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-3 border-t border-border/50 text-xs">
                        <div>
                          <p className="font-bold text-foreground">
                            {study.endorsement.author}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {study.endorsement.role} · {study.endorsement.department}
                          </p>
                          <p className="text-[10px] font-mono text-primary font-medium">
                            {study.endorsement.institution}
                          </p>
                        </div>

                        {study.endorsement.image && (
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="relative w-16 h-11 rounded-md overflow-hidden border border-border bg-background shadow-xs">
                              <Image
                                src={study.endorsement.image}
                                alt="Official Endorsement Email"
                                fill
                                sizes="80px"
                                className="object-cover"
                              />
                            </div>
                            <span className="text-[10px] font-mono text-muted-foreground">
                              Signed Email
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Live Campus Deployment Showcase */}
                  {study.liveDeployment && (
                    <div className="p-4 sm:p-5 rounded-xl border border-border bg-muted/20 space-y-3 shadow-xs">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Tv size={14} className="text-primary" />
                          <span>Live Campus Deployment & Digital Displays</span>
                        </p>
                        <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live In Production</span>
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div
                          className={`relative w-full rounded-xl overflow-hidden border-2 border-border bg-background shadow-md shrink-0 ${
                            study.liveDeployment.aspect === "16/9"
                              ? "sm:w-64 aspect-[16/9]"
                              : "sm:w-44 aspect-[9/16]"
                          }`}
                        >
                          <Image
                            src={study.liveDeployment.image}
                            alt={study.liveDeployment.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 260px"
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-2 text-left">
                          <h4 className="text-sm sm:text-base font-bold text-foreground">
                            {study.liveDeployment.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {study.liveDeployment.caption}
                          </p>
                          {study.liveDeployment.tags && study.liveDeployment.tags.length > 0 && (
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {study.liveDeployment.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border/70 text-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* System Interfaces & Workflows Gallery */}
                  {projectScreenshots.length > 0 && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                        System Interfaces & Workflows
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {projectScreenshots.map((item, idx) => (
                          <div key={idx} className="space-y-1.5 p-2 rounded-xl border border-border bg-card/50">
                            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border bg-background">
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="object-cover"
                              />
                            </div>
                            <p className="text-[11px] font-mono font-medium text-foreground px-1">
                              {idx + 1}. {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: ENGINEERING & DECISIONS */}
              {activeTab === "engineering" && (
                <div className="space-y-6">
                  {/* Section 1: Core Implementation Challenges */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                        <Cpu size={14} className="text-primary" />
                        <span>Core Implementation Challenges</span>
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        3 Deep Dives
                      </span>
                    </div>

                    <div className="space-y-3">
                      {study.deepDives.map((dive, idx) => (
                        <div key={idx} className="p-4 sm:p-5 rounded-2xl border border-border/70 bg-card space-y-3 shadow-xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                              0{idx + 1}
                            </span>
                            <h4 className="text-sm sm:text-base font-semibold text-foreground">
                              {dive.title}
                            </h4>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-3 text-xs">
                            <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40 space-y-1">
                              <p className="font-mono text-[10px] uppercase tracking-wider text-amber-500 font-medium flex items-center gap-1">
                                <AlertTriangle size={12} />
                                The Challenge
                              </p>
                              <p className="text-muted-foreground leading-relaxed">
                                {dive.challenge}
                              </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40 space-y-1">
                              <p className="font-mono text-[10px] uppercase tracking-wider text-sky-500 font-medium flex items-center gap-1">
                                <Cpu size={12} />
                                Implemented Solution
                              </p>
                              <p className="text-muted-foreground leading-relaxed">
                                {dive.solution}
                              </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40 space-y-1">
                              <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-500 font-medium flex items-center gap-1">
                                <CheckCircle2 size={12} />
                                Production Outcome
                              </p>
                              <p className="text-foreground leading-relaxed font-medium">
                                {dive.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: Architectural Decisions & Trade-Offs */}
                  {study.qaList && study.qaList.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <HelpCircle size={14} className="text-primary" />
                          <span>Architectural Decisions & Trade-Offs</span>
                        </h3>
                        <span className="text-[10px] font-mono text-muted-foreground">
                          Technical Rationale
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {study.qaList.map((item, idx) => (
                          <div key={idx} className="p-4 rounded-xl border border-border/70 bg-card/60 space-y-1.5 shadow-xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                            <h4 className="text-xs sm:text-sm font-semibold text-foreground flex items-start gap-2">
                              <span className="text-primary font-mono text-xs mt-0.5">#{idx + 1}</span>
                              <span>{item.question}</span>
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed pl-5 border-l border-border/80">
                              {item.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Section 3: Data Integrity & System Safeguards */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-primary" />
                      <span>Data Integrity & System Safeguards</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {study.securityPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border/70 bg-card/60 text-xs shadow-xs">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed p-3.5 rounded-xl border border-border/60 bg-muted/20 font-sans">
                      {study.architectureSummary}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="p-3.5 sm:p-4 border-t border-border/60 bg-card/95 sm:bg-muted/30 backdrop-blur-md flex items-center justify-between gap-3 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="size-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                <span className="text-[11px] sm:text-xs text-muted-foreground font-mono truncate">
                  <span className="hidden md:inline">{study.institution} · </span>
                  <span className="text-foreground font-medium">Production Verified</span>
                </span>
              </div>
              <Button size="sm" variant="default" onClick={onClose} className="h-8 text-xs shrink-0 px-3.5 rounded-xl">
                Close Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
