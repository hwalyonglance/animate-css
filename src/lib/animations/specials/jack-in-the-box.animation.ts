import { AnimationStyleMetadata, style } from '@angular/animations';

export const JACK_IN_THE_BOX: AnimationStyleMetadata[] = [
	style({ opacity: 0, transform: 'scale(0.1) rotate(30deg)',	offset: 0 }),
	style({ transform: 'rotate(-10deg)',						offset: 0.5 }),
	style({ transform: 'rotate(3deg)',							offset: 0.7 }),
	style({ opacity: 1, transform: 'scale(1)',					offset: 1 })
]
