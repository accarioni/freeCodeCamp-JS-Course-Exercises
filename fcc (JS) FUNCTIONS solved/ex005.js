// 5. Build a Leap Year Calculator - Function to help identify leap years.
/* Reasoning used:
    1. Create a global variable year and initialize it with the year to be validated;
    2. Create a function called isLeapYear that receives a parameter year, which must be validated according to 3 criteria:
    - If the year is divisible by 4, it is a leap year;
    - However, if the year is divisible by both 4 and 100, it is not a leap year;
    - Finally, if the year is divisible by both 4 and 400, it is a leap year.
    3. The isLeapYear function returns:
    - if the condition is true: (year) is a leap year.
    - if the condition is false: (year) is not a leap year.
*/

let year = 2024;

function isLeapYear(year) {
  if(year % 4 === 0){
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return year + " is a leap year.";
      }
      else {
        return year + " is not a leap year.";
      }
    }
    else {
        return year + " is a leap year.";
  }
}
  else {
    return year + " is not a leap year.";
  }
}

let result = isLeapYear(year);
console.log(result);

// outra alternativa:

function isLeapYear2(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}