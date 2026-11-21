import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { GithubContributions } from "@/components/ui/github-contributions";
import { Footer } from "@/components/sections/Footer";
import { stackCatalog } from "@/data/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-6 sm:py-8 lg:pt-7 lg:pb-12"
      >
        <div className="max-w-[980px] mx-auto flex flex-col gap-12 sm:gap-16">
          <Hero />
          <Experience previewMode />
          <Projects previewMode />

          {/* Compact Hairline Stack Summary */}
          <section id="stack" className="py-0">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-medium text-muted-foreground">
                  Stack
                </h2>
                <Link
                  href="/stack"
                  className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
                >
                  <span>View all</span>
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </Link>
              </div>

              <div className="border-y border-border divide-y divide-border">
                {stackCatalog.map((group) => (
                  <div
                    key={group.category}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
                  >
                    <span className="text-xs sm:text-sm text-muted-foreground sm:w-48 shrink-0">
                      {group.category}
                    </span>
                    <span className="text-xs sm:text-sm text-foreground leading-relaxed text-pretty">
                      {group.items.map((item) => item.name).join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GithubContributions />
          <Footer />
        </div>
      </main>
    </div>
  );
}
