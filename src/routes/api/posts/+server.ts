import { json } from '@sveltejs/kit'
import type { PostFrontMatter, RawPostFrontMatter } from '$lib/front-matter'
import {dev} from '$app/environment';

const paths = import.meta.glob(['/src/posts/*/*.md'], { eager: true });

async function getPosts() {
	let posts: PostFrontMatter[] = [];

	for (const path in paths) {
	 	const file = paths[path]
	 	const slug = path.split('/').at(-2)!;					

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as RawPostFrontMatter
			const published = metadata.published ?? false;
			
			const post = { ...metadata, slug, published } satisfies PostFrontMatter;			

			if (post.published || dev) {
				posts.push(post)
			}
		}
	}

	posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
