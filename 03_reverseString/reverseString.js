const reverseString = function(string) {
    let returnStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        returnStr = returnStr.concat(string.charAt(i));
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
