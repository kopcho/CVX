import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#231F56] text-white">
      {/* Background Torus */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <img
          src="/brand/torus-81.svg"
          alt=""
          className="absolute top-0 left-0 w-1/3 animate-spin-slow"
        />
        <img
          src="/brand/torus-6.svg"
          alt=""
          className="absolute bottom-0 right-0 w-1/2 animate-spin-slow-reverse"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Convex is <span className="text-[#CAD22C]">Decentralization Evolved</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          A high-performance platform for decentralized economic systems — designed for fairness,
          scalability, and mass adoption. Convex delivers lightning-fast consensus, real-time
          transactions, and a global state for the next generation of apps.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/buy-cvm"
            className="px-6 py-3 rounded-lg bg-[#CAD22C] text-[#231F56] font-semibold hover:bg-white transition"
          >
            Buy CVM
          </a>
          <a
            href="/about"
            className="px-6 py-3 rounded-lg border border-white/20 font-semibold hover:border-[#CAD22C] transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
