<script lang="ts">
    import "$lib/sass/global.scss";
</script>

<div class="site-wrapper">
    <header>
        <p>Header</p>
    </header>
    
    <main>
        <slot/>
    </main>
</div>

<style lang="scss">
    .site-wrapper {
        min-block-size: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }

    header {
        min-block-size: 64px;
    }

    main {
        flex: 1 1 auto;
    }
</style>