import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class HeadShake extends AAnimateCSS {
	constructor(){
		super(HEAD_SHAKE, 'HeadShake')
	}
}

export const HEAD_SHAKE: AnimationStyleMetadata[] = [
	style({ transform: 'translateX(0)',		offset: 0 }),
	style({ transform: 'translateX(-6px)',	offset: 0.65 }),
	style({ transform: 'translateX(5px)',	offset: 0.185 }),
	style({ transform: 'translateX(-3px)',	offset: 0.315 }),
	style({ transform: 'translateX(2px)',	offset: 0.435 }),
	style({ transform: 'translateX(0)',		offset: 0.5 })
]
