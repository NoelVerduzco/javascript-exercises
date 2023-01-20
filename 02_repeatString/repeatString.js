const repeatString = function(string, num) {
    let longString = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            longString += string;
        }
    } else {
        return "ERROR";
    }
    return longString;
};

// Do not edit below this line
module.exports = repeatString;
