"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Min = function Min(arr) {
  if (arr.length !== 1 || arr[0].length !== 2) {
    throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
  }
  var num1 = arr[0][0];
  var num2 = arr[0][1];
  var result = Math.min(num1, num2);
  return result;
};
var _default = Min;
exports["default"] = _default;