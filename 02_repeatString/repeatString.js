const repeatString = function(string, num) {
    let returnStr = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        returnStr += string;
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
