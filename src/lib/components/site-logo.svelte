<script lang="ts">
    
</script>

<div>    
    <span class="first-name">Ryan</span><div class="divider"></div><span class="last-name">Sheehan</span>
</div>

<style lang="scss">
    div {
        background-color: darkblue;
    }

    .first-name, .last-name {
        text-transform: uppercase;
        font-size: 1em;
    }

    .first-name {
        vertical-align: super;        
    }

    .last-name {        
        vertical-align: sub;        
    }

    .divider {
        display: inline-block;
        border-right: 1px solid white;
        height: 100%;
    }
</style>