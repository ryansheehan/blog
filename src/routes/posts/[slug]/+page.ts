import {dev} from '$app/environment';
import { error } from '@sveltejs/kit'

export const prerender = 'auto'

export async function load({ params }) {
	try {		
		const post = await (
			import(`../../../posts/${params.slug}/index.md`)			
		);
		
		if(!dev && !post.metadata?.publish) {
			throw error(404, `Could not find ${params.slug}`);
		}

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}

