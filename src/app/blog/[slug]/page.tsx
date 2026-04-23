import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { JsonLd, articleSchema } from "@/components/JsonLd";
import { getMDXPost, getMDXPostSlugs } from "@/lib/mdx";
import { getPost } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  const fileSlugs = getMDXPostSlugs();
  return fileSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mdx = getMDXPost(slug);
  const fallback = getPost(slug);
  const fm = mdx?.frontmatter ?? fallback;
  if (!fm) return {};
  return {
    title: fm.title,
    description: fm.summary,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const mdx = getMDXPost(slug);
  const fallback = !mdx ? getPost(slug) : null;

  if (!mdx && !fallback) notFound();

  const title = mdx?.frontmatter.title ?? fallback!.title;
  const date = mdx?.frontmatter.date ?? fallback!.date;
  const tags = mdx?.frontmatter.tags ?? fallback!.tags;
  const summary = mdx?.frontmatter.summary ?? fallback?.summary ?? "";

  return (
    <>
      <JsonLd
        data={articleSchema({ title, description: summary, date, slug, tags })}
      />
      <PillNav />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-2xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tight text-ink/60 hover:text-ink transition"
          >
            <ArrowLeft size={14} /> All posts
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-tight text-ink/60">
            <time>{formatDate(date)}</time>
            {tags?.map((t) => (
              <span key={t} className="rounded-full border border-ink/15 px-2.5 py-0.5">
                {t}
              </span>
            ))}
          </div>

          <h1 className="headline mt-5 text-4xl md:text-6xl">{title}</h1>

          <div
            className="prose-content mt-10 text-lg leading-relaxed text-ink/85
              [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight
              [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-extrabold
              [&_p]:mt-5
              [&_a]:underline [&_a]:decoration-brand [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a:hover]:text-ink
              [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2
              [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6
              [&_code]:rounded [&_code]:bg-ink/8 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.95em]
              [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-ink-deep [&_pre]:p-5 [&_pre]:text-bg [&_pre]:text-sm
              [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_blockquote]:italic"
          >
            {mdx ? (
              <MDXRemote source={mdx.content} />
            ) : (
              <p className="text-ink/60">
                This post doesn&rsquo;t have content yet. Drop an MDX file at{" "}
                <code>src/content/posts/{slug}.mdx</code> to fill it in.
              </p>
            )}
          </div>

          <div className="mt-20 rounded-[1.5rem] bg-peach p-8">
            <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
              Stay in the loop
            </p>
            <h2 className="headline mt-2 text-2xl">
              New posts in your inbox.
            </h2>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
