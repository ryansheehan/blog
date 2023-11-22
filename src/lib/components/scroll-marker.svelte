<script lang="ts" context="module">
    export enum MarkerStatus {
        Unknown = 'Unknown',
        OnScreen = 'OnScreen',        
        OffScreen = 'OffScreen',
    }
</script>

<script lang="ts">
    import {onMount, createEventDispatcher} from 'svelte';

    let watchTarget: HTMLElement;

    const dispatch = createEventDispatcher()

    const observerCallback: IntersectionObserverCallback = ([el]) => dispatch('statusChanged', el.isIntersecting ? MarkerStatus.OnScreen : MarkerStatus.OffScreen);

    onMount(() => {
        const observer = new IntersectionObserver(observerCallback);
        observer.observe(watchTarget);        
        return () => observer.disconnect();
    });
</script>

<div bind:this={watchTarget} />

<style lang="scss">
    div {
        // background-color: red;
        height: 0px;        
    }
</style>
