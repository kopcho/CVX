import Layout from "@/components/Layout";

export default function UseCases() {
  return (
    <Layout title="Use Cases">
      <section className="max-w-4xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">What People Build on Convex</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Payments and Stable Value</h2>
            <p className="text-gray-300">
              Build stablecoins and flatcoins with low fees and instant confirmation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Games and Virtual Worlds</h2>
            <p className="text-gray-300">
              Real time multiplayer logic and digital items with on chain rules.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Lattice Apps</h2>
            <p className="text-gray-300">
              Large content, files, models, and analytics that live off chain but remain
              verifiable and programmable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">DeFi and Assets</h2>
            <p className="text-gray-300">
              Fungible tokens, exchanges, and smart contracts with the CVM.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
