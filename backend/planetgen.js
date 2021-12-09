import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen";

export default {
    planetgen: function (number) {
       let allPlanet = [];
        
        var planetNames = namegen.planetnamegen(number);

        console.warn(planetNames);
        for (let i = 0; i <= number-1; i++) {


            //GENERATE PLACEHOLDERS
            var PLACEHOLDER = "PLACEHOLDER";


            //Generate id
            var newId = i;


            //Generate the name of the planet
            var newName = planetNames[0+i];


            //Get the name of the orbited star



            //Generate radius between 5200 - 200 km
            let newRadius = Math.floor(Math.random() * 50000) / 10 + 200;


            //Generate moons max 8
            let newMoons = Math.floor(Math.random() * 8);


            //generate type
            var planetTypes = ["Star", "Ice", "Water", "Gas", "Earth", "Toxic"]
            let newPlanetType = planetTypes[Math.floor(Math.random() * planetTypes.length)];
            
            

            //Generate animals if needed

            
            //Generate vegetation if needed


            //Calculate the distance from the star between 1012 - 10 km. Must multiply with 1 000 000
            let newDistance = Math.floor(Math.random() * 10020) / 10 + 10;

            //Generate surface water if needed


            //Generate the amount of gas


            //Generate civilization if needed


            //Calculate the lenght of a day
            
            
            //Calculate the length of a year


            //Generate planetary ring
            
            
            //Liveable?
            

            var planetInfo = {
                planet: {
                    id: newId,
                    name: newName,
                    orbitedStar: PLACEHOLDER,
                    radius: newRadius,
                    moons: newMoons,
                    type: newPlanetType,
                    animals: PLACEHOLDER,
                    vegetation: PLACEHOLDER,
                    Liveable: PLACEHOLDER,
                    DistanceFromStar: newDistance,
                    water:PLACEHOLDER,
                    gas: PLACEHOLDER,
                    civilization: PLACEHOLDER,
                    lengthOfDay: PLACEHOLDER,
                    lengthOfYear: PLACEHOLDER,
                    planetaryRing: PLACEHOLDER
                }
            };
            
            allPlanet.push(planetInfo);
            
        }
        return console.warn(allPlanet);
    }
}