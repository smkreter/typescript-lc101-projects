var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var daysToLocation = kilometersAway * this.milesPerKilometer / this.speedMph / 24;
        return daysToLocation;
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft("Determination", 17500);
console.log("When I make a new class and an instance of it, the spacecraft from that class, " + spaceShuttle.name + ", will take " + spaceShuttle.getDaysToLocation(225000000) + " to reach Mars.");
//console.log(`The name of the shuttle is ${spaceShuttle.name} and its speed is ${spaceShuttle.speedMph}.`);
