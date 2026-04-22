import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const accentMap = ["bg-peach", "bg-soft-yellow", "bg-mint"] as const;

export function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const accent = accentMap[index % accentMap.length];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block rounded-[2rem] border border-ink/10 p-7 md:p-9 transition-transform hover:-translate-y-1",
        accent
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/20 bg-bg/60 px-3 py-1 text-xs font-bold uppercase tracking-tight text-ink/80"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-bg transition group-hover:bg-ink-deep">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <h3 className="headline mt-6 text-2xl md:text-3xl text-ink">
        {project.title}
      </h3>
      <p className="mt-3 max-w-xl text-ink/80">{project.summary}</p>
    </Link>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-ink/10 bg-bg p-6 transition hover:border-ink/40 hover:shadow-[4px_4px_0_0_var(--color-ink)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-extrabold tracking-tight text-ink">
          {project.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="text-ink/50 transition group-hover:text-ink"
        />
      </div>
      <p className="mt-2 text-sm text-ink/70">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
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
