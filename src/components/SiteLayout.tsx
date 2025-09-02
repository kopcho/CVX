import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

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
  return (
    <>
      <Head>
        <title>{title ? `${title} | Convex` : "Convex"}</title>
      </Head>

      <div className="min-h-screen bg-[#231F56] text-white flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0b2b]/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/brand/logo-284c-horizontal.svg"
                alt="Convex"
                className="h-6 w-auto"
              />
            </Link>

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
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} Convex Foundation. Open-source,
            community-driven.
          </div>
        </footer>
      </div>
    </>
  );
}
