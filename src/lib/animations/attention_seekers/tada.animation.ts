import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Tada extends AAnimateCSS {
	constructor(){
		super(TADA, 'Tada')
	}
}

export const TADA: AnimationStyleMetadata[] = [
	style({ transform: 'scale3d(1, 1, 1)',									offset: 0 }),
	style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',	offset: .10 }),
	style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',	offset: .20 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',	offset: .30 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',	offset: .40 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',	offset: .50 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',	offset: .60 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',	offset: .70 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',	offset: .80 }),
	style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',	offset: .90 }),
	style({ transform: 'scale3d(1, 1, 1)',									offset: 1 })
]
