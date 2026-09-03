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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jpConnectCaseStudy } from "@/data/portfolio";

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "overview" | "architecture" | "deepdives" | "interview";

export function CaseStudyDrawer({ isOpen, onClose }: CaseStudyDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

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

  const study = jpConnectCaseStudy;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl z-10"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-border bg-card/60 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      Production Case Study
                    </Badge>
                    <Badge variant="outline" className="text-xs font-mono">
                      Next.js 16 · Supabase SSR · PostgreSQL RLS
                    </Badge>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {study.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {study.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex gap-1 text-xs">
                    <a href="https://jp-connect.vercel.app" target="_blank" rel="noopener noreferrer">
                      <span>Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex items-center gap-1 sm:gap-2 mt-4 overflow-x-auto pt-1 no-scrollbar">
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
                  Tech Lead Defense Q&A
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
                      Live Production Metrics (2 Semesters Active)
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-xl border border-border bg-card/60">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                          <Users size={14} className="text-primary" />
                          <span>Authenticated</span>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                          5,536
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          Google SSO @sjp2cd
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-border bg-card/60">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                          <Database size={14} className="text-primary" />
                          <span>Student Masterlist</span>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                          14,778
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          Across 9 colleges
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-border bg-card/60">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                          <Calendar size={14} className="text-primary" />
                          <span>Exam Schedules</span>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                          658
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          Conflict-free validated
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-border bg-card/60">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          <span>Collisions</span>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-emerald-600 dark:text-emerald-400">
                          0
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          0 Overlap Collisions
                        </p>
                      </div>
                    </div>
                  </div>

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

                  {/* Production System Surfaces & Dashboards Gallery */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      Production System Surfaces & Dashboards
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5 p-2 rounded-xl border border-border bg-card/50">
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border bg-background">
                          <Image
                            src="/projects/jp-connect/1. LandingPage.webp"
                            alt="Landing Page & Student Dashboard"
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-[11px] font-mono font-medium text-foreground px-1">
                          1. Landing Page & Student Portal
                        </p>
                      </div>

                      <div className="space-y-1.5 p-2 rounded-xl border border-border bg-card/50">
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border bg-background">
                          <Image
                            src="/projects/jp-connect/2. PersonalizedExam.webp"
                            alt="Personalized Exam Schedules"
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-[11px] font-mono font-medium text-foreground px-1">
                          2. Personalized Exam Schedules
                        </p>
                      </div>

                      <div className="space-y-1.5 p-2 rounded-xl border border-border bg-card/50">
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border bg-background">
                          <Image
                            src="/projects/jp-connect/3 InstructorDashboard.webp"
                            alt="Instructor Proctoring Dashboard"
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-[11px] font-mono font-medium text-foreground px-1">
                          3. Instructor Proctoring Dashboard
                        </p>
                      </div>

                      <div className="space-y-1.5 p-2 rounded-xl border border-border bg-card/50">
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border bg-background">
                          <Image
                            src="/projects/jp-connect/4. SSC&Campus.webp"
                            alt="SSC Clearance & Campus Life"
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-[11px] font-mono font-medium text-foreground px-1">
                          4. SSC Clearance & Campus Hub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ARCHITECTURE & SECURITY */}
              {activeTab === "architecture" && (
                <div className="space-y-6">
                  {/* Architecture Diagram Visualization */}
                  <div className="p-5 rounded-xl border border-border bg-muted/20 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Two-Tier Defense-in-Depth Architecture
                    </p>

                    <div className="space-y-3 font-mono text-xs">
                      {/* Boundary 1 */}
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

                      {/* Boundary 2 */}
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

                      {/* Boundary 3 */}
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

              {/* TAB 4: INTERVIEW DEFENSE Q&A */}
              {activeTab === "interview" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl border border-border bg-muted/30">
                    <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-1">
                      Senior Engineering Interview Readiness
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Technical explanations regarding architectural trade-offs, security model, and concurrency guarantees implemented across the JP Connect ecosystem.
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
            <div className="p-3 sm:p-4 border-t border-border bg-muted/30 flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground font-mono">
                St. John Paul II College of Davao · Production Verified
              </span>
              <Button size="sm" variant="default" onClick={onClose}>
                Close Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
