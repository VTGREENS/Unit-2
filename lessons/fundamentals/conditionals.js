/* 
Conditionals
-Conditionals are used for decision making
-Tools we have available for decision making are the following:
    -if statements
    -if else statements
    -if else if statements
    -switch
    -ternary

*/

// ! Example of if statement

var currentHour = 18;
var greeting = "";

//current hour is less than 12 store good morning in greeting
if(currentHour < 12){
    // inbetween brackets is considered a block of code
    // this block of code will be executed if the conditional is true

    greeting = "Good Morning"
}


// ! Example of if else

// if the current hour is less than 12 say good morning else say good afternoon
if (currentHour < 12) {
    greeting = "Good Morning";
} else {
    //  block of code gets executed if the conditional is NOT TRUE
    greeting = "Good Afternoon";
}

//  ! Example of if else if statement
// If the hours are between (12-17) greeting of "Good Afternoon" from the hours of greater than 17 to 24 will be "Good Evening"
if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour <= 17) {
    greeting = "Good Afternoon";
} else {
    // your finale else statement can be viewed as a default condition if nothing matches
    greeting = "Good Evening";
}

console.log(greeting);

// Code Refactoring If Statements

var isLightBulbOn = false;

if(isLightBulbOn === true){
    console.log("Yes the light bulb is on")
}

// Refactored Code
if(isLightBulbOn === true){
    console.log("Refactored - Yes the light bulb is on!")
}

// If the light bulb is off using NOT
if(isLightBulbOn !==true){
    console.log("The light bulb is off");
}
// Refactored Code 
if(!isLightBulbOn){
    console.log("Refactored - The light bulb is off");
}

// double equal !==
// single equal !=