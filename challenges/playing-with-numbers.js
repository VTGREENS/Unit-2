// ! Watch out for Holes!
/*
console.log(0.1 + 0.2) // Output: 0.30000000000000004
console.log(2 ** 53 === 2 ** 53 + 1) // Output: True
console.log(0.8 - 0.7 -0.1)/(0.5 -0.4 - 0.1) //Output: 8.326672684688674e-17 (0?)
console.log(0.5 - 0.4 - 0.1) // Output: -2.7755575615628914e-17 (why not 0)
console.log( 2 ** 10000) // Output: Inifitiy (why not 20,000?)
*/

// ! Math Methods
/*
console.log(Math.floor(42.4576)) //Output: 42
console.log(Math.floor(42)) //Output: 42
console.log(Math.round(41.756)) //Output: 42
console.log(Math.round(42.3675)) //Output: 42
console.log(Math.random()) //Output: random decimals
*/

// ! Random Number Generator




function randomNum(min, max) {
    let range = max - min + 1;
  
    return Math.floor(Math.random() * range) + min;
  }

  const random1 = randomNum(1,100);
  console.log(random1);

  let randomNumber = Math.random();
    // console.log(randomNumber);
    // console.log(randomNumber * 101);
  console.log(Math.round(randomNumber *101));


 

