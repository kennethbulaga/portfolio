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
  logoDataUri: string;
}

let cachedAssetsPromise: Promise<OgAssets> | null = null;

function loadOgAssets(): Promise<OgAssets> {
  if (!cachedAssetsPromise) {
    cachedAssetsPromise = (async () => {
      const root = process.cwd();
      const [figtreeRegular, figtreeMedium, figtreeSemiBold, monoRegular, avatarWebp, logoSvg] =
        await Promise.all([
          readFile(path.join(root, "public/fonts/Figtree-Regular.ttf")),
          readFile(path.join(root, "public/fonts/Figtree-Medium.ttf")),
          readFile(path.join(root, "public/fonts/Figtree-SemiBold.ttf")),
          readFile(path.join(root, "public/fonts/JetBrainsMono-Regular.ttf")),
          readFile(path.join(root, "public/profile/avatar.webp")),
          readFile(path.join(root, "public/logos/kb-logo-dark.svg")),
        ]);

      const [avatarPng, logoPng] = await Promise.all([
        sharp(avatarWebp)
          .resize(600, 600, { fit: "cover", position: "top" })
          .png()
          .toBuffer(),
        sharp(logoSvg).resize(72, 72).png().toBuffer(),
      ]);

      return {
        figtreeRegular,
        figtreeMedium,
        figtreeSemiBold,
        monoRegular,
        avatarDataUri: `data:image/png;base64,${avatarPng.toString("base64")}`,
        logoDataUri: `data:image/png;base64,${logoPng.toString("base64")}`,
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
  eyebrow,
  title,
  subtitle = `Shipping JP Connect (${jpConnectMetrics.accounts}+ profiles), JP Intrams, and OWWA Region XI reporting platforms with Next.js & TypeScript.`,
}: OgCardProps = {}): Promise<ImageResponse> {
  const assets = await loadOgAssets();
  const isHome = !title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          gap: "48px",
          backgroundColor: TOKENS.bg,
          color: TOKENS.ink,
          padding: "52px 56px",
          fontFamily: "Figtree",
        }}
      >
        {/* Left Column (~65%): Eyebrow, Identity/Title, Summary & Proof Row */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top Eyebrow: KB Monogram + Domain / Location */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img
              src={assets.logoDataUri}
              alt="KB"
              width={36}
              height={36}
            />
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: "15px",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: TOKENS.muted,
              }}
            >
              {eyebrow ?? "kennethbulaga.dev · Davao City, PH"}
            </div>
          </div>

          {/* Center Headline & Summary */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {isHome ? (
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
                    fontSize: "56px",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.08,
                    color: TOKENS.ink,
                  }}
                >
                  {personalInfo.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "34px",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    color: TOKENS.muted,
                  }}
                >
                  {personalInfo.subHeadline}
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  fontSize: "48px",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.12,
                  color: TOKENS.ink,
                }}
              >
                {title}
              </div>
            )}

            <div
              style={{
                display: "flex",
                fontSize: "21px",
                fontWeight: 400,
                lineHeight: 1.45,
                color: TOKENS.inkBody,
                maxWidth: "700px",
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Bottom Status & Proof Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "24px",
              paddingTop: "20px",
              borderTop: `1px solid ${TOKENS.line}`,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                backgroundColor: TOKENS.surface,
                border: `1px solid ${TOKENS.lineStrong}`,
                borderRadius: "999px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: TOKENS.ink2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  backgroundColor: TOKENS.green,
                }}
              />
              <div style={{ display: "flex" }}>
                {personalInfo.availability.message}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: TOKENS.ink,
                }}
              >
                {`${jpConnectMetrics.accounts}+`}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: TOKENS.muted,
                }}
              >
                Authenticated Profiles
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (~35%): Sharp 2x Retina Portrait Frame */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
          }}
        >
          <img
            src={assets.avatarDataUri}
            alt={personalInfo.name}
            width={300}
            height={300}
            style={{
              borderRadius: "20px",
              border: `1px solid ${TOKENS.lineStrong}`,
              objectFit: "cover",
            }}
          />
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
