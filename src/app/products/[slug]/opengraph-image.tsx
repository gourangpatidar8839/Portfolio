import { renderOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getProduct, products } from "@/lib/products";

export const alt = "Product by Gourang Patidar";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return renderOG({ title: "Product", variant: "product" });
  }
  return renderOG({
    title: product.name,
    subtitle: product.tagline,
    meta: product.role,
    variant: "product",
  });
}
