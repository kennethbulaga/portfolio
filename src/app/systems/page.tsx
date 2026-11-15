import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Production systems by Kenneth Bulaga: JP Connect, OWWA CSMR and SPRS, and JP Intrams, built with Next.js, TypeScript, and PostgreSQL.",
  alternates: { canonical: "/systems" },
};

export default function SystemsPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-10 lg:py-12"
      >
        <div className="max-w-[980px] mx-auto flex flex-col gap-2 sm:gap-4 [&>section]:pt-2 [&>section]:sm:pt-4">
          <div className="pt-2 sm:pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Home</span>
            </Link>
          </div>

          <Projects />

          <Footer />
        </div>
      </main>
    </div>
  );
}
