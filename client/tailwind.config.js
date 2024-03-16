/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				muted: "#4b5563",
				gray: {
					dark: "#27272a",
				},
			},
		},
	},
	plugins: [],
};
