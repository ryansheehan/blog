<script lang="ts">
	export let src: string
	export let alt: string	
</script>

<img {src} {alt} loading="lazy" />
<!-- <img src={picture} {alt} /> -->
<!-- <enhanced:img src={picture} {alt} /> -->
<!-- <enhanced:img src="./static.jpg" alt="static"/> -->
