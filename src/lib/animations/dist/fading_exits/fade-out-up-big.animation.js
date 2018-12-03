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
var FadeOutUpBig = /** @class */ (function (_super) {
    __extends(FadeOutUpBig, _super);
    function FadeOutUpBig() {
        return _super.call(this, exports.FADE_OUT_UP_BIG, 'FadeOutUpBig') || this;
    }
    return FadeOutUpBig;
}(class_1.AAnimateCSS));
exports.FadeOutUpBig = FadeOutUpBig;
exports.FADE_OUT_UP_BIG = [
    animations_1.style({ opacity: 1, offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 })
];
