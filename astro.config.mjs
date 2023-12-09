// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from 'astro/config';
import million from 'million/compiler';
 
export default defineConfig({
  vite: {
    plugins: [million.vite({ mode: 'react', server: true, auto: true })]
  }
});