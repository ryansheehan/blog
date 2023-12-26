<script lang="ts">
    import {theme, Theme} from '$lib/themes/theme.store';
</script>

<button on:click={() => theme.toggle()}>
    {#if $theme === Theme.dark}
    <!-- Sun -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- <circle cx="12" cy="12" r="4"/> -->
        <path d="M8,12a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
        <path d="M12 2v2"/>
        <path d="m19.07 4.93-1.41 1.41"/>
        <path d="M20 12h2"/>
        <path d="m17.66 17.66 1.41 1.41"/>
        <path d="M12 20v2"/>
        <path d="m6.34 17.66-1.41 1.41"/>
        <path d="M2 12h2"/>
        <path d="m4.93 4.93 1.41 1.41"/>
    </svg>
    {:else}
    <!-- Moon -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
    {/if}
</button>

<style lang="scss">
    button {        
        background: transparent;
        color: var(--color);

        border-style: none;
        cursor: pointer;
        padding: 0;
        
        height: var(--max-size, 100%);
        aspect-ratio: 1 / 1;
    }

    svg {
        stroke: var(--color);
    }
</style>
