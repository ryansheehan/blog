import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import {getHighlighter} from 'shiki';

import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import relativeImages from 'mdsvex-relative-images';
import rehypeRewrite from 'rehype-rewrite';

// https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md


// https://joyofcode.xyz/sveltekit-markdown-blog#setting-up-mdsvex

// rehypeRewrite({
// 	rewrite: (node) => {
// 		if (node.type == 'element' && node.tagName == 'script') {
// 			node.properties
// 		}
// 	}
// })


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	smartypants: true,
	layout: {
		// _: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({ theme: 'poimandres' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		},
	},
	remarkPlugins: [
		remarkUnwrapImages, 
		relativeImages,
		[remarkToc, { tight: true }]
	],
	rehypePlugins: [
		[rehypeRewrite, {
			rewrite: (node) => {
				if (node.type == 'element' && node.tagName == 'img') {
					node.tagName = 'enhanced:img';
					// node.properties['sizes'] = "";
					node.properties['class'] = `post-img ${node.properties['class'] ?? ''}`.trimEnd();
				}
				
				if (node.type == 'raw' && node.value?.startsWith("<script>")) {						
					const re = /"\.[\\\/].*\.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)\??.*"/gm;					
					let newValue = node.value;
					Array.from(node.value.match(re)).forEach(m => {								
						const relativePath = m.split('"')[1];						
						const url = new URL(relativePath, "c://");						
						url.searchParams.append('enhanced', '');												
						const updatedPath = `".${url.pathname}${url.search}"`;						
						newValue = newValue.replace(m, updatedPath);						
					})
					node.value = newValue;
				}
			}
		}],
		rehypeSlug
	],	
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
