"use client";

import { useEffect } from "react";

export function ClickBurst() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (e: MouseEvent) => {
      if (mq.matches || e.detail === 0) return;

      const el = document.createElement("div");
      el.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;z-index:9999`;

      const n = 5;
      const base = Math.random() * 360;
      for (let i = 0; i < n; i++) {
        const a = ((base + (i * 360) / n) * Math.PI) / 180;
        const dx = Math.cos(a);
        const dy = Math.sin(a);
        const line = document.createElement("span");
        line.style.cssText =
          "position:absolute;left:0;top:-0.75px;width:7px;height:1.5px;border-radius:1px;background:var(--ink);transform-origin:0 50%";
        el.appendChild(line);
        line.animate(
          [
            {
              transform: `translate(${dx * 3}px, ${dy * 3}px) rotate(${a}rad) scaleX(0.5)`,
              opacity: 0.75,
            },
            {
              transform: `translate(${dx * 13}px, ${dy * 13}px) rotate(${a}rad) scaleX(0.2)`,
              opacity: 0,
            },
          ],
          { duration: 240, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }
        );
      }

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 260);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
