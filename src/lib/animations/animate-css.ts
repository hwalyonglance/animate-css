import {
	AnimationMetadata,
	AnimationAnimateMetadata,
	AnimationKeyframesSequenceMetadata,
	AnimationStyleMetadata,
	AnimationTransitionMetadata,
	AnimationTriggerMetadata,
	animate,
	keyframes,
	style,
	transition,
	trigger
} from '@angular/animations';

import { camelCase, startCase } from 'lodash';

import { AAnimateCSS } from './class';


const ANIMATE_CSS = {
	'ATTENTION_SEEKERS': {
		'BOUNCE': [
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: .2
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
				transform: 'translate3d(0, -30, 0)', offset: .4
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
				transform: 'translate3d(0, -30, 0)', offset: .43
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: .53
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
				transform: 'translate3d(0, -15, 0)', offset: .4
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: .80
			}),
			style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: 1
			})
		],
		'FLASH': [
			style({ opacity: 1, offset: 0 }),
			style({ opacity: 0, offset: 0.25 }),
			style({ opacity: 1, offset: 0.5 }),
			style({ opacity: 0, offset: 0.75 }),
			style({ opacity: 1, offset: 1 })
		],
		'HEAD_SHAKE': [
			style({ transform: 'translateX(0)',		offset: 0 }),
			style({ transform: 'translateX(-6px)',	offset: 0.65 }),
			style({ transform: 'translateX(5px)',	offset: 0.185 }),
			style({ transform: 'translateX(-3px)',	offset: 0.315 }),
			style({ transform: 'translateX(2px)',	offset: 0.435 }),
			style({ transform: 'translateX(0)',		offset: 0.5 })
		],
		'JELLO': [
			style({ transform: 'translate3d(0, 0, 0)',	offset: 0 }),
			style({ transform: 'translate3d(0, 0, 0)',	offset: 11.1 }),
			style({ transform: 'skew(-12.5deg)',		offset: 22.2 }),
			style({ transform: 'skew(6.25deg)',			offset: 33.3 }),
			style({ transform: 'skew(3.125deg)',		offset: 44.4 }),
			style({ transform: 'skew(1.5625deg)',		offset: 55.5 }),
			style({ transform: 'skew(-0.781255deg)',	offset: 66.6 }),
			style({ transform: 'skew(0.390625deg)',		offset: 77.7 }),
			style({ transform: 'skew(-0.1953125deg)',	offset: 88.8 }),
			style({ transform: 'translate3d(0, 0, 0)',	offset: 1 })
		],
		'PULSE': [
			style({ transform: 'scale3d(1, 1, 1)',			offset: 0 }),
			style({ transform: 'scale3d(1.05, 1.05, 1.05)',	offset: .5 }),
			style({ transform: 'scale3d(1, 1, 1)',			offset: 1 }),
		],
		'RUBBER_BAND': [
			style({ transform: 'scale3d(1, 1, 1)',			offset: 0 }),
			style({ transform: 'scale3d(1.25, .75, 1)',		offset: .3 }),
			style({ transform: 'scale3d(.75, 1.25, 1)',		offset: .4 }),
			style({ transform: 'scale3d(1.15, 0.85, 1)',	offset: .5 }),
			style({ transform: 'scale3d(.95, 1.05, 1)',		offset: .65 }),
			style({ transform: 'scale3d(1.05, .95, 1)',		offset: .75 }),
			style({ transform: 'scale3d(1, 1, 1)',			offset: 1 })
		],
		'SHAKE': [
			style({ transform: 'translate3d(0, 0, 0)',		offset: 0 }),
			style({ transform: 'translate3d(-10px, 0, 0)',	offset: 0.1 }),
			style({ transform: 'translate3d(10px, 0, 0)',	offset: 0.2 }),
			style({ transform: 'translate3d(-10px, 0, 0)',	offset: 0.3 }),
			style({ transform: 'translate3d(10px, 0, 0)',	offset: 0.4 }),
			style({ transform: 'translate3d(-10px, 0, 0)',	offset: 0.5 }),
			style({ transform: 'translate3d(10px, 0, 0)',	offset: 0.6 }),
			style({ transform: 'translate3d(-10px, 0, 0)',	offset: 0.7 }),
			style({ transform: 'translate3d(10px, 0, 0)',	offset: 0.8 }),
			style({ transform: 'translate3d(-10px, 0, 0)',	offset: 0.9 }),
			style({ transform: 'translate3d(0, 0, 0)',		offset: 1 }),
		],
		'SWING': [
			style({ transform: 'rotate3d(0, 0, 1, 15deg)',	offset: .2 }),
			style({ transform: 'rotate3d(0, 0, 1, -10deg)',	offset: .4 }),
			style({ transform: 'rotate3d(0, 0, 1, 5deg)',	offset: .6 }),
			style({ transform: 'rotate3d(0, 0, 1, -5deg)',	offset: .8 }),
			style({ transform: 'rotate3d(0, 0, 1, 0deg)',	offset: 1 })
		],
		'TADA': [
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
		],
		'WOBBLE': [
			style({ transform: 'translate3d(0, 0, 0)',								offset: 0 }),
			style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.15 }),
			style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.30 }),
			style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.45 }),
			style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.60 }),
			style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg)',	offset: 0.75 }),
			style({ transform: 'translate3d(0, 0 , 0)',								offset: 1 })
		]
	},
	'BOUNCING_ENTRANCES': {
		'BOUNCE_IN_DOWN': [
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 0, transform: 'translate3d(0, -3000px, 0)', offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 1, transform: 'translate3d(0, 25px, 0)', offset: 0.6
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, -10px, 0)', offset: 0.75
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 5px, 0)', offset: 0.9
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: 1
			})
		],
		'BOUNCE_IN_LEFT': [
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 0 , transform: 'translate3d(-3000px, 0, 0)', offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 1 , transform: 'translate3d(25px, 0, 0)', offset: 0.6
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(-10px, 0, 0)', offset: 0.75
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(5px, 0, 0)', offset: 0.9
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: 1
			})
		],
		'BOUNCE_IN_RIGHT': [
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
				opacity: 0, transform: 'translate3d(3000px, 0, 0)', offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
				opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.6
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
				transform: 'translate3d(10px, 0, 0)', offset: 0.75
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
				transform: 'translate3d(-5px, 0, 0)', offset: 0.9
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
				transform: 'translate3d(0, 0, 0)', offset: 1
			})
		],
		'BOUNCE_IN_UP': [
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 0, transform: 'translate3d(0, 3000px, 0)', offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 10px, 0)', offset: 0.75
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, -5px, 0)', offset: 0.9
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'translate3d(0, 0, 0)', offset: 1
			})
		],
		'BOUNCE_IN': [
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 0 , transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 1 , transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8
			}),
			style({
				'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				opacity: 1 , transform: 'scale3d(1, 1, 1)', offset: 1
			})
		]
	},
	'BOUNCING_EXITS': {
		'BOUNCE_OUT_DOWN': [
			style({ transform: 'translate3d(0, 10px, 0)',					offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, -20px, 0)',		offset: 0.4 }),
			style({ opacity: 1, transform: 'translate3d(0, -20px, 0)' ,		offset: 0.45 }),
			style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)',		offset: 1 }),
		],
		'BOUNCE_OUT_LEFT': [
			style({ opacity: 1, transform: 'translate3d(20px, 0, 0)',		offset: 0.2 }),
			style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)',	offset: 1 })
		],
		'BOUNCE_OUT_RIGHT': [
			style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)',	offset: 0.2 }),
			style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)',	offset: 1 })
		],
		'BOUNCE_OUT_UP': [
			style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
			style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.4 }),
			style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.45 }),
			style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 })
		],
		'BOUNCE_OUT': [
			style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 }),
			style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
			style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55 }),
			style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1 })
		]
	},
	'FADING_ENTRANCES': {
		'FADE_IN_DOWN_BIG': [
			style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)',	offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',			offset: 1 })
		],
		'FADE_IN_DOWN': [
			style({ opacity: 0, transform: 'translate3d(0, -100%, 0)',	offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',		offset: 1 })
		],
		'FADE_IN_LEFT_BIG': [
			style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)',	offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',			offset: 1 })
		],
		'FADE_IN_LEFT': [
			style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)',	offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',		offset: 1 })
		],
		'FADE_IN_RIGHT_BIG': [
			style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)',		offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',			offset: 1 })
		],
		'FADE_IN_RIGHT': [
			style({ opacity: 0, transform: 'translate3d(100%, 0, 0)',	offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',		offset: 1 })
		],
		'FADE_IN_UP_BIG': [
			style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)',		offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',			offset: 1 })
		],
		'FADE_IN_UP': [
			style({ opacity: 0, transform: 'translate3d(0, 100%, 0)',	offset: 0 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',		offset: 1 })
		],
		'FADE_IN': [
			style({ opacity: 0, offset: 0 }),
			style({ opacity: 1, offset: 1 })
		]
	},
	'FADING_EXITS': {
		'FADE_OUT_DOWN_BIG': [
			style({ opacity: 1,											offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 })
		],
		'FADE_OUT_DOWN': [
			style({ opacity: 1,											offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(0, 100%, 0)',	offset: 1 })
		],
		'FADE_OUT_LEFT_BIG': [
			style({ opacity: 1,												offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)',	offset: 1 })
		],
		'FADE_OUT_LEFT': [
			style({ opacity: 1,											offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)',	offset: 1 })
		],
		'FADE_OUT_RIGHT_BIG': [
			style({ opacity: 1,												offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)',		offset: 1 })
		],
		'FADE_OUT_RIGHT': [
			style({ opacity: 1,											offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(100%, 0, 0)',	offset: 1 })
		],
		'FADE_OUT_UP_BIG': [
			style({ opacity: 1,												offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)',	offset: 1 })
		],
		'FADE_OUT_UP': [
			style({ opacity: 1,											offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(0, -100%, 0)',	offset: 1 })
		],
		'FADE_OUT': [
			style({ opacity: 1,	offset: 0 }),
			style({ opacity: 0,	offset: 1 })
		]
	},
	'FLIPPERS': {
		'FLIP_IN_X': [
			style({
				'animation-timing-function': 'ease-in',
				opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',		offset: 0
			}),
			style({
				'animation-timing-function': 'ease-in',
				transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',					offset: 0.4
			}),
			style({ opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',	offset: 0.6 }),
			style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',				offset: 0.8 }),
			style({ transform: 'perspective(400px)',										offset: 1 })
		],
		'FLIP_IN_Y': [
			style({
				'animation-timing-function': 'ease-in',
				opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',		offset: 0
			}),
			style({
				'animation-timing-function': 'ease-in',
				transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',					offset: 0.4
			}),
			style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',	offset: 0.6 }),
			style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',				offset: 0.8 }),
			style({ transform: 'perspective(400px)',										offset: 1 })
		],
		'FLIP_OUT_X': [
			style({ transform: 'perspective(400px)',										offset: 0 }),
			style({ opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',	offset: 0.3 }),
			style({ opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',	offset: 1 })
		],
		'FLIP_OUT_Y': [
			style({ transform: 'perspective(400px)',										offset: 0 }),
			style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',	offset: 0.3 }),
			style({ opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',	offset: 1 })
		],
		'FLIP': [
			style({
				'animation-timing-function': 'ease-out',
				transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',								offset: 0
			}),
			style({
				'animation-timing-function': 'ease-out',
				transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',	offset: 0.4
			}),
			style({
				'animation-timing-function': 'ease-in',
				transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',	offset: 0.5
			}),
			style({
				'animation-timing-function': 'ease-in',
				transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95)',								offset: 0.8
			}),
			style({
				'animation-timing-function': 'ease-in', transform: 'perspective(400px)',				offset: 1
			})
		]
	},
	'LIGHTSPEED': {
		'LIGHT_SPEED_IN': [
			style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)',	offset: 0 }),
			style({ opacity: 1, transform: 'skewX(20deg)',							offset: 0.6 }),
			style({ opacity: 1, transform: 'skewX(-5deg)',							offset: 0.8 }),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)',					offset: 1 })
		],
		'LIGHT_SPEED_OUT': [
			style({ opacity: 1,														offset: 0 }),
			style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(30deg)',	offset: 1 })
		]
	},
	'ROTATING_ENTRANCES': {
		'ROTATE_IN_DOWN_LEFT': [
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
				'transform-origin': 'left bottom', offset: 0
			}),
			style({
				opacity: 1, transform: 'rotate3d(0, 0, 0)',
				'transform-origin': 'left bottom', offset: 1
			})
		],
		'ROTATE_IN_DOWN_RIGHT': [
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
				'transform-origin': 'right bottom', offset: 0
			}),
			style({
				opacity: 1, transform: 'rotate3d(0, 0, 0)',
				'transform-origin': 'right bottom', offset: 1
			})
		],
		'ROTATE_IN_UP_LEFT': [
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
				'transform-origin': 'left bottom', offset: 0
			}),
			style({
				opacity: 1, transform: 'translate3d(0, 0, 0)',
				'transform-origin': 'left bottom', offset: 1
			})
		],
		'ROTATE_IN_UP_RIGHT': [
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, -90deg)',
				'transform-origin': 'right bottom', offset: 0
			}),
			style({
				opacity: 1, transform: 'translate3d(0, 0, 0)',
				'transform-origin': 'right bottom', offset: 1
			})
		],
		'ROTATE_IN': [
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, -200deg)',
				'transform-origin': 'center', offset: 0
			}),
			style({
				opacity: 1, transform: 'rotate3d(0, 0, 0)',
				'transform-origin': 'center', offset: 1
			})
		]
	},
	'ROTATING_EXITS': {
		'ROTATE_OUT_DOWN_LEFT': [
			style({ opacity: 1, 'transform-origin': 'left bottom',	offset: 0 }),
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
				'transform-origin': 'left bottom',					offset: 1
			})
		],
		'ROTATE_OUT_DOWN_RIGHT': [
			style({ opacity: 1, 'transform-origin': 'right bottom',	offset: 0 }),
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
				'transform-origin': 'right bottom',					offset: 1
			})
		],
		'ROTATE_OUT_UP_LEFT': [
			style({ opacity: 1, 'transform-origin': 'left bottom',	offset: 0 }),
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
				'transform-origin': 'left bottom',					offset: 1
			})
		],
		'ROTATE_OUT_UP_RIGHT': [
			style({
				opacity: 1,
				'transform-origin': 'right bottom',	offset: 0
			}),
			style({
				opacity: 0, transform: 'rotate3d(0, 0, 1, 90deg)',
				'transform-origin': 'right bottom',	offset: 1
			})
		],
		'ROTATE_OUT': [
			style({ opacity: 0, 'transform-origin': 'center',	offset: 0 }),
			style({
				opacity: 1, transform: 'rotate3d(0, 0, 1, 200deg)',
				'transform-origin': 'center',					offset: 1
			})
		]
	},
	'SLIDING_ENTRANCES': {
		'SLIDE_IN_DOWN': [
			style({ transform: 'translate3d(0, -100%, 0)', visibility: 'visible',	offset: 0 }),
			style({ transform: 'translate3d(0, 0, 0)',								offset: 1 })
		],
		'SLIDE_IN_LEFT': [
			style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible',	offset: 0 }),
			style({ transform: 'translate3d(0, 0, 0)',								offset: 1 })
		],
		'SLIDE_IN_RIGHT': [
			style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible',	offset: 0 }),
			style({ transform: 'translate3d(0, 0, 0)',								offset: 1 })
		],
		'SLIDE_IN_UP': [
			style({ transform: 'translate3d(0, 100%, 0)', visibility: 'visible',	offset: 0 }),
			style({ transform: 'translate3d(0, 0, 0)',								offset: 1 })
		]
	},
	'SLIDING_EXITS': {
		'SLIDE_OUT_DOWN': [
			style({ transform: 'translate3d(0, 0, 0)',							offset: 0 }),
			style({ transform: 'translate3d(0, 100%, 0)', visibility: 'hidden',	offset: 1 })
		],
		'SLIDE_OUT_LEFT': [
			style({ transform: 'translate3d(0, 0, 0)',								offset: 0 }),
			style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden',	offset: 1 })
		],
		'SLIDE_OUT_RIGHT': [
			style({ transform: 'translate3d(0, 0, 0)',							offset: 0 }),
			style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden',	offset: 1 })
		],
		'SLIDE_OUT_UP': [
			style({ transform: 'translate3d(0, 0, 0)',								offset: 0 }),
			style({ transform: 'translate3d(0, -100%, 0)', visibility: 'hidden',	offset: 1 })
		]
	},
	'SPECIALS': {
		'HINGE': [
			style({
				'transform-origin': 'top left',
				offset: 0
			}),
			style({
				'transform-origin': 'top left',
				'animation-timing-function': 'ease-in-out',
				transform: 'rotate3d(0, 0, 1, 80deg)',
				offset: 0.2
			}),
			style({
				'transform-origin': 'top left',
				'animation-timing-function': 'ease-in-out',
				transform: 'rotate3d(0, 0, 1, 60deg)',
				offset: 0.4
			}),
			style({
				'transform-origin': 'top left',
				'animation-timing-function': 'ease-in-out',
				transform: 'rotate3d(0, 0, 1, 80deg)',
				offset: 0.6
			}),
			style({
				'transform-origin': 'top left',
				'animation-timing-function': 'ease-in-out',
				transform: 'rotate3d(0, 0, 1, 60deg)',
				offset: 0.8
			}),
			style({
				transform: 'translate3d(0, 700px, 0)',
				opacity: 0, offset: 1
			})
		],
		'JACK_IN_THE_BOX': [
			style({ opacity: 0, transform: 'scale(0.1) rotate(30deg)',	offset: 0 }),
			style({ transform: 'rotate(-10deg)',						offset: 0.5 }),
			style({ transform: 'rotate(3deg)',							offset: 0.7 }),
			style({ opacity: 1, transform: 'scale(1)',					offset: 1 })
		],
		'ROLL_IN': [
			style({
				opacity: 0,
				transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
				offset: 1
			}),
			style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 })
		],
		'ROLL_OUT': [
			style({ opacity: 1, offset: 0 }),
			style({
				opacity: 0,
				transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
				offset: 1
			})
		]
	},
	'ZOOMING_ENTRANCES': {
		'ZOOM_IN_DOWN': [
			style({
				'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
				opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
				offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
				opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
				offset: 0.6
			})
		],
		'ZOOM_IN_LEFT': [
			style({
				'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
				opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
				offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
				opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
				offset: 0.6
			})
		],
		'ZOOM_IN_RIGHT': [
			style({
				'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
				opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
				offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
				opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
				offset: 0.6
			})
		],
		'ZOOM_IN_UP': [
			style({
				'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
				opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
				offset: 0
			}),
			style({
				'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
				opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
				offset: 0.6
			})
		],
		'ZOOM_IN': [
			style({ opacity: 0, 'transform': 'scale3d(0.3, 0.3, 0.3)',	offset: 0 }),
			style({ opacity: 1,											offset: 0.5 })
		]
	},
	'ZOOMING_EXITS': {
		'ZOOM_OUT_DOWN': [
			style({
				opacity: 1,
				transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
				'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
				offset: 0.4
			}),
			style({
				opacity: 0,
				transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
				'transform-origin': 'center bottom',
				'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)',
				offset: 1
			})
		],
		'ZOOM_OUT_LEFT': [
			style({
				opacity: 1,
				transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
				offset: 0.4
			}),
			style({
				opacity: 0,
				transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
				'transform-origin': 'left center',
				offset: 1
			})
		],
		'ZOOM_OUT_RIGHT': [
			style({
				opacity: 1,
				transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
				offset: 0.4
			}),
			style({
				opacity: 0,
				transform: 'scale(0.1) translate3d(2000px, 0, 0)',
				'transform-origin': 'left center',
				offset: 1
			})
		],
		'ZOOM_OUT_UP': [
			style({
				opacity: 1,
				transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
				'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
				offset: 0.4
			}),
			style({
				opacity: 0,
				transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
				'transform-origin': 'center bottom',
				'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)',
				offset: 1
			})
		],
		'ZOOM_OUT': [
			style({ opacity: 1, offset: 0 }),
			style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 }),
			style({ opacity: 0, offset: 1 })
		]
	}
}

const AnimateCSS = {
	'AttentionSeekers': {},
	'BouncingEntrances': {},
	'BouncingExits': {},
	'FadingEntrances': {},
	'FadingExits': {},
	'Flippers': {},
	'Lightspeed': {},
	'RotatingEntrances': {},
	'RotatingExits': {},
	'SlidingEntrances': {},
	'SlidingExits': {},
	'Specials': {},
	'ZoomingEntrances': {},
	'ZoomingExits': {}
}

for ( let i in ANIMATE_CSS ) {
	for ( let j in ANIMATE_CSS[i] ) {
		let x = startCase(camelCase(i)).replace(' ', ''),
			y = startCase(camelCase(j)).replace(' ', ''),
			s = ANIMATE_CSS[i][j]
		AnimateCSS[x][y] = class extends AAnimateCSS {
			constructor(){
				super(s, y)
			}
		}
	}
}

export { ANIMATE_CSS, AnimateCSS }

console.log( (new (<any>AnimateCSS.AttentionSeekers).Bounce).trigger() );
