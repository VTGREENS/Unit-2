/* 
Types - Data Types

-Strings
- Boolean (truthy and falsey)
- Numbers
*/

/* 
Strings
- are datatypes used to represent text and are wrapped in a single quotes, double quotes, or back ticks
*/

var stringOne = "double quotes"
// prettier-ignore
var stringTwo = 'single quotes'

var stringThree = `back ticks`


// use a comma to separate two variables for printing to the console 
console.log(stringOne, stringTwo);
// ! Adding string together

console.log(stringOne+stringTwo); // output: double quotessingle quotes
// ! The Fix
console.log(stringOne+" "+ stringTwo);
// Using backticks
console.log(`${stringOne} ${stringTwo}`)

// ! CHALLENGE STRING
// ? Declare and Initialize a variable called greeting set it equal to "Good Afternoon"
// ? Declare amd Initialize a variable called firstName set it equal to your name
// ? using backticks console log the following "Good Afternoon Rob" with proper spacing
var greeting = "Good Afternoon"
var firstName = "Leif"

console.log(`${greeting} ${firstName}`);

// ! If you want to find out what type the variable is you can use typeof

console.log(typeof firstName);

var moneyOne = "20";
var moneyTwo = "10";

console.log(moneyOne + moneyTwo);
//  Combining the two string is called concatenation.

/* 
Numbers

*/

let currentTemp = 23;
console.log("currentTemp:", currentTemp);

let calculatedTip = 50 * 0.25;
console.log(calculatedTip.toFixed(2))

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log("numbersAreHard",numbersAreHard);

// ! Convert String to Numbers
// Number ()
console.log("Converting String to Number:", Number(moneyOne) + Number(moneyTwo));

//  Way Number 2
// add a plus to the start of the variable
//  ex: +moneyOne

console.log(+moneyOne + +moneyTwo)

/* 
Booleans:
-Only has two possible values
true or falase
*/

var isOver21 = true
console.log("isOver21", isOver21);
var isTeenager = false
console.log("isTeenager", isTeenager);
console.log("typeof", typeof isOver21);


/* 
Null
- Null is an empty value.
- Think of it as we have an empty container - nothing is in it but it exists as space to fill later on.
*/

var isLoggedIn = null;

/* 
Undefined
-No value is assigned and does not act as an empty container

*/

var myName
// because we did not assign a value the default is undefined

var myLastName = undefined;
var myAddress = "";
console.log("typeof myAddress", typeof myAddress);
var notNumber = "name" / 15;
// Using Booleam we can check t see if a variable contains data
// Undefined, null, 0, NaN, empty string quotes will produce a false
console.log(Boolean(myLastName));
console.log(Boolean(isLoggedIn));
console.log(Boolean(myAddress));
console.log(Boolean(notNumber));
console.log(Boolean (0));