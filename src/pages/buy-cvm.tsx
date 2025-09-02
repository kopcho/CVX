import Layout from "@/components/Layout";

export default function BuyCVM() {
  return (
    <Layout title="Buy CVM">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Buy CVM</h1>
        <p className="mb-4">
          Buying CVM supports audits, mainnet launch, and ecosystem growth. There are two paths.
        </p>
        <div className="mt-6 space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-2">Wholesale from Convex Foundation</h2>
            <p className="text-gray-300">
              For accredited purchasers. Manual KYC. Larger allocations. Subject to a lock and
              defined release schedule. Contact the Foundation for current tranche and terms.
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Pricing tracks the public release curve.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-2">Retail from Authorized Reseller</h2>
            <p className="text-gray-300">
              Smaller purchases with no lock. Price reflects curve and inventory. A simple way
              to get started and support the network.
            </p>
          </div>
          <p className="text-gray-300">
            Wrapped CVM will be honored for swap by the Foundation.
          </p>
        </div>
      </section>
    </Layout>
  );
}
