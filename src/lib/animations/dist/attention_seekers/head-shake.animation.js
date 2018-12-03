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
var HeadShake = /** @class */ (function (_super) {
    __extends(HeadShake, _super);
    function HeadShake() {
        return _super.call(this, exports.HEAD_SHAKE, 'HeadShake') || this;
    }
    return HeadShake;
}(class_1.AAnimateCSS));
exports.HeadShake = HeadShake;
exports.HEAD_SHAKE = [
    animations_1.style({ transform: 'translateX(0)', offset: 0 }),
    animations_1.style({ transform: 'translateX(-6px)', offset: 0.65 }),
    animations_1.style({ transform: 'translateX(5px)', offset: 0.185 }),
    animations_1.style({ transform: 'translateX(-3px)', offset: 0.315 }),
    animations_1.style({ transform: 'translateX(2px)', offset: 0.435 }),
    animations_1.style({ transform: 'translateX(0)', offset: 0.5 })
];
