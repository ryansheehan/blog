<script lang="ts">
    export let data;
    import type {PostFrontMatter} from '$lib/front-matter';
    import {formatDate} from '$lib/utils';

    const posts: PostFrontMatter[] = data.posts;
    
</script>

<section>
    <ul class="posts">        
        {#each posts as post (post.slug)}
        <li class="post">
            <a href="posts/{post.slug}" class="title"><h3>{post.title}</h3></a>
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>
        </li>
        {/each}        
    </ul>
</section>

<style lang="scss">
    .posts {
        display: grid;
        gap: 2em;
    }

    .post {
        max-inline-size: 60ch;
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--clr-neutral-500);
        padding-bottom: 2rem;
    }
</style>