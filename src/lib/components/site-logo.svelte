<script lang="ts">
    
</script>

<div class="logo-container">    
    <div class="first-name">Ryan</div>
    <div class="last-name">Sheehan</div>
</div>

<style lang="scss">
    .logo-container {
        --fs-logo: 1.8rem;

        display: flex;
        flex-flow: column nowrap;
        line-height: calc(.75 * var(--fs-logo));

        color: var(--clr-primary-600);
    }

    .first-name, .last-name {
        text-transform: uppercase;
        font-size: var(--fs-logo);
    }

    .last-name {
        text-indent: calc(1.3 * var(--fs-logo));
    }
</style>