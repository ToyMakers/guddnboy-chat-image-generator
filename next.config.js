/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
  },
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://guddnboy.github.io/chat-image-generator/"
      : "",
};

module.exports = nextConfig;
