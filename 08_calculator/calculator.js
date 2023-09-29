const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(function(total, current){
    return total + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce(function(total, current){
    return total * current;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let factorial = 1
	for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
