//  IO & Callbacks

/* 
    -Process is an event that currently runs in the foreground or background of your local machine.

    -Node.js alllows access to its processes via a process object

*/


//  Import Statment

const { read } = require("fs")
let process = require("process")

console.log(process.pid)

// Call back functions - activates function based on an specific event
/* 
    A "listener" function that waits for an event and executes a function when it occurs.

    Takes two parameters:
        - event upon which to execute a function
        - function to be executed

*/

console.log("App running")
 process.stdin.once("data", function(input) {
    console.log(`this is our input being repeated: ${input.toString()}`)
    // Exits us out of the listener
    process.exit()
})

function x(){
    process.stdin.once("data", function (input) {
        console.log(`This is our input being repeated: ${input.toString()}`)
    } )
}

x()

// console.log("Code after the function")

process.stdin.on("data", function (input) {
    console.log(input.toString())
    process.exit()
})

//  Back to Functions Event- Hoisted

function nameOfFunction(parameter){
    return parameter
}

// Function Expressions - Not Hoisted

// let fxExpression + function (parameter) {
//     return parameter
// }

// Arrow Function Expression

// ES6 version of concisely writing functions
// Not Hoisted; not bout to .this or apply

// Concise body arrow function
// In concise body arrow function, return statement is implicit
let arrowFunction = parameter => console.log("arrow function")
arrowFunction()

let arrowFxOneParam = param => console.log("This fx has one param")

let arrowFxManyParams = (param1, param2) => console.log("this fx has many params")

// Example:

process.stdin.on("data", input => console.log(input.toString()))

//  Block Body Arrow Function

let blockBodyFx = () => {
    console.log("line 1")
    console.log("line 2")
    return "This is a return statement"
}

console.log("Testing");
(function(){
    console.log("Hello from an IIFE")
}())

/* 
Let's create a listener on stdin so that when we type something, it will replay with what we said plus some word.
*/

let handleInput = input =>{
    console.log(input.toString().trim() + ", Cheers!")
}


process.stdin.on("data", handleInput())
console.log("What is your name?")
process.stdin.on("data", (input)=> {
    process.stdout.write(`The input is: ${input.toString()}`)
})

//  ? Guess the Number Hint

/* function guess(question){
    console.log(question)
    let number
    process.stdin.once("data", (input) => {
            number = input.toString().trim()
            process.stdout.write(`Your number was: ${number}`)
            })

            return number
} */

// Returns undefined, why?? Hint: Async functions
//  console.log(guess("What is your number?"))

// Readline

const readline = require("readline")

let rl = readline.createInterface({input: process.stdin, output: process.stdout})

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let solution = num1 + num2

rl.question(`What is the sum of ${num1} & ${num2}?`, (input) =>{
    if(input.trim() == solution) {
        rl.setPrompt("Correct")
        rl.prompt()
        rl.close()
}

})

rl.on("close", () => console.log("Thanks for Playing"))
console.log("Code after the readline")



