"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.SLIDE_OUT_UP = [
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'translate3d(0, -100%, 0)', visibility: 'hidden', offset: 1 })
];
