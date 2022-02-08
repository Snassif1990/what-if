const prompt = require('prompt-sync')();

let planet = Number(prompt('What planet are you on?'));
let operation = Number(prompt('What is your weight on Earth?'));

if (planet = "Venus") {
    let result = operation * 0.78;
    console.log("Your weight will be " + result + " on Venus")
} else if (planet = "Mars") {
    let result = operation * 0.39;
    console.log("Your weight will be " + result + " on Mars")
} else if (planet = "Jupiter") {
    let result = operation * 2.65;
    console.log("Your weight will be " + result + " on Jupiter")
} else if (planet = "Saturn") {
    let result = operation * 1.17;
    console.log("Your weight will be " + result + " on Saturn")
} else if (planet = "Uranus") {
    let result = operation * 1.05;
    console.log("Your weight will be " + result + " on Uranus")
} else if (planet = "Neptune") {
    let result = operation * 1.23;
    console.log("Your weight will be " + result + " on Netptune")
} else if (planet = "Pluto") {
    console.log("Thats not a planet anymore. Nice try though.")
} else {
    console.log("ERROR")
}









