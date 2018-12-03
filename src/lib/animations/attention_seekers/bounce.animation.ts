import { AnimationStyleMetadata, style} from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Bounce extends AAnimateCSS {
	constructor(){
		super(BOUNCE, 'Bounce')
	}
}

export const BOUNCE: AnimationStyleMetadata[] = [
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 0, 0)', offset: 0
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 0, 0)', offset: .2
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
		transform: 'translate3d(0, -30, 0)', offset: .4
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
		transform: 'translate3d(0, -30, 0)', offset: .43
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 0, 0)', offset: .53
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
		transform: 'translate3d(0, -15, 0)', offset: .4
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 0, 0)', offset: .80
	}),
	style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'translate3d(0, 0, 0)', offset: 1
	})
]
