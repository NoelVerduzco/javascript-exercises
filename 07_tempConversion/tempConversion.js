const convertToCelsius = function(temp) {
  let fTemp = temp;
  let cTemp = (fTemp - 32) * (5/9);

  return Number(cTemp.toPrecision(3));
};

const convertToFahrenheit = function(temp) {
  let cTemp = temp;
  let fTemp = (cTemp * 9 / 5) + 32;

  return Number(fTemp.toPrecision(4));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
