/* 
!BRONZE
Write two variables. One of those variables will store your name. The other variable will store the name of a friend.

Find out what property you can use to check how long their name is, as well as your own.

Goal: console.log how many letters each of the names are...
*/

var userName = "Leif"
var friendName = "Alexander"

console.log(userName.length, friendName.length);

/*
!SILVER

Write a conditional to see who has the longer name.
    -Use string interpolation to console.log whose name is longer
    -Ex: My name is longer than Adam's

*/

var userName = "Leif"
var friendName = "Alexander"

console.log(userName.length, friendName.length);

if (userName.length >= friendName.length){
    console.log(userName+ " is longer than " +friendName)
}
else {
    console.log(friendName+ " is longer than "+userName)
}

/*
!GOLD
In the console include how many letters difference there are between the names.

Example: Adam's name is shorter than mine by 4 letters. 

*There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional.

*/

var userName = "Leif"
var friendName = "Alexander"

// console.log(userName.length, friendName.length);

if (userName.length > friendName.length){
    console.log(userName+ " is longer than " +friendName + " by " + (userName.length - friendName.length));
    // console.log(userName.length - friendName.length);
}
else {
    console.log(friendName+ " is longer than "+userName + " by " + (friendName.length - userName.length));  
}


/* GOLD+ */

var userName = "Leif"
var friendName = "Alexander"

if (userName.length > friendName.length){
    console.log(userName+ " is longer than " +friendName + " by " + (userName.length - friendName.length));
    // console.log(userName.length - friendName.length);
}

else if (userName.length == friendName.length){
    console.log("Our names are the same length")

}

else {
    console.log(friendName+ " is longer than "+userName + " by " + (friendName.length - userName.length));  
}







