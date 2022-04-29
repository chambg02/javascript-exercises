const leapYears = function(year) {
    let leapCheck = '';
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        leapCheck = true;
    } else {
        leapCheck = false;
    }
    return leapCheck;
};

// Do not edit below this line
module.exports = leapYears;

/*
const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

module.exports = leapYears;
*/