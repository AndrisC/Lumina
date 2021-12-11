export default {
	planetnamegen: function (count) {
		var vowels = {
			'1': ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
			'2': ["a", "e", "o", "u"],
			'3': ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"],
			'4': ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"],
			'5': ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
			'6': ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"],
			'7': ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
			'8': ["-I", "-II", "-III", "-IV", "-V", "-VI", "-VII", "-VIII", "-IX", "-X"],
			'9': [" "]
		},
			mtx = [[7, 7, 1, 1, 2, 2, 5, 5],
			[7, 7, 2, 2, 3, 3, 6, 6, 8, 8],
			[7, 7, 3, 3, 4, 4, 5, 5, 8, 8],
			[7, 7, 4, 4, 3, 3, 6, 6],
			[7, 7, 3, 3, 4, 4, 2, 2, 5, 5],
			[7, 7, 2, 2, 1, 1, 3, 3, 6, 6],
			[7, 7, 3, 3, 4, 4, 2, 2, 5, 5, 8, 8],
			[7, 7, 4, 4, 3, 3, 1, 1, 6, 6],
			[7, 7, 3, 3, 4, 4, 1, 1, 4, 4, 5, 5],
			[7, 7, 4, 4, 9, 9, 1, 1, 4, 4, 3, 3, 6, 6, 8, 8],
			[7, 7, 3, 3, 4, 4, 1, 1, 9, 9, 4, 4, 5, 5],
			[7, 7, 3, 3, 4, 4, 9, 9, 4, 4, 5, 5, 1, 1, 3, 3, 9, 9, 4, 4, 5, 5]],

			fn = function (i) { return Math.floor(Math.random() * vowels[i].length); },
			ret = [],
			name,
			comp,
			i, il,
			c = 0;

		for (; c < count; c++) {
			name = '';
			comp = mtx[c % mtx.length];
			for (i = 0, il = comp.length / 2; i < il; i++) {
				name += vowels[comp[i * 2]][fn(comp[i * 2 + 1])];
			}
			ret.push(name);
		}

		return ret;
	}
}
