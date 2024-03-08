const convertToCelsius = function(temp) {
  // °C = (°F - 32) × 5/9
  const celcius = (temp - 32) * (5.0 / 9);
  return parseFloat(celcius.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  // °F = (°C × 9/5) + 32 
  const fahrenheit = (temp * (9.0 / 5)) + 32;
  return parseFloat(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
