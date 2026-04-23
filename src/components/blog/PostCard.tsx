import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-ink/10 bg-bg p-6 transition hover:border-ink/30 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
    >
      <div className="flex items-center justify-between gap-4">
        <time className="text-xs font-bold uppercase tracking-tight text-ink/60">
          {formatDate(post.date)}
        </time>
        <ArrowUpRight
          size={18}
          className="text-ink/40 transition group-hover:text-ink"
        />
      </div>
      <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-ink/70">{post.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/10 px-2.5 py-0.5 text-xs font-medium text-ink/70"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
