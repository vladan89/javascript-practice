function random(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
        console.log("Warning, bad args");
        return;
    }
    return min + Math.round(Math.random() * (max-min));
}

function minIntegerFromArray(array) {
    if(array.length <= 5) {
        console.log("Warning, bad args");
        return;
    }
    
}
