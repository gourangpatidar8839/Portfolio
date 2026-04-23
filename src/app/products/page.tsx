import type { Metadata } from "next";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { FeaturedProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI products founded and built by Gourang Patidar — TheQuickAI and Lumira.",
};

export default function ProductsPage() {
  return (
    <>
      <PillNav />
      <main className="flex-1 pt-32 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
            Products
          </p>
          <h1 className="headline mt-4 text-5xl md:text-7xl">
            Things I&rsquo;ve put into the world.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/80">
            Real AI products with real customers — founded, designed, and
            engineered by me. Click into any of them for the story behind it.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <FeaturedProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
