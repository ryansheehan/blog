<script lang="ts">
	import type { Image } from "$lib/front-matter";

    export let image: Image;
    export let alt = '';

    const {sources, img} = image.default;
    const {src, w: width, h: height} = img;
</script>

<picture class={$$props.class}>
    {#each Object.entries(sources) as [source, srcset] (source)}
    <source {srcset} type="image/{source}"/>
    {/each}
    <img {src} {alt} {width} {height} />
</picture>
