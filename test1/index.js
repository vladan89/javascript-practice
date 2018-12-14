var functions = require("./functions");
var config = require("./config");

console.log(functions.random(config.min, config.max));
console.log(functions.minIntegerFromArray(config.array));
console.log(functions.minIntegerFromString(config.text));
console.log(functions.concatStringsByLength(config.arrayOfStrings, 1));