import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				'static/assets/cv/output',
				'static/assets/favicon',
			],
		},
	},
});
