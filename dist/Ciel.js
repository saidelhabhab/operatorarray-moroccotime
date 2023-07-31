"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Ceil = function Ceil(arr) {
  var result = arr.map(function (num) {
    return Math.ceil(num);
  });
  return result;
};
var _default = Ceil;
exports["default"] = _default;