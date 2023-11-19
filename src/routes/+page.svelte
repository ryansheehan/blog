<script lang="ts">
    export let data;
    import type {PostFrontMatter} from '$lib/front-matter';

    const posts: PostFrontMatter[] = data.posts;
    
</script>

<p>Main Page</p>

<div class="test">
    <h2>Test Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque eos, sit ullam quisquam saepe perferendis, molestiae dolorum impedit, eius atque illum ducimus ipsum at sunt velit est adipisci eum.</p>

    <ul class="posts-list">        
        {#each posts as post (post.slug)}
        <li class="post-list__item">
            <a class="post-link" href="posts/{post.slug}">
                <h3><span>{post.date}</span>{post.title}</h3>
                <p>{post.description}</p>
            </a>
        </li>
        {/each}        
    </ul>
</div>

<style lang="scss">
    .test {
        margin-inline: auto;
    }

    .test h2 {
        text-align: center;
    }
</style>