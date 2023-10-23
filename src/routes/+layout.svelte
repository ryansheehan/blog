<script lang="ts">
    import "$lib/sass/global.scss";
    import AppBar from '$lib/components/appbar.svelte';
</script>

<div class="site-wrapper" data-theme="dark">
    <AppBar/>
    
    <main>
        <slot/>
    </main>
</div>

<style lang="scss">
    .site-wrapper {
        background-color: var(--surface-1);
        color: var(--text-1);

        min-block-size: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }

    header {
        min-block-size: 64px;
        display: flex;
    }

    main {
        flex: 1 1 auto;
    }
</style>