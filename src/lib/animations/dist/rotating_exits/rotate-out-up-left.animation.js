"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ROTATE_OUT_UP_LEFT = [
    animations_1.style({ opacity: 1, 'transform-origin': 'left bottom', offset: 0 }),
    animations_1.style({
        opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
        'transform-origin': 'left bottom', offset: 1
    })
];
