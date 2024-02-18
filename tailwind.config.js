/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				"proj-black": "#151515",
				"proj-purple": "#854DFF",
				"proj-white": "#FFFFFF",
				"proj-light-grey": "#F0F0F0",
				"proj-grey": "#716F6F",
				"proj-line": "#DCDCDC",
				"proj-red": "#FF5959",
			},
			fontSize: {
				headingL: [
					"6.5rem",
					{
						lineHeight: "110%",
						letterSpacing: "-2%",
						fontWeight: "800",
					},
				],
				headingM: [
					"2rem",
					{
						lineHeight: "auto",
						letterSpacing: "1%",
						fontWeight: "700",
					},
				],
				headingS: [
					"0.875rem",
					{
						lineHeight: "auto",
						letterSpacing: "25%",
						fontWeight: "700",
					},
				],
				body: [
					"0.875rem",
					{
						lineHeight: "auto",
						letterSpacing: "0%",
						fontWeight: "400",
					},
				],
			},
		},
	},
	plugins: [],
};
