type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "5+",
    label: "Projects shipped",
    detail: "From RAG systems to agents to internal ML tools.",
  },
  {
    value: "10k+",
    label: "Documents indexed",
    detail: "Across the retrieval pipelines I&rsquo;ve built in production.",
  },
  {
    value: "2 yrs",
    label: "Building with LLMs",
    detail: "Since the GPT-3.5 era — through every model migration.",
  },
];

export function Stats() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
              Why work with me
            </p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">
              Engineering, not <em>experimentation theatre</em>.
            </h2>
            <p className="mt-5 max-w-md text-ink/80">
              I care about systems that survive contact with real users —
              evals, latency budgets, cost ceilings, the boring parts that make
              AI features actually ship.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink/15 bg-bg/40 p-6"
              >
                <div className="text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-bold uppercase tracking-tight text-ink/80">
                  {s.label}
                </div>
                <p
                  className="mt-2 text-sm text-ink/70"
                  dangerouslySetInnerHTML={{ __html: s.detail }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
