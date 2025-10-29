/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-[#2D5F52]',
    "border-gray-600 ",
    "border-gray-500",
    "bg-gray-500",
    "bg-gray-600",
    "backdrop-blur-sm",
    "h1"
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "40%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },

    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        DEFAULT: "#049E76",
        light: "#00FFBD",
      },
      secondary: "#000",
      red: {
        DEFAULT: "#CC0000",
        light: "#F3C1C3",
        medium: "#F04939",
      },
      green: {
        light: "#E7F3E3",
        dark: "#A1B999",
        darker: "#2C322B",
      },
      orange: {
        light: "#FFE7D2",
      },
      blue: {
        DEFAULT: "#4285F4",
        light: "#C8EAF4",
      },
      cyan: {
        DEFAULT: "#007AA0",
      },
      yellow: {
        light: "#FFFAC2",
      },
      orange: {
        light: "#FFE7D2",
      },
      pink: {
        DEFAULT: "#EC008C",
        light: "#FFE9F6",
      },
      gray: {
        DEFAULT: "#00FFBD",
        normal: "#AAAAAA",
        light: "#D0D0D0",
        dark: "#3A3A3A",
        100: "#f8f8f8",
        200: "#eeeeee",
        300: "#dee2e6",
        400: "#c4c4c4",
        500: "#8e8e8e",
        600: "#666666",
        700: "#4d4d4d",
        800: "#3a3a3a",
        900: "#2b2b2b",
      },
    },

    backgroundImage: {
      "primary-gradient": "linear-gradient(to bottom, #22856B, #049E76)",
      "light-gradient":
        "radial-gradient(circle, #f249c817 -15%, #2d5f5217 50%)",
      "dark-gradient1":
        "radial-gradient(ellipse at top right, #EBABE9 60%, #020202 80%);",
      "dark-gradient2":
        "radial-gradient(ellipse at top right, #A3A3CA 80%, #020202 80%);",
      "dark-gradient3":
        "radial-gradient(ellipse at top right, #7C67B0 80%, #020202 80%);",
      "dark-gradient4":
        "radial-gradient(ellipse at top right, #37A184 80%, #020202 80%);",
      "gradient-goodhand":
        "linear-gradient(216deg, #171717 0%, #171717 65%, #F249C8 100%)",
      "gradient-goodhand2":
        "linear-gradient(216deg, #171717 0%, #171717 65%, #1B67A5 100%)",
      "gradient-shopsphere":
        "linear-gradient(216deg, #C77AD1 0%, #C77AD1 40%, #7549A4 65%, #7549A4 100%)",
      "gradient-vbrandx":
        "linear-gradient(216deg, #16338a 0%, #16338a 40%, #2d846a 65%, #2d846a 100%)",
      "gradient-knitrix":
        "linear-gradient(216deg, #8267b3 0%, #8267b3 40%, #cd918d 65%, #cd918d 100%)",
      "gradient-streak":
        "linear-gradient(216deg, #979797 0%, #979797 40%, #262628 65%, #262628 100%)",
      "gradient-border":
        "linear-gradient(260deg, #FFFFFF1A 20%, #049E76 50%, #FFFFFF1A 75%, #FFFFFF1A 100%)",
      "gradient-process":
        "linear-gradient(180deg, #049E76cc -20%, #000000cc 10%)",
    },

    fontFamily: {
      sans: ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
    },

    fontSize: {
      xs: "0.75rem", //12px
      sm: ["0.875rem", { lineHeight: "22px" }], //14px
      base: ["1rem", { lineHeight: "24px" }], //16px
      md: ["1.125rem", { lineHeight: "28px" }], //18px
      lg: ["1.25rem", { lineHeight: "28px" }], //20px
      xl: ["1.375rem", { lineHeight: "28px" }], //22px
      xxl: ["1.5rem", { lineHeight: "38px" }], //24px
      h1: ["5.5rem", { lineHeight: "97px" }], //88px
      h2: ["4.5rem", { lineHeight: "83px" }], //72px
      h3: ["3.5rem", { lineHeight: "67px" }], //56px
      h4: ["2.625rem", { lineHeight: "53px" }], //42px
      h5: ["2rem", { lineHeight: "42px" }], //32px
      h6: ["1.875rem", { lineHeight: "40px" }], //30px
    },

    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        md: "1.5rem",
        lg: "1.5rem",
        xl: "1.5rem",
        xxl: "4.375rem",
      },

      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        xxl: "1440px",
      },
    },

    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      17: "4.25rem",
      18: "4.5rem",
      19: "4.75rem",
      20: "5rem",
      21: "5.25rem",
      22: "5.5rem",
      23: "5.75rem",
      24: "6rem",
      25: "6.25rem",
      26: "6.5rem",
      27: "6.75rem",
      28: "7rem",
      30: "7.5rem",
    },

    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: "0.25rem",
      lg: ".5rem",
      xl: "1.5rem",
      full: "9999px",
    },

    boxShadow: {
      none: "0",
      DEFAULT: "1px 1px 4px rgba(0, 0, 0, 0.1)",
      sm: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
      md: "0 0 13px 0 rgba(0, 0, 0, 0.1)",
      lg: "0 4px 24px 0 rgba(0, 0, 0, 0.1)",
    },
  },

  plugins: [],
};
