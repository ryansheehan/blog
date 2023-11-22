<script lang="ts">
    export let paragraphs = 10;    
</script>

<section>
    {#each {length: paragraphs} as _, i (i)}
    <h3>Section {i}</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore praesentium laboriosam quidem provident, hic eligendi atque eaque consectetur iure error architecto non dignissimos facilis, impedit illum rem officia iusto deserunt.</p>
    {/each}
</section>

<style lang="scss">
    p {
        max-inline-size: 60ch;
    }
</style>

