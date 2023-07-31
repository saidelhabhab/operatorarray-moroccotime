"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Sub = function Sub(arr) {
  if (arr.length !== 1 || arr[0].length !== 2) {
    throw new Error("Input array must be of the form [[a, b]] where a and b are numbers.");
  }
  var minuend = arr[0][0];
  var subtrahend = arr[0][1];
  var result = minuend - subtrahend;
  return result;
};
var _default = Sub;
exports["default"] = _default;