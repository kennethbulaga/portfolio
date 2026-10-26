import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="180"
        height="180"
        fill="none"
      >
        <rect
          x="16"
          y="16"
          width="480"
          height="480"
          rx="96"
          fill="#0F0F11"
          stroke="#27272A"
          strokeWidth="12"
        />
        <g fill="#FCFCFB">
          <path d="M 104 108 H 148 V 220 L 260 108 H 322 L 174 256 L 322 404 H 260 L 148 292 V 404 H 104 V 108 Z" />
          <path d="M 346 108 H 374 L 416 150 V 236 L 396 256 L 416 276 V 362 L 374 404 H 346 L 306 364 H 356 L 374 346 V 284 L 356 266 H 284 V 332 L 240 288 V 224 L 284 180 V 246 H 356 L 374 228 V 166 L 356 148 H 306 L 346 108 Z" />
        </g>
      </svg>
    ),
    {
      ...size,
    }
  );
}
