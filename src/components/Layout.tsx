import Head from "next/head";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const nav = [
  { href: "/about", label: "About" },
  { href: "/lattice", label: "Lattice" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contribute", label: "Contribute" },
  { href: "https://docs.convex.world", label: "Docs", external: true },
];

export default function Layout({ children, title }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? `${title} | Convex` : "Convex"}</title>
        <meta property="og:title" content={title ? `${title} | Convex` : "Convex"} />
      </Head>

      <div className="min-h-screen bg-[#231F56] text-white flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0b2b]/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/brand/logo-284c-horizontal.svg"
                alt="Convex"
                className="h-8 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-white/15 hover:ring-white/30"
            >
              {/* Icon toggles between hamburger and X */}
              {open ? (
                // X icon
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                // Hamburger icon
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile panel */}
          <div
            className={`md:hidden transition-all duration-200 overflow-hidden border-t border-white/10 ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="px-6 py-4 flex flex-col gap-3 bg-[#0e0b2b]/80">
              {nav.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="py-2 text-base text-white/90 hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-base text-white/90 hover:text-white"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} Convex Foundation. Open-source, community-driven.
          </div>
        </footer>
      </div>
    </>
  );
}
