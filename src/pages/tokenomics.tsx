import Layout from "@/components/Layout";

export default function Tokenomics() {
  return (
    <Layout title="CVM Tokenomics (Lite)">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">CVM Tokenomics</h1>
        <p className="mb-4">
          CVM is the native utility token of Convex. It pays for transactions and storage,
          rewards operators, and is used in governance as the network evolves.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Supply</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Hard cap of 1 billion CVM</li>
          <li>Release follows a public curve that adjusts by tranche</li>
          <li>All initial distribution goes to ecosystem contributors and buyers</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Purchase paths</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
  <a
    href="https://convex-web.netlify.app/buy-cvm"
    target="_blank"
    rel="noreferrer"
    className="font-bold text-[#CAD22C] hover:underline"
  >
    Wholesale:
  </a>{" "}
  Convex Foundation sells larger allocations to qualified, accredited purchasers. Manual KYC. Coins are locked with a defined release schedule.
</li>
<li>
  <a
    href="https://convex-web.netlify.app/buy-cvm"
    target="_blank"
    rel="noreferrer"
    className="font-bold text-[#CAD22C] hover:underline"
  >
    Retail:
  </a>{" "}
  Authorized reseller offers smaller amounts with no lock. Price reflects the current release curve and availability.
</li>
        </ul>
        <p className="mt-6 text-gray-300">
          Wrapped CVM will be honored for swap by the Foundation.
        </p>
        <p className="mt-8">
          For full details see the{" "}
          <a className="text-blue-300 underline" href="https://docs.convex.world/docs/cad/tokenomics" target="_blank" rel="noreferrer">
            Tokenomics section in Docs
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
