"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Shared clipboard copy hook for email CTAs with timed reset.
 */
export function useCopyEmail(email: string, resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), resetMs);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }, [email, resetMs]);

  return { copied, copyEmail };
}
