import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PillNav } from "@/components/nav/PillNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { JsonLd, softwareSchema } from "@/components/JsonLd";
import { getProduct, products } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: product.name,
          description: product.summary,
          url: product.url,
        })}
      />
      <PillNav />
      <main className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <article className="mx-auto max-w-3xl px-5 sm:px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tight text-ink/60 hover:text-ink transition"
          >
            <ArrowLeft size={14} /> All products
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-ink text-bg px-3 py-1 text-[11px] font-bold uppercase tracking-tight">
              {product.role}
            </span>
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 bg-bg/60 px-3 py-1 text-[11px] font-bold uppercase tracking-tight text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="headline mt-5 text-4xl md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-xl text-ink/80">{product.tagline}</p>
          <p className="mt-5 text-lg text-ink/75">{product.summary}</p>

          <div className="mt-8">
            <Button href={product.url} external size="lg">
              Visit {product.name.toLowerCase()} <ArrowUpRight size={18} />
            </Button>
          </div>

          {product.stats && product.stats.length > 0 && (
            <dl className="mt-12 grid grid-cols-3 gap-3 rounded-2xl border border-ink/10 bg-mint/40 p-6">
              {product.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[11px] font-bold uppercase tracking-tight text-ink/60">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-3xl font-extrabold tracking-tight text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-ink/85">
            {product.problem && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  The problem
                </h2>
                <p className="mt-3">{product.problem}</p>
              </section>
            )}

            {product.approach && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Approach
                </h2>
                <p className="mt-3">{product.approach}</p>
              </section>
            )}

            {product.tech && product.tech.length > 0 && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Tech
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-ink/15 bg-bg px-3 py-1 text-sm font-medium text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {product.outcome && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-tight text-ink/60">
                  Outcome
                </h2>
                <p className="mt-3">{product.outcome}</p>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
