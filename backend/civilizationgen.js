export default {
    civilizationgen: function () {
        var num = 100;

        var typeOfSpecies = [
            "aliens",
            "amphibians",
            "anthropods",
            "apes",
            "arachnids",
            "bacteria",
            "beetles",
            "beings",
            "birds",
            "blobs",
            "bovids",
            "bovines",
            "canines",
            "cats",
            "creatures",
            "crustacians",
            "cyborgs",
            "cyclopes",
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


        var description = [
            "They have binocular vision",
            "They have extraordinary physical strength",
            "These creatures are super friendly",
            "Unlike humans, they know how to be happy",
            "Their God is András Csipszer and it makes a perfect sense, because he is a god, not like Ádám. Ádám is a zero level worm who cant even generate descriptions."
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

            var randomTypeOfSpecies = typeOfSpecies[Math.floor(Math.random() * typeOfSpecies.length)];
            var randomDescription = description[Math.floor(Math.random() * description.length)];
            var randomStartPlural = startPlural[Math.floor(Math.random() * startPlural.length)];
            var randomEndPlural = endPlural[Math.floor(Math.random() * endPlural.length)];
            //var quirkChance = Math.floor(Math.random() * 100);
            //var typeChance = Math.floor(Math.random() * 100);
            //var summaryChance = Math.floor(Math.random() * 100);
            //var randomStart = start[Math.floor(Math.random() * start.length)];
            //var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];

            var randomName = randomStartPlural + randomEndPlural;
            return final = [randomName, randomTypeOfSpecies, randomDescription];
        }

    }

}
