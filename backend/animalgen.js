/*export default {
    animalgen: function (attr, type) {
        var animalAttrChoose =
        {
            '0': ["jawless ", "kitin-shell ", "tiny ", "sword-nose ", "ocean-"],
            '1': ["cuphead "],
            '3': ["cuphead "],
            name,
        };

        var animalTypeChoose =
            [
                ["microorganisms", "There are no living things on the planet",],
                ["fishes", "crabs", "snails"]
            ];

        let animalNames = [];
        var numberOfGen = Math.floor(Math.random() * (animalAttrChoose[attr].length - 1) + 1);
        console.warn(numberOfGen);

        for (let i = 0; i < numberOfGen; i++) {
            name = '';
            var randAttrNumb = Math.floor(Math.random() * (animalAttrChoose[attr].length - 0));
            var temp = animalAttrChoose.attr;
            animalNames[i] = temp;
        }


        return animalNames;
    }
}

export default {
    animalgen: function (wordlType, ) {
        var num = 100;

        var animalTypes = [
            "apes",
            "arachnids",
            "bacteria",
            "beetles",
            "beings",
            "birds",
            "blobs",
            "canines",
            "cats",
            "creatures",
            "crustacians",
            "cyborgs",
            "cyclopes",
            "dinosaurs",
            "dogs",
            "echiniderms",
            "felines",
            "fish",
            "herbivores",
            "holograms",
            "humanoids",
            "hypochondriacs",
            "insects",
            "mammals",
            "molluscs",
            "plants",
            "rattlesnakes",
            "reptiles",
            "rodents",
            "slugs",
            "snakes",
            "sponges",
            "worms",
        ];

        var animalAttributes = [
            "tiny",
            "ordinary",
            "jawless",
            "spineless",
            "Their God is Adam Pongrácz and it makes a perfect sense, because he is a god, not like András. András is geh."
        ];

        var startPlural = [
            "Xi",
            "No",
            "Bi",
            "Yoi",
            "Huy",
            "Fea",
            "Ve",
            "Are",
            "Stu",
            "Gla",
            "Dri"
        ]

        var endPlural = [
            "guns",
            "ons",
            "tors",
            "cers",
            "eds",
            "egs",
            "engi",
            "eks",
            "zoks",
            "gers",
            "jers",
            "ors",
            "sions",
            "uns",
            "lorians",
            'irans',
            "bulans",
            "pans",
            "pons"
        ];




        for (let i = 0; i <= num; i++) {

            var final = ["", "", ""];
            //var quirkChance = Math.floor(Math.random() * 100);
            var typeChance = Math.floor(Math.random() * 100);
            //var summaryChance = Math.floor(Math.random() * 100);
            //var randomStart = start[Math.floor(Math.random() * start.length)];
            var randomTypeOfSpecies = typeOfSpecies[Math.floor(Math.random() * typeOfSpecies.length)];
            var randomDescription = description[Math.floor(Math.random() * description.length)];
            var randomStartPlural = startPlural[Math.floor(Math.random() * startPlural.length)];
            var randomEndPlural = endPlural[Math.floor(Math.random() * endPlural.length)];
            //var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

            var randomName = randomStartPlural + randomEndPlural;
            return final = [randomName, randomTypeOfSpecies, randomDescription] //start + " " + randomTypeOfSpecies + " with " + randomSkills;

            /*if (typeChance < 25) {

                final = start + " " + randomTypeOfSpecies + " with " + randomSkills;
            } else if (typeChance <= 25 && typeChance < 50) {

            } else if (typeChance <= 50 && typeChance < 75) {

            } else {

            } 
        }

    }

}

*/
