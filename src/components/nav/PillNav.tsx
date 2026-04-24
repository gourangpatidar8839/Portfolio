"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={cn(
          "w-full max-w-3xl rounded-full border border-line/80 bg-bg/85 backdrop-blur-md transition-all duration-300",
          scrolled
            ? "shadow-[0_8px_24px_-12px_rgba(31,45,79,0.18)]"
            : ""
        )}
      >
        <div className="flex items-center justify-between gap-2 px-2 py-2 sm:gap-3 sm:px-3 md:px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 px-1 font-extrabold tracking-tight text-ink sm:px-2"
            aria-label="Gourang Patidar — Home"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden
              className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-ink/10"
            >
              <Image
                src="/images/me.jpg"
                alt=""
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="hidden truncate sm:inline">Gourang</span>
          </Link>

          {/* Desktop links */}
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

          {/* Right cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              href="/#contact"
              size="md"
              className="hidden md:inline-flex"
            >
              Get in touch
            </Button>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full bg-ink/5 text-ink active:bg-ink/10 transition md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-[68px] z-40 flex flex-col bg-bg px-6 pb-12 pt-6 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-bg px-5 py-5 text-2xl font-extrabold tracking-tight text-ink transition hover:border-ink/30 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                  <span aria-hidden className="text-brand">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href="/#contact"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Button>
          </div>

          <div className="mt-auto pt-10 text-sm text-ink/60">
            <p className="font-bold uppercase tracking-tight text-ink/50">
              Elsewhere
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/gourang-patidar/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:text-brand transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/GourangPatidar"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:text-brand transition"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="mailto:gourangpatidar2003@gmail.com"
                  className="font-bold hover:text-brand transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
