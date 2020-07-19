// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination";
// let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// const milesPerKilometer: number = 0.621;
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Part 2: Print Days to Mars
console.log(spacecraftName + " will take " + daysToMars + " to reach Mars.");
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
//here's the one I wrote in the first place I put it
/*
function getDaysToLocation(kilometersAway: number) {
    let milesToLocation: number = kilometersAway*milesPerKilometer;
    let hoursToLocation: number = milesToLocation/speedMph;
    let daysToLocation: number = hoursToLocation/24;
    return daysToLocation;
}
*/
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("Similarly, " + spacecraftName + " will take " + getDaysToLocation(kilometersToTheMoon) + " days to reach the moon");
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    return Spacecraft;
}());
function getDaysToLocation(kilometersAway) {
    var milesToLocation = kilometersAway * (this.milesPerKilometer);
    var hoursToLocation = milesToLocation / (this.speedMph);
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
var spaceShuttle = new Spacecraft("Determination", 17500);
console.log("When I make a new class and an instance of it, the spacecraft from that class, " + spaceShuttle.name + ", will take " + spaceShuttle.getDaysToLocation(225000000) + " to reach Mars.");
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
