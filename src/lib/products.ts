export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  url: string;
  tags: string[];
  role: string;
  // Optional screenshot path. Drop a file in public/images/products/ and set the path here.
  cover?: string;
  // Used for the placeholder preview card when no screenshot is set.
  // Two Tailwind bg classes that form the gradient.
  previewGradient?: [string, string];
  // Stats shown on the card (max 3)
  stats?: { value: string; label: string }[];
  // Case study fields
  problem?: string;
  approach?: string;
  tech?: string[];
  outcome?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "thequickai",
    name: "The Quick AI",
    tagline: "AI business automation — we don't sell AI, we sell results.",
    summary:
      "An AI automation platform for founders and ops leaders who need workflow automation, custom AI agents, and integrations (Slack, Salesforce, Notion, Zapier) — without hiring an in-house AI team.",
    url: "https://thequickai.com",
    tags: ["AI Agents", "Automation", "Product"],
    role: "Founder & AI Engineer",
    featured: true,
    previewGradient: ["from-brand", "to-peach"],
    stats: [
      { value: "AI Agents", label: "Workflow automation" },
      { value: "10+", label: "Tool integrations" },
      { value: "2026", label: "Founded" },
    ],
    problem:
      "Most businesses want to use AI but can't afford to hire an ML team. Off-the-shelf AI tools are either too generic or too technical to deploy into real workflows.",
    approach:
      "Built a platform that lets non-technical founders deploy AI agents across their existing stack (Slack, Salesforce, Notion, Zapier). Focus on outcomes — measurable time saved, tickets closed, leads qualified — not on the AI itself.",
    tech: ["Python", "LangChain", "OpenAI", "LLM Agents", "Next.js", "Postgres"],
    outcome:
      "Positioned as results-focused (\"We don't sell AI, we sell Results\"). Growing base of small-to-mid businesses using custom agents for sales, ops, and support.",
  },
  {
    slug: "lumira",
    name: "Lumira",
    tagline: "India's AI content creation studio — Sora, Veo, Kling, Flux, in one place.",
    summary:
      "An India-first AI video & image studio that bundles Sora 2, Veo 3.1, Kling 3.0, Flux 2, and more — with UPI payments, GST invoicing, Hindi support, and templates built for Indian creators.",
    url: "https://lumira.thequickai.com",
    tags: ["Multi-Model", "AI Video", "Product"],
    role: "Founder & Engineering Lead",
    featured: true,
    previewGradient: ["from-mint", "to-soft-yellow"],
    stats: [
      { value: "10k+", label: "Creators" },
      { value: "500k+", label: "Images generated" },
      { value: "7+", label: "SOTA models" },
    ],
    problem:
      "Indian creators face a 65% checkout failure rate on Western AI platforms — blocked by currency conversion, no UPI support, missing GST invoices, credit expiry, and models that don't understand Bollywood, weddings, or Diwali aesthetics.",
    approach:
      "Built a multi-model orchestration layer on top of Sora 2, Veo 3.1, Kling 3.0, Nano Banana Pro, Flux 2, Ideogram V3, and Seedream. Native UPI / GPay / PhonePe / Paytm payments, GST-compliant invoicing, non-expiring credits, and India-specific prompt templates.",
    tech: [
      "Multi-model orchestration",
      "Sora / Veo / Kling / Flux",
      "Next.js",
      "UPI payments",
      "Python",
    ],
    outcome:
      "10,000+ creators, 500,000+ images generated. Pricing ranges ₹399/mo (Creator) to ₹2,999/mo (Studio), with a free tier for trial.",
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
