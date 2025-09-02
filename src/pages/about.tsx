import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout title="About Convex">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">About Convex</h1>
        <p className="mb-4">
          Convex is a public, decentralized system for real time peer to peer exchange of data
          and value. It is powered by Lattice Technology and the CVM virtual machine. The goal
          is a fair, open, and sustainable digital economy that anyone can build on.
        </p>
        <p className="mb-4">
          Convex provides lightning fast consensus, a consistent global state, and a developer
          experience that favors simple code and atomic transactions.
        </p>
      </section>
    </Layout>
  );
}
