const readline = require('readline');
const readlineInterface = readline.createInterface(
    process.stdin,
    process.stout
);

function ask (questionText) {
    return new Promise ((resolve, reject) => {
        readlineInterface.question(questionText, resolve);

    });
}

let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

async function respond(){
    // Code below....USE `await`

    let answer = await ask("What is your name?")


// if answer matches "darth vader" say "No that's impossible"
// if answer matches items in array, say Go Away
// else, interpolate "Hello <name>"
if (enemyList[0].includes(answer)) {
    // (answer == "darth vader")
    console.log(`${answer}... No, that's impossible!`)
} else if (enemyList.includes(answer)) {
    console.log(`Go away, ${answer}`)
} else {
    console.log(`Hello, ${answer}`)
}
rl.close()
}

respond()