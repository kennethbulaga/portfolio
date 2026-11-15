import { renderOgImage } from "@/lib/og";

export const alt = "Stack | Kenneth Bulaga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "04 / STACK & TOOLING · DAVAO CITY, PH",
    title: "Next.js, TypeScript, PostgreSQL & Redis.",
    subtitle:
      "The production stack behind client systems, real-time tournament boards, and automated reporting pipelines.",
  });
}
