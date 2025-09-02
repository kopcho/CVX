import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/">
          <Image
            src="/brand/logo-horizontal.svg"
            alt="Convex Logo"
            width={180}
            height={40}
            priority
          />
        </Link>
        <nav className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/tokenomics">Tokenomics</Link>
          <Link href="/developers">Developers</Link>
          <Link href="/buy-cvm">Buy CVM</Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm border-t border-gray-200">
        © {new Date().getFullYear()} Convex Foundation
      </footer>
    </div>
  );
}
