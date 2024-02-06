/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            antiflashWhite: '#f0f0f0',
            blue: '#0000ff',
            night: '#0f0f0f',
            periwinkle: '#c0c0ff',
            tropicalIndigo: '#8080ff',

            bg: '#f0f0f0', // anti-flash white
            text: '#0f0f0f', // night

            primary: '#8080ff', // tropical indigo
            secondary: '#c0c0ff', // periwinkle
            accent: '#0000ff' //blue
         }
      },
   },
   plugins: [],
};
