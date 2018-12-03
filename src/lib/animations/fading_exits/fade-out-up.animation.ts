import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeOutUp extends AAnimateCSS {
	constructor(){
		super(FADE_OUT_UP, 'FadeOutUp')
	}
}

export const FADE_OUT_UP: AnimationStyleMetadata[] = [
	style({ opacity: 1,											offset: 0 }),
	style({ opacity: 0, transform: 'translate3d(0, -100%, 0)',	offset: 1 })
]
