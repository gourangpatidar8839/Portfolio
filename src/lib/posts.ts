export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  cover?: string;
};

// Replace these with real posts. Schema mirrors src/content/posts/*.mdx frontmatter.
export const posts: Post[] = [
  {
    slug: "shipping-rag-that-actually-works",
    title: "Shipping RAG that actually works in production",
    summary:
      "What I learned moving a retrieval pipeline from a notebook demo to a system 50 people rely on every day.",
    date: "2026-04-12",
    tags: ["RAG", "Production"],
  },
  {
    slug: "building-an-eval-harness",
    title: "Building an eval harness before you build the agent",
    summary:
      "If you can’t measure it, you can’t improve it. A practical setup for evaluating LLM pipelines without going crazy.",
    date: "2026-03-28",
    tags: ["Evals", "LLM"],
  },
  {
    slug: "the-boring-parts-of-llm-apps",
    title: "The boring parts of LLM apps that make them not boring",
    summary:
      "Logging, retries, cost guards, and other unglamorous infrastructure that decides whether your AI feature survives Monday morning.",
    date: "2026-03-10",
    tags: ["Infrastructure", "LLM"],
  },
];

export function getLatestPosts(n = 3): Post[] {
  return [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, n);
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
