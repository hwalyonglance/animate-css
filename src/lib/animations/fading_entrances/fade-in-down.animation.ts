import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeInDown extends AAnimateCSS {
	constructor(){
		super(FADE_IN_DOWN, 'FadeInDown')
	}
}

export const FADE_IN_DOWN: AnimationStyleMetadata[] = [
	style({ opacity: 0, transform: 'translate3d(0, -100%, 0)',	offset: 0 }),
	style({ opacity: 1, transform: 'translate3d(0, 0, 0)',		offset: 1 })
]
