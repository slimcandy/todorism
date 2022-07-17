module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#262631",
        "dark-2": "#555770",
        "dark-3": "#8F90A6",
        "black-0": "#1C1C28",
        "black-2": "#252732",
        "black-3": "#3E4153",
      },
    },
  },
  plugins: [require("daisyui")],
};
