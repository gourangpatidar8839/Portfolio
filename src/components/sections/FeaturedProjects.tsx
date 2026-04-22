import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeaturedProjectCard } from "@/components/project/ProjectCard";
import { getFeatured } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeatured();

  return (
    <section id="work" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
              Selected work
            </p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">
              Things I&rsquo;ve built recently.
            </h2>
          </div>
          <Button href="/projects" variant="ghost">
            See all projects <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
