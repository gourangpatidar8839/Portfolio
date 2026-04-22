import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { getProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PillNav />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tight text-ink/60 hover:text-ink transition"
          >
            <ArrowLeft size={14} /> All work
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 bg-bg/60 px-3 py-1 text-xs font-bold uppercase tracking-tight text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="headline mt-5 text-4xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 text-xl text-ink/80">{project.summary}</p>

          {(project.github || project.live) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && (
                <Button href={project.live} external size="md">
                  Visit live <ArrowUpRight size={16} />
                </Button>
              )}
              {project.github && (
                <Button href={project.github} external size="md" variant="ghost">
                  <GitHubIcon size={16} /> View code
                </Button>
              )}
            </div>
          )}

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-ink/85">
            {project.problem && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  The problem
                </h2>
                <p className="mt-3">{project.problem}</p>
              </section>
            )}

            {project.approach && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Approach
                </h2>
                <p className="mt-3">{project.approach}</p>
              </section>
            )}

            {project.tech && project.tech.length > 0 && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Tech
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-ink/15 bg-mint/40 px-3 py-1 text-sm font-medium text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.outcome && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Outcome
                </h2>
                <p className="mt-3">{project.outcome}</p>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
