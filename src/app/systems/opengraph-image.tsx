import { jpConnectMetrics } from "@/data/portfolio";
import { renderOgImage } from "@/lib/og";

export const alt = "Systems | Kenneth Bulaga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "01 / PRODUCTION SYSTEMS · DAVAO CITY, PH",
    title: "Production systems built for real operations.",
    subtitle: `JP Connect (${jpConnectMetrics.accounts}+ profiles), JP Intrams across 23 sports divisions, and OWWA Region XI CSMR & SPRS platforms.`,
  });
}
