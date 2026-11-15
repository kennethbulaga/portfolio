import { renderOgImage } from "@/lib/og";

export const alt = "Experience | Kenneth Bulaga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "02 / WORK EXPERIENCE · DAVAO CITY, PH",
    title: "Full-Stack Developer across campus & government.",
    subtitle:
      "Freelance contract at St. John Paul II College of Davao and Software Developer Intern at OWWA Region XI.",
  });
}
