import Layout from "@/components/Layout";

export default function Roadmap() {
  return (
    <Layout title="Roadmap">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Roadmap</h1>
        <ul className="space-y-4 text-gray-300">
          <li><strong>Now:</strong> Protonet live and iterating. Community growth and content.</li>
          <li><strong>Next:</strong> Security audit, mainnet readiness, and broader CVM availability.</li>
          <li><strong>Tooling:</strong> Wallet UX, SDKs, and data lattice utilities.</li>
          <li><strong>Ecosystem:</strong> Grants for apps, integrations, and education.</li>
        </ul>
      </section>
    </Layout>
  );
}
