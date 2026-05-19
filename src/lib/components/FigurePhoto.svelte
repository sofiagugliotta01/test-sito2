<script lang="ts">
	type Variant = 'hero' | 'inline';

	type Props = {
		src: string;
		alt: string;
		variant?: Variant;
		caption?: string;
	};

	let { src, alt, variant = 'hero', caption }: Props = $props();
</script>

<figure class="frame" data-variant={variant}>
	<img {src} {alt} loading="lazy" decoding="async" sizes="(min-width: 900px) 52rem, 100vw" />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	.frame {
		margin: 0 0 var(--space-md);
		padding: 0;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--color-surface);
	}

	.frame[data-variant='hero'] {
		margin-bottom: var(--space-lg);
	}

	.frame img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 3 / 2;
		object-fit: cover;
	}

	.frame[data-variant='inline'] img {
		aspect-ratio: 16 / 10;
	}

	figcaption {
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		color: var(--color-ink-muted);
		padding: 0.65rem 0.85rem;
		border-top: 1px solid var(--color-border);
	}
</style>
