/* eslint-disable @typescript-eslint/naming-convention */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				red: {
					500: "#EF233C",
				},
			},
			fontFamily: {
				sans: "Montserrat, sans-serif",
				heading: "Work Sans, sans-serif",
			},
		},
	},
	darkMode: ["class"],
	plugins: [],
};
