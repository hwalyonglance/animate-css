"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.JACK_IN_THE_BOX = [
    animations_1.style({ opacity: 0, transform: 'scale(0.1) rotate(30deg)', offset: 0 }),
    animations_1.style({ transform: 'rotate(-10deg)', offset: 0.5 }),
    animations_1.style({ transform: 'rotate(3deg)', offset: 0.7 }),
    animations_1.style({ opacity: 1, transform: 'scale(1)', offset: 1 })
];
