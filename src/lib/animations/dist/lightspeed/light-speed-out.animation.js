"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.LIGHT_SPEED_OUT = [
    animations_1.style({ opacity: 1, offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(30deg)', offset: 1 })
];
