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
var BounceInDown = /** @class */ (function (_super) {
    __extends(BounceInDown, _super);
    function BounceInDown() {
        return _super.call(this, exports.BOUNCE_IN_DOWN, 'BounceInDown') || this;
    }
    return BounceInDown;
}(class_1.AAnimateCSS));
exports.BounceInDown = BounceInDown;
exports.BOUNCE_IN_DOWN = [
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 0, transform: 'translate3d(0, -3000px, 0)', offset: 0
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 1, transform: 'translate3d(0, 25px, 0)', offset: 0.6
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, -10px, 0)', offset: 0.75
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 5px, 0)', offset: 0.9
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)', offset: 1
    })
];
