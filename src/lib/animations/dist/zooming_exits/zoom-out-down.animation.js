"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ZOOM_OUT_DOWN = [
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
];
