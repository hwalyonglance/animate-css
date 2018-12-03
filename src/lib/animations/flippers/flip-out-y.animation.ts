import { AnimationStyleMetadata, style } from '@angular/animations';

export const FLIP_OUT_Y: AnimationStyleMetadata[] = [
	style({ transform: 'perspective(400px)',										offset: 0 }),
	style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',	offset: 0.3 }),
	style({ opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',	offset: 1 })
]
