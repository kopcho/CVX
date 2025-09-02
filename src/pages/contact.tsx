import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <section className="max-w-3xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="mb-4">
          Say hello on Discord or reach the team by email.
        </p>
        <ul className="space-y-2 text-blue-300">
          <li><a className="underline" href="https://discord.gg/convex" target="_blank" rel="noreferrer">Discord</a></li>
          <li><a className="underline" href="mailto:info@convex.world">info@convex.world</a></li>
        </ul>
      </section>
    </Layout>
  );
}
