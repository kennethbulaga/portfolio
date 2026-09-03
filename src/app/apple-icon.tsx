import { ImageResponse } from "next/og";


// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 104,
          background: "#09090b", // zinc-950
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fafafa", // zinc-50
          borderRadius: "40px",
          border: "4px solid #27272a", // zinc-800
          fontFamily: "monospace",
          fontWeight: 800,
        }}
      >
        <span>K</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
