module.exports = class War {

    constructor(units) {
        this._units = units;
    };

    start() {
        if(this.thereAreAtLeastTwoUnitsAlive()) {
            var _self = this;
            this.getAliveUnits().forEach(function (unit, index) {
                var members = _self.getAliveUnits();
                members.splice(index, 1);
                unit.attack(_self.getRandomElement(members));
            });
            setTimeout(function() {_self.start(); }, 1000);
        } else {
            console.log("War is over;");
            console.log("Winner(s): ");
            this.getAliveUnits().sort(function (u1, u2) {
                return u1._health > u2._health;
            }).forEach(function (winner) {
                console.log(winner);
            })
        }

    };

    getRandomElement(array) {
        return array[Math.floor(Math.random()*array.length)];
    };

    getAliveUnits() {
        return this._units.filter(function(unit) {return unit.isAlive()});
    };

    thereAreAtLeastTwoUnitsAlive() {
        return this.getAliveUnits().length > 2;
    };
}