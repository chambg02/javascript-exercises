const palindromes = function (words) {
    let letterArray = [];
    for (let i = 0; i < words.length; i++) {
        if (!/[^a-zA-Z]/.test(words[i]) == 1) {
            letterArray[i] = words.charAt(i).toLowerCase();

    }
    }
return letterArray.join("") === letterArray.reverse().join("");
};

/* OFFICIAL SOLUTION
const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/

// Do not edit below this line
module.exports = palindromes;
