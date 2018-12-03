"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.FLIP = [
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
];
