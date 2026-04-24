import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeaturedProjectCard } from "@/components/project/ProjectCard";
import { getFeatured } from "@/lib/projects";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

export function FeaturedProjects() {
  const featured = getFeatured();

  return (
    <section id="work" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 md:py-32">
        <FadeIn>
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
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.1}>
          {featured.map((p, i) => (
            <StaggerItem key={p.slug}>
              <FeaturedProjectCard project={p} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
