"use client";

import * as React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { socialLinks } from "@/data/portfolio";
import { ExternalLink, GitCommitHorizontal } from "lucide-react";

// Zinc monochrome palette calibrated for Warm Alabaster (Light) & Matte Carbon (Dark)
const zincTheme = {
  light: [
    "#ebede9", // level 0 (empty: subtle alabaster tint)
    "#d4d4d8", // level 1 (zinc-300)
    "#a1a1aa", // level 2 (zinc-400)
    "#52525b", // level 3 (zinc-600)
    "#18181b", // level 4 (zinc-900 / dark graphite ink)
  ],
  dark: [
    "#1e1e24", // level 0 (empty: subtle dark tint)
    "#3f3f46", // level 1 (zinc-700)
    "#71717a", // level 2 (zinc-500)
    "#a1a1aa", // level 3 (zinc-400)
    "#fafafa", // level 4 (zinc-50 / crisp white ink)
  ],
};

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const githubAccount = socialLinks.find(
    (item) => item.platform.toLowerCase() === "github"
  );
  const username = githubAccount?.username || "kennethbulaga";
  const profileUrl = githubAccount?.url || `https://github.com/${username}`;

  return (
    <section
      aria-label="GitHub Contributions"
      className="rounded-2xl border border-border/80 bg-card/40 p-5 sm:p-6 backdrop-blur-sm text-muted-foreground"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-4">
        <div className="flex items-center gap-2">
          <GitCommitHorizontal className="size-4 text-muted-foreground" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Contribution Graph
          </h2>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          @{username}
          <ExternalLink className="size-3" />
        </a>
      </div>

      {/* Calendar container */}
      <div className="w-full overflow-x-auto scrollbar-thin">
        <div className="min-w-[720px] flex justify-center py-2">
          {mounted ? (
            <GitHubCalendar
              username={username}
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={zincTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          ) : (
            <div className="h-[135px] flex items-center justify-center text-xs text-muted-foreground font-mono">
              Loading contribution history...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
