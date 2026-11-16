"use client";

import { Check, Copy } from "lucide-react";
import { useCopyEmail } from "@/hooks/use-copy-email";

export function FooterCopyEmailButton({ email }: { email: string }) {
  const { copied, copyEmail } = useCopyEmail(email);

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="btn btn-light h-11 px-4 text-xs cursor-pointer"
    >
      {copied ? (
        <>
          <Check size={16} strokeWidth={1.5} className="text-[var(--green-ink)]" />
          <span className="text-[var(--green-ink)] font-medium">Email copied</span>
        </>
      ) : (
        <>
          <Copy size={16} strokeWidth={1.5} className="text-muted-foreground" />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}
