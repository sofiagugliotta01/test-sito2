<script lang="ts">
	import { resolve } from '$app/paths';
	import { photos } from '$lib/content/photos';

	const sections = [
		{
			href: '/bagno',
			photoKey: 'bagno',
			title: 'Bagno',
			blurb: 'Materiali naturali, luce diffusa e dettagli che restano sobri nel tempo.'
		},
		{
			href: '/cucina',
			photoKey: 'cucina',
			title: 'Cucina',
			blurb:
				'Superfici calibrate, ergonomia silenziosa e una palette che accompagna la convivialità.'
		},
		{
			href: '/camera-da-letto',
			photoKey: 'camera',
			title: 'Camera da letto',
			blurb: 'Ritmo lento, tessuti morbidi e un’atmosfera pensata per il riposo.'
		}
	] as const;
</script>

<svelte:head>
	<title>Interni — design d’arredo per la casa</title>
	<meta
		name="description"
		content="Articoli curati su arredo minimal ed elegante: bagno, cucina e camera da letto."
	/>
</svelte:head>

<p class="meta">Rivista digitale</p>
<h1>Spazi domestici, raccontati con misura</h1>
<p class="lead">
	Selezione di idee e tendenze per chi ama interni essenziali, materiali nobili e una estetica
	contemporanea senza eccessi.
</p>

<ul class="grid">
	{#each sections as s (s.href)}
		<li>
			<a class="card" href={resolve(s.href)}>
				<div class="card-visual">
					<img
						src={photos[s.photoKey].hero.src}
						alt={photos[s.photoKey].hero.alt}
						loading="lazy"
						decoding="async"
						sizes="(min-width: 640px) 18rem, 100vw"
					/>
				</div>
				<span class="card-title">{s.title}</span>
				<span class="card-blurb">{s.blurb}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.grid {
		list-style: none;
		margin: var(--space-lg) 0 0;
		padding: 0;
		display: grid;
		gap: var(--space-sm);
	}

	@media (min-width: 640px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
			gap: var(--space-md);
		}
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		height: 100%;
		padding: 0;
		overflow: hidden;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		text-decoration: none;
		color: inherit;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.card-visual {
		aspect-ratio: 4 / 3;
		overflow: hidden;
		border-bottom: 1px solid var(--color-border);
	}

	.card-visual img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.35s ease;
	}

	.card:hover .card-visual img {
		transform: scale(1.03);
	}

	.card-title,
	.card-blurb {
		padding-inline: var(--space-md);
	}

	.card-blurb {
		padding-bottom: var(--space-md);
	}

	.card-title {
		padding-top: 0.15rem;
	}

	.card:hover {
		border-color: color-mix(in srgb, var(--color-ink) 18%, transparent);
		box-shadow: 0 12px 40px rgba(26, 26, 24, 0.06);
		text-decoration: none;
	}

	.card-title {
		font-family: var(--font-display);
		font-size: 1.35rem;
		color: var(--color-ink);
	}

	.card-blurb {
		font-size: 0.9375rem;
		color: var(--color-ink-muted);
		line-height: 1.55;
	}
</style>
