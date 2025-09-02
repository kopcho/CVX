import Layout from "@/components/Layout";
import Link from "next/link";

export default function Lattice() {
  return (
    <Layout title="Lattice Technology">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Lattice for Everyone</h1>
        <p className="mb-4">
          The Lattice is a secure way to share data and computation across many peers.
          It uses merge friendly data structures, strong cryptography, and simple rules that
          allow the network to converge without locks or heavy protocols.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">What you get</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Fast finality with Convergent Proof of Stake</li>
          <li>A single global state without shards or rollups</li>
          <li>Immutable data structures that are easy to verify</li>
          <li>A data lattice for off chain content, files, and models</li>
        </ul>
        <p className="mt-8">
          Want the full deep dive?{" "}
          <a className="text-blue-300 underline" href="https://docs.convex.world/docs/overview/lattice" target="_blank" rel="noreferrer">
            Read the detailed Lattice docs
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
