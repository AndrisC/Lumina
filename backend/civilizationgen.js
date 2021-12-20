export default {
    civilizationgen: function (planetType) {
        var num = 100;

        var typeOfSpecies = [
            "aliens",
            "amphibians",
            "anthropods",
            "apes",
            "arachnids",
            "beings",
            "birds",
            "blobs",
            "bovids",
            "bovines",
            "canines",
            "creatures",
            "crustacians",
            "cyborgs",
            "cyclopes",
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


        var description = [
            "They look cool.",
            "They have binocular vision",
            "They have extraordinary physical strength",
            "These creatures are super friendly",
            "Unlike humans, they know how to be happy",
            "Their God is Ádám Pongrácz and it makes a perfect sense, because he is a god, not like András. András is a geh sponge, who has no idea what is frontend."
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
        var randomKardashev_scale = Math.floor(Math.random() * 4);
        var final = ["", "", "", ""];
        var randomTypeOfSpecies;
        var randomDescription;
        var randomStartPlural;
        var randomEndPlural;
        var randomName;

        if (planetType == "Earth-like" || planetType == "Water") {
            for (let i = 0; i <= num; i++) {

                randomTypeOfSpecies = typeOfSpecies[Math.floor(Math.random() * typeOfSpecies.length)];
                randomDescription = description[Math.floor(Math.random() * description.length)];
                randomStartPlural = startPlural[Math.floor(Math.random() * startPlural.length)];
                randomEndPlural = endPlural[Math.floor(Math.random() * endPlural.length)];
                //var quirkChance = Math.floor(Math.random() * 100);
                //var typeChance = Math.floor(Math.random() * 100);
                //var summaryChance = Math.floor(Math.random() * 100);
                //var randomStart = start[Math.floor(Math.random() * start.length)];
                //var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

                randomName = randomStartPlural + randomEndPlural;
                return final = [randomName, randomTypeOfSpecies, randomDescription];
            }
        } else {
            return final = [randomName, randomTypeOfSpecies, randomDescription, randomKardashev_scale];
        }




    }

}
