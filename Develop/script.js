// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var specialCha = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var password = "";
var elements = [upperCase, lowerCase, numeric, specialCha];
var isUpperCase = false;
var isLowerCase = false;
var isNumeric = false;
var isSpecialCha = false;
var lengthPassword = 0
function checkPasswordRequirments() {

  lengthPassword = Number.parseInt(prompt("Enter the lenght of your password (8-128 characters)"));
  console.log(lengthPassword);
  if (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128) {
    alert("Please select a correct value for the password");
    return
  }

  if (confirm("lowercase characters (OK/yes - CANCEL/no)")) {
    isLowerCase = true;
    //   allTogether = allTogether.concat(lowerCase); 
  }
  else { isLowerCase = false };
  if (confirm("uppercase characters (OK/yes - CANCEL/no)")) {
    isUpperCase = true;
    //  allTogether = allTogether.concat(upperCase);
  }
  else { isUpperCase = false };
  if (confirm("numeric characters (OK/yes - CANCEL/no)")) {
    // allTogether += numeric
    isNumeric = true;
  }
  else { isNumeric = false };
  if (confirm("special characters (OK/yes - CANCEL/no)")) {
    //  allTogether += specialCha;
    isSpecialCha = true;
  }
  else { isSpecialCha = false };

}


// var passwordCriteria = alert ("Please select the propertie for your password");

function generatePassword() {
  checkPasswordRequirments();
  var generatedPassword = "";
  var userConditions = [isLowerCase, isUpperCase, isNumeric, isSpecialCha];
  for (var i = 1; i <= lengthPassword; i++) {
    var j = i;
    while (userConditions[j % userConditions.length] === false) {
      j++
    }
    if (j % userConditions.length === 0)
      generatedPassword = generatedPassword + randomLower()
    if (j % userConditions.length === 1)
      generatedPassword = generatedPassword + randomUpper()
    if (j % userConditions.length === 2)
      generatedPassword = generatedPassword + randomNumber()
    if (j % userConditions.length === 3)
      generatedPassword = generatedPassword + randomSpch()
  }

  return generatedPassword
}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


//function for random values

function randomLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function randomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumber() {
  return numeric[Math.floor(Math.random() * numeric.length)];
}

function randomSpch() {
  return specialCha[Math.floor(Math.random() * specialCha.length)];
}




