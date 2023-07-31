"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Multi = function Multi(arr) {
  if (arr.length !== 1 || arr[0].length !== 2) {
    throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
  }
  var factor1 = arr[0][0];
  var factor2 = arr[0][1];
  var result = factor1 * factor2;
  return result;
};
var _default = Multi;
exports["default"] = _default;