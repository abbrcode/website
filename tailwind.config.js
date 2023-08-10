/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            bg: "#c0c0ff",
            text: "#0f0f0f",
            primary: "#ffffff",
            accent: "#0000ff"
         }
      },
   },
   plugins: [],
};

// https://github.com/abbrcode/db/blob/main/org/design.jsonc