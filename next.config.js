/** @type {import('next').NextConfig} */

const directs = require("./pages/direct.json");

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return directs.map((des) => ({
      source: "/" + des.name,
      destination: des.link,
      permanent: true,
      basePath: false,
    }));
  },
};

module.exports = nextConfig;
