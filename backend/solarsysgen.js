import namegen from "../backend/namegen.js";
import planetgen from "./planetgen.js";

export default {
    solarsysgen: function (max) {
        var solarSysInfo = {
            solarSystem: {
                solarSystemName: "",
                numberOfPlanets: "",
                starName: "",
            }
        };
        
        //Generate the name of the solar sys
        var solarSystemNamegen = namegen.planetnamegen(1);
        solarSysInfo.solarSystem.solarSystemName = solarSystemNamegen[0];

        //Generate the name of the star
        var starNamegen = namegen.planetnamegen(1);
        solarSysInfo.solarSystem.starName = starNamegen[0];

        //Generate the numbers of the planets
        var numberOfPlanetsgen = (Math.floor(Math.random() * max));
        solarSysInfo.solarSystem.numberOfPlanets = numberOfPlanetsgen;

        //Generate the planets
        planetgen.planetgen(numberOfPlanetsgen);


        return solarSysInfo;
    }

}
