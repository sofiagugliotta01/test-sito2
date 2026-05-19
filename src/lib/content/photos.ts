import { base } from '$app/paths';

/** Immagini locali in `static/images/` (Unsplash, uso dimostrativo). */
export const photos = {
	bagno: {
		hero: {
			src: `${base}/images/bagno.jpg`,
			alt: 'Bagno contemporaneo con lavabo sospeso, piastrelle chiare e specchio retroilluminato.'
		},
		detail: {
			src: `${base}/images/bagno-dettaglio.jpg`,
			alt: 'Dettaglio di rubinetteria e superfici in bagno, tonalità neutre.'
		}
	},
	cucina: {
		hero: {
			src: `${base}/images/cucina.jpg`,
			alt: 'Cucina open space con isola centrale, piano chiaro e sedie in legno.'
		},
		detail: {
			src: `${base}/images/cucina-dettaglio.jpg`,
			alt: 'Ambiente living con cucina a vista e luce naturale ampia.'
		}
	},
	camera: {
		hero: {
			src: `${base}/images/camera-da-letto.jpg`,
			alt: 'Camera da letto luminosa con letto basso, lenzuola chiare e comodini essenziali.'
		},
		detail: {
			src: `${base}/images/camera-dettaglio.jpg`,
			alt: 'Camera da letto con testiera imbottita e illuminazione morbida.'
		}
	}
} as const;

export type SectionPhotoKey = keyof typeof photos;
