// 6. Implement the Truncate a String Algorithm - Function to truncate a string according to a numeric parameter.
/* Reasoning used:
    1. Create the truncateString function using two parameters: string and number;
    2. Apply the condition: if the length of the string is greater than the number, return the truncated string up to the given number + ...;
    3. Otherwise, the string remains unchanged.
*/


function truncateString (str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  else{
    return str;
  }
}

console.log(truncateString("Coding is great!", 4));
