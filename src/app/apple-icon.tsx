import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5EDE0",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Mustard accent shape */}
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#F0B040",
          }}
        />
        {/* Mint accent */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: -20,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#B8DDD9",
          }}
        />

        {/* Centered GP badge */}
        <div
          style={{
            position: "relative",
            width: 110,
            height: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1F2D4F",
            color: "#F5EDE0",
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: -3,
            borderRadius: 28,
            boxShadow: "6px 6px 0 0 #1A2438",
          }}
        >
          GP
        </div>
      </div>
    ),
    size
  );
}
