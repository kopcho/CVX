import Layout from "@/components/Layout";

export default function Manifesto() {
  return (
    <Layout title="Manifesto (Lite)">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Convex Manifesto</h1>
        <p className="mb-4">
          We believe in open systems, self sovereignty, low cost transactions, and sustainable
          technology. Convex is built to give people direct access to value exchange and to
          remove unnecessary gatekeepers.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Open access and neutral infrastructure</li>
          <li>Real time, atomic transactions</li>
          <li>Global state with clear rules</li>
          <li>Transparency with respect for privacy</li>
          <li>Open source development and community rewards</li>
        </ul>
        <p className="mt-8">
          Read the full manifesto in{" "}
          <a className="text-blue-300 underline" href="https://docs.convex.world" target="_blank" rel="noreferrer">
            Docs
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
