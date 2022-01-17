import planetgen from "./planetgen";

export default {
    kardashevRewriteDescriptions: function (allPlanet, advancedCivilizationIDs) {


        var reasonsType0 = [
            "because they needed more energy.",
            "for scientific purposes.",
            "to terraform it.",
            "to colonise it.",
            "for raw materials."
        ];

        var reasonsType1 = [
            "beacause of fossil energy.",
            "beacause of raw materials",
            "beacause of overpopulation.",
            "beacause they started to destroy their homeplanet irreversibly and now they're looking for a new home.",
        ];

        var reasonsType111 = [
            " have closed in quarantine and then they have been pushed into districts, during ",
            " have perished during ",
            " have methodically killed during ",
            " have hibernated to later become slaves "
        ]

        var reasonsType11 = [
            " concluded a non - aggression convention, with the ",
            " signed peace, with the ",
            " made an economic agreement, with the "
        ]


        var reasonsType12 = [
            " According to the convention, the planet must provide oil production.",
            " According to the convention, the planet must provide coal production.",
            " According to the convention, the planet must provide clean water.",
            " According to the convention, the planet must provide steel.",
            " According to the convention, the planet must provide combat forces, like spaceships, battleships and high-tech weapons.",
            " This convention seems to be falling apart today, due to the escalating war situation, as the inhabitants of the planet want to become independent."
        ]

        var reasonsInhabitatDescription = [
            " The planet has never developed a meaningful way of life.",
            " The primitive native wildlife was rapidly extinct, because of ill-considered steps.",
            " It never developed a meaningful way of life, due to environmental factors.",
            " The planet used to be a habitable planet. It's atmosphere and wildlife were completely destroyed during the occupation of the planet.",
        ]

        var reasonType0C;
        var reasonType11C
        var reasonType111C;
        var reasonType1C;
        var reasonInhabitatDescription


        var wayChoose;





        for (let i = 0; i < allPlanet.length; i++) {
            for (let y = 0; y <= advancedCivilizationIDs.length; y++) {
                wayChoose = Math.floor(Math.random() * 2);
                console.warn("The wae: " + wayChoose);

                if (i != advancedCivilizationIDs[0]) {
                    if (allPlanet[i].civilization.kardashev_scale > 0 && wayChoose == 0) {

                        reasonType111C = reasonsType111[Math.floor(Math.random() * reasonsType111.length)];
                        var planetAggressiveDescription = allPlanet[i].civilization.name + reasonType111C + allPlanet[advancedCivilizationIDs[0]].civilization.name + "'s conquest, from the " + allPlanet[advancedCivilizationIDs[0]].name + " planet.";
                        allPlanet[i].civilization.description = planetAggressiveDescription;

                    } else if (allPlanet[i].civilization.kardashev_scale > 0 && wayChoose == 1) {
                        reasonType11C = reasonsType11[Math.floor(Math.random() * reasonsType11.length)];
                        reasonType1C = reasonsType12[Math.floor(Math.random() * reasonsType12.length)];
                        var planetFriendlyDescription = "The rooted beings of this planet (the " + allPlanet[i].civilization.name + ") " + reasonType11C + allPlanet[advancedCivilizationIDs[0]].civilization.name + ", from the " + allPlanet[advancedCivilizationIDs[0]].name + " planet." + reasonType1C;
                        allPlanet[i].civilization.description = planetFriendlyDescription;

                    } else {
                        reasonType0C = reasonsType0[Math.floor(Math.random() * reasonsType0.length)];
                        reasonInhabitatDescription = reasonsInhabitatDescription[Math.floor(Math.random() * reasonsInhabitatDescription.length)];

                        var planetOccupiedDescription = "This planet has occupied by the " + allPlanet[advancedCivilizationIDs[0]].civilization.name + " from the " + allPlanet[advancedCivilizationIDs[0]].name + " planet, " + reasonType0C;
                        var planetOccupiedForDescription = " " + reasonInhabitatDescription;
                        allPlanet[i].civilization.description = planetOccupiedDescription + planetOccupiedForDescription;
                        allPlanet[i].civilization.name = allPlanet[advancedCivilizationIDs[0]].civilization.name + " (🚀)";
                        allPlanet[i].civilization.race = allPlanet[advancedCivilizationIDs[0]].civilization.race;
                    }
                }
            }
        }
        return allPlanet;
    }
}