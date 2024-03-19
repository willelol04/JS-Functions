
function add7(number) {
    return number + 7;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function capitalize(myString) {
    myString = myString.toLowerCase();
    return myString[0].toUpperCase() + myString.slice(1);
}

function lastLetter(myString) {
    return myString.slice(-1);
}



console.log(add7(1));
console.log(multiply(1,2));
console.log(capitalize("ASDFASDF"));
console.log(lastLetter("abc"));