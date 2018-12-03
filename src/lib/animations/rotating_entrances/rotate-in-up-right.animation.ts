import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROTATE_IN_UP_RIGHT: AnimationStyleMetadata[] = [
	style({
		opacity: 0, transform: 'rotate3d(0, 0, 1, -90deg)',
		'transform-origin': 'right bottom', offset: 0
	}),
	style({
		opacity: 1, transform: 'translate3d(0, 0, 0)',
		'transform-origin': 'right bottom', offset: 1
	})
]
