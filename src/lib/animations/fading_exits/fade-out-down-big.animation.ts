import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeOutDownBig extends AAnimateCSS {
	constructor(){
		super(FADE_OUT_DOWN_BIG, 'FadeOutDownBig')
	}
}

export const FADE_OUT_DOWN_BIG: AnimationStyleMetadata[] = [
	style({ opacity: 1,											offset: 0 }),
	style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 })
]
