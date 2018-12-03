import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROTATE_IN: AnimationStyleMetadata[] = [
	style({
		opacity: 0, transform: 'rotate3d(0, 0, 1, -200deg)',
		'transform-origin': 'center', offset: 0
	}),
	style({
		opacity: 1, transform: 'rotate3d(0, 0, 0)',
		'transform-origin': 'center', offset: 1
	})
]
