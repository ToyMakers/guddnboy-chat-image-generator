/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
  },

  output: "export",

  basePath:
    process.env.NODE_ENV === "production" ? "/chat-image-generator" : "",
};
module.exports = nextConfig;
