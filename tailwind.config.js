/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#663399",

          secondary: "#E64A4A",

          accent: "#4ECDC4",

          neutral: "#F7F7F7",

          "base-100": "#F7F7F7",

          info: "#7EDCD4",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
