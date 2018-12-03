import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROTATE_OUT_DOWN_RIGHT: AnimationStyleMetadata[] = [
	style({ opacity: 1, 'transform-origin': 'right bottom',	offset: 0 }),
	style({
		opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
		'transform-origin': 'right bottom',					offset: 1
	})
]
