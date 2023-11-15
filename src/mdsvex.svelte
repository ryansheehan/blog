<script lang="ts" context="module">
	// import img from '$lib/mdsvex/img.svelte';
	// export { img }
</script>

<script lang="ts">
	// import type { Categories } from '$lib/types';
	
	export let title  = '';
	export let slug = '';
	export let description = '';
	export let date = '';
	// export let categories: Categories[] = [];
	export let published = false;

	// const foo = {title, slug, description, date, published};

</script>

<slot />

<style lang="scss">

</style>
