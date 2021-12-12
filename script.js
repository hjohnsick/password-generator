// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Make password between 8 and 128 characters
  var passwordLength = prompt(
    "Please select a length between 8 and 128 characters: "
  );

  passwordLength = parseInt(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {

    return getCharacterSelection(passwordLength);
  } else {
    // if password length is not valid, prompt again
    generatePassword();
  }
}

function generateRandomCharacter(character) {
    character[Math.floor(Math.random() * character.length)];
}

function getCharacterSelection(passwordLength) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseAlphabet = alphabet.toUpperCase();
    var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var randomNumber = Math.floor(Math.random() * 10);

    var password = [];

  // Ask if user wants to include lowercase characters
  var lowerCaseSelection = confirm(
    "Do you want to include lowercase characters?"
  );
  // Ask if user wants to include uppercase characters
  var upperCaseSelection = confirm(
    "Do you want to include uppercase characters?"
  );
  // Ask if user wants to include numeric characters
  var numericCharacterSelection = confirm(
    "Do you want to include numberic characters?"
  );
  // Ask if user wants to include special characters
  var specialCharactersSelection = confirm(
    "Do you want to include special characters?"
  );

  if (
    !lowerCaseSelection &&
    !upperCaseSelection &&
    !numericCharacterSelection &&
    !specialCharactersSelection
  ) {
    alert("You must select at least one character choice!");
    getCharacterSelection();
  }

  // Password must include all character types
  if (
    lowerCaseSelection &&
    upperCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    while (password <= passwordLength) {
        for (var i = 0; i < passwordLength; i++) {
          var lowerCaseCharacter =
          generateRandomCharacter(alphabet);
          var upperCaseCharacter = generateRandomCharacter(upperCaseAlphabet);
          var specialCharacter = generateRandomCharacter(specialCharacter);
          password.push(lowerCaseCharacter);
          password.push(upperCaseCharacter);
          password.push(randomNumber);
          password.push(specialCharacters);
        }
      }
  } // Password must include lowercase, uppercase and numbers
  else if (
    lowerCaseSelection &&
    upperCaseSelection &&
    numericCharacterSelection
  ) {
  } // Password must include lowercase, uppercase and special characters
  else if (
    lowerCaseSelection &&
    upperCaseSelection &&
    specialCharactersSelection
  ) {
  } // Password must include lowercase, numbers, and special characters
  else if (
    lowerCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
  } // Password must include uppercase, numbers, and special characters
  else if (
    upperCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
  } // Password must include uppercase and lowercase
  else if (upperCaseSelection && lowerCaseSelection) {
  } // Password must include uppercase and numeric
  else if (upperCaseSelection && numericCharacterSelection) {
  } // Password must include lowercase and numeric
  else if (lowerCaseSelection && numericCharacterSelection) {
  } // Password must include uppercase and special character
  else if (upperCaseSelection && specialCharactersSelection) {
  } // Password must include lowercase and special character
  else if (lowerCaseSelection && specialCharactersSelection) {
  } // Password must include special character and numbers
  else if (specialCharactersSelection && numericCharacterSelection) {
  } // Password must include uppercase
  else if (upperCaseSelection) {
  } // Password must include lowercase
  else if (lowerCaseSelection) {
  } // Password must include special characters
  else if (specialCharactersSelection) {
  } // Password must include numbers
  else {
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
