import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROLL_OUT: AnimationStyleMetadata[] = [
	style({ opacity: 1, offset: 0 }),
	style({
		opacity: 0,
		transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
		offset: 1
	})
]
