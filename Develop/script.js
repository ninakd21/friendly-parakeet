// Assignment code here

/* password information variables*/
var charecterlength = '1234567890';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialCharecters = '!@#$%^&*()';
var passwordData = ''

function generatePassword() {

  var charecterLength = window.prompt("Please select a number between 8 and 128 to be the length of your password.")

  if (parseInt(charecterLength) <= 24 && parseInt(charecterLength) >= 8) {
    var use_lowerCase = window.confirm('Would you like to include lowercase letters? Enter "YES" or "NO" to choose.');
    var use_upperCase = window.confirm('Would you like to include uppercase letters? Enter "YES" or "NO" to choose.');
    var use_numbers = window.confirm('Would you like to include numbers? Enter "YES" or "NO" to choose.');
    var use_specialCharecters = window.confirm('Would you like to include special charecters? Enter "YES" or "NO" to choose.');
    var password = " ";
  

  if (use_lowerCase === "yes") {
    passwordData = passwordData + lowercase;
  };
  if (use_upperCase === "yes") {
    passwordData = passwordData + uppercase;
  };
  if (use_numbers === "yes") {
    passwordData = passwordData + numbers;
  };
  if (use_specialCharecters === "yes") {
    passwordData = passwordData + specialCharecters;
  };

  for (var i = 0; i < charecterLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordData.length);
    password = password + passwordData[randomIndex];
  }
  return password;
}
else {

  generatePassword();
}
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  // ask if they would like lowercase letters
  //var lowerCase = window.prompt('Would you like to include lowercase letters? Enter "YES" or "NO" to choose.');
  //if (lowerCase === "yes") { }
    // record the answer yes
    //else if (lowerCase === "no") {}
      // continue to next question

  //ask if they would like uppercse letters
  //var upperCase = window.prompt('Would you like to include uppercase letters? Enter "YES" or "NO" to choose.');
  //if (upperCase === "yes") { }
    // record the answer yes
    //else if (uppercase === "no") {}
      // continue to next question

  // ask if they want numbers
  //var numbers = window.prompt('Would you like to include numbers? Enter "YES" or "NO" to choose.');
  //if (numbers === "yes") { }
    // record the answer yes
    //else if (numbers === "no") {}
      // continue to next question

  // ask if they want special charecters
 // var specialCharecters = window.prompt('Would you like to include special charecters? Enter "YES" or "NO" to choose.');
  //if (specialCharecters === "yes") { }
    // record the answer yes
    //else if (specialCharecters === "no") {}
      // continue to next question

      //for(var i = 0; i < charecterLength; i++) {
        //van randomIndex = Math.floor(Math.random() * passwordData.length);
        //password = password + passwordData[randomIndex];
      //}
