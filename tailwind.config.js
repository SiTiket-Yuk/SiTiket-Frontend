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
				blue: "#0075B4",
				overview: "#F8F8F8",
			},
			colors: {
				navbar: "#B0E3FF",
			},
			textColor: {
				blue: "#0075B4",
			},
		},
	},
	plugins: [nextui()],
};
