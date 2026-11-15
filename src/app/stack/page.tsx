import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackHomeLink } from "@/components/ui/back-home-link";
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
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-6 sm:py-8 lg:pt-7 lg:pb-12"
      >
        <div className="@container max-w-[980px] mx-auto flex flex-col gap-12 sm:gap-14">
          {/* Header */}
          <div className="flex flex-col gap-5 lg:pt-1">
            <div>
              <BackHomeLink />
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

          {/* 2-Column Editorial Hairline Stack Grid */}
          <div className="grid grid-cols-1 @2xl:grid-cols-2 gap-x-10 gap-y-12">
            {stackCatalog.map((group, idx) => (
              <section key={group.category} className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-sm font-medium text-foreground">
                    {group.category}
                  </h2>
                  <span className="text-xs font-mono tabular-nums text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                    >
                      <span className="text-sm font-medium text-foreground shrink-0">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground sm:text-right text-pretty">
                        {item.role}
                      </span>
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
