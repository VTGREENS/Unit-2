function divisible(someNum1, someNum2){
    let dividend = someNum1;
    let divisor = someNum2;
    let remainder = dividend % divisor;
    
    if (remainder == 0){ 
        return ("True");
}

    else{
        return ("False")
    }
}

     console.log(divisible(1, 5));
     console.log(divisible(12, 4));
     console.log(divisible(20, 35));
     console.log(divisible(64, 8));