/** @type {import('tailwindcss').Config} */
const config = {
    safeList: [
    "rotate-180"
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "2.5rem",
        },
        screens: {
          "2xl": "1536px",
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#f6b111",
          dark: "#c4900a",
          light: "#f9ce5c",
          foreground: "#000",
        },
        secondary: {
          DEFAULT: "#1467af",
          dark: "#0f4c81",
          light: "#1e88e5",
          foreground: "#ffffff",
        },
      },
      boxShadow: {
        sm: "0 5px 8px rgba(0,0,0,0.03)",
      },
    },
  },
};

export default config;
