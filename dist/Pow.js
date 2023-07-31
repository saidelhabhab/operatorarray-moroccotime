"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Pow = function Pow(arr) {
  if (arr.length !== 1 || arr[0].length !== 2) {
    throw new Error("Input array must be of the form [[base, exponent]] where base and exponent are numbers.");
  }
  var base = arr[0][0];
  var exponent = arr[0][1];
  var result = Math.pow(base, exponent);
  return result;
};
var _default = Pow;
exports["default"] = _default;