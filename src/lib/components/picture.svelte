<script lang="ts">
	import type { Image } from "$lib/front-matter";

    export let image: Image;
    export let alt: string | undefined = undefined;

    const {sources, img} = image.default;
    const {src, w: width, h: height} = img;

    const _alt = alt ?? image.alt;
</script>

<picture class={$$props.class}>
    {#each Object.entries(sources) as [source, srcset] (source)}
    <source {srcset} type="image/{source}"/>
    {/each}
    <img {src} alt={_alt} {width} {height} />
</picture>
