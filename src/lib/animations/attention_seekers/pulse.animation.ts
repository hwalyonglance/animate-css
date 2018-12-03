import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Pulse extends AAnimateCSS {
	constructor(){
		super(PULSE, 'Pulse')
	}
}

export const PULSE: AnimationStyleMetadata[] = [
	style({ transform: 'scale3d(1, 1, 1)',			offset: 0 }),
	style({ transform: 'scale3d(1.05, 1.05, 1.05)',	offset: .5 }),
	style({ transform: 'scale3d(1, 1, 1)',			offset: 1 }),
]
