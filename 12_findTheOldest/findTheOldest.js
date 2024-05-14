const findTheOldest = function(array) {
    return array.sort((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
        if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
        return (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1);
    })[0];
};

const people = [
    {
        name: "st",
        yearOfBirth: 1997,
    },
    {
        name: 'jl',
        yearOfBirth: 1996,
    },
]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
