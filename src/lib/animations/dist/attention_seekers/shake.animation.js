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
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super.call(this, exports.SHAKE, 'Shake') || this;
    }
    return Shake;
}(class_1.AAnimateCSS));
exports.Shake = Shake;
exports.SHAKE = [
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
    animations_1.style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
    animations_1.style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
];
