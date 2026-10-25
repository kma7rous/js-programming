function greetings(){

    console.log("Hello, welcome to the function!");
    console.log("This is a simple greeting function.");
}

greetings();

console.log("=============");

function displayName(personName){
    console.log(`Hello, ${personName}!`);
}

displayName("John Doe");

console.log("=============");

function addNumbers(num1, num2, num3){
    return num1 + num2 + num3;
}

let sum = addNumbers(10, 20);
console.log(sum); //NAN

let x = addNumbers(5, 15, 25);
console.log(x);

