/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-dynamic-image": "var(--image-url)",
      },
      gridTemplateRows: "5vh 85vh",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
