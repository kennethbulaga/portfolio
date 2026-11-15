"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PixelNameProps {
  text: string;
  className?: string;
}

export function PixelName({ text, className }: PixelNameProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled || !wrapRef.current) return;
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const w = Math.ceil(rect.width) + 4;
      const h = Math.ceil(rect.height) + 4;

      const dpr = window.devicePixelRatio || 1;
      const style = getComputedStyle(el);
      const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const color = style.color;

      const src = document.createElement("canvas");
      src.width = w * dpr;
      src.height = h * dpr;
      const sctx = src.getContext("2d");
      if (!sctx) return;
      sctx.scale(dpr, dpr);
      sctx.font = font;
      sctx.fillStyle = color;
      sctx.textBaseline = "top";
      sctx.fillText(text, 0, 2);

      const canvas = document.createElement("canvas");
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const small = document.createElement("canvas");
      const smCtx = small.getContext("2d");
      if (!smCtx) return;

      el.classList.add("is-pixel");
      el.appendChild(canvas);

      const steps = [8, 6, 4, 3, 2, 1];
      const duration = 360;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const block = steps[Math.min(steps.length - 1, Math.floor(t * steps.length))];
        const sw = Math.max(1, Math.round(w / block));
        const sh = Math.max(1, Math.round(h / block));
        small.width = sw;
        small.height = sh;
        if (small.width <= 0 || small.height <= 0 || src.width <= 0 || src.height <= 0) {
          canvas.remove();
          el.classList.remove("is-pixel");
          return;
        }
        smCtx.imageSmoothingEnabled = false;
        smCtx.clearRect(0, 0, sw, sh);
        smCtx.drawImage(src, 0, 0, sw, sh);

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(small, 0, 0, sw, sh, 0, 0, w, h);

        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          canvas.remove();
          el.classList.remove("is-pixel");
        }
      };

      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      el.classList.remove("is-pixel");
      el.querySelector("canvas")?.remove();
    };
  }, [text]);

  return (
    <span ref={wrapRef} className={cn("pixel-name inline-block", className)}>
      {text}
    </span>
  );
}
