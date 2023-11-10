<script lang="ts">
    import "$lib/sass/global.scss";
    import {themeToggle, theme} from '$lib/themes';
</script>

<div class="site-wrapper">
    <header>
        <span>Ryan Sheehan</span>
        <button use:themeToggle>{$theme}</button>
    </header>
    <div class="content-wrapper">
        <main>
            <slot/>
        </main>
    </div>
</div>

<style lang="scss">
    .site-wrapper {        
        block-size: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }

    .content-wrapper {
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
    }
</style>