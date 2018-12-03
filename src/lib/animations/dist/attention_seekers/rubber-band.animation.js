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
var RubberBand = /** @class */ (function (_super) {
    __extends(RubberBand, _super);
    function RubberBand() {
        return _super.call(this, exports.RUBBER_BAND, 'RubberBand') || this;
    }
    return RubberBand;
}(class_1.AAnimateCSS));
exports.RubberBand = RubberBand;
exports.RUBBER_BAND = [
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(1.25, .75, 1)', offset: .3 }),
    animations_1.style({ transform: 'scale3d(.75, 1.25, 1)', offset: .4 }),
    animations_1.style({ transform: 'scale3d(1.15, 0.85, 1)', offset: .5 }),
    animations_1.style({ transform: 'scale3d(.95, 1.05, 1)', offset: .65 }),
    animations_1.style({ transform: 'scale3d(1.05, .95, 1)', offset: .75 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
];
