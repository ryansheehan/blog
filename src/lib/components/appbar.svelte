<script lang="ts">

</script>

<header>
    <nav>
        <a href="/" class="title-link"><h1>Ryan Sheehan</h1></a>
        <a href="#">Resume</a>
        <a href="#">About</a>
    </nav>
</header>

<style lang="scss">
    header {
        block-size: var(--size-10);
        background-color: var(--surface-4);
        padding-inline: var(--size-4);
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: var(--size-fluid-4);
    }

    nav {
        display: flex;
        flex-flow: row nowrap;
        align-items: baseline;
        gap: var(--size-2);
        flex: 1;
    }

    .title-link {
        flex: 1;
    }
</style>