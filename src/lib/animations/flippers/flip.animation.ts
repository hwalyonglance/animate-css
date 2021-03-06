import { AnimationStyleMetadata, style } from '@angular/animations';

export const FLIP: AnimationStyleMetadata[] = [
	style({
		'animation-timing-function': 'ease-out',
		transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',								offset: 0
	}),
	style({
		'animation-timing-function': 'ease-out',
		transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',	offset: 0.4
	}),
	style({
		'animation-timing-function': 'ease-in',
		transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',	offset: 0.5
	}),
	style({
		'animation-timing-function': 'ease-in',
		transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95)',								offset: 0.8
	}),
	style({
		'animation-timing-function': 'ease-in', transform: 'perspective(400px)',				offset: 1
	})
]
