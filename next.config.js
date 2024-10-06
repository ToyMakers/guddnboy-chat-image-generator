/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "production"
    ? "https://guddnboy.github.io/chat-image-generator/"
    : "";

const nextConfig = {
  output: "export",
  assetPrefix: prefix,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://guddnboy.github.io/chat-image-generator/"
      : "",
};

module.exports = nextConfig; // nextConfig 변수를 올바르게 내보냅니다.
