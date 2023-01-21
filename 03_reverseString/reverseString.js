const reverseString = function(string) {
    stringToList = string.split("");
    reverseTheList = stringToList.reverse();
    listToString = reverseTheList.toString();
    removeCommas = listToString.replaceAll(",","");
    return removeCommas;
};

// Do not edit below this line
module.exports = reverseString;
