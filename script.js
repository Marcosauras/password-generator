// step 1 ask how big the password is to be
// make sure password is between 8-128 characters long
// and that their response is a number
// step 2 ask what they would like in their password (numbers, symbols, uppercase letters, and lowercase letters)
// make sure at least one of the options are choosing (if they don't put anything in it then nothing will print out)
// step 3 put everything they want in 
// step 4 password should be generated based on the anwsers to the prompts.



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  let passwordLengthCriteria = prompt("how long would you like your password to be? (Please choose a number between 8-128)");
  passwordLengthCriteria = Number(passwordLengthCriteria);
  if (isNaN(passwordLengthCriteria)) {
    alert("must be a number");
    generatePassword();
  } else{

      console.log(passwordLengthCriteria)

      if (passwordLengthCriteria < 8 || passwordLengthCriteria > 128){
        alert("Password can only be between 8 to 128 characters long")
        generatePassword();
        return
      } 
      let lowCaseInPassword = confirm("Would you like lower case letters in your password? If not click cancel.");
      let upCaseInPassword = confirm("Would you like to add upper case letters in your password? If not click cancel.");
      let numInPassword = confirm("Would you like to add numbers in your password? If not click cancel.");
      let symInPassword = confirm("Would you like to add symbols in your password? If not click cancel.");


      let upCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      let lowCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let symList = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "&"];

      let passwordOptions = []

      if (!lowCaseInPassword && !upCaseInPassword && !numInPassword && !symInPassword){
        alert("You must have at least one of them in your password.")
        console.log("you declined everything")
        return
      }

      if (lowCaseInPassword === true) {
        passwordOptions = passwordOptions.concat(lowCaseList)
        console.log(passwordOptions)
      } 
      if (upCaseInPassword === true) {
        passwordOptions = passwordOptions.concat(upCaseList)
        console.log(passwordOptions)
      } 

      if (numInPassword === true) {
        passwordOptions = passwordOptions.concat(numList)
        console.log(passwordOptions)
      } 

      if (symInPassword === true) {
        passwordOptions = passwordOptions.concat(symList)
        console.log(passwordOptions)
      } 
    
    console.log(passwordOptions)
    
    var password = ""

  for (let i = 0; i < passwordLengthCriteria; i++){
    password += passwordOptions[Math.floor(Math.random()*passwordOptions.length)]
    }
  }
  console.log(password)
  return password;
  
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);