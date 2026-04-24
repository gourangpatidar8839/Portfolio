import { DashedDivider } from "@/components/DecorativeShapes";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <DashedDivider className="mt-4" />
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24 md:py-32">
        <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
          About
        </p>
        <h2 className="headline mt-4 text-4xl md:text-6xl">
          I turn AI ideas into things people use.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-ink/80">
          <p>
            I&rsquo;m an AI/ML engineer focused on the messy gap between a
            promising model and a product that actually ships. Most of my work
            sits at the intersection of <em>LLMs, retrieval, and real users</em>
            &nbsp;— RAG systems, agents, evals, and the unglamorous plumbing
            that keeps them reliable.
          </p>
          <p>
            Outside of building, I write about what I learn (in the blog
            below), share resources I wish I&rsquo;d had earlier, and
            collaborate with founders on small bets that punch above their
            weight.
          </p>
        </div>
      </div>
      <DashedDivider />
    </section>
  );
}
