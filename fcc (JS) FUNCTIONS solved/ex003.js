// 3. Build a Celsius to Fahrenheit Converter - Function to convert temperature units.
/* Reasoning used:
    1. Validate whether the input provided by the user is a numeric value (using if and else);
    2. If the condition is met, the Celsius value is used in the conversion formula to Fahrenheit;
    3. The function returns the value in Fahrenheit.
*/


function convertCtoF(celsius) {
  if (typeof celsius === "number") {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
}

convertCtoF();

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(30));