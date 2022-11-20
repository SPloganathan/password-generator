// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  var password = generatePassword();

  passwordText.value = password;
}
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to contain"
  );
  if (passwordLength > 8 && passwordLength < 128) {
    var shouldContinue = prompt(
      "Click OK to start including special characters"
    );
    if (shouldContinue) {
      var lowerCase = prompt(
        "Click OK to confirm including lowercase characters"
      );
      var upperCase = prompt(
        "Click OK to confirm including uppercase characters"
      );
      var numeric = prompt("Click OK to confirm including numeric characters");
      var specialCharacter = prompt(
        "Click OK to confirm including special characters"
      );
      if (!lowerCase && !upperCase && !numeric && !specialCharacter) {
        alert("Please choose atleast one password criteria");
        generatePassword();
      }

      return passwordLength;
    }

    return "You must choose password criteria";
  }
  return "Password length should be greater than 8 and less than 128 characters";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
