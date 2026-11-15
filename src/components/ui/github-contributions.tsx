"use client";

import * as React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { socialLinks } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const monochromeTheme = {
  light: [
    "#efefee",
    "#d4d4d2",
    "#a3a3a0",
    "#5e5e5b",
    "#111113",
  ],
  dark: [
    "#1c1c20",
    "#34343a",
    "#62626a",
    "#a3a3a9",
    "#ececee",
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
    <section aria-label="GitHub Contributions" className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-sm font-medium text-muted-foreground">
          Contributions
        </h2>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
        >
          <span>@{username}</span>
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
      </div>

      <div className="pt-4 border-t border-border w-full overflow-x-auto">
        <div className="min-w-[700px] flex justify-center py-1">
          {mounted ? (
            <GitHubCalendar
              username={username}
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={monochromeTheme}
              blockSize={10}
              blockMargin={3}
              fontSize={12}
            />
          ) : (
            <div className="h-[115px] flex items-center justify-center text-xs text-muted-foreground">
              Loading contribution history...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
