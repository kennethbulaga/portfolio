"use client";

import Image from "next/image";
import Link from "next/link";
import { Database, Server, Code2, ArrowUpRight } from "lucide-react";
import { techMarqueeItems, TechMarqueeItem } from "@/data/portfolio";

function TechItemBadge({ item }: { item: TechMarqueeItem }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card shrink-0 select-none">
      <div className="relative size-4 flex items-center justify-center shrink-0 text-foreground">
        {item.darkIcon && item.icon ? (
          <>
            <Image
              src={item.icon}
              alt={item.name}
              width={16}
              height={16}
              className="size-3.5 object-contain grayscale dark:hidden"
            />
            <Image
              src={item.darkIcon}
              alt={item.name}
              width={16}
              height={16}
              className="size-3.5 object-contain grayscale hidden dark:block"
            />
          </>
        ) : item.icon ? (
          <Image
            src={item.icon}
            alt={item.name}
            width={16}
            height={16}
            className={`size-3.5 object-contain grayscale ${
              item.invertInDark ? "dark:invert" : ""
            } ${item.invertInLight ? "invert dark:invert-0" : ""}`}
          />
        ) : item.id === "postgres" ? (
          <Database size={14} strokeWidth={1.5} />
        ) : item.id === "nodejs" ? (
          <Server size={14} strokeWidth={1.5} />
        ) : (
          <Code2 size={14} strokeWidth={1.5} />
        )}
      </div>

      <span className="text-xs font-medium text-foreground whitespace-nowrap">
        {item.name}
      </span>
      <span className="text-[11px] text-muted-foreground whitespace-nowrap hidden sm:inline">
        · {item.category}
      </span>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div id="stack" className="w-full pt-2">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xs font-medium text-muted-foreground">
          Core Stack & Tooling
        </h2>
        <Link
          href="/stack"
          className="relative inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
        >
          <span>Full Stack Spec</span>
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {techMarqueeItems.map((item) => (
          <TechItemBadge key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
