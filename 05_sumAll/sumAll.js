const sumAll = function(leftNum,rightNum) {
    left = leftNum;
    right = rightNum;
    sum = 0;

    if (left < 0 || right < 0) return "ERROR";
    if (typeof left === "string" || typeof right === "string") return "ERROR";
    if (isNaN(left) || isNaN(right)) return "ERROR";
    if (left > right) {
        let temp = 0;
        temp = right;
        right = left;
        left = temp;
    }

    for (let  i = left; i < right + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
