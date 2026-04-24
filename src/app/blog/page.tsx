import type { Metadata } from "next";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { getAllMDXPosts } from "@/lib/mdx";
import { posts as fallbackPosts, type Post } from "@/lib/posts";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building with LLMs, evals, and AI infrastructure — by Gourang Patidar.",
};

export default function BlogPage() {
  const mdxPosts = getAllMDXPosts();
  const posts: Post[] =
    mdxPosts.length > 0
      ? mdxPosts.map((p) => ({
          slug: p.slug,
          title: p.frontmatter.title,
          summary: p.frontmatter.summary,
          date: p.frontmatter.date,
          tags: p.frontmatter.tags ?? [],
          cover: p.frontmatter.cover,
        }))
      : fallbackPosts;

  return (
    <>
      <PillNav />
      <main className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <section className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
            Writing
          </p>
          <h1 className="headline mt-4 text-5xl md:text-7xl">
            Notes from the build.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80">
            Practical write-ups on LLMs, retrieval, evals, and the boring
            infrastructure that makes AI features actually ship.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] bg-mint p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Newsletter
                </p>
                <h2 className="headline mt-3 text-3xl md:text-4xl">
                  Get the next post in your inbox.
                </h2>
              </div>
              <div className="md:col-span-5">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
