"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.ZOOM_IN = [
    animations_1.style({ opacity: 0, 'transform': 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
    animations_1.style({ opacity: 1, offset: 0.5 })
];
