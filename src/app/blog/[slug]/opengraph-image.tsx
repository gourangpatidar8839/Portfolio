import { renderOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getMDXPost, getMDXPostSlugs } from "@/lib/mdx";
import { getPost, posts } from "@/lib/posts";

export const alt = "Blog post by Gourang Patidar";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  const mdxSlugs = getMDXPostSlugs();
  const fallbackSlugs = posts.map((p) => p.slug);
  const all = Array.from(new Set([...mdxSlugs, ...fallbackSlugs]));
  return all.map((slug) => ({ slug }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mdx = getMDXPost(slug);
  const fallback = !mdx ? getPost(slug) : null;
  const fm = mdx?.frontmatter ?? fallback;
  if (!fm) {
    return renderOG({ title: "Notes from the build", variant: "post" });
  }
  return renderOG({
    title: fm.title,
    subtitle: fm.summary,
    meta: formatDate(fm.date),
    variant: "post",
  });
}
