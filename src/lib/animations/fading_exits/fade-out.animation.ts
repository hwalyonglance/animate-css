import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeOut extends AAnimateCSS {
	constructor(){
		super(FADE_OUT, 'FadeOut')
	}
}

export const FADE_OUT: AnimationStyleMetadata[] = [
	style({ opacity: 1,	offset: 0 }),
	style({ opacity: 0,	offset: 1 })
]
