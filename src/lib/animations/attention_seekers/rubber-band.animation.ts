import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class RubberBand extends AAnimateCSS {
	constructor(){
		super(RUBBER_BAND, 'RubberBand')
	}
}

export const RUBBER_BAND: AnimationStyleMetadata[] = [
	style({ transform: 'scale3d(1, 1, 1)',			offset: 0 }),
	style({ transform: 'scale3d(1.25, .75, 1)',		offset: .3 }),
	style({ transform: 'scale3d(.75, 1.25, 1)',		offset: .4 }),
	style({ transform: 'scale3d(1.15, 0.85, 1)',	offset: .5 }),
	style({ transform: 'scale3d(.95, 1.05, 1)',		offset: .65 }),
	style({ transform: 'scale3d(1.05, .95, 1)',		offset: .75 }),
	style({ transform: 'scale3d(1, 1, 1)',			offset: 1 })
]
