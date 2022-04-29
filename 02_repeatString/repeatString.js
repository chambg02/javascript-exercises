const repeatString = function(hey, number) {
    if (hey == '') {
        hey = '';
    } else if (number >= 0) {
        hey = '';
        for (let i=0; i<number; i++) {
            hey = hey + 'hey';
        }        
    } else if (number < 0) {
        hey = 'ERROR';
    }
    return hey;
}

/*
exercise solution

const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

*/

// Do not edit below this line
module.exports = repeatString;
