<script lang="ts">
    import "$lib/sass/global.scss";
    import TopNavBar from "$lib/components/top-nav-bar.svelte";    
</script>

<div class="site-wrapper">
    <TopNavBar/>        
    <main class="content-grid">
        <slot/>
    </main>    
</div>

<style lang="scss">
    
</style>