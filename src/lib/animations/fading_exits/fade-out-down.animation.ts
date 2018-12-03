import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeOutDown extends AAnimateCSS {
	constructor(){
		super(FADE_OUT_DOWN, 'FadeOutDown')
	}
}

export const FADE_OUT_DOWN: AnimationStyleMetadata[] = [
	style({ opacity: 1,											offset: 0 }),
	style({ opacity: 0, transform: 'translate3d(0, 100%, 0)',	offset: 1 })
]
