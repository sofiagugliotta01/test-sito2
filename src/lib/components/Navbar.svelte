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
		background: color-mix(in srgb, var(--color-bg) 92%, transparent);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-border);
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
		color: var(--color-ink);
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
		color: var(--color-ink-muted);
		padding-bottom: 2px;
		border-bottom: 1px solid transparent;
		transition:
			color 0.15s ease,
			border-color 0.15s ease;
	}

	.link:hover {
		color: var(--color-ink);
		text-decoration: none;
	}

	.link.active {
		color: var(--color-ink);
		border-bottom-color: var(--color-ink);
	}
</style>
