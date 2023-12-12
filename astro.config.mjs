// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// 
// https://astro.build/config
export default defineConfig({});

import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import react from "@astrojs/react";
export default defineConfig({
  vite: {
    plugins: [million.vite({
      mode: 'react',
      server: true,
      auto: true
    })]
  },
  integrations: [react()]
});