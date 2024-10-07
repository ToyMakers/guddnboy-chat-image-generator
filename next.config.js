/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
  },

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://guddnboy.github.io/chat-image-generator/"
      : "",

  basePath:
    process.env.NODE_ENV === "production" ? "/chat-image-generator" : "",

  output: "export",
};

module.exports = nextConfig;
