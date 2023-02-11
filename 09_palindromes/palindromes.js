const palindromes = function(str) {
    let chars = str.split("");
    let letters = [];
    for (let char of chars) {
        if (char.toUpperCase() != char.toLowerCase()) {
            letters.push(char);
        }
    }
    if (letters.toString().toLowerCase() === letters.reverse().toString().toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

// intake string
// convert to array
// loop through array and check if character is letter
// if true, keep and add into new array
// check if new array === new array reversed
// if so, return true