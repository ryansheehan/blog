<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggle from './theme-toggle.svelte';
	import SiteLogo from './site-logo.svelte';
	import { page } from '$app/stores';

	enum ScrollDir {
		None = 'none',
		Up = 'up',
		Down = 'down'
	}

	$: scrollDirection = ScrollDir.None;
	$: scrollPos = 0;

	onMount(() => {
		const TIMEOUT = 150; //ms
		let timer: NodeJS.Timeout | null = null;

		const checkScrollPosition = () => {
			const newScrollPos = document.documentElement.scrollTop;

			if (newScrollPos === scrollPos) {
				scrollDirection = ScrollDir.None;
			} else if (newScrollPos > scrollPos) {
				scrollDirection = ScrollDir.Down;
			} else {
				scrollDirection = ScrollDir.Up;
			}

			scrollPos = newScrollPos;
		};

		const scrollListener: EventListener = () => {
			if (timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(checkScrollPosition, TIMEOUT);
		};

		window.addEventListener('scroll', scrollListener);
	});
</script>

<header
	class="primary-header content-grid"
	class:down={scrollDirection === ScrollDir.Down}
	class:scrolled={scrollPos > 0}
>
	<div class="primary-header__layout breakout">
		<a href="/" class="home-link"><SiteLogo /><span class="visually-hidden">Site Home</span></a>
		<nav>
			<ul>
				<li>
					<a href="/posts" class:active-route={$page.url.pathname.startsWith(`/posts`)}>thoughts</a>
				</li>
				<li>
					<a href="/resume" class:active-route={$page.url.pathname.startsWith(`/resume`)}>resume</a>
				</li>
				<li>
					<a href="/about" class:active-route={$page.url.pathname.startsWith(`/about`)}>about me</a>
				</li>
			</ul>
		</nav>
		<ThemeToggle --max-size="24px" />
	</div>
</header>

<style lang="scss">
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
			transition: width 0.3s ease-in-out;
		}

		&.active-route::before {
			width: 100%;
		}
	}

    header {
        position: sticky;
        top: 0;
        opacity: 1;
        translate: 0 0;
        transition: translate .2s linear;
    }

    header.down {
	    translate: 0px -100%;
	}

</style>
