"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MAX_CLAPS = 10;

interface FloatingParticle {
  id: number;
  x: number;
  text: string;
}

export function IWasHereButton() {
  const [likes, setLikes] = useState<number | null>(null);
  const [userClicks, setUserClicks] = useState<number>(0);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // Sync client-only localStorage and fetch initial likes count
  useEffect(() => {
    let isMounted = true;

    try {
      const stored = localStorage.getItem("portfolio_user_likes");
      if (stored) {
        setUserClicks(parseInt(stored, 10) || 0);
      }
    } catch {}

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

    // Optimistic increment
    setLikes((prev) => (prev !== null ? prev + 1 : 1));
    setUserClicks((prev) => {
      const next = Math.min(prev + 1, MAX_CLAPS);
      try {
        localStorage.setItem("portfolio_user_likes", next.toString());
      } catch {}
      return next;
    });

    // Spawn floating particle
    const randomX = (Math.random() - 0.5) * 50;
    const emojis = ["❤️", "💖", "+1", "🔥"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const newParticle: FloatingParticle = {
      id: Date.now() + Math.random(),
      x: randomX,
      text: randomEmoji,
    };
    setParticles((prev) => [...prev, newParticle]);

    // Send POST request
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
  }, [isMaxReached]);

  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Floating Heart Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{ opacity: 1, y: 0, x: particle.x, scale: 0.8 }}
            animate={{ opacity: 0, y: -45, scale: 1.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onAnimationComplete={() => removeParticle(particle.id)}
            className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none text-xs font-bold font-mono select-none z-30"
          >
            {particle.text}
          </motion.span>
        ))}
      </AnimatePresence>

      <Button
        onClick={handleClick}
        disabled={isMaxReached}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variant="outline"
        size="sm"
        className={cn(
          "relative group h-9 px-3.5 rounded-full border-border/80 transition-[background-color,border-color,box-shadow] duration-200 shadow-xs",
          isMaxReached
            ? "bg-rose-500/10 border-rose-500/30 cursor-default opacity-90"
            : "bg-background/80 hover:bg-muted/80 hover:border-rose-500/40"
        )}
        title={
          isMaxReached
            ? `Max ${MAX_CLAPS} likes reached! Thanks for stopping by!`
            : `Click to leave a like (${userClicks}/${MAX_CLAPS})`
        }
      >
        <span className="flex items-center gap-2">
          <motion.span
            animate={
              isHovered && !isMaxReached
                ? { scale: [1, 1.25, 1] }
                : isMaxReached
                ? { scale: 1 }
                : {}
            }
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Heart
              size={14}
              className={cn(
                "transition-[color,fill,transform] duration-200",
                userClicks > 0
                  ? "text-rose-500 fill-rose-500 scale-110"
                  : "text-muted-foreground group-hover:text-rose-500"
              )}
            />
          </motion.span>

          <span className="text-xs font-semibold text-foreground font-mono">
            {isMaxReached ? "Thanks!" : "I was here"}
          </span>

          <span className="h-3.5 w-px bg-border/80 mx-0.5" />

          <span className="text-xs font-mono font-bold text-rose-500 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20 tabular-nums">
            {likes !== null ? likes.toLocaleString() : "..."}
          </span>
        </span>
      </Button>
    </div>
  );
}
