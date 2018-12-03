import { AnimationStyleMetadata, style } from '@angular/animations';

export const FLIP_OUT_X: AnimationStyleMetadata[] = [
	style({ transform: 'perspective(400px)',										offset: 0 }),
	style({ opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',	offset: 0.3 }),
	style({ opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',	offset: 1 })
]
