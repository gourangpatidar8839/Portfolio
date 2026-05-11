import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeaturedProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

export function Products() {
  const featured = getFeaturedProducts();

  return (
    <section id="products" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 md:py-28">
        <FadeIn>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                Ventures
              </p>
              <h2 className="headline mt-3 text-4xl md:text-6xl">
                What I built.
              </h2>
              <p className="mt-4 max-w-xl text-ink/80">
                Lumira is running. The Quick AI I shut down after 16 months.
                Both built from scratch with my co-founders.
              </p>
            </div>
            <Button href="/products" variant="ghost">
              All products <ArrowRight size={16} />
            </Button>
          </div>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.12}>
          {featured.map((p) => (
            <StaggerItem key={p.slug}>
              <FeaturedProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

