var helicopter1= "BlackHawk";
var helicopter2= "BLaCkHawk";

var stringThree = "3"
var numberThree = 3

console.log(helicopter1 == helicopter2) //output: false
console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase()); //output: true

// Double equal signs will compare the value and doesn't care about the data type
console.log("stringThree and numberThree with two equal:",
stringThree == numberThree); //output: true

// 3 equal signs will compare Type and Value
console.log("stringThree and numberThree with three equal:",
stringThree === numberThree); //output:false

// Not Operator
// != only looks at the value and doesn't care about the data type
console.log("Not equal helicopter:", helicopter1 != helicopter2); //Output: True
console.log("Not equal stringThree and numberThree:", stringThree !== numberThree); //Output:true

// greater than
console.log("greather than:", 10> 2); // Output: True

//less than
console.log("less than:", 10 < 2); // Ourtput: False

// Greater than or equal >=
console.log("greater than or equal to:", 4 >= 4); //Output: True

// less than or equal <=
console.log("less than or equal to:", 4 <= 4); //Output: True

// Logical Operators
var num1 = 6
var num2 = 3
console.log("And Operator");
console.log(num1<10 && num2>1); //output: true
console.log("Or Operator");
console.log(num1 === 4 || num2 === 6); // output: false
console.log(num1 === 6 || num2 === 6); // output: true



let fruit = "Apple";
let snack = fruit;

console.log("fruit", fruit);

console.log("snack", snack);
fruit= "orange"

console.log("snack2", snack);



