<script lang="ts" context="module">
	// import img from '$lib/mdsvex/img.svelte';
	// export { img }
</script>

<script lang="ts">
	// import type { Categories } from '$lib/front-matter';
		
	// need these to prevent unused prop warnings in browser and in server
	// this is because mdsvex gets the props dynamically from what
	// is parsed from frontmatter
	export let title  = '';title;
	export let slug = '';slug;
	export let description = '';description;
	export let date = '';date;
	// export let categories: string[] = [];categories;
	export let published = false;published;
	

</script>

<slot />

<style lang="scss">

</style>
