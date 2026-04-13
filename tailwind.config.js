/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                red: "#ff0000",
            },
            fontFamily: {
                montreal: ["montreal", "sans-serif"],
                light: ["light", "sans-serif"],
                fig: ["fig", "sans-serif"],

                animation: {
                    fade: "fadeOut .2s ease-in-out",
                },

                keyframes: (theme) => ({
                    fadeOut: {
                        "0%": { backgroundColor: theme("colors.white") },
                        "100%": { backgroundColor: theme("colors.grey") },
                    },
                }),
            },
        },
        plugins: [],
    },
};
