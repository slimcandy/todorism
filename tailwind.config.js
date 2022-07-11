module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  tailwindcss: {config: "./my-tailwind.config.js"},
  daisyui: {
    themes: [
      {
        "my-daisyui-theme": {
          primary: "#8BFFC1",
          "primary-focus": "#57EBAC", // for hover
          "primary-disabled": "#252732", // for hover
          // TODO: найти способ задать стиль для состояния focus
          secondary: "#252732",
        }
      }
    ]
  }
}