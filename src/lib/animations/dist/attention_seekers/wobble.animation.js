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
var Wobble = /** @class */ (function (_super) {
    __extends(Wobble, _super);
    function Wobble() {
        return _super.call(this, exports.WOBBLE, 'Wobble') || this;
    }
    return Wobble;
}(class_1.AAnimateCSS));
exports.Wobble = Wobble;
exports.WOBBLE = [
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15 }),
    animations_1.style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.30 }),
    animations_1.style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.45 }),
    animations_1.style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.60 }),
    animations_1.style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.75 }),
    animations_1.style({ transform: 'translate3d(0, 0 , 0)', offset: 1 })
];
