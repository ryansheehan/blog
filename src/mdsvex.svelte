<script lang="ts" context="module">
	import img from '$lib/mdsvex/img.svelte';
	import type { Categories } from '$lib/types';
	export { img }
</script>

<script lang="ts">
	export let title  = '';
	export let slug = '';
	export let description = '';
	export let date = '';
	export let categories: Categories[] = [];
	export let published = false;
</script>

<div hidden>
	<div>{title}</div>
	<dive>{slug}</dive>
	<dive>{description}</dive>
	<dive>{date}</dive>
	<dive>{categories}</dive>
	<dive>{published}</dive>
</div>

<slot />

<style lang="scss">

</style>
