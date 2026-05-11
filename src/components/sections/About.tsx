import { DashedDivider } from "@/components/DecorativeShapes";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <DashedDivider className="mt-4" />
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24 md:py-32">
        <FadeIn>
          <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
            About
          </p>
          <h2 className="headline mt-4 text-4xl md:text-6xl">
            Here&rsquo;s my story.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              I grew up in a small village near Indore. About 100 people. In
              college I chose AI when everyone around me was doing DSA and
              people told me it would not lead to jobs.
            </p>
            <p>
              In 2024 I co-founded The Quick AI, built it for 16 months,
              served 11 clients, became profitable with no funding, and then
              shut it down. That whole experience is what shaped how I think
              about building things. The full story is on the{" "}
              <a
                href="/products/thequickai"
                className="font-bold underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-hover"
              >
                product page
              </a>
              .
            </p>
            <p>
              Now I work as an AI Engineer at IANMAN and I am building Lumira,
              an India-first AI content studio that is live right now.
            </p>
            <p>I am 22 and still figuring things out.</p>
          </div>
        </FadeIn>
      </div>
      <DashedDivider />
    </section>
  );
}
