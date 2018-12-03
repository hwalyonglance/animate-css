"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var dirs = [
    'attention_seekers',
    'bouncing_entrances',
    'bouncing_exits',
    'fading_entrances',
    'fading_exits',
    'flippers',
    'lightspeed',
    'rotating_entrances',
    'rotating_exits',
    'sliding_entrances',
    'sliding_exits',
    'specials',
    'zooming_entrances',
    'zooming_exits'
];
var ACS = {};
for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
    var dir = dirs_1[_i];
    ACS[dir] = {};
    var arr = fs_1.readdirSync('./' + dir);
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var f = arr_1[_a];
        var b = ACS[dir][f.replace('.animation.js', '')] = require('./' + dir + '/' + f);
    }
}
console.log(ACS);
