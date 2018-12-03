import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROLL_IN: AnimationStyleMetadata[] = [
	style({
		opacity: 0,
		transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
		offset: 1
	}),
	style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 })
]
