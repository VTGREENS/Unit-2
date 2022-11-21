/* 
Variables:

-Variables are named containers for storing data and values
-We can name variables anything with a few exceptions
-We use these variables to reference them at a later time.
*/

/* 


-You can start a declaration process with a var, let, or const
- Variable names in javascropt some be Camel Cased: starts off lower cased and each following word is capitalized, ex: (currentLivingAddress, currentHour, currentWeather) if only one word, then lower case.

*/
// prettier-ignore
var firstName ="Leif";

//(1) (2)    (3) (4)

/* 
-(1) Javascript Keyword to denote creation of a variable (var, let, const)
-(2) Name of the variable that the developer will reference in order to grab the value that is stored.
-(3) Assignment Operator
-(4) Initial Value
*/

console.log("Hello from console.log line:27");
// ! To Run a Javascript file in terminal - use command : node [filename.js]
// ! Example: node variables.js
console.log(firstName);

console.log("Variable firstName:", firstName);

/* 
Variable Declaration:
-This declaration is to the left side of the assignment operator
-This is where the variable is created - it's not assigned a value yet.
-If no value assigned to it becomes undefined.
*/

// Just declared not assigned a value
var lastName;
console.log("Variable lastName", lastName);
// Value is assigned
lastName = "Jackson";
console.log("Variable lastName", lastName);
// Changed Value
lastName = "Smith"
console.log("Variable lastName", lastName);