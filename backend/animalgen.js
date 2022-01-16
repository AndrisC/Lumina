export default {
    animalgen: function (worldType) {

        var earthAnimals = [
            "apes",
            "arachnids",
            "beetles",
            "birds",
            "blobs",
            "canines",
            "cats",
            "fishes",
            "crustacians",
            "dinosaurs",
            "echiniderms",
            "felines",
            "fishes",
            "herbivores",
            "hypochondriacs",
            "insects",
            "mammals",
            "molluscs",
            "rattlesnakes",
            "reptiles",
            "rodents",
            "slugs",
            "snakes",
            "sponges",
            "worms",
            "insects",
        ];
        var waterAnimals = [
            "amoebas",
            "algaes",
            "fishes",
            "crabs",
            "insects",
            "reptiles",
            "blobs",
            "snakes",
            "shells",
            "fish lizards",
            "polyps",
            "jellyfishes",
            "starfishes",
            "sea urchins",
            "sea cucumber",
        ];

        var animalAttributes = [
            "tiny ",
            "ordinary ",
            "",
            "",
            "jawless ",
            "spineless ",
            "blue ",
            "red ",
            "green ",
            "",
            "white ",
            "spotted ",
            "",
            "striped ",
            "scaled ",
            "armored ",
            "",
            "dotted ",
            "horned armor "
        ];

        let numberOfAnimals = Math.floor(Math.random() * (10 - 3) + 3)
        var randomAnimalType;
        let randomWaterTypeNumber;
        let randomEarthTypeNumber;
        var randomAnimalAttribute;
        var finals = [];


        if (worldType == "Water") {

            randomWaterTypeNumber = Math.floor(Math.random() * waterAnimals.length);

            var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                ranNums = [],
                k = numberOfAnimals,
                j = 0;

            while (k--) {
                j = Math.floor(Math.random() * (k + 1));
                ranNums.push(nums[j]);
                nums.splice(j, 1);
                console.warn("THE NUMBERS ARE : " + ranNums)

                randomAnimalAttribute = animalAttributes[Math.floor(Math.random() * animalAttributes.length)];
                randomAnimalType = waterAnimals[ranNums.length - 1];

                finals.push(randomAnimalAttribute + randomAnimalType);
            }

        } else if (worldType == "Earth-like") {
            randomEarthTypeNumber = Math.floor(Math.random() * waterAnimals.length);

            var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                ranNums = [],
                k = numberOfAnimals,
                j = 0;

            while (k--) {
                j = Math.floor(Math.random() * (k + 1));
                ranNums.push(nums[j]);
                nums.splice(j, 1);
                console.warn("THE NUMBERS ARE : " + ranNums)

                randomAnimalAttribute = animalAttributes[Math.floor(Math.random() * animalAttributes.length)];
                randomAnimalType = earthAnimals[ranNums.length - 1];

                finals.push(randomAnimalAttribute + randomAnimalType);
            }
        } else {
            finals = "Not possible to form life"
        }
        console.warn("Animals: " + finals);
        return finals;
    }

}
