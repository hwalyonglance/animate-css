"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ROTATE_OUT_UP_RIGHT = [
    animations_1.style({
        opacity: 1,
        'transform-origin': 'right bottom', offset: 0
    }),
    animations_1.style({
        opacity: 0, transform: 'rotate3d(0, 0, 1, 90deg)',
        'transform-origin': 'right bottom', offset: 1
    })
];
