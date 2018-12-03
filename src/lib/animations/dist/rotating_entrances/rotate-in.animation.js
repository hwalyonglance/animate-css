"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ROTATE_IN = [
    animations_1.style({
        opacity: 0, transform: 'rotate3d(0, 0, 1, -200deg)',
        'transform-origin': 'center', offset: 0
    }),
    animations_1.style({
        opacity: 1, transform: 'rotate3d(0, 0, 0)',
        'transform-origin': 'center', offset: 1
    })
];
