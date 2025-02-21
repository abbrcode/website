import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [
         tailwind()
      ]
   },
   output: "static",
   adapter: vercel(),
   integrations: [svelte()],
});