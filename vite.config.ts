import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `				
			
				`,
			}
		},
		postcss: {
			plugins: [
				postcssPresetEnv({
					stage: 3,
				}),
			]
		},
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
