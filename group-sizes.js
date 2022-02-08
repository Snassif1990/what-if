const prompt = require('prompt-sync')();

let num = Number(prompt('How many sudents in your class? '));



if (num % 3 == 0) {
    let result = num / 3;
    console.log("You will have " + result + " groups of 3")
} else if (num % 3 == 1) {
    let result = (num - 4)/3;
    console.log("You will have " + result + " groups of 3, and 2 groups of 2.")
} else if (num % 3 == 2) {
    let result = (num -2)/3;
    console.log("You will have " + result + " groups of 3, and 1 group of 2")
} else {
    console.log("No rooms with a group of one allowed.")
}