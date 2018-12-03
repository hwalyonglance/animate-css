"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var lodash_1 = require("lodash");
var class_1 = require("./class");
var ANIMATE_CSS = {
    'ATTENTION_SEEKERS': {
        'BOUNCE': [
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: .2
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
                transform: 'translate3d(0, -30, 0)', offset: .4
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
                transform: 'translate3d(0, -30, 0)', offset: .43
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: .53
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
                transform: 'translate3d(0, -15, 0)', offset: .4
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: .80
            }),
            animations_1.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: 1
            })
        ],
        'FLASH': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, offset: 0.25 }),
            animations_1.style({ opacity: 1, offset: 0.5 }),
            animations_1.style({ opacity: 0, offset: 0.75 }),
            animations_1.style({ opacity: 1, offset: 1 })
        ],
        'HEAD_SHAKE': [
            animations_1.style({ transform: 'translateX(0)', offset: 0 }),
            animations_1.style({ transform: 'translateX(-6px)', offset: 0.65 }),
            animations_1.style({ transform: 'translateX(5px)', offset: 0.185 }),
            animations_1.style({ transform: 'translateX(-3px)', offset: 0.315 }),
            animations_1.style({ transform: 'translateX(2px)', offset: 0.435 }),
            animations_1.style({ transform: 'translateX(0)', offset: 0.5 })
        ],
        'JELLO': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 11.1 }),
            animations_1.style({ transform: 'skew(-12.5deg)', offset: 22.2 }),
            animations_1.style({ transform: 'skew(6.25deg)', offset: 33.3 }),
            animations_1.style({ transform: 'skew(3.125deg)', offset: 44.4 }),
            animations_1.style({ transform: 'skew(1.5625deg)', offset: 55.5 }),
            animations_1.style({ transform: 'skew(-0.781255deg)', offset: 66.6 }),
            animations_1.style({ transform: 'skew(0.390625deg)', offset: 77.7 }),
            animations_1.style({ transform: 'skew(-0.1953125deg)', offset: 88.8 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'PULSE': [
            animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            animations_1.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: .5 }),
            animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ],
        'RUBBER_BAND': [
            animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            animations_1.style({ transform: 'scale3d(1.25, .75, 1)', offset: .3 }),
            animations_1.style({ transform: 'scale3d(.75, 1.25, 1)', offset: .4 }),
            animations_1.style({ transform: 'scale3d(1.15, 0.85, 1)', offset: .5 }),
            animations_1.style({ transform: 'scale3d(.95, 1.05, 1)', offset: .65 }),
            animations_1.style({ transform: 'scale3d(1.05, .95, 1)', offset: .75 }),
            animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
        ],
        'SHAKE': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
            animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
            animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
            animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
            animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
            animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
            animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
            animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
            animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
        ],
        'SWING': [
            animations_1.style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
            animations_1.style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
            animations_1.style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
            animations_1.style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
            animations_1.style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
        ],
        'TADA': [
            animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            animations_1.style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: .10 }),
            animations_1.style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: .20 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .30 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .40 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .50 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .60 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .70 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .80 }),
            animations_1.style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .90 }),
            animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
        ],
        'WOBBLE': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15 }),
            animations_1.style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.30 }),
            animations_1.style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.45 }),
            animations_1.style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.60 }),
            animations_1.style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.75 }),
            animations_1.style({ transform: 'translate3d(0, 0 , 0)', offset: 1 })
        ]
    },
    'BOUNCING_ENTRANCES': {
        'BOUNCE_IN_DOWN': [
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 0, transform: 'translate3d(0, -3000px, 0)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 1, transform: 'translate3d(0, 25px, 0)', offset: 0.6
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, -10px, 0)', offset: 0.75
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 5px, 0)', offset: 0.9
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: 1
            })
        ],
        'BOUNCE_IN_LEFT': [
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 0, transform: 'translate3d(-3000px, 0, 0)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 1, transform: 'translate3d(25px, 0, 0)', offset: 0.6
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(-10px, 0, 0)', offset: 0.75
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(5px, 0, 0)', offset: 0.9
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: 1
            })
        ],
        'BOUNCE_IN_RIGHT': [
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
                opacity: 0, transform: 'translate3d(3000px, 0, 0)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
                opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.6
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
                transform: 'translate3d(10px, 0, 0)', offset: 0.75
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
                transform: 'translate3d(-5px, 0, 0)', offset: 0.9
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1);',
                transform: 'translate3d(0, 0, 0)', offset: 1
            })
        ],
        'BOUNCE_IN_UP': [
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 0, transform: 'translate3d(0, 3000px, 0)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 10px, 0)', offset: 0.75
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, -5px, 0)', offset: 0.9
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'translate3d(0, 0, 0)', offset: 1
            })
        ],
        'BOUNCE_IN': [
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1
            })
        ]
    },
    'BOUNCING_EXITS': {
        'BOUNCE_OUT_DOWN': [
            animations_1.style({ transform: 'translate3d(0, 10px, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.4 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.45 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 }),
        ],
        'BOUNCE_OUT_LEFT': [
            animations_1.style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1 })
        ],
        'BOUNCE_OUT_RIGHT': [
            animations_1.style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1 })
        ],
        'BOUNCE_OUT_UP': [
            animations_1.style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.4 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.45 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 })
        ],
        'BOUNCE_OUT': [
            animations_1.style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 }),
            animations_1.style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
            animations_1.style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55 }),
            animations_1.style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1 })
        ]
    },
    'FADING_ENTRANCES': {
        'FADE_IN_DOWN_BIG': [
            animations_1.style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_DOWN': [
            animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_LEFT_BIG': [
            animations_1.style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_LEFT': [
            animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_RIGHT_BIG': [
            animations_1.style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_RIGHT': [
            animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_UP_BIG': [
            animations_1.style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN_UP': [
            animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'FADE_IN': [
            animations_1.style({ opacity: 0, offset: 0 }),
            animations_1.style({ opacity: 1, offset: 1 })
        ]
    },
    'FADING_EXITS': {
        'FADE_OUT_DOWN_BIG': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 })
        ],
        'FADE_OUT_DOWN': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
        ],
        'FADE_OUT_LEFT_BIG': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1 })
        ],
        'FADE_OUT_LEFT': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
        ],
        'FADE_OUT_RIGHT_BIG': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1 })
        ],
        'FADE_OUT_RIGHT': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
        ],
        'FADE_OUT_UP_BIG': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 })
        ],
        'FADE_OUT_UP': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
        ],
        'FADE_OUT': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, offset: 1 })
        ]
    },
    'FLIPPERS': {
        'FLIP_IN_X': [
            animations_1.style({
                'animation-timing-function': 'ease-in',
                opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'ease-in',
                transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4
            }),
            animations_1.style({ opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', offset: 0.6 }),
            animations_1.style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: 0.8 }),
            animations_1.style({ transform: 'perspective(400px)', offset: 1 })
        ],
        'FLIP_IN_Y': [
            animations_1.style({
                'animation-timing-function': 'ease-in',
                opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'ease-in',
                transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4
            }),
            animations_1.style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', offset: 0.6 }),
            animations_1.style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8 }),
            animations_1.style({ transform: 'perspective(400px)', offset: 1 })
        ],
        'FLIP_OUT_X': [
            animations_1.style({ transform: 'perspective(400px)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.3 }),
            animations_1.style({ opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', offset: 1 })
        ],
        'FLIP_OUT_Y': [
            animations_1.style({ transform: 'perspective(400px)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', offset: 0.3 }),
            animations_1.style({ opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', offset: 1 })
        ],
        'FLIP': [
            animations_1.style({
                'animation-timing-function': 'ease-out',
                transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'ease-out',
                transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4
            }),
            animations_1.style({
                'animation-timing-function': 'ease-in',
                transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5
            }),
            animations_1.style({
                'animation-timing-function': 'ease-in',
                transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95)', offset: 0.8
            }),
            animations_1.style({
                'animation-timing-function': 'ease-in', transform: 'perspective(400px)', offset: 1
            })
        ]
    },
    'LIGHTSPEED': {
        'LIGHT_SPEED_IN': [
            animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'skewX(20deg)', offset: 0.6 }),
            animations_1.style({ opacity: 1, transform: 'skewX(-5deg)', offset: 0.8 }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'LIGHT_SPEED_OUT': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(30deg)', offset: 1 })
        ]
    },
    'ROTATING_ENTRANCES': {
        'ROTATE_IN_DOWN_LEFT': [
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
                'transform-origin': 'left bottom', offset: 0
            }),
            animations_1.style({
                opacity: 1, transform: 'rotate3d(0, 0, 0)',
                'transform-origin': 'left bottom', offset: 1
            })
        ],
        'ROTATE_IN_DOWN_RIGHT': [
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
                'transform-origin': 'right bottom', offset: 0
            }),
            animations_1.style({
                opacity: 1, transform: 'rotate3d(0, 0, 0)',
                'transform-origin': 'right bottom', offset: 1
            })
        ],
        'ROTATE_IN_UP_LEFT': [
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
                'transform-origin': 'left bottom', offset: 0
            }),
            animations_1.style({
                opacity: 1, transform: 'translate3d(0, 0, 0)',
                'transform-origin': 'left bottom', offset: 1
            })
        ],
        'ROTATE_IN_UP_RIGHT': [
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, -90deg)',
                'transform-origin': 'right bottom', offset: 0
            }),
            animations_1.style({
                opacity: 1, transform: 'translate3d(0, 0, 0)',
                'transform-origin': 'right bottom', offset: 1
            })
        ],
        'ROTATE_IN': [
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, -200deg)',
                'transform-origin': 'center', offset: 0
            }),
            animations_1.style({
                opacity: 1, transform: 'rotate3d(0, 0, 0)',
                'transform-origin': 'center', offset: 1
            })
        ]
    },
    'ROTATING_EXITS': {
        'ROTATE_OUT_DOWN_LEFT': [
            animations_1.style({ opacity: 1, 'transform-origin': 'left bottom', offset: 0 }),
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)',
                'transform-origin': 'left bottom', offset: 1
            })
        ],
        'ROTATE_OUT_DOWN_RIGHT': [
            animations_1.style({ opacity: 1, 'transform-origin': 'right bottom', offset: 0 }),
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
                'transform-origin': 'right bottom', offset: 1
            })
        ],
        'ROTATE_OUT_UP_LEFT': [
            animations_1.style({ opacity: 1, 'transform-origin': 'left bottom', offset: 0 }),
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
                'transform-origin': 'left bottom', offset: 1
            })
        ],
        'ROTATE_OUT_UP_RIGHT': [
            animations_1.style({
                opacity: 1,
                'transform-origin': 'right bottom', offset: 0
            }),
            animations_1.style({
                opacity: 0, transform: 'rotate3d(0, 0, 1, 90deg)',
                'transform-origin': 'right bottom', offset: 1
            })
        ],
        'ROTATE_OUT': [
            animations_1.style({ opacity: 0, 'transform-origin': 'center', offset: 0 }),
            animations_1.style({
                opacity: 1, transform: 'rotate3d(0, 0, 1, 200deg)',
                'transform-origin': 'center', offset: 1
            })
        ]
    },
    'SLIDING_ENTRANCES': {
        'SLIDE_IN_DOWN': [
            animations_1.style({ transform: 'translate3d(0, -100%, 0)', visibility: 'visible', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'SLIDE_IN_LEFT': [
            animations_1.style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'SLIDE_IN_RIGHT': [
            animations_1.style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ],
        'SLIDE_IN_UP': [
            animations_1.style({ transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]
    },
    'SLIDING_EXITS': {
        'SLIDE_OUT_DOWN': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, 100%, 0)', visibility: 'hidden', offset: 1 })
        ],
        'SLIDE_OUT_LEFT': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden', offset: 1 })
        ],
        'SLIDE_OUT_RIGHT': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden', offset: 1 })
        ],
        'SLIDE_OUT_UP': [
            animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
            animations_1.style({ transform: 'translate3d(0, -100%, 0)', visibility: 'hidden', offset: 1 })
        ]
    },
    'SPECIALS': {
        'HINGE': [
            animations_1.style({
                'transform-origin': 'top left',
                offset: 0
            }),
            animations_1.style({
                'transform-origin': 'top left',
                'animation-timing-function': 'ease-in-out',
                transform: 'rotate3d(0, 0, 1, 80deg)',
                offset: 0.2
            }),
            animations_1.style({
                'transform-origin': 'top left',
                'animation-timing-function': 'ease-in-out',
                transform: 'rotate3d(0, 0, 1, 60deg)',
                offset: 0.4
            }),
            animations_1.style({
                'transform-origin': 'top left',
                'animation-timing-function': 'ease-in-out',
                transform: 'rotate3d(0, 0, 1, 80deg)',
                offset: 0.6
            }),
            animations_1.style({
                'transform-origin': 'top left',
                'animation-timing-function': 'ease-in-out',
                transform: 'rotate3d(0, 0, 1, 60deg)',
                offset: 0.8
            }),
            animations_1.style({
                transform: 'translate3d(0, 700px, 0)',
                opacity: 0, offset: 1
            })
        ],
        'JACK_IN_THE_BOX': [
            animations_1.style({ opacity: 0, transform: 'scale(0.1) rotate(30deg)', offset: 0 }),
            animations_1.style({ transform: 'rotate(-10deg)', offset: 0.5 }),
            animations_1.style({ transform: 'rotate(3deg)', offset: 0.7 }),
            animations_1.style({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ],
        'ROLL_IN': [
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
                offset: 1
            }),
            animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 })
        ],
        'ROLL_OUT': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
                offset: 1
            })
        ]
    },
    'ZOOMING_ENTRANCES': {
        'ZOOM_IN_DOWN': [
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
                opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
                offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
                opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
                offset: 0.6
            })
        ],
        'ZOOM_IN_LEFT': [
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
                opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
                offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
                opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
                offset: 0.6
            })
        ],
        'ZOOM_IN_RIGHT': [
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
                opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
                offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
                opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
                offset: 0.6
            })
        ],
        'ZOOM_IN_UP': [
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.55, 0.055, 0.675, 0.19)',
                opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
                offset: 0
            }),
            animations_1.style({
                'animation-timing-function': 'cubic-berzier(0.175, 0.885, 0.32, 1)',
                opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
                offset: 0.6
            })
        ],
        'ZOOM_IN': [
            animations_1.style({ opacity: 0, 'transform': 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
            animations_1.style({ opacity: 1, offset: 0.5 })
        ]
    },
    'ZOOMING_EXITS': {
        'ZOOM_OUT_DOWN': [
            animations_1.style({
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
                'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                offset: 0.4
            }),
            animations_1.style({
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
                'transform-origin': 'center bottom',
                'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)',
                offset: 1
            })
        ],
        'ZOOM_OUT_LEFT': [
            animations_1.style({
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
                offset: 0.4
            }),
            animations_1.style({
                opacity: 0,
                transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
                'transform-origin': 'left center',
                offset: 1
            })
        ],
        'ZOOM_OUT_RIGHT': [
            animations_1.style({
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
                offset: 0.4
            }),
            animations_1.style({
                opacity: 0,
                transform: 'scale(0.1) translate3d(2000px, 0, 0)',
                'transform-origin': 'left center',
                offset: 1
            })
        ],
        'ZOOM_OUT_UP': [
            animations_1.style({
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
                'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                offset: 0.4
            }),
            animations_1.style({
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
                'transform-origin': 'center bottom',
                'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)',
                offset: 1
            })
        ],
        'ZOOM_OUT': [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 }),
            animations_1.style({ opacity: 0, offset: 1 })
        ]
    }
};
exports.ANIMATE_CSS = ANIMATE_CSS;
var AnimateCSS = {
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
};
exports.AnimateCSS = AnimateCSS;
for (var i in ANIMATE_CSS) {
    var _loop_1 = function (j) {
        var x = lodash_1.startCase(lodash_1.camelCase(i)).replace(' ', ''), y = lodash_1.startCase(lodash_1.camelCase(j)).replace(' ', ''), s = ANIMATE_CSS[i][j];
        AnimateCSS[x][y] = /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                return _super.call(this, s, y) || this;
            }
            return class_2;
        }(class_1.AAnimateCSS));
    };
    for (var j in ANIMATE_CSS[i]) {
        _loop_1(j);
    }
}
console.log((new AnimateCSS.AttentionSeekers.Bounce).trigger());
