const add = function(a, b) {
	let addition = a + b;
  return addition;
};

const subtract = function(a, b) {
  let substraction = a - b;
  return substraction;
};

const sum = function(sumArray) {
	let initialValue = 0;
  let sumOfArray = sumArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);
return sumOfArray;
};

const multiply = function(multiplyArray) {
  let initValue = 1;
  let multiplicationOfArray = multiplyArray.reduce(
    (prevValue, currValue) => prevValue * currValue, initValue);
return multiplicationOfArray;
};


const power = function(a, b) {
	let powerOf = a**b;
  return powerOf;
};


const factorial = function(a) {
  let array =[];
  for (let i = 0; i < a; i++) {
    array[i] = i+1;
  }
  let multiplicationArray = array.reduce(
    (preValue, curValue) => preValue * curValue, 1);
  return multiplicationArray;
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
