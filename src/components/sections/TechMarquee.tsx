"use client";

import Image from "next/image";
import { Database, Server, Code2 } from "lucide-react";
import { techMarqueeItems, TechMarqueeItem } from "@/data/portfolio";

function TechItemBadge({ item }: { item: TechMarqueeItem }) {
  return (
    <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-border/70 bg-card/70 hover:bg-card hover:border-primary/40 transition-[background-color,border-color,box-shadow] duration-200 shadow-xs shrink-0 select-none group">
      <div className="relative size-5 flex items-center justify-center shrink-0">
        {item.darkIcon && item.icon ? (
          <>
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className="size-4 object-contain dark:hidden"
            />
            <Image
              src={item.darkIcon}
              alt={item.name}
              width={20}
              height={20}
              className="size-4 object-contain hidden dark:block"
            />
          </>
        ) : item.icon ? (
          <Image
            src={item.icon}
            alt={item.name}
            width={20}
            height={20}
            className={`size-4 object-contain ${
              item.invertInDark ? "dark:invert" : ""
            } ${item.invertInLight ? "invert dark:invert-0" : ""}`}
          />
        ) : item.id === "postgres" ? (
          <Database size={16} className="text-sky-500" />
        ) : item.id === "nodejs" ? (
          <Server size={16} className="text-emerald-500" />
        ) : (
          <Code2 size={16} className="text-primary" />
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors whitespace-nowrap font-mono">
          {item.name}
        </span>
        <span className="text-[10px] text-muted-foreground whitespace-nowrap leading-none mt-0.5">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div id="stack" className="w-full pt-10 pb-4 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
          <Code2 size={14} className="text-primary" />
          What I Build With
        </p>
        <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline-block">
          Hover to pause
        </span>
      </div>

      {/* Marquee Track with edge fade mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 py-1">
          {/* First set of items */}
          {techMarqueeItems.map((item, index) => (
            <TechItemBadge key={`set1-${item.id}-${index}`} item={item} />
          ))}
          {/* Duplicate set for seamless infinite loop */}
          {techMarqueeItems.map((item, index) => (
            <TechItemBadge key={`set2-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
