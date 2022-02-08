const prompt = require('prompt-sync')();

let num = Number(prompt('Please input a number: '));

if (num % 15 == 0) {
    console.log("fizzbuzz");
} else if (num % 3 == 0) {
    console.log("fizz");
} else if (num % 5 == 0) {
    console.log("buzz");
} else {
    console.log("ERROR")
}