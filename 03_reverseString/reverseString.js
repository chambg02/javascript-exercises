const reverseString = function(words) {
    let chars = words.split('');
    let reversed = chars.reverse();
    let convertBack = reversed.join('');
    return convertBack;
}

/*
exercise solution
const reverseString = function(string) {
 return string.split('').reverse().join('');
};
*/

// Do not edit below this line
module.exports = reverseString;
