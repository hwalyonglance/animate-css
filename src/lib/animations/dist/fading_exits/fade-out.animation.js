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
var FadeOut = /** @class */ (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut() {
        return _super.call(this, exports.FADE_OUT, 'FadeOut') || this;
    }
    return FadeOut;
}(class_1.AAnimateCSS));
exports.FadeOut = FadeOut;
exports.FADE_OUT = [
    animations_1.style({ opacity: 1, offset: 0 }),
    animations_1.style({ opacity: 0, offset: 1 })
];
