type Group = {
  title: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "LangChain", "LlamaIndex", "OpenAI", "Anthropic", "RAG", "Embeddings", "Evals"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Postgres", "Redis", "Celery", "Docker"],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS", "Vercel", "Supabase", "Git", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 md:py-32">
        <div className="rounded-[2rem] bg-mint p-6 sm:p-8 md:p-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                What I work with
              </p>
              <h2 className="headline mt-3 text-4xl md:text-5xl">
                Skills &amp; tooling
              </h2>
            </div>
            <p className="max-w-md text-ink/80">
              The stack I reach for, grouped by where it lives in the work.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-ink/10 bg-bg/70 p-5 transition hover:border-ink/30 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
              >
                <h3 className="text-xs font-bold uppercase tracking-tight text-ink/60">
                  {g.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink/10 bg-bg px-3 py-1 text-sm font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
