/** Immagini locali in `static/images/` (Unsplash, uso dimostrativo). */
export const photos = {
	bagno: {
		hero: {
			src: '/images/bagno.jpg',
			alt: 'Bagno contemporaneo con lavabo sospeso, piastrelle chiare e specchio retroilluminato.'
		},
		detail: {
			src: '/images/bagno-dettaglio.jpg',
			alt: 'Dettaglio di rubinetteria e superfici in bagno, tonalità neutre.'
		}
	},
	cucina: {
		hero: {
			src: '/images/cucina.jpg',
			alt: 'Cucina open space con isola centrale, piano chiaro e sedie in legno.'
		},
		detail: {
			src: '/images/cucina-dettaglio.jpg',
			alt: 'Ambiente living con cucina a vista e luce naturale ampia.'
		}
	},
	camera: {
		hero: {
			src: '/images/camera-da-letto.jpg',
			alt: 'Camera da letto luminosa con letto basso, lenzuola chiare e comodini essenziali.'
		},
		detail: {
			src: '/images/camera-dettaglio.jpg',
			alt: 'Camera da letto con testiera imbottita e illuminazione morbida.'
		}
	}
} as const;

export type SectionPhotoKey = keyof typeof photos;
