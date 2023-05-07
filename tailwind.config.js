module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      height: {
        header: "50px",
      },
      padding: {
        base: "1rem",
      },
      screens: {
        xs: "390px",
      },
      fontFamily: {
        extralight: ["Manrope-ExtraLight", "sans-serif"],
        light: ["Manrope-Light", "sans-serif"],
        normal: ["Manrope", "sans-serif"],
        medium: ["Manrope-Medium", "sans-serif"],
        semibold: ["Manrope-SemiBold", "sans-serif"],
        bold: ["Manrope-Bold", "sans-serif"],
        extrabold: ["Manrope-ExtraBold", "sans-serif"],
      },
      fontSize: {
        h1: ["1.5rem", { lineHeight: "32px" }],
        h2: ["1.125rem", { lineHeight: "22px" }],
        h3: ["1rem", { lineHeight: "22px" }],
        medium: ["0.875rem", { lineHeight: "18px" }],
        small: ["0.75rem", { lineHeight: "16px" }],
      },
      colors: {
        "dark-0": "#17181F",
        "dark-1": "#262631",
        "dark-2": "#555770",
        "dark-3": "#8F90A6",
        "dark-4": "#C7C9D9",

        "black-0": "#1C1C28",
        "black-1": "#21222C",
        "black-2": "#252732",
        "black-3": "#3E4153",
        "black-4": "#585B6F",

        "green-0": "#0A7951",
        "green-1": "#0DB77A",
        "green-2": "#39D996",
        "green-3": "#57EBAC",
        "green-4": "#8BFFC1",

        "light-0": "#E4E4EB",
        "light-1": "#EBEBF0",
        "light-2": "#F2F2F5",
        "light-3": "#FAFAFC",
        "light-4": "#FFFFFF",

        "purple-0": "#5C3386",
        "purple-1": "#9A33C4",
        "purple-2": "#D134FA",
        "purple-3": "#E574FF",
        "purple-4": "#FDDAFF",

        "blue-0": "#374567",
        "blue-1": "#27468F",
        "blue-2": "#1946B3",
        "blue-3": "#3965CE",
        "blue-4": "#A9C0FA",

        "red-0": "#E15151",
        "red-1": "#FF5A5A",
        "red-2": "#FF7575",
        "red-3": "#FF9D9D",
        "red-4": "#FFE5E5",
      },
      keyframes: {
        "box-shadow-inset-pulse": {
          "0%": {
            "box-shadow": "0 0 0 10px black-0 inset",
          },
          "50%": {
            "box-shadow": "0 0 0 3px black-0 inset",
          },
          "100%": {
            "box-shadow": "0 0 0 4px black-0 inset",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#8BFFC1",
          "primary-focus": "#57EBAC", // for hover
          "primary-disabled": "#252732",
          secondary: "#252732",
          "secondary-focus": "#3E4153",
          "secondary-disabled": "#252732",
        },
        dark: {
          primary: "#57EBAC",
          "primary-focus": "#39D996", // for hover
          "primary-disabled": "#FAFAFC",
          secondary: "#252732",
          "secondary-focus": "#3E4153",
          "secondary-disabled": "#252732",
        },
      },
    ],
  },
};
