//var characterAmountNumber = document.getElementById("characterAmountNumber")
//var includeUppercase = document.getElementById("includeUppercase")
//var includeLowercase = document.getElementById("includeLowercase")
//var includeNumbers = document.getElementById("includeNumbers")
//var includeSymbol = document.getElementById()

var validUpper = ["A", "B", "C", "D"];
var validLower = ["z", "y", "x"];
var numbers = [ 1, 2, 3, 4];
var specialCharacters =["!", "@", "#", "$"];

function infograb() {
var passlength = parseInt (prompt ("How many characters would you like in your password"
));
if (passlength < 8 || passlength > 129) {
alert ("password requirements not met. Must be between 8-128 characters.");
return;
}
var specialchar = confirm ("Would you like special characters");
var nums = confirm ("Would you like to add numbers");
var lowercase = confirm ("Would you like lower case letters?");
var uppercase = confirm ("Would you like upper case letters?");

if (specialchar === false && 
    nums === false &&
    lowercase === false &&
    uppercase === false) {
        alert ("Atleast one of the password criteria must be met.");
        return;
        
    }
    var answers = {
        length: passlength,
        specialchar: specialchar,
        nums: nums,
        lowercase: lowercase,
        uppercase: uppercase,
    
    };
    return answers;


}
function generatePassword() {
    var passwordcriteria = infograb();
    var passwordoptions = [];
    if ( passwordcriteria.specialchar === true) {
        passwordoptions = passwordoptions.concat(specialCharacters);

    }
    if (passwordcriteria.nums === true) {
        passwordoptions = passworoptions.concat(numbers);

    }
    if (passwordcriteria.lowercase ===true) {
        passwordoptions = passwordoptions.concat(lowercase);

    }
    if (passwordcriteria.uppercase === true) {
        passwordoptions = passwordoptions.concat(uppercase);

    }
for (var i = 0; i < passwordcriteria.length; i++){
    //get random element from array JS
    //push to empty var array
    //return var array that has pass happens after forloop
    //look up .join in JS takes out commas and adds blank space
    
}

}
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
