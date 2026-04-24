import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { CompactProjectCard } from "@/components/project/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects and technical experiments by Gourang Patidar — RAG, agents, evals, and the infrastructure that holds them together.",
};

export default function ProjectsPage() {
  return (
    <>
      <PillNav />
      <main id="main" className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <section className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
            Projects
          </p>
          <h1 className="headline mt-4 text-5xl md:text-7xl">
            Side bets &amp; experiments.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80">
            Smaller technical projects, research spikes, and tools I built to
            scratch my own itch. For the production businesses I&rsquo;ve
            shipped, see{" "}
            <Link
              href="/products"
              className="underline decoration-brand decoration-2 underline-offset-4 font-bold hover:text-brand-hover"
            >
              products
            </Link>
            .
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <CompactProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] bg-mint p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Want to collaborate?
                </p>
                <h2 className="headline mt-2 text-2xl md:text-3xl">
                  I take on a few side projects each year.
                </h2>
              </div>
              <Button href="/#contact" size="lg">
                Get in touch <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
