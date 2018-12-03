import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class BounceOutDown extends AAnimateCSS {
	constructor(){
		super(BOUNCE_OUT_DOWN, 'BounceOutDown')
	}
}

export const BOUNCE_OUT_DOWN: AnimationStyleMetadata[] = [
	style({ transform: 'translate3d(0, 10px, 0)',					offset: 0 }),
	style({ opacity: 1, transform: 'translate3d(0, -20px, 0)',		offset: 0.4 }),
	style({ opacity: 1, transform: 'translate3d(0, -20px, 0)' ,		offset: 0.45 }),
	style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)',		offset: 1 }),
]
