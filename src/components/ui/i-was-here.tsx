"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_CLAPS = 3;

interface FloatingParticle {
  id: number;
  x: number;
  text: string;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-likes-updated", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-likes-updated", callback);
  };
}

function getSnapshot(): number {
  try {
    return parseInt(localStorage.getItem("portfolio_user_likes") || "0", 10) || 0;
  } catch {
    return 0;
  }
}

function getServerSnapshot(): number {
  return 0;
}

export function IWasHereButton() {
  const [likes, setLikes] = useState<number | null>(null);
  const userClicks = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;

    async function fetchLikes() {
      try {
        const res = await fetch("/api/likes");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.count === "number") {
            setLikes(data.count);
          }
        }
      } catch (err) {
        console.error("Failed to fetch likes:", err);
      }
    }
    fetchLikes();

    return () => {
      isMounted = false;
    };
  }, []);

  const isMaxReached = userClicks >= MAX_CLAPS;

  const handleClick = useCallback(async () => {
    if (isMaxReached) return;

    setLikes((prev) => (prev !== null ? prev + 1 : 1));
    const next = Math.min(userClicks + 1, MAX_CLAPS);
    try {
      localStorage.setItem("portfolio_user_likes", next.toString());
      window.dispatchEvent(new Event("local-likes-updated"));
    } catch {}

    const randomX = (Math.random() - 0.5) * 40;
    const tokens = ["+1", "ACK", "200 OK"];
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
    const newParticle: FloatingParticle = {
      id: Date.now() + Math.random(),
      x: randomX,
      text: randomToken,
    };
    setParticles((prev) => [...prev, newParticle]);

    try {
      const res = await fetch("/api/likes", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.count === "number") {
          setLikes(data.count);
        }
      }
    } catch (err) {
      console.error("Failed to increment likes:", err);
    }
  }, [isMaxReached, userClicks]);

  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="relative flex items-center justify-between gap-2 px-2 py-2">
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-medium text-foreground font-mono tabular-nums truncate">
          {likes !== null ? `${likes.toLocaleString()} stamps` : "... stamps"}
        </span>
        <span className="text-[11px] text-muted-foreground truncate">
          Visitor log
        </span>
      </div>

      <div className="relative shrink-0">
        <AnimatePresence>
          {!shouldReduceMotion && particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{ opacity: 1, y: 0, x: particle.x, scale: 0.8 }}
              animate={{ opacity: 0, y: -38, scale: 1.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              onAnimationComplete={() => removeParticle(particle.id)}
              className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none text-[11px] font-medium font-mono text-foreground select-none z-30 whitespace-nowrap"
            >
              {particle.text}
            </motion.span>
          ))}
        </AnimatePresence>

        <button
          type="button"
          onClick={handleClick}
          disabled={isMaxReached}
          className={cn(
            "relative h-8 px-3 rounded-[10px] border text-xs font-medium inline-flex items-center gap-1.5 transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] cursor-pointer after:absolute after:-inset-1.5 after:content-['']",
            isMaxReached
              ? "bg-muted border-border text-muted-foreground cursor-default"
              : "bg-background hover:bg-muted border-border text-foreground active:scale-[0.96]"
          )}
          title={
            isMaxReached
              ? `Max ${MAX_CLAPS} stamps reached`
              : `Leave a visitor stamp (${userClicks}/${MAX_CLAPS})`
          }
        >
          <Heart
            size={14}
            strokeWidth={1.5}
            className={cn(
              "transition-colors",
              userClicks > 0 ? "text-foreground fill-current" : "text-muted-foreground"
            )}
          />
          <span>{isMaxReached ? "Thanks!" : "I was here"}</span>
        </button>
      </div>
    </div>
  );
}
