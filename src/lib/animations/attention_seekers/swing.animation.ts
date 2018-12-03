import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class Swing extends AAnimateCSS {
	constructor(){
		super(SWING, 'Swing')
	}
}

export const SWING: AnimationStyleMetadata[] = [
	style({ transform: 'rotate3d(0, 0, 1, 15deg)',	offset: .2 }),
	style({ transform: 'rotate3d(0, 0, 1, -10deg)',	offset: .4 }),
	style({ transform: 'rotate3d(0, 0, 1, 5deg)',	offset: .6 }),
	style({ transform: 'rotate3d(0, 0, 1, -5deg)',	offset: .8 }),
	style({ transform: 'rotate3d(0, 0, 1, 0deg)',	offset: 1 })
]
