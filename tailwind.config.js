import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#0075B4",
        secondary: "#B05F8A",
        overview: "#F8F8F8",
        warning: "#b5618d",
        blue: "#0075B4",
        danger: "#929292",
      },
      colors: {
        navbar: "#B0E3FF",
        secondary: "#B05F8A",
        blue: "#0075B4",
        disabled: "#929292",
      },
      textColor: {
        blue: "#0075B4",
        white: "#FFFFFF",
        error: "#AC0000",
      },
    },
  },
  plugins: [nextui()],
};
