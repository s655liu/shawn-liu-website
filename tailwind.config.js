/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        primary: "#64ffda",
        secondary: "#7d5fff",
        accent: "#ff4757",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        inter: ["Inter", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
}
