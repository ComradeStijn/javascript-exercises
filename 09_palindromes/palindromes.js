


const palindromes = function (string) {
    const delimiters = /[!?;.,|\s]/
    const lowerString = string
                        .split(delimiters)
                        .join("")
                        .toLowerCase();
    const reversedString = lowerString.split("").reverse().join("");

    return (reversedString === lowerString);
};

// Do not edit below this line
module.exports = palindromes;
