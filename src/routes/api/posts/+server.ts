import { json } from '@sveltejs/kit'
import type { PostFrontMatter } from '$lib/front-matter'
import {dev} from '$app/environment';

async function getPosts() {
	let posts: PostFrontMatter[] = []

	const paths = import.meta.glob(['/src/posts/*/*.md'], { eager: true })

	for (const path in paths) {
	 	const file = paths[path]
	 	const slug = path.split('/').at(-2);		

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostFrontMatter, 'slug'>
			const post = { ...metadata, slug } satisfies PostFrontMatter;

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
