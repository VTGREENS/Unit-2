/* 
Var vs Let
- with the introduction of ES6 we now have keywords to use for variables of "let" & "const"

- You can not reference a variable before it is initialized using LET
- When you reference a variable using VAR


*/
console.log("Before it is initialized", age);
var firstName = "Leif";
var age = 35;
let hairColor = "Brown";

if (firstName == "Leif"){
    console.log(age);
    // var age = 33;
    console.log(age);
}

console.log("AGE OUTSIDE OF IF STATEMENT", age);

// ! Another Example of Scope

const greeting = "Hello";

if(true){
    const greeting = "Good Bye"
    console.log(greeting);
}

console.log(greeting);