<script lang="ts">
    export let data;
    import type {PostFrontMatter, Image} from '$lib/front-matter';
    import {formatDate} from '$lib/utils';
    import Picture from '$lib/components/picture.svelte';

    const posts: PostFrontMatter[] = data.posts;    
</script>

<section>
    <ul class="posts">        
        {#each posts as post (post.slug)}
        <li class="post">
            <a href="posts/{post.slug}">
                <p class="date">{formatDate(post.date)}</p>
                <h3 class="title">{post.title}</h3>
                {#if post.image?.default}                
                    <Picture image={post.image} />
                {/if}
                <p class="description">{post.description}</p>      
            </a>      
        </li>
        {/each}        
    </ul>
</section>

<style lang="scss">
    li {
        list-style-type: none;
        padding-bottom: 2rem;
    }

    a:hover {
        background-color: pink;
    }
</style>