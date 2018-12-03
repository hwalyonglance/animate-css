import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Wobble extends AAnimateCSS {
	constructor(){
		super(WOBBLE, 'Wobble')
	}
}

export const WOBBLE: AnimationStyleMetadata[] = [
	style({ transform: 'translate3d(0, 0, 0)',								offset: 0 }),
	style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.15 }),
	style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.30 }),
	style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.45 }),
	style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.60 }),
	style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.75 }),
	style({ transform: 'translate3d(0, 0 , 0)',								offset: 1 })
]
