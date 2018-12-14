var functions = require("./functions");
var config = require("./config");

console.log(functions.random(config.min, config.max));
console.log(functions.minIntegerFromArray(config.array));
