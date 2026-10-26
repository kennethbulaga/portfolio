import { ImageResponse } from "next/og";
import { jpConnectMetrics, personalInfo } from "@/data/portfolio";

export const alt = `${personalInfo.name} — ${personalInfo.subHeadline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F0F11",
          color: "#FCFCFB",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="72" height="72" viewBox="0 0 512 512" fill="none">
            <rect width="512" height="512" rx="96" fill="#FCFCFB" />
            <path
              d="M 88 128 L 130 128 L 130 220 L 212 128 L 396 128 L 424 156 L 424 232 L 400 256 L 424 280 L 424 356 L 396 384 L 212 384 L 130 292 L 130 384 L 88 384 Z M 153 256 L 248 351 L 248 161 Z M 290 170 L 290 235 L 369 235 L 382 222 L 382 183 L 369 170 Z M 290 277 L 290 342 L 369 342 L 382 329 L 382 290 L 369 277 Z"
              fill="#0F0F11"
              fillRule="evenodd"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 32, color: "#A1A1AA" }}>
            kennethbulaga.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {personalInfo.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#D4D4D8" }}>
            {personalInfo.subHeadline} · Next.js, TypeScript, PostgreSQL
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#A1A1AA" }}>
          {jpConnectMetrics.accounts} SSO accounts · OWWA Region XI reporting systems · Davao City, PH
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
