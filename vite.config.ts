import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import postcssPresetEnv from 'postcss-preset-env';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	],
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
