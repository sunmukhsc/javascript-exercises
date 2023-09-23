const sumAll = function(num1, num2) {
    let bigNum;
    let smallNum;
    let finalSum = 0;

    if (num1<0 || num2<0 || typeof num1 !== "number" 
    || typeof num2 !== "number") {
        return 'ERROR';
    }

    if (num1 > num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }

    for (let i = smallNum; i <= bigNum; i++) {
        finalSum += i;
    }

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
