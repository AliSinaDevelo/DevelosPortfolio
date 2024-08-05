import adapter from '@sveltejs/adapter-static'; // or another appropriate adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',  // Ensure this matches the publish_dir in your GitHub Actions config
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : process.env.BASE_PATH,
    }
  },
  preprocess: vitePreprocess()
};

export default config;
