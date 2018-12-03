"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ZOOM_OUT_RIGHT = [
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
];
