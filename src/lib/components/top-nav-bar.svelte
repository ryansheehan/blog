<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';
	import SiteLogo from './site-logo.svelte';
	import { page } from '$app/stores';	
	import NavDrawer from './nav-drawer.svelte';
</script>

<header class="primary-header content-grid">
	<div class="primary-header__layout breakout">
		<a href="/" class="home-link"><SiteLogo /><span class="visually-hidden">Site Home</span></a>
		<nav class="primary-navigation">
			<ul>
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
		<div class="theme-toggle">
			<ThemeToggle --max-size="24px" />
		</div>
		<div class="nav-drawer">
			<NavDrawer/>
		</div>
	</div>
</header>

<style lang="scss">
	@use "$lib/sass/layout/breakpoints" as *;

	.nav-drawer {
		@include md {
			display: none;
		}
	}

	.primary-navigation, .theme-toggle {
		display: none;

		@include md {
			display: block;
		}
	}

	.primary-header {
		padding-block: 1rem;
		margin-block-end: 3rem;
		background-color: var(--header-background-color);
		color: var(--color);
	}

	.primary-header__layout {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: max(5vw, 1rem);
	}

	a,
	a:active,
	a:visited {
		color: inherit;
        text-decoration: none;
	}

	li {
		text-transform: uppercase;
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

    header {
        position: sticky;
        top: 0;
        opacity: 1;
        translate: 0 0;
        transition: translate .2s linear;
		height: 5rem;
    }
</style>
