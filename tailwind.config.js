const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				// DEFAULT: 'clamp(1rem, 10px + 2vw, 3rem)',
				DEFAULT: "5vw",
				// sm: "2rem",
				// lg: "4rem",
				// xl: "5rem",
				// "2xl": "6rem",
			},
			screens: {
				xl: "1200px",
			},
		},

		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					1: "var(--chart-1)",
					2: "var(--chart-2)",
					3: "var(--chart-3)",
					4: "var(--chart-4)",
					5: "var(--chart-5)",
				},
			},
			fontSize: {
				"size-h1": ["var(--h1)", "1"],
				"size-h2": ["var(--h2)", "1"],
				"size-h3": ["var(--h3)", "1"],
				"size-h4": ["var(--h4)", "1"],
				"size-h5": "var(--h5)",
				"size-h6": "var(--h6)",
				"size-small": "var(--small)",
			},
			fontFamily: {
				title: ["var(--font-anton)", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
