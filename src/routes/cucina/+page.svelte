<script lang="ts">
	import FigurePhoto from '$lib/components/FigurePhoto.svelte';
	import { photos } from '$lib/content/photos';

	const p = photos.cucina;
</script>

<svelte:head>
	<title>Cucina — Interni</title>
	<meta name="description" content="Cucina contemporanea: layout, isole e finiture essenziali." />
</svelte:head>

<p class="meta">Sezione · Cucina</p>
<h1>Cucina aperta, ordine visibile</h1>
<p class="lead">
	La cucina è il cuore conviviale della casa: qui minimalismo significa capacità di contenere, non
	spersonalizzare.
</p>

<FigurePhoto
	src={p.hero.src}
	alt={p.hero.alt}
	caption="Immagine illustrativa — cucina con isola e zona conviviale."
/>

<h2>Layout e isola</h2>
<p>
	Un’isola stretta e lunga funziona da piano lavoro e snack bar senza invadere il passaggio. Dove lo
	spazio è minimo, il blocco lineare con colonna attrezzata mantiene tutto su un solo fronte, con
	elettrodomestici a incasso allineati.
</p>

<FigurePhoto variant="inline" src={p.detail.src} alt={p.detail.alt} />

<h2>Superfici</h2>
<p>
	Top in quarzo o ceramica a grande formato resistono a macchie e calore e permettono piani quasi
	senza giunture. Ante in laccato opaco o impiallacciatura naturale bilanciano riflessi e calore.
</p>

<h2>Illuminazione</h2>
<p>
	Comporre binari snodati o micro-incassi sul controsoffitto con una sospensione bassa sul tavolo
	crea strati di luce: funzionale sul piano, più morbida in zona pranzo.
</p>
