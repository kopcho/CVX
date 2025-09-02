import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Torus */}
      <Image
        src="/brand/torus-6.svg"
        alt="Convex Torus"
        width={600}
        height={600}
        className="absolute top-0 right-0 opacity-20 pointer-events-none"
      />

      <h1 className="text-5xl font-bold text-gray-900">
        Convex: The Lattice for the AI Economy
      </h1>
      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Open, fair, and sustainable infrastructure for decentralized AI and finance.
      </p>
    </section>
  );
}
