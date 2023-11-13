<script lang="ts">
	export let src: string
	export let alt: string

	console.log('src', src);
</script>

<img {src} {alt} loading="lazy" />
