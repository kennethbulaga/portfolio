import { renderOgImage } from "@/lib/og";

export const alt = "Credentials & Education | Kenneth Bulaga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "03 / CREDENTIALS & EDUCATION · DAVAO CITY, PH",
    title: "Verified public sector & institutional honors.",
    subtitle:
      "OWWA Region XI Certificates of Recognition, HackEstate PropTech 2025, Institutional Service Award, and BSIT.",
  });
}
