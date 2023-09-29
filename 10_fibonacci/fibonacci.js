const fibonacci = function(num) {
    let numConvert = +num;
    if (numConvert < 1) return "OOPS";
    if (numConvert === 1 || numConvert === 2) return 1;

    return fibonacci(numConvert - 1) + fibonacci(numConvert - 2);
};

// Do not edit below this line
module.exports = fibonacci;
