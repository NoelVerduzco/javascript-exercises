const fibonacci = function(term) {
    let first = 1;
    let second = 1;
    let next = 0;
    if (Number(term) < 1) return "OOPS";
    if (Number(term) === 1 || Number(term) === 2) return 1;

    for (let i = 3; i <= term; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;

// create the first two terms in an array: 1 and 1
// create and start a loop from 1 until desired number
// 