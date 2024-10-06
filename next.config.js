/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://guddnboy.github.io/chat-image-generator/"
      : "",
};

module.exports = nextConfig;
