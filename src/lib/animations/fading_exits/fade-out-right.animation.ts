import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeOutRight extends AAnimateCSS {
	constructor(){
		super(FADE_OUT_RIGHT, 'FadeOutRight')
	}
}

export const FADE_OUT_RIGHT: AnimationStyleMetadata[] = [
	style({ opacity: 1,											offset: 0 }),
	style({ opacity: 0, transform: 'translate3d(100%, 0, 0)',	offset: 1 })
]
