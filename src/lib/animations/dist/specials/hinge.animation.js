"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.HINGE = [
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
];
