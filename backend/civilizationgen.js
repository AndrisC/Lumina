import solarsysgen from "../backend/solarsysgen";

export default {
    civilizationgen: function (planetType, number) {
        var typeOfSpecies = [
            "aliens",
            "amphibians",
            "anthropods",
            "apes",
            "arachnids",
            "birds",
            "blobs",
            "bovids",
            "bovines",
            "canines",
            "creatures",
            "crustacians",
            "cyclopes",
            "echiniderms",
            "felines",
            "herbivores",
            "holograms",
            "humanoids",
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

        var typeOfSpeciesWater = [
            "beings",
            "blobs",
            "fish",
            "herbivores",
            "molluscs",
            "reptiles",
            "slugs",
            "sponges",
            "worms",
        ];

        var typeOfSpeciesAdvanced = [
            "cyborgs",
            "holograms",
            "robots",
            "digitized brains",
            "beings",
            "creatures",

        ]

        var description = [
            "They look cool",
            "They have binocular vision",
            "They have extraordinary physical strength",
            "These creatures are super friendly",
            "Unlike humans, they know how to be happy",
            "They have a good sense of humor"
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
            "Dri",
            "As",
            "Leva",
            "Amn"
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


        //Generate Kardaschev scale
        var randomKardashev_scale = Math.floor(Math.random() * 30);
       
        if (randomKardashev_scale <= 16) {
            randomKardashev_scale = 1;
        } else if (randomKardashev_scale >= 17 && randomKardashev_scale <= 28) {
            randomKardashev_scale = 2;
        } else {
            randomKardashev_scale = 3;
        }

        var final = ["", "", "", ""];
        var randomTypeOfSpecies;
        var randomDescription;
        var randomStartPlural;
        var randomEndPlural;
        var randomName;

        if (planetType == "Earth-like") {
            if (randomKardashev_scale == 3) {
                randomTypeOfSpecies = typeOfSpeciesAdvanced[Math.floor(Math.random() * typeOfSpeciesAdvanced.length)];
            }
            randomTypeOfSpecies = typeOfSpecies[Math.floor(Math.random() * typeOfSpecies.length)];
            randomDescription = description[Math.floor(Math.random() * description.length)];
            randomStartPlural = startPlural[Math.floor(Math.random() * startPlural.length)];
            randomEndPlural = endPlural[Math.floor(Math.random() * endPlural.length)];

            randomName = randomStartPlural + randomEndPlural;
            return final = [randomName, randomTypeOfSpecies, randomDescription, randomKardashev_scale];
            
        } else if (planetType == "Water") {
            if (randomKardashev_scale == 3) {
                randomTypeOfSpecies = typeOfSpeciesAdvanced[Math.floor(Math.random() * typeOfSpeciesAdvanced.length)];
            }
            randomTypeOfSpecies = typeOfSpeciesWater[Math.floor(Math.random() * typeOfSpeciesWater.length)];
            randomDescription = description[Math.floor(Math.random() * description.length)];
            randomStartPlural = startPlural[Math.floor(Math.random() * startPlural.length)];
            randomEndPlural = endPlural[Math.floor(Math.random() * endPlural.length)];

            randomName = randomStartPlural + randomEndPlural;
            return final = [randomName, randomTypeOfSpecies, randomDescription, randomKardashev_scale];

        } else {
            randomKardashev_scale = 0;
            return final = [randomName, randomTypeOfSpecies, randomDescription, randomKardashev_scale];
        }




    }

}
