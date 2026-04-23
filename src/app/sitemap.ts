import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";
import { getMDXPostSlugs, getMDXPost } from "@/lib/mdx";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Merge MDX posts with fallback posts
  const mdxSlugs = getMDXPostSlugs();
  const mdxPostsMap = new Map(
    mdxSlugs
      .map((s) => getMDXPost(s))
      .filter((p): p is NonNullable<typeof p> => p !== null)
      .map((p) => [p.slug, p.frontmatter.date])
  );
  const allPostSlugs = new Set([...mdxSlugs, ...posts.map((p) => p.slug)]);

  const postPages: MetadataRoute.Sitemap = Array.from(allPostSlugs).map((slug) => {
    const date =
      mdxPostsMap.get(slug) ??
      posts.find((p) => p.slug === slug)?.date ??
      now.toISOString();
    return {
      url: `${base}/blog/${slug}`,
      lastModified: new Date(date),
      changeFrequency: "yearly",
      priority: 0.6,
    };
  });

  return [...staticPages, ...productPages, ...projectPages, ...postPages];
}
