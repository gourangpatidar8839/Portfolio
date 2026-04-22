export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  problem?: string;
  approach?: string;
  tech?: string[];
  outcome?: string;
};

// Replace these with your real projects. Schema mirrors src/content/projects/*.mdx frontmatter.
export const projects: Project[] = [
  {
    slug: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant",
    summary:
      "Production-grade retrieval-augmented Q&A over 10k+ internal documents. Cut answer time from minutes to seconds for a 50-person team.",
    tags: ["LangChain", "Pgvector", "FastAPI"],
    featured: true,
    github: "https://github.com/GourangPatidar",
    problem:
      "Internal knowledge was buried across PDFs, Notion pages, and Slack threads. New hires spent days searching for answers that already existed somewhere.",
    approach:
      "Built a hybrid retrieval pipeline (BM25 + dense embeddings) with reranking, chunked documents semantically, and added a small evaluation harness so quality didn't silently regress with each model swap.",
    tech: ["Python", "LangChain", "OpenAI", "Postgres + pgvector", "FastAPI", "Docker"],
    outcome:
      "Median answer latency under 2.5s. ~40% of common new-hire questions answered without human intervention.",
  },
  {
    slug: "agentic-email-triage",
    title: "Agentic Email Triage",
    summary:
      "An LLM agent that reads incoming email, classifies intent, drafts a reply, and learns from the user's edits.",
    tags: ["Agents", "OpenAI", "Gmail API"],
    featured: true,
    problem:
      "Founders drown in email. Most replies are variations of the same 5 templates, but writing them still kills focus.",
    approach:
      "Multi-step agent with tool use: classify intent → fetch relevant context → draft reply → wait for human approval. Logs every edit as a learning signal for future drafts.",
    tech: ["Python", "OpenAI", "Gmail API", "SQLite", "Pydantic"],
    outcome:
      "Reduced inbox time by ~60% in personal use. Currently testing with 3 friends as design partners.",
  },
  {
    slug: "ml-experiment-tracker",
    title: "Lightweight ML Experiment Tracker",
    summary:
      "A minimal alternative to Weights & Biases for solo researchers — local-first, single binary, no account.",
    tags: ["MLOps", "Python", "SQLite"],
    github: "https://github.com/GourangPatidar",
  },
  {
    slug: "llm-eval-harness",
    title: "LLM Eval Harness",
    summary:
      "Reusable evaluation suite for RAG and agent pipelines — tracks accuracy, hallucination rate, and cost per task across model versions.",
    tags: ["Evals", "Python", "LLM"],
  },
  {
    slug: "embedding-explorer",
    title: "Embedding Explorer",
    summary:
      "Interactive UI to visualize how documents cluster in embedding space. Useful for debugging RAG retrieval quality.",
    tags: ["Visualization", "TypeScript", "UMAP"],
  },
];

export function getFeatured(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
