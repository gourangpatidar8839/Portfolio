"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function PillNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "w-full max-w-3xl rounded-full border border-line/80 bg-bg/80 backdrop-blur-md transition-all duration-300",
          scrolled ? "shadow-[0_8px_24px_-12px_rgba(31,45,79,0.18)]" : ""
        )}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2 md:px-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-2 font-extrabold tracking-tight text-ink"
            aria-label="Gourang Patidar — Home"
          >
            <span
              aria-hidden
              className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-ink/10"
            >
              <Image
                src="/images/me.jpg"
                alt=""
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="hidden sm:inline">Gourang</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm font-bold text-ink/80 hover:bg-line/60 hover:text-ink transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button href="/#contact" size="md" className="hidden sm:inline-flex">
              Get in touch
            </Button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-line/80 px-3 py-3">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-2xl px-3 py-2 text-sm font-bold text-ink hover:bg-line/60"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Button
                  href="/#contact"
                  size="md"
                  className="w-full"
                >
                  Get in touch
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
