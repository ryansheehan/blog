<script lang="ts">
    export let data;
    import type {PostFrontMatter, Image} from '$lib/front-matter';
    import {formatDate} from '$lib/utils';
    import Filler from '$lib/components/filler.svelte'
    import Picture from '$lib/components/picture.svelte';

    const posts: PostFrontMatter[] = data.posts;

    const thumbs: Record<string,Image> = import.meta.glob('/src/posts/*/main-image.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
        eager: true,
        query: {
            enhanced: true,
        },		
    });
</script>

<section>
    <ul class="posts">        
        {#each posts as post (post.slug)}
        <li class="post">
            <a href="posts/{post.slug}" class="title"><h3>{post.title}</h3></a>
            {#if post.image && `/src/posts/${post.slug}/main-image.${post.image.ext}` in thumbs}
                <Picture image={thumbs[`/src/posts/${post.slug}/main-image.${post.image.ext}`]} alt={post.image.alt ?? ''} />
            {/if}
            
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>            
        </li>
        {/each}        
    </ul>
</section>

<Filler />

<style lang="scss">
    
</style>