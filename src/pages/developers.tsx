import Layout from "@/components/Layout";
import Link from "next/link";

export default function Developers() {
  return (
    <Layout title="Developers">
      <section className="max-w-4xl mx-auto py-16 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Build on Convex</h1>
        <p className="mb-6">
          Start fast with the CLI, REST API, and SDKs. The CVM makes contracts simple and
          expressive and the global state keeps everything interoperable.
        </p>
        <div className="space-y-4">
          <a className="text-blue-300 underline" href="https://docs.convex.world" target="_blank" rel="noreferrer">
            Read the Docs
          </a>
          <a className="text-blue-300 underline block" href="https://github.com/Convex-Dev" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-blue-300 underline block" href="https://discord.gg/convex" target="_blank" rel="noreferrer">
            Discord
          </a>
        </div>
      </section>
    </Layout>
  );
}
