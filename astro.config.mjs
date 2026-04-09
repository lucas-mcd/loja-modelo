import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo']
    },
    server: {
      middlewareMode: true
    },
    build: {
      target: 'es2020'
    }
  }
});
