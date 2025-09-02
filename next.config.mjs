/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ disable optimization for static export
  },
  output: 'export', // ✅ tells Next.js to generate /out
};

export default nextConfig;
