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
var Swing = /** @class */ (function (_super) {
    __extends(Swing, _super);
    function Swing() {
        return _super.call(this, exports.SWING, 'Swing') || this;
    }
    return Swing;
}(class_1.AAnimateCSS));
exports.Swing = Swing;
exports.SWING = [
    animations_1.style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    animations_1.style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
