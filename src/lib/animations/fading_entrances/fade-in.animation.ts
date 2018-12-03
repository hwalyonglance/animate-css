import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeIn extends AAnimateCSS {
	constructor(){
		super(FADE_IN, 'FadeIn')
	}
}

export const FADE_IN: AnimationStyleMetadata[] = [
	style({ opacity: 0, offset: 0 }),
	style({ opacity: 1, offset: 1 })
]
