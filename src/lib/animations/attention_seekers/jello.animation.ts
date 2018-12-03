import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Jello extends AAnimateCSS {
	constructor(){
		super(JELLO, 'Jello')
	}
}

export const JELLO: AnimationStyleMetadata[] = [
	style({ transform: 'translate3d(0, 0, 0)',	offset: 0 }),
	style({ transform: 'translate3d(0, 0, 0)',	offset: 11.1 }),
	style({ transform: 'skew(-12.5deg)',		offset: 22.2 }),
	style({ transform: 'skew(6.25deg)',			offset: 33.3 }),
	style({ transform: 'skew(3.125deg)',		offset: 44.4 }),
	style({ transform: 'skew(1.5625deg)',		offset: 55.5 }),
	style({ transform: 'skew(-0.781255deg)',	offset: 66.6 }),
	style({ transform: 'skew(0.390625deg)',		offset: 77.7 }),
	style({ transform: 'skew(-0.1953125deg)',	offset: 88.8 }),
	style({ transform: 'translate3d(0, 0, 0)',	offset: 1 })
]
