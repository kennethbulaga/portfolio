"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackHomeLink() {
  return (
    <Link
      href="/"
      onClick={() => {
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
          sessionStorage.setItem("reopen-nav-drawer", "1");
        }
      }}
      className="relative inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-y-3 after:-inset-x-3 after:content-['']"
    >
      <ArrowLeft size={14} />
      <span>Home</span>
    </Link>
  );
}
