import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Layout title="Convex — The Network for Open, Decentralised Economies">
      <Hero />
      <section className="py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why Convex</h2>
        <p className="text-gray-300">
          Convex is a high performance platform with real time finality, low fees, and a single
          global state. It is built for mobile scale apps, payments, AI, and modern games.
        </p>
      </section>
    </Layout>
  );
}
