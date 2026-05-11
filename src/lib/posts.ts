export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  cover?: string;
};

// Fallback used only when no MDX posts exist in src/content/posts/
export const posts: Post[] = [
  {
    slug: "why-i-shut-down-the-quick-ai",
    title: "Why I shut down The Quick AI after 16 months",
    summary:
      "It was not a sudden decision. I watched it go wrong over several months and kept trying to fix it instead of accepting what was happening.",
    date: "2026-04-01",
    tags: ["Founder", "Failure"],
  },
  {
    slug: "i-quit-my-internship-at-21-with-no-backup-plan",
    title: "I quit my internship at 21 with no backup plan",
    summary:
      "My 6-month internship at a tech company in Pune. I left after 4 months to go full-time on my startup. No salary, no safety net.",
    date: "2026-04-15",
    tags: ["Founder", "Decisions"],
  },
  {
    slug: "i-validated-my-startup-for-months-none-of-it-was-real",
    title: "I validated my startup for months and none of it was real",
    summary:
      "Every discovery call went well. Everyone said it was a great idea. None of that meant anything.",
    date: "2026-04-08",
    tags: ["Founder", "Startups"],
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
