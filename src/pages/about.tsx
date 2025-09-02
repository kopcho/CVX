import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout title="About Convex">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">About Convex</h1>
        <p className="mb-4">
  Convex is a public, decentralised system for real time peer to peer exchange of data
  and value. It is powered by{" "}
  <a
    href="https://docs.convex.world/docs/overview/lattice"
    target="_blank"
    rel="noreferrer"
    className="text-[#CAD22C] hover:underline"
  >
    Lattice Technology
  </a>{" "}
  and the{" "}
  <a
    href="https://docs.convex.world/docs/tutorial/glossary#cvm"
    target="_blank"
    rel="noreferrer"
    className="text-[#CAD22C] hover:underline"
  >
    CVM virtual machine
  </a>
  . The goal is a fair, open, and sustainable digital economy that anyone can build on.
</p>
        <p className="mb-4">
          Convex provides lightning fast consensus, a consistent global state, and a developer
          experience that favors simple code and atomic transactions.
        </p>
      </section>
    </Layout>
  );
}
