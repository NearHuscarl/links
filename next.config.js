/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/botextended",
        destination: "https://github.com/nearhuscarl/botextended",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
