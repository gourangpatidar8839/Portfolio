import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gourang Patidar — AI / ML Engineer",
    short_name: "Gourang",
    description:
      "AI/ML engineer and founder. Building intelligent systems with Python and LLMs. Founder of TheQuickAI and Lumira.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5EDE0",
    theme_color: "#F0B040",
    orientation: "portrait",
    categories: ["technology", "productivity", "business"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
