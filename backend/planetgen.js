import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen";
import animalgen from "./animalgen.js";
import civilizationgen from "./civilizationgen.js";

export default {
    planetgen: function (number, star) {
       let allPlanet = [];

        var planetNames = namegen.planetnamegen(number);

        // console.warn(planetNames);
        for (let i = 0; i <= number-1; i++) {


            //GENERATE PLACEHOLDERS
            var PLACEHOLDER = "PLACEHOLDER";


            //Generate id
            var newId = i + 1;


            //Generate the name of the planet
            var newName = planetNames[i];


            //Generate radius between 5200 - 200 km
            let newRadius = Math.floor(Math.random() * (3200 - 400) + 400);


            //Generate moons max 8
            let newMoons = Math.floor(Math.random() * 8);








            //Generate vegetation if needed


            //Calculate the distance from the star between 1012 - 10 km. Must multiply with 1 000 000
            let newDistance = Math.floor(Math.random() * 10020) / 10 + 10;

            //Generate surface water if needed


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

            //generate type

            let newPlanetType = "Toxic"


            if (newDistance >= 60 && newDistance <= 200) {
                newPlanetType = "Water";
                if (newNitrogen >= 25 && newOxygen >= 6) {
                    newPlanetType = "Earth-like";
                }
            } else if (newHydrogen >= 25) {
                newPlanetType = "Gas";
            } else if (newDistance >= 180 && newWater >= 25) {
                newPlanetType = "Ice";
            }


            //Generate animals if needed

            //Ice-type animals

            //var animalNames = animalgen.animalgen(0, 1);
            //console.warn(animalNames);


            //Water-type animals


            //Generate civilization if needed
            var newCivilization = civilizationgen.civilizationgen();


            //Calculate the lenght of a day


            //Calculate the length of a year


            //Generate planetary ring


            //Liveable?

            //Generate seed
            let newSeed = Math.floor(Math.random() * (999999 - 1) + 1)



            var planetInfo = {
                seed: newSeed,
                _id: newId,
                name: newName,
                orbitedStar: star,
                radius: newRadius,
                mass: "",
                moons: newMoons,
                type: newPlanetType,
                animals: {
                    name: "",
                    description: "",
                },
                vegetation: PLACEHOLDER,
                liveable: PLACEHOLDER,
                distanceFromStar: newDistance,
                surfaceWater:PLACEHOLDER,
                gas: {
                    nitrogen: newNitrogen,
                    oxygen: newOxygen,
                    water: newWater,
                    hydrogen: newHydrogen,
                    helium: newHelium,
                    other: newOther
                },
                civilization: {
                    name: newCivilization[0],
                    race: newCivilization[1],
                    description: newCivilization[2],
                },
                lengthOfDay: PLACEHOLDER,
                lengthOfYear: PLACEHOLDER,
                planetaryRing: PLACEHOLDER
            };
            console.warn(planetInfo);
            allPlanet.push(planetInfo);

        }
        return allPlanet;
    },
    stargen() {
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
      //Calculate class from temp
      var newClass = "Unknow class";
      if (newTemperature <= 3700) {
          newClass = "Class M";0
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


      var star = {
        seed: newSeed,
        _id: newId,
        name: starName[0],
        radius: newRadius,
        mass: "",
        surfaceTemperature: newTemperature,
        class: newClass,
        type: "Star",
      };
      console.warn(star);
      return star;
    }
}
