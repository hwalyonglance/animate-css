"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ROLL_IN = [
    animations_1.style({
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
        offset: 1
    }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 })
];
