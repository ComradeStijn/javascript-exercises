const removeFromArray = function(array, ...args) {
    array = array.filter((number) => !(args.includes(number)));
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
