"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Sum = function Sum(array) {
  if (array.length !== 1 || array[0].length !== 2) {
    throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
  }
  var num1 = array[0][0];
  var num2 = array[0][1];
  var result = num1 + num2;
  return result;
};
var _default = Sum;
exports["default"] = _default;