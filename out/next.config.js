module.exports = {
    output: "export",
    basepath: "/chat-image-generator",
    assetPrefix:
        process.env.NODE_ENV === "production"
            ? "https://guddnboy.github.io/chat-image-generator/"
            : "",
};
