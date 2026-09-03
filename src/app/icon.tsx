import { ImageResponse } from "next/og";


// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#09090b", // zinc-950
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fafafa", // zinc-50
          borderRadius: "8px",
          border: "1px solid #27272a", // zinc-800
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
