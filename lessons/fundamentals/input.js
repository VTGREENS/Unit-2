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
    
}) 

while (input.trim() != solution){
    
    if(input.trim() != solution){
    rl.setPrompt("Incorrect")
    rl.prompt()
    
}



rl.on("close", () => console.log("Thanks for Playing"))
// console.log("Code after the readline")