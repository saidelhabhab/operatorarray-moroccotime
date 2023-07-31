"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var DateTimeInArabicMorocco = function DateTimeInArabicMorocco() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Africa/Casablanca" // Set the time zone to Morocco (Africa/Casablanca)
  };

  var currentDateTime = new Date();
  var arabicDateTime = currentDateTime.toLocaleString("ar-MA", options);

  //console.log(arabicDateTime);
};
var _default = DateTimeInArabicMorocco;
exports["default"] = _default;