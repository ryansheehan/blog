<script lang="ts">
    import "$lib/sass/global.scss";
</script>

<div class="site-wrapper" data-theme="dim">
    <header>
        <h1>Ryan Sheehan</h1>
        <nav>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">About</a>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">Resume</a>
            <div>Socials</div>
        </nav>
    </header>
    
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