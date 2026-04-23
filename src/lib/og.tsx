import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const COLORS = {
  bg: "#F5EDE0",
  ink: "#1F2D4F",
  inkDeep: "#1A2438",
  brand: "#F0B040",
  mint: "#B8DDD9",
  peach: "#F4BFA5",
};

let fontsCache: { bold: Buffer; regular: Buffer } | null = null;

async function loadInter() {
  if (fontsCache) return fontsCache;
  const fontDir = path.join(
    process.cwd(),
    "node_modules",
    "@fontsource",
    "inter",
    "files"
  );
  const [regular, bold] = await Promise.all([
    readFile(path.join(fontDir, "inter-latin-400-normal.woff")),
    readFile(path.join(fontDir, "inter-latin-800-normal.woff")),
  ]);
  fontsCache = { regular, bold };
  return fontsCache;
}

type Variant = "default" | "product" | "project" | "post";

const variantStyles: Record<Variant, { accent: string; label: string }> = {
  default: { accent: COLORS.brand, label: "PORTFOLIO" },
  product: { accent: COLORS.peach, label: "PRODUCT" },
  project: { accent: COLORS.mint, label: "PROJECT" },
  post: { accent: COLORS.brand, label: "WRITING" },
};

export type OGProps = {
  title: string;
  subtitle?: string;
  variant?: Variant;
  meta?: string;
};

export async function renderOG({
  title,
  subtitle,
  variant = "default",
  meta,
}: OGProps) {
  const { bold, regular } = await loadInter();
  const v = variantStyles[variant];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.bg,
          fontFamily: "Inter",
          padding: "70px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 380,
            height: 380,
            borderRadius: "50%",
            backgroundColor: v.accent,
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            backgroundColor: COLORS.brand,
            opacity: 0.25,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: COLORS.ink,
              color: COLORS.bg,
              fontSize: 22,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            GP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: COLORS.ink,
                fontSize: 22,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Gourang Patidar
            </div>
            <div
              style={{
                color: COLORS.ink,
                opacity: 0.6,
                fontSize: 16,
                fontWeight: 400,
                marginTop: 4,
              }}
            >
              gourangpatidar.com
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 90,
            zIndex: 1,
          }}
        >
          <span
            style={{
              backgroundColor: v.accent,
              color: COLORS.ink,
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 1.2,
              padding: "8px 16px",
              borderRadius: 999,
            }}
          >
            {v.label}
          </span>
        </div>

        <div
          style={{
            color: COLORS.ink,
            fontSize: title.length > 60 ? 64 : 80,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1.6,
            marginTop: 24,
            zIndex: 1,
            display: "flex",
            maxWidth: 980,
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              color: COLORS.ink,
              opacity: 0.75,
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.35,
              marginTop: 24,
              zIndex: 1,
              display: "flex",
              maxWidth: 980,
            }}
          >
            {subtitle}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div
            style={{
              color: COLORS.ink,
              opacity: 0.7,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            AI / ML ENGINEER · FOUNDER
          </div>
          {meta && (
            <div
              style={{
                color: COLORS.ink,
                opacity: 0.7,
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              {meta}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: bold, weight: 800, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
      ],
    }
  );
}
