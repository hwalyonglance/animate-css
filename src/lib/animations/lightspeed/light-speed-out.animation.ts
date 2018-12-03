import { AnimationStyleMetadata, style } from '@angular/animations';

export const LIGHT_SPEED_OUT: AnimationStyleMetadata[] = [
	style({ opacity: 1,														offset: 0 }),
	style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(30deg)',	offset: 1 })
]
