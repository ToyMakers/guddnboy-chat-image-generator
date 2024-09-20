/** @type {import('next').NextConfig} */
const prefix =
    process.env.NODE_ENV === "production"
        ? "https://guddnboy.github.io/chat-image-generator/"
        : "";

const nextConfig = {
    output: "export",
    assetPrefix: prefix,
};

export default nextConfig;
