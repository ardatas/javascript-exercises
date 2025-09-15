const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let answer = arr.reduce((sum, current) => sum + current, 0)
	return answer
};

const multiply = function(arr) {
  return arr.reduce(((multiply, current) => current * multiply))
};

const power = function(a ,b) {
	return a ** b
};

const factorial = function(num) {
  
  if (num === 0) {
    return 1;
  }

  if (num > 0) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i
    }
    return factorial
  }
	
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
