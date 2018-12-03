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
var Bounce = /** @class */ (function (_super) {
    __extends(Bounce, _super);
    function Bounce() {
        return _super.call(this, exports.BOUNCE, 'Bounce') || this;
    }
    return Bounce;
}(class_1.AAnimateCSS));
exports.Bounce = Bounce;
exports.BOUNCE = [
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)', offset: 0
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)', offset: .2
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
        transform: 'translate3d(0, -30, 0)', offset: .4
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
        transform: 'translate3d(0, -30, 0)', offset: .43
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)', offset: .53
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, .06)',
        transform: 'translate3d(0, -15, 0)', offset: .4
    }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)', offset: .80
    }),
    animations_1.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
    animations_1.style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)', offset: 1
    })
];
