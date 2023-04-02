// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//generatepasssword function here
function generatePassword() {
  let myFinalGeneratedPassword = "";

  let lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specialcharacters = ['@', '!', '#', '$', '_'];
  let eleSelArray = [];

  let charactersRequired = passwordInput();

  if (!charactersRequired) {
    passwordInput();
  }

  let isLowercaseRequired = callPromptFunc("Does your password need lowercase letters(Y/N)")
  let isUppercaseRequired = callPromptFunc("Does your password need uppercase letters(Y/N)")
  let isSpecialCaseRequired = callPromptFunc("Does your password need special characters letters(Y/N)")
  let isNumericOk = callPromptFunc("Does your password need Numeric(y/n) ");

  if (!isLowercaseRequired && !isUppercaseRequired && !isSpecialCaseRequired && !isNumericOk) {
    alert("Atleast one character type should be selected. Please try again");
  }

  if (isLowercaseRequired) {
    eleSelArray = eleSelArray.concat(lowercaseletters);
  }

  if (isUppercaseRequired) {
    eleSelArray = eleSelArray.concat(uppercaseletters);
  }

  if (isNumericOk) {
    eleSelArray = eleSelArray.concat(numerics)
  }

  if (isSpecialCaseRequired) {
    eleSelArray = eleSelArray.concat(specialcharacters)
  }

  for (let i = 0; i < charactersRequired; i++) {
    myFinalGeneratedPassword += eleSelArray[Math.floor(Math.random() * eleSelArray.length)];
  }

  return myFinalGeneratedPassword;
}


function passwordInput() {
  let userEnteredLenValue = prompt("Select a number of characters required in between 8 and 128");

  if (userEnteredLenValue >= 8 && userEnteredLenValue <= 128) {
    return userEnteredLenValue;
  } else {
    alert('You have entered wrong length value. Please try again');
    return 0;
  }
}


function callPromptFunc(conditions) {
  let userEnteredValue = prompt(conditions);
  if (userEnteredValue == 'y' || userEnteredValue == 'Y') {
    return true
  } else {
    return false
  }
}