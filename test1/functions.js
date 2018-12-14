module.exports = {
    random: function(min, max) {
        if(!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
            console.log("Warning, bad args");
            return;
        }
        return min + Math.round(Math.random() * (max-min));
    },
    minIntegerFromArray: function(array) {
        if(array.length <= 5) {
            console.log("Warning, bad args");
            return;
        }
        array = array.filter(function(a) {return Number.isInteger(a)});
        if(array.length > 0) {
            return array.reduce(function(a,b){ return a<b ? a : b});
        } else {
            return false;
        }
    },
    minIntegerFromString: function(string) {
        var splits = string.split(/(\d+)/).map(Number);
        return this.minIntegerFromArray(splits);
    },
    concatStringsByLength: function(arrayOfStrings, type) {
        arrayOfStrings.sort(function(a, b){return (-type) * (a.length-b.length)});
        return arrayOfStrings.join("");
    }
};
