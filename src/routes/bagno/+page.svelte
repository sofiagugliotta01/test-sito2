<script lang="ts">
	import FigurePhoto from '$lib/components/FigurePhoto.svelte';
	import { photos } from '$lib/content/photos';

	const p = photos.bagno;
</script>

<svelte:head>
	<title>Bagno — Interni</title>
	<meta name="description" content="Idee di arredo bagno: materiali, luce e dettagli minimal." />
</svelte:head>

<p class="meta">Sezione · Bagno</p>
<h1>Bagno come stanza del rito quotidiano</h1>
<p class="lead">
	Un buon progetto bagno unisce igiene visiva e calore tattile: meno oggetti in vista, più superfici
	integrate e una palette che non stanca.
</p>

<FigurePhoto
	src={p.hero.src}
	alt={p.hero.alt}
	caption="Immagine illustrativa — ambiente bagno contemporaneo."
/>

<h2>Materiali e finiture</h2>
<p>
	Grès a pasta fine o pietra naturale levigata creano continuità tra pavimento e rivestimento. Il
	legno, trattato per ambienti umidi, introduce una nota organica su vani a giorno o piani lavabo
	sospesi.
</p>

<FigurePhoto variant="inline" src={p.detail.src} alt={p.detail.alt} />

<h2>Luce e specchi</h2>
<p>
	Una fascia luminosa dietro lo specchio attenua le ombre sul viso; i faretti orientabili completano
	dove serve un fascio più netto. Preferite specchi con bordo sottile o filo muro per un effetto
	grafico e pulito.
</p>

<h2>Dettagli che contano</h2>
<p>
	Rubinetteria lineare, scarichi sifonati nascosti, maniglioni coordinati con il resto della casa:
	sono i dettagli che fanno percepire cura senza rumore visivo.
</p>
