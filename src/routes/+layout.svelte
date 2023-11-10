<script lang="ts">
    import "$lib/sass/global.scss";
    import AppBar from '$lib/components/appbar.svelte';
</script>

<div class="site-wrapper" data-theme="dark">
    <AppBar/>
    <div class="content-wrapper">
        <main>
            <slot/>
        </main>
    </div>
</div>

<style lang="scss">
    .site-wrapper {
        background-color: var(--surface-1);
        color: var(--text-1);

        block-size: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }

    .content-wrapper {
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
    }

    main {
        max-inline-size: var(--size-lg);
    }
</style>