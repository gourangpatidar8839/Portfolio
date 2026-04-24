import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

function PreviewSurface({ product }: { product: Product }) {
  if (product.cover) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-bg">
        <Image
          src={product.cover}
          alt={`${product.name} preview`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const [from, to] = product.previewGradient ?? ["from-mint", "to-peach"];
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/15 bg-gradient-to-br p-6",
        from,
        to
      )}
    >
      <div className="absolute inset-x-6 bottom-6">
        <div className="rounded-xl bg-bg/85 px-4 py-3 backdrop-blur-sm">
          <p className="text-[10px] font-bold uppercase tracking-tight text-ink/60">
            Live
          </p>
          <p className="mt-0.5 text-sm font-extrabold text-ink">
            {product.url.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </div>
      <div className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-bg/85 text-ink">
        <ArrowUpRight size={16} />
      </div>
      <div className="absolute left-6 top-6">
        <p className="text-[10px] font-bold uppercase tracking-tight text-ink/70">
          Product
        </p>
        <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-ink">
          {product.name}
        </p>
      </div>
    </div>
  );
}

export function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[2rem] border border-ink/10 bg-bg p-5 sm:p-6 md:p-8 transition hover:border-ink/30 hover:shadow-[6px_6px_0_0_var(--color-ink)]">
      <Link href={`/products/${product.slug}`} className="block">
        <PreviewSurface product={product} />
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-ink text-bg px-3 py-1 text-[11px] font-bold uppercase tracking-tight">
          {product.role}
        </span>
        {product.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/15 bg-bg/60 px-3 py-1 text-[11px] font-bold uppercase tracking-tight text-ink/70"
          >
            {t}
          </span>
        ))}
      </div>

      <h3 className="headline mt-4 text-2xl md:text-3xl text-ink">
        <Link href={`/products/${product.slug}`} className="hover:underline decoration-brand decoration-2 underline-offset-4">
          {product.name}
        </Link>
      </h3>
      <p className="mt-3 text-ink/80">{product.summary}</p>

      {product.stats && product.stats.length > 0 && (
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-5">
          {product.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-[11px] font-bold uppercase tracking-tight text-ink/50">
                {s.label}
              </dt>
              <dd className="mt-0.5 text-xl font-extrabold tracking-tight text-ink">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-tight text-ink hover:text-brand-hover"
        >
          Visit live <ArrowUpRight size={14} />
        </a>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-tight text-ink/70 hover:text-ink"
        >
          Read case study →
        </Link>
      </div>
    </article>
  );
}
