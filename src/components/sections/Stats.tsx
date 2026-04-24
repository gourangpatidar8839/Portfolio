import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "2",
    label: "Products shipped",
    detail: "TheQuickAI and Lumira — both live in production.",
  },
  {
    value: "10k+",
    label: "Creators using my work",
    detail: "Across Lumira&rsquo;s India-first AI content studio.",
  },
  {
    value: "500k+",
    label: "AI generations served",
    detail: "Images and videos produced through my systems to date.",
  },
];

export function Stats() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <FadeIn className="md:col-span-5">
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
          </FadeIn>

          <Stagger
            className="md:col-span-7 grid gap-4 grid-cols-1 sm:grid-cols-3 sm:gap-5"
            stagger={0.1}
            initialDelay={0.1}
          >
            {stats.map((s) => (
              <StaggerItem
                key={s.label}
                className="rounded-2xl border border-ink/15 bg-bg/40 p-6 transition hover:border-ink/40 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
