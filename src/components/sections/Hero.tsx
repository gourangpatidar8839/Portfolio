import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MustardBlob, PeachBlob, MintBlob } from "@/components/DecorativeShapes";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-28 pb-16 sm:px-6 sm:gap-12 md:grid-cols-12 md:gap-8 md:pt-40 md:pb-28">
        {/* Text */}
        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bg/60 px-3 py-1 text-xs font-bold uppercase tracking-tight text-ink/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Founder · TheQuickAI &amp; Lumira
          </p>

          <h1 className="headline mt-5 text-[clamp(2.75rem,8vw,5.5rem)] text-ink">
            Hi, I&rsquo;m Gourang.
            <br />
            <span className="text-ink">I ship with </span>
            <span className="relative inline-block">
              <span className="relative z-10">AI</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-[0.45em] bg-brand"
              />
            </span>
            <span className="text-ink">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink/80 md:text-xl">
            AI/ML engineer building intelligent systems with Python and LLMs.
            Currently shipping <em>TheQuickAI</em> and <em>Lumira</em> — two AI
            products live in production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects" size="lg">
              See my work <ArrowRight size={18} />
            </Button>
            <Button href="/#contact" size="lg" variant="ghost">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Photo + decorations */}
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-sm md:max-w-md">
            <PeachBlob className="-top-3 -left-3 h-16 w-16 sm:-top-4 sm:-left-4 sm:h-24 sm:w-24 md:h-32 md:w-32" />
            <MintBlob className="-bottom-4 -right-2 h-14 w-14 sm:-bottom-6 sm:h-20 sm:w-20 md:h-28 md:w-28" />
            <MustardBlob className="top-1/2 -right-4 h-8 w-8 sm:-right-6 sm:h-10 sm:w-10" />

            <div className="group relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-ink bg-mint shadow-[8px_8px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_var(--color-ink)]">
              <Image
                src="/images/me.jpg"
                alt="Gourang Patidar"
                fill
                priority
                sizes="(min-width: 768px) 400px, 90vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
