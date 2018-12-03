"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.LIGHT_SPEED_IN = [
    animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'skewX(20deg)', offset: 0.6 }),
    animations_1.style({ opacity: 1, transform: 'skewX(-5deg)', offset: 0.8 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
