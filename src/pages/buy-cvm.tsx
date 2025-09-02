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
          {/* Wholesale card with Netlify form */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-2">Wholesale from Convex Foundation</h2>
            <p className="text-gray-300">
              For accredited purchasers. Manual KYC. Larger allocations. Subject to a lock and
              defined release schedule. Contact the Foundation for current tranche and terms.
            </p>
            <p className="mt-2 text-gray-400 text-sm">Pricing tracks the public release curve.</p>

            <form
              name="wholesale-interest"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-4 space-y-3"
            >
              {/* Required hidden inputs for Netlify form handling */}
              <input type="hidden" name="form-name" value="wholesale-interest" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black"
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your interest"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-black"
                rows={3}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#CAD22C] text-[#231F56] font-medium hover:bg-[#b5be27] transition"
              >
                Submit Interest
              </button>
            </form>
          </div>

          {/* Retail card with Paisley link */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-2">Retail from Authorized Reseller</h2>
            <p className="text-gray-300">
              Smaller purchases with no lock. Price reflects curve and inventory. A simple way
              to get started and support the network.
            </p>
            <a
              href="https://www.paisley.io/buy-convex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-white text-[#231F56] font-medium hover:bg-gray-200 transition"
            >
              Buy from Paisley
            </a>
          </div>
        </div>

        <p className="mt-6 text-gray-300">
          Wrapped CVM will be honored for swap by the Foundation.
        </p>
      </section>
    </Layout>
  );
}
