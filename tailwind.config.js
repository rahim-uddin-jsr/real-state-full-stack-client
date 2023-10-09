import tailwindForms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0F172A",
        primary: "#fff",
        secondary: "#16A34A",
      },
      backgroundImage: {
        "signup-bg": "url('/src/assets/images/building.jpg')",
      },
    },
  },
  plugins: [tailwindForms],
  corePlugins: {
    // ...
    ringColor: false,
  },
  darkMode: ["class"],
};
