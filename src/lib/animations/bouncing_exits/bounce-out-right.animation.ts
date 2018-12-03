import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class BounceOutRight extends AAnimateCSS {
	constructor(){
		super(BOUNCE_OUT_RIGHT, 'BounceOutRight')
	}
}

export const BOUNCE_OUT_RIGHT: AnimationStyleMetadata[] = [
	style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)',	offset: 0.2 }),
	style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)',	offset: 1 })
]
