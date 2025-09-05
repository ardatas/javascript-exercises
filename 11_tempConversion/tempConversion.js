const convertToCelsius = function(degree) {
  return Math.round((degree - 32) * (50/9))/10 ;
};

const convertToFahrenheit = function(degree) {
  return Math.round((((9 * degree)/5) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
