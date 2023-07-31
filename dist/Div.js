"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Div = function Div(arr) {
  if (arr.length !== 1 || arr[0].length !== 2) {
    throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
  }
  var numerator = arr[0][0];
  var denominator = arr[0][1];
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  var result = numerator / denominator;
  return result;
};
var _default = Div;
exports["default"] = _default;