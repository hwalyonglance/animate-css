"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.SLIDE_IN_LEFT = [
    animations_1.style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
