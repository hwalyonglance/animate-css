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

export type AnimateCSSName =		''
	|		'Bounce'			|	'Flash'					|	'HeadShake'
		|	'Jello'				|	'Pulse'					|	'RubberBand'
		|	'Shake'				|	'Swing'					|	'Tada'
		|	'Wobble'
	|		'BounceInDown'		|	'BounceInLeft'			|	'BounceInRight'
		|	'BounceInUp'		|	'BounceIn'
	|		'BounceOut'			|	'BounceOutDown'			|	'BounceOutLeft'
		|	'BounceOutRight'	|	'BounceOutUp'
	|		'FadeInDownBig'		|	'FadeInDown'			|	'FadeInLeftBig'
		|	'FadeInLeft'		|	'FadeInRightBig'		|	'FadeInRight'
		|	'FadeInUpBig'		|	'FadeInUp'				|	'FadeIn'
	|		'FadeOutDownBig'	|	'FadeOutDown'			|	'FadeOutLeftBig'
		|	'FadeOutLeft'		|	'FadeOutRightBig'		|	'FadeOutRight'
		|	'FadeOutUpBig'		|	'FadeOutUp'				|	'FadeOut'
	|		'FlipInX'			|	'FlipInY'				|	'FlipOutX'
		|	'FlipOutY'			|	'Flip'
	|		'LightSpeedIn'		|	'LightSpeedOut'
	|		'RotateInDownLeft'	|	'RotateInDownRight'		|	'RotateInUpLeft'
		|	'RotateInUpRight'	|	'RotateIn'
	|		'RotateOutDownLeft'	|	'RotateOutDownRight'	|	'RotateOutUpLeft'
		|	'RotateOutUpRight'	|	'RotateOut'
	|		'SlideInDown'		|	'SlideInLeft'			|	'SlideInRight'
		|	'SlideInUp'			|	'SlideIn'
	|		'SlideOutDown'		|	'SlideOutLeft'			|	'SlideOutRight'
		|	'SlideOutUp'		|	'SlideOut'
	|		'Hinge'				|	'JackInTheBox'			|	'RollIn'
		|	'RollOut'
	|		'ZoomInDown'		|	'ZoomInLeft'			|	'ZoomInRight'
		|	'ZoomInUp'			|	'ZoomIn'
	|		'ZoomOutDown'		|	'ZoomOutLeft'			|	'ZoomOutRight'
		|	'ZoomOutUp'			|	'ZoomOut';

export abstract class AAnimateCSS {
	get triggerName(){
		return this.triggerNamePrefix + this.animateCSSName + this.triggerNameSuffix
	}
	triggerNamePrefix: string = 'Animate_';
	triggerNameSuffix: string = '_CSS';
	constructor(
		public readonly style: AnimationStyleMetadata[],
		public readonly animateCSSName: AnimateCSSName,
		public timings: string | number = '500ms'
	) {}
	trigger(): AnimationTriggerMetadata {
		return trigger(this.triggerName, [this.transition()])
	}
	transition(
			stateChageExpr: string = '* => ' + this.triggerName
		): AnimationTransitionMetadata {
			return transition(stateChageExpr, this.animate())
	}
	animate(): AnimationAnimateMetadata {
		return animate(this.timings, this.keyframes())
	}
	keyframes(): AnimationKeyframesSequenceMetadata {
		return keyframes(this.style)
	}
}
