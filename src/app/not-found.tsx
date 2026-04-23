import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { MustardBlob, PeachBlob, MintBlob } from "@/components/DecorativeShapes";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <PillNav />
      <main className="relative flex-1 overflow-hidden">
        <PeachBlob className="-top-12 -left-10 h-40 w-40 opacity-70" />
        <MintBlob className="top-32 -right-12 h-44 w-44 opacity-70" />
        <MustardBlob className="bottom-24 left-1/3 h-24 w-24 opacity-60" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
            404 — Page not found
          </p>

          <h1 className="headline mt-4 text-[clamp(4rem,15vw,9rem)] text-ink">
            4
            <span className="relative inline-block">
              <span className="relative z-10">0</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-2 -z-0 h-[0.45em] bg-brand"
              />
            </span>
            4
          </h1>

          <p className="mt-6 max-w-lg text-lg text-ink/80">
            This page wandered off. Either it never existed, it moved, or you
            followed a link that was wrong. Try one of these instead:
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg">
              Back home <ArrowRight size={18} />
            </Button>
            <Button href="/products" size="lg" variant="ghost">
              See products
            </Button>
            <Button href="/blog" size="lg" variant="ghost">
              Read the blog
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
