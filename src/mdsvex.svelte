<script lang="ts" context="module">
	import img from '$lib/mdsvex/img.svelte';
	export { img }
</script>

<script lang="ts">
	// import type { Categories } from '$lib/types';
	
	export let title  = '';
	export let slug = '';
	export let description = '';
	export let date = '';
	// export let categories: Categories[] = [];
	export let published = false;
</script>

<div hidden>
	<div>{title}</div>
	<div>{slug}</div>
	<div>{description}</div>
	<div>{date}</div>
	<!-- {#if categories.length > 0}
	<div>
		<p>Categories</p>
		<ul>
			{#each categories as category}
				<li>{category}</li>
			{/each}
		</ul>
	</div>
	{/if} -->
	<div>{published}</div>
</div>

<slot />

<style lang="scss">

</style>
