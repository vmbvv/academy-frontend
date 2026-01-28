import animate from "tailwindcss-animate";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        emoji: [
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Noto Color Emoji",
          "EmojiOne Color",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in-zoom": "fadeInZoom 0.3s ease-out forwards",
      },
      keyframes: {
        fadeInZoom: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [animate],
};
