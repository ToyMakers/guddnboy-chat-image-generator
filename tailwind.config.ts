import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                chatbg: "#9bbbd4",
                yourchatbg: "#ffffff",
                mychatbg: "#fef01b",
                timebg: "#556677",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
export default config;
