import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { stackCatalog } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The tools Kenneth Bulaga reaches for when building client systems and independent projects.",
  alternates: { canonical: "/stack" },
};

export default function StackPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-10 lg:py-12"
      >
        <div className="@container max-w-[720px] mx-auto flex flex-col gap-12 sm:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 pt-2 sm:pt-4">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Home</span>
              </Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
                Stack
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                The tools I reach for when building client systems and my own projects.
              </p>
            </div>
          </div>

          {/* 2-Column Minimal Hairline Stack Grid — Holds 2 cols down to 448px (@md) */}
          <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-10 gap-y-12">
            {stackCatalog.map((group) => (
              <section key={group.category} className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-muted-foreground">
                  {group.category}
                </h2>
                <div className="divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="py-3.5 text-sm font-medium text-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
