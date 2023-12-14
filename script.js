var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
    var passwordLength;
    var includeLowercase, includeUppercase, includeNumeric, includeSpecial;
    var possibleCharacters = '';

    // Password length
    passwordLength = parseInt(prompt("Enter the password length (8-128 characters):"));
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Invalid length. Please enter a number between 8 and 128.");
        passwordLength = parseInt(prompt("Enter the password length (8-128 characters):"));
    }

    // Characters to include options
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");

    // Characters available to add
    if (includeLowercase) possibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) possibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumeric) possibleCharacters += '0123456789';
    if (includeSpecial) possibleCharacters += '!@#$%^&*()_+';

    // Generate the password
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        password += possibleCharacters[randomIndex];
    }
    return password;
}

// Password output
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
