/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
