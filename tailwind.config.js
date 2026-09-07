/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1219",
          surface: "#151B24",
          raised: "#1C2430",
          border: "#293241",
        },
        paper: {
          DEFAULT: "#EDEFF3",
          dim: "#8D97A5",
          faint: "#5C6675",
        },
        signal: {
          amber: "#E3A857",
          teal: "#4FB8A6",
          red: "#D9705F",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
}
