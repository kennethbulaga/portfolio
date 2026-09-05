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

type TabType = "overview" | "architecture" | "deepdives" | "interview";

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
            className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[92dvh] max-w-4xl flex flex-col overflow-hidden rounded-none sm:rounded-2xl border-0 sm:border border-border bg-card text-card-foreground shadow-2xl z-10"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-6 border-b border-border bg-card/95 sm:bg-card/60 backdrop-blur-md shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <Badge variant="outline" className="text-[10px] sm:text-xs bg-primary/10 text-primary border-primary/20 px-2 py-0.5">
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
                    <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex gap-1 text-xs h-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span>Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    </Button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50 sm:border-transparent"
                    aria-label="Close modal"
                  >
                    <X size={19} />
                  </button>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex items-center gap-1 sm:gap-2 mt-3 sm:mt-4 overflow-x-auto pt-1 no-scrollbar">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === "overview"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Layers size={14} />
                  Overview & Scale
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === "architecture"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <ShieldCheck size={14} />
                  Security & Architecture
                </button>
                <button
                  onClick={() => setActiveTab("deepdives")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === "deepdives"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Cpu size={14} />
                  Technical Deep-Dives
                </button>
                <button
                  onClick={() => setActiveTab("interview")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === "interview"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <HelpCircle size={14} />
                  Architecture & Decisions FAQ
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
                      Institutional Scope & Context
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
                      {study.scaleSummary}
                    </p>
                  </div>

                  {/* Production Metrics Grid */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      Live Production Metrics ({study.id === "owwa-csmr" ? "8 Reporting Cycles Active" : study.id === "jp-intrams" || study.id === "sjp2cd-leaderboard" ? "2 Tournament Seasons (2025 Archive & 2026 Live)" : "2 Semesters Active"})
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
                      Institutional Bottlenecks Solved
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
                          Verified Leadership Commendation
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

                  {/* Production System Surfaces & Dashboards Gallery */}
                  {projectScreenshots.length > 0 && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                        Production System Surfaces & Dashboards
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

              {/* TAB 2: ARCHITECTURE & SECURITY */}
              {activeTab === "architecture" && (
                <div className="space-y-6">
                  {/* Visual Production Request & Data Flow */}
                  <div className="p-4 sm:p-5 rounded-xl border border-border bg-card space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                        <Cpu size={14} className="text-primary" />
                        <span>Production Request & Data Pipeline</span>
                      </p>
                      <span className="text-[10px] font-mono text-emerald-500 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        {study.id === "owwa-csmr"
                          ? "● 100% ARTA / CSC Parity"
                          : study.id === "jp-intrams" || study.id === "sjp2cd-leaderboard"
                          ? "● <500ms Realtime Sync"
                          : "● 0 Overlap Guarantee"}
                      </span>
                    </div>

                    {study.id === "owwa-csmr" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-primary font-bold">01. Smart Matrix</span>
                          <p className="text-xs font-semibold text-foreground">Live Arithmetic</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Client-side sum check & Likert scale validation</p>
                        </div>

                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-sky-500 font-bold">02. JWT & Zod Gate</span>
                          <p className="text-xs font-semibold text-foreground">Server Actions</p>
                          <p className="text-[10px] text-muted-foreground font-sans">jose HS256 tokens & multi-office permission verification</p>
                        </div>

                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-amber-500 font-bold">03. JSONB Core</span>
                          <p className="text-xs font-semibold text-foreground">Postgres Storage</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Unique key on (office_id, month, year) + snapshots</p>
                        </div>

                        <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 relative space-y-1">
                          <span className="text-[10px] text-emerald-500 font-bold">04. ExcelJS Engine</span>
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">ARTA Consolidation</p>
                          <p className="text-[10px] text-muted-foreground font-sans">1-click server-side master workbook synthesis in &lt;1s</p>
                        </div>
                      </div>
                    ) : study.id === "jp-intrams" || study.id === "sjp2cd-leaderboard" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-primary font-bold">01. Realtime WS</span>
                          <p className="text-xs font-semibold text-foreground">Supabase Channel</p>
                          <p className="text-[10px] text-muted-foreground font-sans">WebSocket change stream on points_log in &lt;500ms</p>
                        </div>

                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-sky-500 font-bold">02. Upstash Gate</span>
                          <p className="text-xs font-semibold text-foreground">Serverless Redis</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Atomic SETNX device locks & pipelined cheer voting</p>
                        </div>

                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-amber-500 font-bold">03. Dynamic Podium</span>
                          <p className="text-xs font-semibold text-foreground">Framer Motion</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Live 3D podium calculation & celebration confetti</p>
                        </div>

                        <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 relative space-y-1">
                          <span className="text-[10px] text-emerald-500 font-bold">04. Arena /tv Kiosk</span>
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Digital Signage</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Auto-cycling 5-screen display for gym TVs & projectors</p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-primary font-bold">01. SSO Entry</span>
                          <p className="text-xs font-semibold text-foreground">Google OAuth</p>
                          <p className="text-[10px] text-muted-foreground font-sans">@sjp2cd.edu.ph domain locked for 5,536 users</p>
                        </div>

                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-sky-500 font-bold">02. Edge Guard</span>
                          <p className="text-xs font-semibold text-foreground">Next.js 16 SSR</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Route handlers & RBAC permission verification</p>
                        </div>

                        <div className="p-3 rounded-lg border border-border bg-muted/40 relative space-y-1">
                          <span className="text-[10px] text-amber-500 font-bold">03. RLS Isolation</span>
                          <p className="text-xs font-semibold text-foreground">Postgres RLS</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Row-level security: zero cross-college data leaks</p>
                        </div>

                        <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 relative space-y-1">
                          <span className="text-[10px] text-emerald-500 font-bold">04. Conflict-Free</span>
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Schedule Engine</p>
                          <p className="text-[10px] text-muted-foreground font-sans">Automated validator for 658 multi-room exam slots</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Architecture Diagram Visualization */}
                  <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Three-Tier Defense-in-Depth Architecture
                    </p>

                    <div className="space-y-3 font-mono text-xs">
                      {study.id === "owwa-csmr" ? (
                        <>
                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <ShieldCheck size={16} className="text-primary shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 1: Stateless Cryptographic Auth</span>
                                <p className="text-[11px] text-muted-foreground">jose JWT HS256 tokens in HttpOnly secure cookies with multi-office claims</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              Stateless JWT Gate
                            </Badge>
                          </div>

                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-sky-500 shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 2: Real-Time Arithmetic & Zod Gate</span>
                                <p className="text-[11px] text-muted-foreground">AutoCalcTableInput live validation + Next.js Server Action Zod verification</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              0 Sum Drift
                            </Badge>
                          </div>

                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Database size={16} className="text-emerald-500 shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 3: Compound Constraints & Audit Ledger</span>
                                <p className="text-[11px] text-muted-foreground">Unique (office_id, month, year) compound index + immutable audit_logs</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              Zero Duplicate Reports
                            </Badge>
                          </div>
                        </>
                      ) : study.id === "jp-intrams" || study.id === "sjp2cd-leaderboard" ? (
                        <>
                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <ShieldCheck size={16} className="text-primary shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 1: Real-Time WebSocket Channel</span>
                                <p className="text-[11px] text-muted-foreground">Supabase Realtime channels with instantaneous cumulative rank recalculations</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              &lt;500ms Sync
                            </Badge>
                          </div>

                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-sky-500 shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 2: High-Velocity Voting Decoupling</span>
                                <p className="text-[11px] text-muted-foreground">Upstash Serverless Redis REST API with atomic SETNX rate-limiting</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              Zero DB CPU Spikes
                            </Badge>
                          </div>

                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Database size={16} className="text-emerald-500 shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 3: Edge CDN & Arena Signage Kiosk</span>
                                <p className="text-[11px] text-muted-foreground">Next.js 16 App Router /tv digital signage with jittered client polling fallback</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              24/7 Arena Broadcast
                            </Badge>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <ShieldCheck size={16} className="text-primary shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 1: Network Gate</span>
                                <p className="text-[11px] text-muted-foreground">Next.js 16 proxy.ts route matcher & RBAC</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              HTTP Request Boundary
                            </Badge>
                          </div>

                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-sky-500 shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 2: Identity SSO Gate</span>
                                <p className="text-[11px] text-muted-foreground">Google Workspace OAuth locked to @sjp2cd.edu.ph</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              Cryptographic Claims
                            </Badge>
                          </div>

                          <div className="p-3 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Database size={16} className="text-emerald-500 shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">Layer 3: Database Isolation (PostgreSQL RLS)</span>
                                <p className="text-[11px] text-muted-foreground">Supabase SSR + Row-Level Security: auth.uid() = student_id</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[10px] w-fit">
                              Zero Tenant Leakage
                            </Badge>
                          </div>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                      {study.architectureSummary}
                    </p>
                  </div>

                  {/* Security Highlights */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      Core Security Enforcements
                    </h3>
                    <div className="space-y-2">
                      {study.securityPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/70 bg-card/60 text-xs">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: DEEP DIVES */}
              {activeTab === "deepdives" && (
                <div className="space-y-4">
                  {study.deepDives.map((dive, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                          Deep Dive {idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-semibold text-foreground">
                          {dive.title}
                        </h4>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-muted/40 space-y-1">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-amber-500 font-medium flex items-center gap-1">
                            <AlertTriangle size={12} />
                            The Challenge
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {dive.challenge}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-muted/40 space-y-1">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-sky-500 font-medium flex items-center gap-1">
                            <Cpu size={12} />
                            Engineered Solution
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {dive.solution}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-muted/40 space-y-1">
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
              )}

              {/* TAB 4: ARCHITECTURE & DECISIONS FAQ */}
              {activeTab === "interview" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl border border-border bg-muted/30">
                    <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-1">
                      System Architecture & Engineering Decisions FAQ
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Direct answers on the technical architecture, security trade-offs, and cloud optimizations engineered while building and scaling {study.id === "owwa-csmr" ? "the OWWA CSMR System" : study.id === "jp-intrams" || study.id === "sjp2cd-leaderboard" ? "JP Intrams" : "JP Connect"}.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {study.qaList.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-border bg-card space-y-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground flex items-start gap-2">
                          <span className="text-primary font-mono">Q{idx + 1}:</span>
                          <span>&ldquo;{item.question}&rdquo;</span>
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed pl-6 border-l border-primary/30">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="p-3 sm:p-4 border-t border-border bg-card/95 sm:bg-muted/30 flex items-center justify-between gap-2 shrink-0">
              <span className="text-[10px] sm:text-[11px] text-muted-foreground font-mono truncate">
                {study.institution} · Production Verified
              </span>
              <Button size="sm" variant="default" onClick={onClose} className="h-8 text-xs shrink-0 px-3">
                Close Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
