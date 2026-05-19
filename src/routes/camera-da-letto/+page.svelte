<script lang="ts">
	import FigurePhoto from '$lib/components/FigurePhoto.svelte';
	import { photos } from '$lib/content/photos';

	const p = photos.camera;
</script>

<svelte:head>
	<title>Camera da letto — Interni</title>
	<meta
		name="description"
		content="Camera da letto: colori, letto, armadi e atmosfera riposante."
	/>
</svelte:head>

<p class="meta">Sezione · Camera da letto</p>
<h1>Camera da letto: meno stimoli, più quiete</h1>
<p class="lead">
	Per dormire bene, l’ambiente chiede tonalità attenuate, pochi mobili ma scelti bene e un letto che
	occupi il giusto spazio scenico.
</p>

<FigurePhoto
	src={p.hero.src}
	alt={p.hero.alt}
	caption="Immagine illustrativa — camera da letto luminosa e sobria."
/>

<h2>Palette e pareti</h2>
<p>
	Toni caldi offuscati — sabbia, tortora chiaro, verde salvia spento — avvolgono senza appesantire.
	Una testiera rivestita o boiserie a media altezza sostituisce quadri dispersi con un unico gesto
	architettonico.
</p>

<FigurePhoto variant="inline" src={p.detail.src} alt={p.detail.alt} />

<h2>Letto e biancheria</h2>
<p>
	Struttura bassa, materasso di qualità, lenzuola in cotone o lino: la stratificazione dei tessuti
	(piumino, plaid leggero) aggiunge profondità cromatica e comfort.
</p>

<h2>Armadi e ordine</h2>
<p>
	Ante a filo muro o cabina armadio dietro vetro opaco nascono il disordine quotidiano. Cassetti
	interni etichettati e illuminazione integrata rendono ogni cosa reperibile senza stress visivo.
</p>
