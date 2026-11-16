import { Mail, ArrowUpRight } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolio";
import { FooterCopyEmailButton } from "@/components/ui/footer-copy-email-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const externalChannels = socialLinks.filter(
    (l) => l.platform !== "Email" && l.platform !== "TikTok"
  );

  return (
    <footer
      id="contact"
      className="pt-10 pb-6 border-t border-border flex flex-col gap-6"
    >
      {/* Top Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-foreground">
            {personalInfo.availability.message}
          </p>
          <p className="text-xs text-muted-foreground text-pretty">
            Email me about full-time developer roles or freelance web projects.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              personalInfo.email
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark h-11 px-4 text-xs"
          >
            <Mail size={16} strokeWidth={1.5} />
            <span>Open in Gmail</span>
          </a>

          <FooterCopyEmailButton email={personalInfo.email} />
        </div>
      </div>

      {/* Bottom Hairline Bar: Copyright & Inline Social Links */}
      <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground">
        <p className="tabular-nums">
          © {currentYear} {personalInfo.name} · Davao City, PH
        </p>

        <nav aria-label="Social Links" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {externalChannels.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors after:absolute after:-inset-2 after:content-['']"
            >
              <span>{link.platform}</span>
              <ArrowUpRight size={14} strokeWidth={1.5} className="opacity-60" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
