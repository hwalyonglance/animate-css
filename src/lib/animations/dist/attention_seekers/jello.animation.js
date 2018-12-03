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
var Jello = /** @class */ (function (_super) {
    __extends(Jello, _super);
    function Jello() {
        return _super.call(this, exports.JELLO, 'Jello') || this;
    }
    return Jello;
}(class_1.AAnimateCSS));
exports.Jello = Jello;
exports.JELLO = [
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 11.1 }),
    animations_1.style({ transform: 'skew(-12.5deg)', offset: 22.2 }),
    animations_1.style({ transform: 'skew(6.25deg)', offset: 33.3 }),
    animations_1.style({ transform: 'skew(3.125deg)', offset: 44.4 }),
    animations_1.style({ transform: 'skew(1.5625deg)', offset: 55.5 }),
    animations_1.style({ transform: 'skew(-0.781255deg)', offset: 66.6 }),
    animations_1.style({ transform: 'skew(0.390625deg)', offset: 77.7 }),
    animations_1.style({ transform: 'skew(-0.1953125deg)', offset: 88.8 }),
    animations_1.style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
