import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen";
import animalgen from "./animalgen.js";
import civilizationgen from "./civilizationgen.js";
import kardashevRewrite from "./kardashevRewrite.js";

export default {
    planetgen: function (number, star) {
        let allPlanet = [];
        var advancedCivilizationIDs = [];
        var planetNames = namegen.planetnamegen(number);
        let kardashevRewriteNeed = false;

        // console.warn(planetNames);
        for (let i = 0; i <= number - 1; i++) {


            //GENERATE PLACEHOLDERS
            var PLACEHOLDER = "PLACEHOLDER";


            //Generate id
            var newId = i + 1;


            //Generate the name of the planet
            var newName = planetNames[i];


            //Generate radius between 5200 - 200 km
            let newRadius = Math.floor(Math.random() * (3200 - 400) + 400);

            //Calculate mass *10^24
            let newMass = Math.floor(newRadius * newRadius * (1000 / newRadius) / 100) / 1000;

            //Calculate gravity g = G*M/r^2
            let newGravity = newMass / newRadius * newRadius;
            console.warn(newGravity);


            //Generate moons max 8
            let newMoons = Math.floor(Math.random() * 8);

            //Generate moon names
            let newMoonNames = namegen.planetnamegen(newMoons);


            //Calculate the distance from the star between 100 - 1 AU. Must multiply with 1 000 000
            let newDistance = Math.floor(Math.random() * 1000) / 10 + 1;


            //Calculate the length of a year in days
            //let newLengthOfAYear = newDistance / 93 * 365;

            //Calculate the lenght of a day (in hours) 4 - 400
            let newLengthOfADay = Math.floor(Math.random() * (440 - 4) + 4);

            //Generate gases

            var newHydrogen = Math.floor(Math.random() * (100 - 0));
            var newHelium = Math.floor(Math.random() * (100 - 0));
            var newNitrogen = Math.floor(Math.random() * (100 - 0));
            var newOxygen = Math.floor(Math.random() * (100 - 0));
            var newWater = Math.floor(Math.random() * (100 - 0));
            var newOther = Math.floor(Math.random() * (100 - 0));

            let gasesSum = newHydrogen + newHelium + newNitrogen + newOxygen + newWater + newOther;

            newHydrogen = 100 / gasesSum * newHydrogen;
            newHelium = 100 / gasesSum * newHelium;
            newNitrogen = 100 / gasesSum * newNitrogen;
            newOxygen = 100 / gasesSum * newOxygen;
            newWater = 100 / gasesSum * newWater;
            newOther = 100 / gasesSum * newOther;

            gasesSum = gasesSum = newHydrogen + newHelium + newNitrogen + newOxygen + newWater + newOther;

            console.warn("Summed gas: " + gasesSum);
            //generate type

            let newPlanetType = "Toxic"


            if (newDistance >= 60 && newDistance <= 80) {
                newPlanetType = "Water";
                if (newNitrogen >= 25 && newOxygen >= 6) {
                    newPlanetType = "Earth-like";
                }
            } else if (newDistance >= 80 && newWater >= 12) {
                newPlanetType = "Ice";
            } else if (newHydrogen >= 25) {
                newPlanetType = "Gas";
            }

            //Generate surface water if needed
            var newSurfaceWater;
            if (newPlanetType == "Water") {
                newSurfaceWater = 100;
            } else if (newPlanetType == "Earth-like") {
                newSurfaceWater = Math.floor(Math.random() * (100 - 10));
            } else {
                newSurfaceWater = 0;
            }

            var newHydrogen = Math.floor(Math.random() * (100 - 0));


            //Generate animals if needed

            //Ice-type animals

            var newAnimals = animalgen.animalgen(newPlanetType);
            //console.warn(animalNames);


            //Water-type animals


            //Generate civilization if needed
            var newCivilization = civilizationgen.civilizationgen(newPlanetType, number);

            if (newCivilization[3] >= 2) {
                advancedCivilizationIDs.push(newId - 1);
                kardashevRewriteNeed = true;
            }
            console.warn(newName + "'s " + "kardishev scale is: " + newCivilization[3])
            console.warn("Advanced civilization IDs: " + advancedCivilizationIDs);


            //Calculate length of a year
            let newLengthOfAYear = (Math.PI * 2) * Math.sqrt(newRadius * newRadius * newRadius / newGravity);
            console.warn("Distance from the sun: " + newDistance + "  Length of a year: " + newLengthOfADay);


            //Liveable?
            var newLivable = "";
            if (newCivilization[3] > 0) {
                newLivable = "Livable";
            } else if (newCivilization[3] = 0 && advancedCivilizationIDs[0] != null) {
                newLivable = "Livable due " + advancedCivilizationIDs[0] + "'s terraformation";
            } else {
                newLivable = "Inanimate";
            }

            //Generate seed
            let newSeed = Math.floor(Math.random() * (999999 - 1) + 1)



            var planetInfo = {
                seed: newSeed,
                id: newId,
                name: newName,
                orbitedStar: star,
                radius: newRadius,
                mass: newMass,
                moons: newMoons,
                moonNames: newMoonNames,
                type: newPlanetType,
                animals: {
                    name: newAnimals,
                },
                liveable: newLivable,
                distanceFromStar: newDistance,
                surfaceWater: newSurfaceWater,
                gas: [
                    { name: 'nitrogen', value: newNitrogen },
                    { name: 'oxygen', value: newOxygen },
                    { name: 'water', value: newWater },
                    { name: 'hydrogen', value: newHydrogen },
                    { name: 'helium', value: newHelium },
                    { name: 'other', value: newOther }
                ],
                civilization: {
                    name: newCivilization[0],
                    race: newCivilization[1],
                    description: newCivilization[2],
                    kardashev_scale: newCivilization[3],
                },
                lengthOfDay: newLengthOfADay,
                lengthOfYear: newLengthOfAYear,
            };
            console.warn(planetInfo);
            allPlanet.push(planetInfo);

        }

        if (kardashevRewriteNeed == true) {
            kardashevRewrite.kardashevRewriteDescriptions(allPlanet, advancedCivilizationIDs);
        }

        if (advancedCivilizationIDs[0] != null) {
            this.stargen(1, allPlanet, advancedCivilizationIDs);
        } else {
            this.stargen(0);
        }

        return allPlanet;
    },
    stargen(advancedCivilizationDescription, allPlanet, advancedCivilizationIDs) {
        //Generate seed
        let newSeed = Math.floor(Math.random() * (999999 - 1) + 1)
        //Generate id
        var newId = 0;
        //Generate star name
        var starName = namegen.planetnamegen(1);
        //Generate radius between 7200 - 4000 km
        let newRadius = Math.floor(Math.random() * (7020 - 4000) + 4000);
        //Generate surface temperature
        let newTemperature = Math.floor(Math.random() * (36000 - 2400) + 4000);
        //Calculate class from temperature
        var newClass = "Unknow class";
        if (newTemperature <= 3700) {
            newClass = "Class M"; 0
        } else if (newTemperature >= 3700 && newTemperature <= 5200) {
            newClass = "Class K"
        } else if (newTemperature >= 5200 && newTemperature <= 6000) {
            newClass = "Class G"
        } else if (newTemperature >= 6000 && newTemperature <= 7500) {
            newClass = "Class F"
        } else if (newTemperature >= 7500 && newTemperature <= 10000) {
            newClass = "Class A"
        } else if (newTemperature >= 10000 && newTemperature <= 30000) {
            newClass = "Class B"
        } else if (newTemperature >= 30000) {
            newClass = "Class O"
        }

        if (advancedCivilizationDescription == 1) {
            var newDescription = "Among the planets listed, the Kardashev scale of planet " + allPlanet[advancedCivilizationIDs[0]].name + " has a value of " + allPlanet[advancedCivilizationIDs[0]].civilization.kardashev_scale + ". This is why the entire solar system has been conquered.";
        }


        var star = {
            seed: newSeed,
            id: newId,
            name: starName[0],
            radius: newRadius,
            surfaceTemperature: newTemperature,
            class: newClass,
            type: "Star",
            description: newDescription,
        };
        console.warn("The starsystem has description! :  " + star.description);
        console.warn(star);
        return star;
    }
}
