"use client";

import { useState } from "react";
import { Navbar, Hero, Projects, Experience, Education, Footer } from "@/components/sections";
import { CaseStudyDrawer } from "@/components/ui/case-study-drawer";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  return (
    <>
      <Navbar onOpenCaseStudy={(studyId) => setActiveCaseStudyId(studyId || "jp-connect")} />
      
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
    </>
  );
}
