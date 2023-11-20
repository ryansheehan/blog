import type {RequestHandler} from '@sveltejs/kit';
import type { PostFrontMatter } from '$lib/front-matter';
import {url} from '$lib/config';

export const GET: RequestHandler = async ({fetch}) => {

    const response = await fetch('api/posts');
	const posts = await response.json().then((frontMatters: PostFrontMatter[]) => frontMatters
        .filter(({published}) => published)
        .map(({slug, date}) => `<url>
            <loc>${url}posts/${slug}/</loc>
            <lastmod>${date}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>`).join()
    );

    return new Response(
        `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
        <url>
            <loc>${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        <url>
            <loc>${url}about</loc>
            <changefreq>yearly</changefreq>
            <priority>0.1</priority>
        </url>
        <url>
            <loc>${url}resume</loc>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
        </url>
        ${posts}
        </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    )
}