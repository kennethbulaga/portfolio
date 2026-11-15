import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import { BackHomeLink } from "@/components/ui/back-home-link";

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
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-6 sm:py-8 lg:pt-7 lg:pb-12"
      >
        <div className="max-w-[980px] mx-auto flex flex-col gap-2 sm:gap-4 [&>section]:pt-2 [&>section]:sm:pt-4">
          <div className="lg:pt-1">
            <BackHomeLink />
          </div>

          <Projects />

          <Footer />
        </div>
      </main>
    </div>
  );
}
