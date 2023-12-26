<script lang="ts">
    import {Menu} from 'lucide-svelte';
    import { page } from '$app/stores';	

    let dialog: HTMLDialogElement;
</script>

<button on:click={() => dialog.showModal()}>
    <Menu/>
</button>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} on:click={() => dialog.close()}>
    <nav aria-label="site navigation">
        <ul>
            <li>
                <a href="/" class:active-route={$page.url.pathname === '/'}>home</a>
            </li>
            <li>
                <a href="/posts" class:active-route={$page.url.pathname.startsWith(`/posts`)}>posts</a>
            </li>
            <li>
                <a href="/resume" class:active-route={$page.url.pathname.startsWith(`/resume`)}>resume</a>
            </li>
            <li>
                <a href="/about" class:active-route={$page.url.pathname.startsWith(`/about`)}>about</a>
            </li>
        </ul>
    </nav>
</dialog>

<style lang="scss">

    dialog {
        border: none;
        padding: 0;
        margin: 0;
        margin-left: auto;
        width: 75%;
        height: 100%;
        background-color: var(--header-background-color);
    }

    nav ul {
        list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: column nowrap;
        gap: 1rem;
        align-items: center;
        padding-top: 2rem;
    }

    li {
        text-transform: uppercase;
    }

    a,
	a:active,
	a:visited {
		color: inherit;
        text-decoration: none;
	}

    li a {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			width: 0%;
			height: 100%;
			top: 0;
			left: 50%;
			translate: -50%;
			background-color: transparent;
			border-bottom: 1px solid var(--color);
			transition: width 0.2s ease-in-out;
		}

		&.active-route::before, &:hover::before {
			width: 100%;
		}
	}
</style>