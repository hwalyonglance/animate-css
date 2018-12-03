import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class BounceOutUp extends AAnimateCSS {
	constructor(){
		super(BOUNCE_OUT_UP, 'BounceOutUp')
	}
}

export const BOUNCE_OUT_UP: AnimationStyleMetadata[] = [
	style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
	style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.4 }),
	style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.45 }),
	style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 })
]
