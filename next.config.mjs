/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the modern static export mode (replaces `next export`)
  output: 'export',
  images: { unoptimized: true }, // required for static export
};
export default nextConfig;
