import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { jpConnectMetrics, personalInfo } from "@/data/portfolio";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

// Dark monochrome tokens from portfolio.md / src/app/globals.css
const TOKENS = {
  bg: "#0f0f11",
  surface: "#19191c",
  tile: "#1c1c20",
  ink: "#ececee",
  ink2: "#c6c6cb",
  inkBody: "#adadb3",
  muted: "#8b8b91",
  faint: "#737379",
  line: "#232327",
  lineStrong: "#34343a",
  green: "#2f9e5b",
} as const;

interface OgAssets {
  figtreeRegular: Buffer;
  figtreeMedium: Buffer;
  figtreeSemiBold: Buffer;
  monoRegular: Buffer;
  avatarDataUri: string;
}

let cachedAssetsPromise: Promise<OgAssets> | null = null;

function loadOgAssets(): Promise<OgAssets> {
  if (!cachedAssetsPromise) {
    cachedAssetsPromise = (async () => {
      const root = process.cwd();
      const [figtreeRegular, figtreeMedium, figtreeSemiBold, monoRegular, avatarWebp] =
        await Promise.all([
          readFile(path.join(root, "public/fonts/Figtree-Regular.ttf")),
          readFile(path.join(root, "public/fonts/Figtree-Medium.ttf")),
          readFile(path.join(root, "public/fonts/Figtree-SemiBold.ttf")),
          readFile(path.join(root, "public/fonts/JetBrainsMono-Regular.ttf")),
          readFile(path.join(root, "public/profile/avatar.webp")),
        ]);

      const avatarPng = await sharp(avatarWebp)
        .resize(256, 256, { fit: "cover", position: "top" })
        .png()
        .toBuffer();

      return {
        figtreeRegular,
        figtreeMedium,
        figtreeSemiBold,
        monoRegular,
        avatarDataUri: `data:image/png;base64,${avatarPng.toString("base64")}`,
      };
    })();
  }
  return cachedAssetsPromise;
}

export interface OgCardProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export async function renderOgImage({
  eyebrow = "PORTFOLIO · DAVAO CITY, PH",
  title = "Building practical web software for real operations.",
  subtitle = `Shipping JP Connect (${jpConnectMetrics.accounts}+ profiles), JP Intrams, and OWWA Region XI reporting platforms with Next.js & TypeScript.`,
}: OgCardProps = {}): Promise<ImageResponse> {
  const assets = await loadOgAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: TOKENS.bg,
          color: TOKENS.ink,
          padding: "52px 56px",
          fontFamily: "Figtree",
        }}
      >
        {/* Top Bar: Identity + Availability Pill */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "28px",
            borderBottom: `1px solid ${TOKENS.line}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={assets.avatarDataUri}
              alt={personalInfo.name}
              width={72}
              height={72}
              style={{
                borderRadius: "16px",
                border: `1px solid ${TOKENS.lineStrong}`,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "26px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: TOKENS.ink,
                  lineHeight: 1.2,
                }}
              >
                {personalInfo.name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: TOKENS.muted,
                  lineHeight: 1.2,
                }}
              >
                {personalInfo.subHeadline}
              </div>
            </div>
          </div>

          {/* Availability Pill */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              backgroundColor: TOKENS.surface,
              border: `1px solid ${TOKENS.lineStrong}`,
              borderRadius: "999px",
              padding: "10px 18px",
              fontSize: "15px",
              fontWeight: 500,
              color: TOKENS.ink2,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "9px",
                height: "9px",
                borderRadius: "999px",
                backgroundColor: TOKENS.green,
              }}
            />
            <div style={{ display: "flex" }}>
              {personalInfo.availability.message}
            </div>
          </div>
        </div>

        {/* Center Editorial Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: "15px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: TOKENS.faint,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "54px",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              color: TOKENS.ink,
              maxWidth: "980px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: 1.45,
              color: TOKENS.inkBody,
              maxWidth: "960px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom Hairline Ledger */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: `1px solid ${TOKENS.line}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "36px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: TOKENS.ink,
                }}
              >
                {`${jpConnectMetrics.accounts}+`}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: TOKENS.muted,
                }}
              >
                Authenticated Profiles
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "1px",
                height: "18px",
                backgroundColor: TOKENS.lineStrong,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: TOKENS.ink,
                }}
              >
                4,632+
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: TOKENS.muted,
                }}
              >
                Citizen Feedback Records
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: "17px",
              fontWeight: 400,
              color: TOKENS.ink2,
            }}
          >
            kennethbulaga.dev
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Figtree", data: assets.figtreeRegular, weight: 400, style: "normal" },
        { name: "Figtree", data: assets.figtreeMedium, weight: 500, style: "normal" },
        { name: "Figtree", data: assets.figtreeSemiBold, weight: 600, style: "normal" },
        { name: "JetBrains Mono", data: assets.monoRegular, weight: 400, style: "normal" },
      ],
    },
  );
}
