import namegen from "../backend/namegen.js";
import solarsysgen from "../backend/solarsysgen";

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
            let newRadius = Math.floor(Math.random() * (5200 - 200) + 200);


            //Generate moons max 8
            let newMoons = Math.floor(Math.random() * 8);


            //generate type
            var planetTypes = ["Ice", "Water", "Gas", "Earth-like", "Toxic"]
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

            //Generate seed
            let newSeed = Math.floor(Math.random() * (999999 - 1) + 1)

            if (star) {

            }

            var planetInfo = {
                seed: newSeed,
                _id: newId,
                name: newName,
                orbitedStar: star,
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
        _id: newId,
        name: starName[0],
        radius: newRadius,
        type: "Star",
      };
      return star;
    }
}
