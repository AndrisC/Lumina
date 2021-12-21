import planetgen from "./planetgen";

export default {
    kardashevRewriteDescriptions: function (allPlanet, advancedCivilizationIDs) {

        
        var reasonsType0 = [
            "because they needed more energy.",
            "for scientific purposes.",
            "to terraform it.",
            "to colonise it",
            "for raw materials"
        ];

        var reasonsType1 = [
            "beacause of fossil energy.",
            "beacause of raw materials",
            "beacause of overpopulation.",
            "beacause they started to destroy their homeplanet irreversibly and now they're looking for a new home.",
        ];

        var reasonsType111 = [
            " have closed in quarantine, that they would then be pushed into districts, during ",
            " have perished during "
        ]

        var reasonsType11 = [
            "This problem has been resolved politically.",
        ]


        var reaasonsType12 = [
            "The problem could not be solved politically, so the ... was systematically extinguished by the."
        ]
        
        var reasonType0C;
        var reasonType111C;
        var reasonType1C;


        var wayChoose;





        for (let i = 0; i < allPlanet.length; i++) {
            for (let y = 0; y <= advancedCivilizationIDs.length; y++) {
                
                if (i != advancedCivilizationIDs[0]) {
                    if (allPlanet[i].civilization.kardashev_scale > 0) {

                        wayChoose = Math.floor(Math.random() * 1);
                        console.warn("The wae: " + wayChoose);
                        
                        reasonType111C = reasonsType111[Math.floor(Math.random() * reasonsType111.length)];
                        var planetAggressiveDescription = allPlanet[i].civilization.name + reasonType111C + allPlanet[advancedCivilizationIDs[0]].civilization.name + "'s conquest, from the " + allPlanet[advancedCivilizationIDs[0]].name + " planet."
                        allPlanet[i].civilization.description = planetAggressiveDescription;

                    } else {
                        reasonType0C = reasonsType0[Math.floor(Math.random() * reasonsType0.length)];

                        var planetOccupiedDescription = "This planet has occupied by the " + allPlanet[advancedCivilizationIDs[0]].civilization.name + " from the " + allPlanet[advancedCivilizationIDs[0]].name + " planet, " + reasonType0C;
                        var planetOccupiedForDescription = " " + allPlanet[i].name + " never developed a meaningful way of life."
                        allPlanet[i].civilization.description = planetOccupiedDescription + planetOccupiedForDescription;
                    }
                }
            }
        }
        return allPlanet;
    }
}