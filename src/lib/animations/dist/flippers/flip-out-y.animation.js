"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.FLIP_OUT_Y = [
    animations_1.style({ transform: 'perspective(400px)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', offset: 0.3 }),
    animations_1.style({ opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', offset: 1 })
];
