import { AnimationStyleMetadata, style } from '@angular/animations';

export const HINGE: AnimationStyleMetadata[] = [
	style({
		'transform-origin': 'top left',
		offset: 0
	}),
	style({
		'transform-origin': 'top left',
		'animation-timing-function': 'ease-in-out',
		transform: 'rotate3d(0, 0, 1, 80deg)',
		offset: 0.2
	}),
	style({
		'transform-origin': 'top left',
		'animation-timing-function': 'ease-in-out',
		transform: 'rotate3d(0, 0, 1, 60deg)',
		offset: 0.4
	}),
	style({
		'transform-origin': 'top left',
		'animation-timing-function': 'ease-in-out',
		transform: 'rotate3d(0, 0, 1, 80deg)',
		offset: 0.6
	}),
	style({
		'transform-origin': 'top left',
		'animation-timing-function': 'ease-in-out',
		transform: 'rotate3d(0, 0, 1, 60deg)',
		offset: 0.8
	}),
	style({
		transform: 'translate3d(0, 700px, 0)',
		opacity: 0, offset: 1
	})
]
