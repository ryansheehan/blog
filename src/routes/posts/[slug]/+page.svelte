<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
   <!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		{#if data.meta.date}
			<p>Published at {formatDate(data.meta.date)}</p>
		{/if}
	</hgroup>

   <!-- Tags -->
	<aside class="tags">
		<!-- {#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each} -->
	</aside>

   <!-- Post -->
	<section class="prose">
		<svelte:component this={data.content} />
	</section>
</article>

<style lang="scss">
	
</style>
