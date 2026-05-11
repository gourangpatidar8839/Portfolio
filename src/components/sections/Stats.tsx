import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "167k+",
    label: "Quizzes generated",
    detail: "In 4 months. Students and teachers using it every day.",
  },
  {
    value: "11",
    label: "Clients served",
    detail: "Real clients, paid work. At The Quick AI automation agency.",
  },
  {
    value: "322",
    label: "Days to first profit",
    detail: "From zero. No funding, no salary, no investor.",
  },
];

export function Stats() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <FadeIn className="md:col-span-5">
            <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
              The numbers
            </p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">
              From The Quick AI.
            </h2>
            <p className="mt-5 max-w-md text-ink/80">
              These are the numbers from 16 months of building, pivoting,
              serving real clients, and eventually shutting it down.
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
                <p className="mt-2 text-sm text-ink/70">{s.detail}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
