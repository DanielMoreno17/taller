import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4CAF50", 
        secondary: "#FFC107", 
        accent: "#FF5722", 
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
