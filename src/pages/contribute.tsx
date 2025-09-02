import Layout from "@/components/Layout";

export default function Contribute() {
  return (
    <Layout title="Contribute">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Contribute</h1>
        <p className="mb-4">
          You can help by writing code, improving docs, building apps, or hosting community
          sessions. Contributors are recognized with grants and CVM where appropriate.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Code and libraries</li>
          <li>Tutorials and docs</li>
          <li>Design, content, and translations</li>
          <li>Business development and partnerships</li>
        </ul>
      </section>
    </Layout>
  );
}
