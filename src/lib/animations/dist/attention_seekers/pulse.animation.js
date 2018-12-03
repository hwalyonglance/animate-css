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
var Pulse = /** @class */ (function (_super) {
    __extends(Pulse, _super);
    function Pulse() {
        return _super.call(this, exports.PULSE, 'Pulse') || this;
    }
    return Pulse;
}(class_1.AAnimateCSS));
exports.Pulse = Pulse;
exports.PULSE = [
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: .5 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
];
