const prompt = require('prompt-sync')()

function convertTemperature() {
    let temperature = prompt("Enter the Temperature Number : ");
    let unit = prompt("Enter the Temperature Unit (Celsius/Fahrenheit/Kelvin) : ");
    let celsius;
    let fahrenheit;
    let kelvin;
  
    if (unit == "Celsius") {
      celsius = parseFloat(temperature);
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
      console.log(celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit and " + kelvin + " Kelvin.");
    } else if (unit == "Fahrenheit") {
      fahrenheit = parseFloat(temperature);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit + 459.67) * 5/9;
      console.log(fahrenheit + " Fahrenheit is equal to " + celsius + " Celsius and " + kelvin + " Kelvin.");
    } else if (unit == "Kelvin") {
      kelvin = parseFloat(temperature);
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin * 9/5) + 459.67;
      console.log(kelvin + " Kelvin is equal to " + celsius + " Celsius and " + fahrenheit + " Fahrenheit.");
    } else {
      console.log("Invalid temperature unit entered.");
      return;
    }
  }
  
  convertTemperature();
  
  