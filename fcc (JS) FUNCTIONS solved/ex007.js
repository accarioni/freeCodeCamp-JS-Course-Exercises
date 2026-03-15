// 7. Build a Confirm the Ending Tool - Function to compare the ending of a string with another string.
/* Reasoning used:
    1. Create the confirmEnding function and provide 2 parameters: str1 (reference string) and str2 (which may or may not appear at the end of str1);
    2. Create a variable to extract the last characters of str1 (with the same length as str2);
    3. Compare them. If strValidation is equal to str2, return true. Otherwise, return false.
*/

function confirmEnding(str1, str2) {
  const strValidation = str1.slice(-(str2.length));
  return strValidation === str2;
}
