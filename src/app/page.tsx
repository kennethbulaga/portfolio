"use client";

import { useState, useEffect } from "react";
import { Navbar, Hero, Projects, Experience, Education, Footer } from "@/components/sections";
import { CaseStudyDrawer } from "@/components/ui/case-study-drawer";
import { CommandMenu } from "@/components/ui/command-menu";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Navbar
        onOpenCaseStudy={(studyId) => setActiveCaseStudyId(studyId || "jp-connect")}
        onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
      />
      
      {/* Global Ambient Depth Light */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_70%)]" />
      </div>

      <main className="min-h-screen">
        <Hero />
        <SectionDivider />
        <Projects onOpenCaseStudy={(studyId) => setActiveCaseStudyId(studyId || "jp-connect")} />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <Footer />
      </main>

      {/* Flagship Case Study Interactive Drawer */}
      <CaseStudyDrawer
        isOpen={!!activeCaseStudyId}
        studyId={activeCaseStudyId}
        onClose={() => setActiveCaseStudyId(null)}
      />

      {/* Global Command Palette (Cmd+K / Ctrl+K) */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        onOpenCaseStudy={(studyId) => setActiveCaseStudyId(studyId || "jp-connect")}
      />
    </>
  );
}
