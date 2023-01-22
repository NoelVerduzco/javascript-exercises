const leapYears = function(year) {
    thisYear = year;

    if (thisYear % 4 == 0) {
        if (thisYear % 100 == 0 && thisYear % 400 === 0) return true;
        if (thisYear % 100 !== 0) {
            return true
        } return false;
    } else return false;
}
// Do not edit below this line
module.exports = leapYears;
