/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            dark: '#0f0f0f',      // night
            light: '#f0f0f0',     // antiflash white

            primary: '#c2c2ff',   // periwinkle
            accent: '#0000ff'     // blue
         }
      },
   },
   plugins: [],
};
