function respond(name){

if (name === 'darth vader'){
    return 'I will not fight you father';

}else if (name === 'obi wan'){
    return 'Hello, There!';

} else if (name === 'luke skywalker'){
    return 'Use the force Luke!'

}else{
    return 'Well Howdy ' + (name) + "!";
}
}

console.log(respond('Bobby'));
console.log(respond('darth vader'));
console.log(respond('obi wan'));
console.log(respond('luke skywalker'));




