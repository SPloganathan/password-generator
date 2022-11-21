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
    var shouldContinue = confirm(
      "Click OK to start including special characters"
    );
    // If the above condition is true it enters the below if loop or if it is false it goes to line 48
    if (shouldContinue) {
      // Storing the password criterias in the respective varaiables
      var lowerCase = confirm(
        "Click OK to confirm including lowercase characters"
      );
      var upperCase = confirm(
        "Click OK to confirm including uppercase characters"
      );
      var numeric = confirm("Click OK to confirm including numeric characters");
      var specialCharacter = confirm(
        "Click OK to confirm including special characters"
      );
      // If the user hasn't choosen anyone of the password criteria it again triggers the 'generatepassword' function
      if (!lowerCase && !upperCase && !numeric && !specialCharacter) {
        alert("Please choose atleast one password criteria");
        return generatePassword();
      }
      // The actual password generation logic starts here
      // Defining variables for all possible characters and bringing the values
      var numberChars = "0123456789";
      var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerChars = "abcdefghijklmnopqrstuvwxyz";
      var specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      var randPasswordArray = [];
      var arrayIndex = 0;
      // When the user selects anyone of the password criteria, we will take the corresponding value and pushing it into 'randpassworArray'
      if (numeric) {
        arrayIndex++;
        randPasswordArray.push(numberChars);
      }
      if (upperCase) {
        arrayIndex++;
        randPasswordArray.push(upperChars);
      }
      if (lowerCase) {
        arrayIndex++;
        randPasswordArray.push(lowerChars);
      }
      if (specialCharacter) {
        arrayIndex++;
        randPasswordArray.push(specialChars);
      }
      // Using this for loop to generate array value for the remaining password length
      for (let i = arrayIndex; i < passwordLength; i++) {
        randPasswordArray.push(
          randPasswordArray[Math.floor(Math.random() * arrayIndex)]
        );
      }
      // using this for loop for generating the actual password using math random
      var password = "";
      for (let i = 0; i < randPasswordArray.length; i++) {
        var passwordSelection = randPasswordArray[i];
        password +=
          passwordSelection[
            Math.floor(Math.random() * passwordSelection.length)
          ];
      }

      return password;
    }
    // Setting the empty string in password text area to prevent displaying 'undefined'
    alert("You must choose password criteria");
    return "";
  }
  alert(
    "Password length should be greater than or equal to 8 and less than or equal to 128 characters"
  );
  return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
