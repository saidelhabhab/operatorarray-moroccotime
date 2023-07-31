"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Floor = function Floor(arr) {
  var result = arr.map(function (num) {
    return Math.floor(num);
  });
  return result;
};
var _default = Floor;
exports["default"] = _default;