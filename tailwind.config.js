module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: { "main": ["Manrope", "sans-serif"] },
      fontSize: {
        "h1": ["1.5rem", { lineHeight: "32px" }],
        "h2": ["1.125rem", { lineHeight: "22px" }],
        "h3": ["1rem", { lineHeight: "22px" }],
        "medium": ["0.875rem", { lineHeight: "18px" }],
        "small": ["0.75rem", { lineHeight: "16px" }]
      }
    }
  }
};