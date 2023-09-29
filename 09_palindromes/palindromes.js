const palindromes = function (string) {
    stringSimple = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return stringSimple.split('').reverse().join('')===stringSimple ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
