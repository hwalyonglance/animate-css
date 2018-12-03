import { AnimationStyleMetadata, style } from '@angular/animations';

export const LIGHT_SPEED_IN: AnimationStyleMetadata[] = [
	style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)',	offset: 0 }),
	style({ opacity: 1, transform: 'skewX(20deg)',							offset: 0.6 }),
	style({ opacity: 1, transform: 'skewX(-5deg)',							offset: 0.8 }),
	style({ opacity: 1, transform: 'translate3d(0, 0, 0)',					offset: 1 })
]
