import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PostCard } from "@/components/blog/PostCard";
import { getLatestPosts } from "@/lib/posts";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

export function BlogTeaser() {
  const latest = getLatestPosts(3);

  return (
    <section id="writing" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 md:py-32">
        <FadeIn>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                Writing
              </p>
              <h2 className="headline mt-3 text-4xl md:text-6xl">
                Notes from the build.
              </h2>
            </div>
            <Button href="/blog" variant="ghost">
              Read all posts <ArrowRight size={16} />
            </Button>
          </div>
        </FadeIn>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.08}>
          {latest.map((p) => (
            <StaggerItem key={p.slug}>
              <PostCard post={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
