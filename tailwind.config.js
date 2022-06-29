module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "todo-dark-1": "#262631",
        "todo-dark-2": "#555770",
        "todo-dark-3": "#8F90A6",
        "todo-black-0": "#1C1C28",
        "todo-black-2": "#252732",
      },
    },
  },
  plugins: [require("daisyui")],
};
