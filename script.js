// Assignment code here

/* password information variables*/
var charecterlength = '1234567890';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialCharecters = '!@#$%^&*()';
var passwordData = '';

function generatePassword() {

  var charecterLength = window.prompt("Please select a number between 8 and 128 to be the length of your password.")

  if (parseInt(charecterLength) <= 128 && parseInt(charecterLength) >= 8) {
    var use_lowerCase = window.confirm('Would you like to include lowercase letters?')
    var use_upperCase = window.confirm('Would you like to include uppercase letters?')
    var use_numbers = window.confirm('Would you like to include numbers?')
    var use_specialCharecters = window.confirm('Would you like to include special charecters?')
    var password = " ";


    if (use_lowerCase == 1) {
      passwordData = passwordData + lowercase;
  };
  if (use_upperCase == 1) {
    passwordData = passwordData + uppercase;
  };
  if (use_numbers == 1) {
    passwordData = passwordData + numbers;
  };
  if (use_specialCharecters == 1) {
    passwordData = passwordData + specialCharecters;
  };
  if (passwordData < 1) {
    alert("You must choose to include at least one of the password criteria to genorate a password. Please start over.")
  };
  for (var i = 0; i < charecterLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordData.length);
    password = password + passwordData[randomIndex];
  }
  return password;
} else {
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
