import { renderOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Gourang Patidar — AI / ML Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOG({
    title: "Hi, I'm Gourang. I build with AI.",
    subtitle:
      "AI/ML engineer. Founder of TheQuickAI and Lumira. Building intelligent systems with Python and LLMs.",
    variant: "default",
  });
}
