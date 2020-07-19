class Spacecraft {
    constructor(name: string, speedMph: number){
        this.name = name;
        this.speedMph = speedMph;
        }
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    function getDaysToLocation(kilometersAway: number) {
        let milesToLocation: number = kilometersAway*(this.milesPerKilometer);
        let hoursToLocation: number = milesToLocation/(this.speedMph);
        let daysToLocation: number = hoursToLocation/24;
        return daysToLocation;
    }
}

let spaceShuttle = new Spacecraft("Determination", 17500);

console.log(`When I make a new class and an instance of it, the spacecraft from that class, ${spaceShuttle.name}, will take ${spaceShuttle.getDaysToLocation(225000000)} to reach Mars.`);
