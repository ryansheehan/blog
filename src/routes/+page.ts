import type { PostFrontMatter } from '$lib/front-matter.js'

export async function load({ fetch }) {
	const response = await fetch('api/posts')
	const posts: PostFrontMatter[] = await response.json()
	return { posts }
}
