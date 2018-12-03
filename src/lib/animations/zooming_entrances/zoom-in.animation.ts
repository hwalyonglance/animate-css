import { AnimationStyleMetadata, style } from '@angular/animations';

export const ZOOM_IN: AnimationStyleMetadata[] = [
	style({ opacity: 0, 'transform': 'scale3d(0.3, 0.3, 0.3)',	offset: 0 }),
	style({ opacity: 1,											offset: 0.5 })
]
