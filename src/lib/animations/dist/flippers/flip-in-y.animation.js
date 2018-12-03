"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.FLIP_IN_Y = [
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
];
