<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{page.status} — Interni</title>
</svelte:head>

<h1>{page.status}</h1>
<p>{page.error?.message ?? 'Pagina non trovata.'}</p>
<a href={resolve('/')}>Torna alla home</a>
