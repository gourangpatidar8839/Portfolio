import { getAllMDXPosts } from "@/lib/mdx";
import { posts as fallbackPosts } from "@/lib/posts";
import { SITE } from "@/lib/utils";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRFC2822(iso: string) {
  return new Date(iso).toUTCString();
}

type FeedItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags?: string[];
};

export async function GET() {
  const base = SITE.url.replace(/\/$/, "");

  // Merge MDX posts with fallback posts (MDX wins on slug collision)
  const mdx = getAllMDXPosts();
  const mdxSlugs = new Set(mdx.map((p) => p.slug));

  const items: FeedItem[] = [
    ...mdx.map((p) => ({
      slug: p.slug,
      title: p.frontmatter.title,
      summary: p.frontmatter.summary,
      date: p.frontmatter.date,
      tags: p.frontmatter.tags,
    })),
    ...fallbackPosts
      .filter((p) => !mdxSlugs.has(p.slug))
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        summary: p.summary,
        date: p.date,
        tags: p.tags,
      })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  const lastBuildDate = items[0]?.date
    ? toRFC2822(items[0].date)
    : new Date().toUTCString();

  const itemsXml = items
    .map((item) => {
      const url = `${base}/blog/${item.slug}`;
      const categories =
        item.tags
          ?.map((t) => `      <category>${escapeXml(t)}</category>`)
          .join("\n") ?? "";
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(item.summary)}</description>
      <pubDate>${toRFC2822(item.date)}</pubDate>
      <author>noreply@gourangpatidar.com (${escapeXml(SITE.name)})</author>
${categories}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Notes from the build</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical write-ups on LLMs, RAG, evals, and AI infrastructure by ${escapeXml(SITE.name)}.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js</generator>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
