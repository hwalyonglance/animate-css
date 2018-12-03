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
var FadeInLeftBig = /** @class */ (function (_super) {
    __extends(FadeInLeftBig, _super);
    function FadeInLeftBig() {
        return _super.call(this, exports.FADE_IN_LEFT_BIG, 'FadeInLeftBig') || this;
    }
    return FadeInLeftBig;
}(class_1.AAnimateCSS));
exports.FadeInLeftBig = FadeInLeftBig;
exports.FADE_IN_LEFT_BIG = [
    animations_1.style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
