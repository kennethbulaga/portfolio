"use client";

import { useEffect, RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Locks background scroll, moves initial focus into a modal dialog,
 * traps Tab / Shift+Tab within it, and restores trigger focus on close.
 */
export function useDialogFocusTrap(
  isOpen: boolean,
  containerRef: RefObject<HTMLElement | null>,
  onClose: () => void,
  onKeyDownExtra?: (e: KeyboardEvent) => void
) {
  useEffect(() => {
    if (!isOpen) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusRaf = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;
      const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        container.focus();
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const container = containerRef.current;
        if (!container) return;
        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => el.offsetParent !== null || el === document.activeElement);

        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (
            document.activeElement === first ||
            !container.contains(document.activeElement)
          ) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (
            document.activeElement === last ||
            !container.contains(document.activeElement)
          ) {
            e.preventDefault();
            first.focus();
          }
        }
        return;
      }

      onKeyDownExtra?.(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(focusRaf);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      prevFocus?.focus();
    };
  }, [isOpen, containerRef, onClose, onKeyDownExtra]);
}
