import { SITE } from "@/lib/utils";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: SITE.role,
    description:
      "AI/ML engineer and founder building intelligent systems with Python and LLMs. Founder of TheQuickAI and Lumira.",
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.social.linkedin, SITE.social.twitter],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Python",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name} — Portfolio`,
    url: SITE.url,
    author: { "@type": "Person", name: SITE.name },
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    datePublished: args.date,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    keywords: args.tags?.join(", "),
    url: `${SITE.url}/blog/${args.slug}`,
    mainEntityOfPage: `${SITE.url}/blog/${args.slug}`,
  };
}

export function softwareSchema(args: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: args.name,
    description: args.description,
    url: args.url,
    applicationCategory: "BusinessApplication",
    creator: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
  };
}
