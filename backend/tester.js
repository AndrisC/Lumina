import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen";

export default {
    planetgen: function (number, star) {
       let allPlanet = [];

        var planetNames = namegen.planetnamegen(number);

        console.warn(planetNames);

        // console.warn(planetNames);
        for (let i = 0; i <= number-1; i++) {


            //GENERATE PLACEHOLDERS
            var PLACEHOLDER = "PLACEHOLDER";


            //Generate id
            var newId = i + 1;


            //Generate the name of the planet
            var newName = planetNames[i];


            //Generate radius between 5200 - 200 km
            let newRadius = Math.floor(Math.random() * (5200 - 200) + 200);


            //Generate the amount of gas



            //generate type
            var planetTypes = ["Ice", "Water", "Gas", "Earth-like", "Toxic"]
            let newPlanetType = planetTypes[Math.floor(Math.random() * planetTypes.length)];


            //Generate mass. You have to multply it by 100 000 000 000 000 000 000 (in tons)
            let newMass = newRadius  * 9.375;


            //Earth's radius and mass value
            var compEarthRadius = 637;
            var compEarthMass = 6000;



            if (newPlanetType == "Gas") {
                newMass = newMass / 3;
            }

            console.log("Compared to earth Radius: " + newRadius / compEarthRadius);
            console.log("Compared to earth Mass: " + newMass / compEarthMass);
            console.warn(planetNames[i] + " Mass: " + newMass + " Radius: " + newRadius);


            //Generate moons max 8
            let newMoons = Math.floor(Math.random() * 8);





            //Generate animals if needed


            //Generate vegetation if needed


            //Calculate the distance from the star between 1012 - 10 km. Must multiply with 1 000 000
            let newDistance = Math.floor(Math.random() * 10020) / 10 + 10;

            //Generate surface water if needed





            //Generate civilization if needed


            //Calculate the lenght of a day


            //Calculate the length of a year


            //Generate planetary ring


            //Liveable?

            //Generate seed
            let newSeed = Math.floor(Math.random() * (999999 - 1) + 1)

            if (star) {

            }

            var planetInfo = {
                seed: newSeed,
                id: newId,
                name: newName,
                orbitedStar: star,
                radius: newRadius,
                mass: "",
                moons: newMoons,
                type: newPlanetType,
                animals: PLACEHOLDER,
                vegetation: PLACEHOLDER,
                liveable: PLACEHOLDER,
                distanceFromStar: newDistance,
                surfaceWater:PLACEHOLDER,
                gas: {
                    nitrogen: "",
                    oxygen: "",
                    water: "",
                    argon: "",
                    carbon_dioxide: "",
                    neon: "",
                    methane: "",
                    ozone: "",
                },
                civilization: PLACEHOLDER,
                lengthOfDay: PLACEHOLDER,
                lengthOfYear: PLACEHOLDER,
                planetaryRing: PLACEHOLDER
            };

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
      //Generate radius between 5200 - 1000 km
      let newRadius = Math.floor(Math.random() * (5200 - 1000) + 1000);

      var star = {
        seed: newSeed,
        id: newId,
        name: starName[0],
        radius: newRadius,
        mass: "",
        surfaceTemperature: "",
        type: "Star",
      };
      return star;
    }
}
