<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/bagno', label: 'Bagno' },
		{ href: '/cucina', label: 'Cucina' },
		{ href: '/camera-da-letto', label: 'Camera da letto' }
	] as const;

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		if (href === '/') return path === '/';
		return path === href || path.startsWith(href + '/');
	}
</script>

<header class="nav">
	<div class="inner">
		<a class="brand" href={resolve('/')}>Interni</a>
		<nav class="links" aria-label="Sezioni">
			{#each links as { href, label } (href)}
				<a
					class="link"
					class:active={isActive(href)}
					href={resolve(href)}
					aria-current={isActive(href) ? 'page' : undefined}
				>
					{label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 10;
		background: #000;
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
	}

	.inner {
		max-width: 56rem;
		margin: 0 auto;
		padding: 0.85rem 1.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.brand {
		font-family: var(--font-display);
		font-size: 1.125rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		color: #fafaf8;
	}

	.brand:hover {
		opacity: 0.75;
		text-decoration: none;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		flex-wrap: wrap;
	}

	.link {
		font-size: 0.8125rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		text-decoration: none;
		color: rgba(250, 250, 248, 0.55);
		padding-bottom: 2px;
		border-bottom: 1px solid transparent;
		transition:
			color 0.15s ease,
			border-color 0.15s ease;
	}

	.link:hover {
		color: #fafaf8;
		text-decoration: none;
	}

	.link.active {
		color: #fafaf8;
		border-bottom-color: #fafaf8;
	}
</style>
