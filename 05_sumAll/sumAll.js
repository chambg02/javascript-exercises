const sumAll = function(a,b) {
    let sum = 0;

        if (typeof a != 'number' || typeof b != 'number') {
            sum = 'ERROR';
        }   else if (a < 0 || b < 0) {
            sum = "ERROR";
        } else if (a > b) {
        for (let i = b; i < a+1; i++) {
            sum = sum + i;
        } 
        } else if (a < b) {
            for (let i = a; i < b+1; i++) {
            sum = sum + i;
            }   
        }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*
SOLUTION
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

};
*/