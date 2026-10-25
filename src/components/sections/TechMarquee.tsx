"use client";

import Image from "next/image";
import Link from "next/link";
import { Database, Server, Code2, ArrowUpRight } from "lucide-react";
import { techMarqueeItems, TechMarqueeItem } from "@/data/portfolio";

function TechItemBadge({ item }: { item: TechMarqueeItem }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted/60 transition-colors shrink-0 select-none">
      <div className="relative size-4 flex items-center justify-center shrink-0">
        {item.darkIcon && item.icon ? (
          <>
            <Image
              src={item.icon}
              alt={item.name}
              width={16}
              height={16}
              className="size-3.5 object-contain dark:hidden"
            />
            <Image
              src={item.darkIcon}
              alt={item.name}
              width={16}
              height={16}
              className="size-3.5 object-contain hidden dark:block"
            />
          </>
        ) : item.icon ? (
          <Image
            src={item.icon}
            alt={item.name}
            width={16}
            height={16}
            className={`size-3.5 object-contain ${
              item.invertInDark ? "dark:invert" : ""
            } ${item.invertInLight ? "invert dark:invert-0" : ""}`}
          />
        ) : item.id === "postgres" ? (
          <Database size={14} className="text-foreground" />
        ) : item.id === "nodejs" ? (
          <Server size={14} className="text-foreground" />
        ) : (
          <Code2 size={14} className="text-foreground" />
        )}
      </div>

      <span className="text-xs font-medium text-foreground font-mono whitespace-nowrap">
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
    <div id="stack" className="w-full pt-2 overflow-hidden">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xs font-medium text-muted-foreground">
          Core Stack & Tooling
        </h2>
        <Link
          href="/stack"
          className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Full Stack Spec</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee py-1">
          <div className="flex items-center gap-2.5 pr-2.5 shrink-0">
            {techMarqueeItems.map((item, index) => (
              <TechItemBadge key={`set1-${item.id}-${index}`} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-2.5 pr-2.5 shrink-0" aria-hidden="true">
            {techMarqueeItems.map((item, index) => (
              <TechItemBadge key={`set2-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
