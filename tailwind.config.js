/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        primarydark: "#FF8A6B",
        offwhite: "#FFF8F2",
        secondary: "#FFB347", // Pastel Orange
        accent: "#FFD700", // Gold (unchanged)
        background: "#FFF5E6", // Very Light Peach
        text: "#4A4A4A", // Dark Gray
      },
    },
  },
  plugins: [],
};
