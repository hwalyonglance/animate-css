import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class BounceInUp extends AAnimateCSS {
	constructor(){
		super(BOUNCE_IN_UP, 'BounceInUp')
	}
}

export const BOUNCE_IN_UP: AnimationStyleMetadata[] = [
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		opacity: 0, transform: 'translate3d(0, 3000px, 0)', offset: 0
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 10px, 0)', offset: 0.75
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, -5px, 0)', offset: 0.9
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 0, 0)', offset: 1
	})
]
