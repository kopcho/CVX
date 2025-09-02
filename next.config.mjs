
// Static export for drag‑and‑drop Netlify deploys
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true }
};
export default nextConfig;
