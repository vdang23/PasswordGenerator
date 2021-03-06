// Assignment Code Original
var generateBtn = document.querySelector("#generate");

var specialArray = ["!", "$", "#"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var question1 = confirm("Would you like to create a password? Enter yes or no.");
  if(question1 === true) {
    var question2 = prompt("What is the length of your preferred password?  Enter numerically");
    }
    if(question2 < 8 || question2 > 128) {
      alert("Password is either too short or too long")
    } else if(question2 > 8 || question2 < 128) {
      var question3 = confirm("Do you want special characters?")
      }
        if(question3 === true || question3 === false) {
          var question4 = confirm("Do you want lower case letters?")
        } if(question4 === true || question4 === false) {
          var question5 = confirm("Do you want upper case letters?")
        } if(question5 === true || question5 === false) {
        } if(question3 === true || question4 === false || question5 === false) {
            for (let i = 0; i < question2.length; i++) {
              return specialArray[i]
          }
        }
}
    
    
        
          // var specialArray = ["!", "$", "#"]
          // //const upperCase = ["A", "B", "C", "D", "E", "F", "G"]
          // // const lowerCase = ["a", "b", "c", "d", "e", "f", "f"]
          // var onlyLength = Math.floor(Math.random() * Math.pow(10,question2)
          //   for (var i = 0; i < question2; i++) {
          //     console.log(specialArray[i])
          //   }  

    //   var question3 = prompt("Do you want special characters?")
    //   }

      
      // } else if (question2 > 8 || question2 < 128)
      //   var question3 = prompt("Do you want special characters?")
      // } if(question3 === yes) {
      //   var question4 = prompt("Do you want lowercase letters?")
      // }
      
  
  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Assignment Code Original
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// 03 JavaScript: Password Generator

// ## Your Task

// This week???s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they???ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

// The password can include special characters. If you???re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// ## Mock-Up

// The following image shows the web application's appearance and functionality:

// ![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

// ## Grading Requirements

// This homework is graded based on the following criteria: 

// ### Technical Acceptance Criteria: 40%

// * Satisfies all of the preceding acceptance criteria plus the following:

//   * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

// ### Deployment: 32%

// * Application deployed at live URL.

// * Application loads with no errors.

// * Application GitHub URL submitted.

// * GitHub repository that contains application code.

// ### Application Quality: 15%

// * Application user experience is intuitive and easy to navigate.

// * Application user interface style is clean and polished.

// * Application resembles the mock-up functionality provided in the homework instructions.

// ### Repository Quality: 13%

// * Repository has a unique name.

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains quality readme file with description, screenshot, and link to deployed application.

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository, with a unique name and a readme describing the project.

// - - -
// ?? 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
