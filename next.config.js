/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },

  async redirects() {
    return [
      {
        source: "/backslash",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/backslash/:slug",
        destination: "/blog/:slug/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
