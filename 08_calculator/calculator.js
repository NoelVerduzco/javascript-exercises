const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(N) {
	if (N === 0) return 1;
  let total = 1;
  for (let i = 1; i <= N; i++) {
    total *= i;
  }
  return total;
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
