module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  tailwindcss: {config: "./my-tailwind.config.js"}
}