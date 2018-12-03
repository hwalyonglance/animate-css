import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeOutLeftBig extends AAnimateCSS {
	constructor(){
		super(FADE_OUT_LEFT_BIG, 'FadeOutLeftBig')
	}
}

export const FADE_OUT_LEFT_BIG: AnimationStyleMetadata[] = [
	style({ opacity: 1,												offset: 0 }),
	style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)',	offset: 1 })
]
