"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var AAnimateCSS = /** @class */ (function () {
    function AAnimateCSS(style, animateCSSName, timings) {
        if (timings === void 0) { timings = '500ms'; }
        this.style = style;
        this.animateCSSName = animateCSSName;
        this.timings = timings;
        this.triggerNamePrefix = 'AnimateCSS_';
    }
    Object.defineProperty(AAnimateCSS.prototype, "triggerName", {
        get: function () { return this.triggerNamePrefix + this.animateCSSName; },
        enumerable: true,
        configurable: true
    });
    AAnimateCSS.prototype.trigger = function () {
        return animations_1.trigger(this.triggerName, [this.transition()]);
    };
    AAnimateCSS.prototype.transition = function (stateChageExpr) {
        if (stateChageExpr === void 0) { stateChageExpr = '* => ' + this.animateCSSName; }
        return animations_1.transition(stateChageExpr, this.animate());
    };
    AAnimateCSS.prototype.animate = function () {
        return animations_1.animate(this.timings, this.keyframes());
    };
    AAnimateCSS.prototype.keyframes = function () {
        return animations_1.keyframes(this.style);
    };
    return AAnimateCSS;
}());
exports.AAnimateCSS = AAnimateCSS;
