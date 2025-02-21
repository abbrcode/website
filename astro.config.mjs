import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
   output: "static",
   adapter: vercel(),
   integrations: [svelte(), tailwind({
      applyBaseStyles: false,
   })],
});