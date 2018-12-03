import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROTATE_IN_UP_LEFT: AnimationStyleMetadata[] = [
	style({
		opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
		'transform-origin': 'left bottom', offset: 0
	}),
	style({
		opacity: 1, transform: 'translate3d(0, 0, 0)',
		'transform-origin': 'left bottom', offset: 1
	})
]
