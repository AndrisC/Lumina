import namegen from "../backend/namegen.js";
import planetgen from "./planetgen.js";

export default {
    solarsysgen: function (max) {
        var solarSysInfo = {
            solarSystemName: "",
            numberOfPlanets: "",
            starName: "",
            star: {},
            planets: [],
        };

        //Generate the name of the solar sys
        var solarSystemNamegen = namegen.planetnamegen(1);
        solarSysInfo.solarSystemName = solarSystemNamegen[0];

        //Generate the name of the star
        var starNamegen = namegen.planetnamegen(1);
        solarSysInfo.starName = starNamegen[0];

        //Generate the numbers of the planets
        var numberOfPlanetsgen = 30//(Math.floor(Math.random() * max + 1));
        solarSysInfo.numberOfPlanets = numberOfPlanetsgen;

        //Generate the star and the planets
        solarSysInfo.star = planetgen.stargen();

        solarSysInfo.planets = planetgen.planetgen(numberOfPlanetsgen, solarSysInfo.star);

        return solarSysInfo;
    }

}
