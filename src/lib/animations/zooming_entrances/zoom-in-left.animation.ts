import { AnimationStyleMetadata, style } from '@angular/animations';

export const ZOOM_IN_LEFT: AnimationStyleMetadata[] = [
	style({
		'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
		opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
		offset: 0
	}),
	style({
		'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
		opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
		offset: 0.6
	})
]
