import { error, json, type RequestHandler } from '@sveltejs/kit'
import type { PostFrontMatter, RawPostFrontMatter, Image } from '$lib/front-matter'
import {dev} from '$app/environment';
import type {PaginationRequest} from '$lib/pagination';

const paths = import.meta.glob(['/src/posts/*/*.md'], { eager: true });

const thumbs: Record<string,Image> = import.meta.glob('/src/posts/*/main-image.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
	eager: true,
	query: {
		enhanced: true,
		w: 200,
		format: 'webp'
	},		
});



async function getPosts({skip, take}: PaginationRequest) {
	type IntermediatePostFrontMatter = Omit<PostFrontMatter, 'image'> & Pick<RawPostFrontMatter, 'image'>;
	let rawPosts: IntermediatePostFrontMatter[] = [];

	for (const path in paths) {
	 	const file = paths[path]
	 	const slug = path.split('/').at(-2)!;					

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as RawPostFrontMatter
			const published = metadata.published ?? false;
			
			const post = { ...metadata, slug, published };			

			if (post.published || dev) {
				rawPosts.push(post)
			}
		}
	}

	const _skip = skip ?? 0;
	const _take = take ?? rawPosts.length;

	const posts = rawPosts
		.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
		.slice(_skip, _skip+_take)
		.map(({image: rawImage, slug, ...props}) => {
			const image: Image = { ...thumbs[`/src/posts/${slug}/main-image.${rawImage?.ext}`], alt: rawImage?.alt ?? '' }			
			const frontMatter: PostFrontMatter = {...props, slug, image};
			return frontMatter;
		});

	return posts;
}

export const GET: RequestHandler = async ({url}) => {
	// const _skip = url.searchParams.get('skip');
	// const _take = url.searchParams.get('take');

	// const skip = _skip !== null ? Number(_skip) : undefined;
	// const take = _take !== null ? Number(_take) : undefined;

	// if (skip === Number.NaN || take === Number.NaN) {
	// 	error(400, {message: 'invalid pagination'});
	// }

	const posts = await getPosts({skip:0, take:3})
	return json(posts)
}
