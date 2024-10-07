/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
  },

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://github.com/guddnboy/chat-image-generator/"
      : "",

  output: "export",
};
module.exports = nextConfig;
