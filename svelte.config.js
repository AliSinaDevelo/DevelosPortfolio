import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // appDir in build/_app
    appDir: 'app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '.html', // Specify the fallback file
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH,
    }
  },
  preprocess: vitePreprocess()
};

export default config;
