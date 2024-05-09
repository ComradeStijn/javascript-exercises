const sumAll = function(x, y) {
    if (!(Number.isInteger(x) && Number.isInteger(y)) ||
        x < 0 || y < 0) {
        return 'ERROR';
    }
    let start = Math.min(x, y);
    let end = Math.max(x, y);
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
