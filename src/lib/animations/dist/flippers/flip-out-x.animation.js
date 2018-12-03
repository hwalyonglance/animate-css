"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.FLIP_OUT_X = [
    animations_1.style({ transform: 'perspective(400px)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.3 }),
    animations_1.style({ opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', offset: 1 })
];
