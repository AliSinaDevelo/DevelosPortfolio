import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: 'app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Specify the fallback file
      precompress: false,
      strict: true
    }),
    paths: {
      // Set the base path for production; use an empty string for development
      base: process.env.NODE_ENV === 'production' ? '/DevelosPortfolio' : '',
    }
  },
  preprocess: vitePreprocess()
};

export default config;
