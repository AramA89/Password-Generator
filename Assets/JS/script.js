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

// Added Code // 

function generatePassword () {
//prompt to determine password length//
    var passLength = prompt("Enter the number of characters desired for password. \nChoice must be between 8 - 128 characters.");
    
    var lengthConf = parseInt(passLength);
    console.log(lengthConf);
 
//select a number at least 8 & NO more than 128 characters//
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Error! Invalid Selection or Input! Retry!");
        return;
    }

//arrays for password charcater choices//
var validChar = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");

//confirm user selection of lower case letters//
var lowerCaseConfirm = confirm("Confirm selection of lower case letters for password?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            validChar.push(lowerCaseChar[i]);
        }
    }

//confirm user selection of upper case letters//
var upperCaseConfirm = confirm("Confirm selection of upper case letters for password?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            validChar.push(upperCaseChar[i]);
        }
    }

//confirm user selection of numbers//
var numberConfirm = confirm("Confirm selection of numbers for password?");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            validChar.push(numberChar[i]);
        }
    }

//confirm user selection of special characters//  
var specialConfirm = confirm("Confirm selection of special characters for password?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            validChar.push(specialChar[i]);
        }
    }

//generate password via numbers above & 4 booleans//
 var randomPassword = "";
 for (var i = 0; i < lengthConf; i++) {
     validChar[
         Math.floor(Math.random() * validChar.length)];
     randomPassword +=
        validChar[
            Math.floor(Math.random() * validChar.length)
        ];
    }
 return randomPassword;

}