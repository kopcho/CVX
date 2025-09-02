/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces `next export`
  images: { unoptimized: true }, // fixes Image API
};

export default nextConfig;
