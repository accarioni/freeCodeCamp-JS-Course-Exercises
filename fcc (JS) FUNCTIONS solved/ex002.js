// 2. Build an Email Masker - Function to hide part of the characters of an email.
/* Reasoning used:
    1. Find the @ symbol, which will act as the separator between the email name and the email domain;
    2. Split the string into two new strings: emailDomain, which contains the domain; emailName, which contains the email name;
    3. Manipulate the emailName string, keeping the first and last characters visible and masking the remaining ones using the repeat function based on the string length - 2 (referring to the first and last characters);
    4. Return the concatenation of the first character of the emailName string + masked portion + last character of the emailName string + domain.
*/

function maskEmail(email) {
  const emailIndex =  email.indexOf("@")
  const emailDomain = email.slice(emailIndex);
  const emailName = email.slice(0, emailIndex);
  const emailNameLength = emailName.length;
  const maskedEmail = "*".repeat(emailNameLength - 2);

  return (emailName[0] + maskedEmail + emailName[emailName.length-1] + emailDomain);
}

let email = ("anacarolinacasagrandecarioni@gmail.com"); // e-mail de exemplo

console.log(maskEmail(email));