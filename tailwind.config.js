module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxl: ["1.5rem", { lineHeight: "32" }],
        xl: ["1.125rem", { lineHeight: "22" }],
        lg: ["1rem", { lineHeight: "22" }],
        base: ["0.875", { lineHeight: "18" }],
        sm: ["0.75", { lineHeight: "16" }]
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
        black: "900"
      },
      fontStyle: {
        h1: { fontSize: this.fontSize.xxl, fontWeight: this.fontWeight.bold },
        h2: { fontSize: this.fontSize.xl, fontWeight: this.fontWeight.bold },
        h3: { fontSize: this.fontSize.lg, fontWeight: this.fontWeight.semiBold },
        "body-lg": { fontSize: this.fontSize.lg, fontWeight: this.fontWeight.medium },
        "body-md": { fontSize: this.fontSize.base, fontWeight: this.fontWeight.medium },
        "body-base": { fontSize: this.fontSize.base, fontWeight: this.fontWeight.regular },
        "body-sm": { fontSize: this.fontSize.sm, fontWeight: this.fontWeight.regular }
      }
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),]
};
