module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h1": ["1.5rem", { lineHeight: "32px" }],
        "h2": ["1.125rem", { lineHeight: "22px" }],
        "h3": ["1rem", { lineHeight: "22px" }],
        "medium": ["0.875rem", { lineHeight: "18px" }],
        "small": ["0.75rem", { lineHeight: "16px" }]
      },
    }
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"),]
};
