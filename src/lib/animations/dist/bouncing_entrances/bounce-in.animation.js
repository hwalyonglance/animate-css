"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var class_1 = require("../class");
var BounceIn = /** @class */ (function (_super) {
    __extends(BounceIn, _super);
    function BounceIn() {
        return _super.call(this, exports.BOUNCE_IN, 'BounceIn') || this;
    }
    return BounceIn;
}(class_1.AAnimateCSS));
exports.BounceIn = BounceIn;
exports.BOUNCE_IN = [
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1
    })
];
