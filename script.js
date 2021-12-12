// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomCharacter(character) {
  var randomCharacter = character[Math.floor(Math.random() * character.length)];
  return randomCharacter;
}

function generateThreeCharacterTypes(case1, case2, case3, passwordLength) {
  var password = [];
  while (password.length <= passwordLength) {
    var randomChar1 = generateRandomCharacter(case1);
    var randomChar2 = generateRandomCharacter(case2);
    var randomChar3 = generateRandomCharacter(case3);

    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar1);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar2);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar3);
  } 
  console.log(password);
  return password;
 
}

function getCharacterSelection(passwordLength) {
  var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";

  // var password = [];

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
    getCharacterSelection(passwordLength);
  }

  // Password must include all character types
  if (
    lowerCaseSelection &&
    upperCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    while (password.length <= passwordLength) {
      var randomLowerCaseCharacter = generateRandomCharacter(lowerCaseAlphabet);
      var randomUpperCaseCharacter = generateRandomCharacter(upperCaseAlphabet);
      var randomNumber = generateRandomCharacter(numbers);
      var randomSpecialCharacter = generateRandomCharacter(specialCharacters);

      if (password.length >= passwordLength) {
        break;
      }
      password.push(randomLowerCaseCharacter);
      if (password.length >= passwordLength) {
        break;
      }
      password.push(randomUpperCaseCharacter);
      if (password.length >= passwordLength) {
        break;
      }
      password.push(randomNumber);
      if (password.length >= passwordLength) {
        break;
      }
      password.push(randomSpecialCharacter);
    }
  } // Password must include lowercase, uppercase and numbers
  else if (
    lowerCaseSelection &&
    upperCaseSelection &&
    numericCharacterSelection
  ) {
    return generateThreeCharacterTypes(lowerCaseAlphabet, upperCaseAlphabet, numbers, passwordLength);
    // while (password.length <= passwordLength) {
    //   var randomLowerCaseCharacter = generateRandomCharacter(lowerCaseAlphabet);
    //   var randomUpperCaseCharacter = generateRandomCharacter(upperCaseAlphabet);
    //   var randomNumber = generateRandomCharacter(numbers);

    //   if (password.length >= passwordLength) {
    //     break;
    //   }
    //   password.push(randomLowerCaseCharacter);
    //   if (password.length >= passwordLength) {
    //     break;
    //   }
    //   password.push(randomUpperCaseCharacter);
    //   if (password.length >= passwordLength) {
    //     break;
    //   }
    //   password.push(randomNumber);
    // }
  } // Password must include lowercase, uppercase and special characters
  else if (
    lowerCaseSelection &&
    upperCaseSelection &&
    specialCharactersSelection
  ) {
    return generateThreeCharacterTypes(lowerCaseAlphabet, upperCaseAlphabet, specialCharacters, passwordLength);
    // while (password.length <= passwordLength) {
    //   var randomLowerCaseCharacter = generateRandomCharacter(lowerCaseAlphabet);
    //   var randomUpperCaseCharacter = generateRandomCharacter(upperCaseAlphabet);
    //   var randomSpecialCharacter = generateRandomCharacter(specialCharacters);

    //   if (password.length >= passwordLength) {
    //     break;
    //   }
    //   password.push(randomLowerCaseCharacter);
    //   if (password.length >= passwordLength) {
    //     break;
    //   }
    //   password.push(randomUpperCaseCharacter);
    //   if (password.length >= passwordLength) {
    //     break;
    //   }
    //   password.push(randomSpecialCharacter);
    // }
  } // Password must include lowercase, numbers, and special characters
  else if (
    lowerCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    return generateThreeCharacterTypes(lowerCaseAlphabet, numbers, specialCharacters, passwordLength);
  } // Password must include uppercase, numbers, and special characters
  else if (
    upperCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    return generateThreeCharacterTypes(upperCaseAlphabet, numbers, specialCharacters, passwordLength);
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

  //return password;
}

function generatePassword() {
  // Make password between 8 and 128 characters
  var passwordLength = prompt(
    "Please select a length between 8 and 128 characters: "
  );

  passwordLength = parseInt(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    var passwordArray = getCharacterSelection(passwordLength);
    var password = passwordArray.join("");
    console.log(password.length);
    return password;
  } else {
    // if password length is not valid, prompt again
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
