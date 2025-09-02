import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative Toroids */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/brand/torus-81.svg"
          alt=""
          className="absolute -top-24 -left-24 w-[420px] opacity-15 blur-[2px]"
        />
        <img
          src="/brand/torus-6.svg"
          alt=""
          className="absolute -bottom-28 -right-32 w-[520px] opacity-15 blur-[1px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Convex is{" "}
          <span className="bg-gradient-to-r from-white to-[#9AA5FF] bg-clip-text text-transparent">
            Decentralization Evolved
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-white/85 leading-relaxed">
          A high-performance platform for decentralized applications—built for
          fairness, real-time interactions, and global-scale adoption.
          Lightning-fast consensus. Atomic transactions. True global state.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/buy-cvm"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold bg-[#CAD22C] text-[#231F56] hover:bg-white shadow-lg hover:shadow-xl transition"
          >
            Buy CVM
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold border border-white/30 text-white/90 hover:text-white hover:border-white transition"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-14 text-white/60 text-sm">
          <span className="align-middle">Built openly by the Convex community</span>
        </div>
      </div>
    </section>
  );
}

