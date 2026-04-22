import type { Metadata } from "next";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { CompactProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected AI/ML projects by Gourang Patidar — RAG, agents, evals, and the infrastructure that holds them together.",
};

export default function ProjectsPage() {
  return (
    <>
      <PillNav />
      <main className="flex-1 pt-32 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
            Work
          </p>
          <h1 className="headline mt-4 text-5xl md:text-7xl">
            Things I&rsquo;ve built.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80">
            A mix of side projects, internships, and small experiments. Click
            into any of them for the problem, approach, and what I learned.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <CompactProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
