import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class BounceOut extends AAnimateCSS {
	constructor(){
		super(BOUNCE_OUT, 'BounceOut')
	}
}

export const BOUNCE_OUT: AnimationStyleMetadata[] = [
	style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 }),
	style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
	style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55 }),
	style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1 })
]
