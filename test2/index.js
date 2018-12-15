var WarUnit = require("./WarUnit.js");
var War = require("./War.js");

var unit1 = new WarUnit("Serbia");
var unit2 = new WarUnit("Germany");
var unit3 = new WarUnit("USA");
var unit4 = new WarUnit("Russia");

var theWar= new War([unit1, unit2, unit3, unit4]);
theWar.start();