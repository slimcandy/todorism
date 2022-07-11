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
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        superBold: "900"
      },
    }
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"),]
};
