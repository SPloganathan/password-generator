// Assignment Code
// Getting button element using queryselector
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // To display the password we are queryselecting the password text area
  var passwordText = document.querySelector("#password");
  // passwordText.value = "";
  // Password generating logic goes here
  var password = generatePassword();

  passwordText.value = password;
}

function generatePassword() {
  // Setting password length we are getting in this variable 'passwordlength'
  var passwordLength = prompt(
    "How many characters would you like your password to contain"
  );
  // Condition - Password length should be greater than or equal to 8 and less than or equal to 128.
  if (passwordLength >= 8 && passwordLength <= 128) {
    var shouldContinue = prompt(
      "Click OK to start including special characters"
    );
    // If the above condition is true it enters the below if loop or if it is false it goes to line 48
    if (shouldContinue) {
      // Storing the password criterias in the respective varaiables
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
      // If the user hasn't choosen anyone of the password criteria it again triggers the 'generatepassword' function
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
