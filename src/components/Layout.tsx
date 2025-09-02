import React from "react";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#231F56] text-white min-h-screen flex flex-col font-sans">
      <Head>
        <title>Convex – The Future of Decentralized Economics</title>
        <meta
          name="description"
          content="Convex is a high-performance platform for building decentralized economic systems with fairness, speed, and scalability."
        />
      </Head>

      {/* Top Navigation */}
      <header className="w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/brand/logo-color-horizontal.svg"
              alt="Convex Logo"
              className="h-8 w-auto"
            />
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="/about" className="hover:text-[#CAD22C] transition">About</a>
            <a href="/lattice" className="hover:text-[#CAD22C] transition">Lattice</a>
            <a href="/tokenomics" className="hover:text-[#CAD22C] transition">Tokenomics</a>
            <a href="/roadmap" className="hover:text-[#CAD22C] transition">Roadmap</a>
            <a href="/use-cases" className="hover:text-[#CAD22C] transition">Use Cases</a>
            <a href="/contribute" className="hover:text-[#CAD22C] transition">Contribute</a>
            <a href="https://docs.convex.world" target="_blank" rel="noreferrer" className="hover:text-[#CAD22C] transition">
              Docs
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-white/70 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span>© {new Date().getFullYear()} Convex Foundation. All rights reserved.</span>
          <div className="flex space-x-6">
            <a href="https://x.com/convex" target="_blank" rel="noreferrer" className="hover:text-[#CAD22C]">Twitter</a>
            <a href="https://discord.gg/convex" target="_blank" rel="noreferrer" className="hover:text-[#CAD22C]">Discord</a>
            <a href="https://github.com/convex-dev" target="_blank" rel="noreferrer" className="hover:text-[#CAD22C]">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
