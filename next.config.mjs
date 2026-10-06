/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AdityaYInamdar',
  assetPrefix: '/AdityaYInamdar/',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
