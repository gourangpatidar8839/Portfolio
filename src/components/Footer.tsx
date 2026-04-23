import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/ui/BrandIcons";
import { SITE } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-bg">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand"
              >
                <Image
                  src="/images/me.jpg"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-bg/70">
              {SITE.role} — building intelligent systems with Python and LLMs.
              Open to collaborations, side projects, and a good conversation.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-tight text-bg/60">
              Sitemap
            </h4>
            <ul className="mt-4 space-y-2 text-bg/90">
              <li>
                <Link href="/" className="hover:text-brand transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-brand transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-tight text-bg/60">
              Elsewhere
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-bg/90 hover:text-brand transition"
                >
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-bg/90 hover:text-brand transition"
                >
                  <XIcon size={16} /> Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-bg/90 hover:text-brand transition"
                >
                  <Mail size={16} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-bg/10 pt-6 text-sm text-bg/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js · Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
