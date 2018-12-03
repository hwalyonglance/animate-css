import { AnimationStyleMetadata, style } from '@angular/animations';

export const FLIP_IN_Y: AnimationStyleMetadata[] = [
	style({
		'animation-timing-function': 'ease-in',
		opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',		offset: 0
	}),
	style({
		'animation-timing-function': 'ease-in',
		transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',					offset: 0.4
	}),
	style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',	offset: 0.6 }),
	style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',				offset: 0.8 }),
	style({ transform: 'perspective(400px)',										offset: 1 })
]
