import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Flash extends AAnimateCSS {
	constructor(){
		super(FLASH, 'Flash')
	}
}

export const FLASH: AnimationStyleMetadata[] = [
	style({ opacity: 1, offset: 0 }),
	style({ opacity: 0, offset: 0.25 }),
	style({ opacity: 1, offset: 0.5 }),
	style({ opacity: 0, offset: 0.75 }),
	style({ opacity: 1, offset: 1 })
]
