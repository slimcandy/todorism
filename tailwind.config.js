module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  tailwindcss: {config: "./my-tailwind.config.js"},
  daisyui: {
    themes: [
      {
        "my-daisyui-theme": {
          primary: "#8BFFC1",
          "primary-hover": "#57EBAC",
          "primary-focus": "#39D996",
          secondary: "#252732",
        }
      }
    ]
  }
}