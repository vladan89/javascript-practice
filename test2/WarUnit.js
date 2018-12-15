module.exports = class WarUnit {

    constructor(name) {
        this._name = name;
        this._health = 100;
    }

    get rechargeTime() {
        return 1000 * this._health / 100;
    }

    get damage() {
        return this._health / 100;
    }

    get criticalChance() {
        return 10 - this._health / 100;
    }

    isAlive() {
        return this._health > 0;
    }

    attack(enemy) {
        if(enemy && enemy.isAlive()) {
            console.log(this._name + " preparing to attack " + enemy._name);
            var _self = this;
              setTimeout(function () {
                  enemy.decreaseHealth(_self.damage);
                  }, _self.rechargeTime);
        } else {
            console.log("Enemy died", enemy)
        }
    }

    itsCriticalChanceNow() {
        return this.criticalChance >= Math.round(Math.random()*100);
    }

    decreaseHealth(value) {
        var hardness = this.itsCriticalChanceNow() ? 2 * value : value;
        console.log(this._name + " just got hit - " + hardness);
        this._health -= hardness;
        if(this._health <= 0) {
            console.log(">>>>>>>>>>>>> " + this._name + " just died");
        } else {
            console.log(this._name + " has " + this._health + " health remaining");
        }
    }

}