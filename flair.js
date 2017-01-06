/* FLAIR MASTER CONFIG */ 
flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                unit_id: data[2],
                orig_id: orig_id,
                unit_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [RS - LEGACY] */
    "1 rslegacy 1": "Dragon God Granados",
	"2 rslegacy 2": "Aqua Goddess Abel",
	"3 rslegacy 3": "Elf Queen Arbonella",
	"4 rslegacy 4": "Bolt Phoenix Ardas",
	"5 rslegacy 5": "Sky Goddess Raquel",
	"6 rslegacy 6": "Dark Lord Zaboeth",
	"7 rslegacy 7": "Blazing Knight Agni",
	"8 rslegacy 8": "Ice Angel Sergio",
	"9 rslegacy 9": "Goddess Lidith",
	"10 rslegacy 10": "Sky God Falma",
	"11 rslegacy 11": "Sacred Gunner Heidt",
	"12 rslegacy 12": "Omega Demise Shida",
	"13 rslegacy 13": "Immortal Phoenix Levarza",
	"14 rslegacy 14": "Felneus",
	"15 rslegacy 15": "Gaia Tree Vertri",
	"16 rslegacy 16": "Omega Behemoth",
	"17 rslegacy 17": "Supreme Dragon Elderex",
	"18 rslegacy 18": "Hellborn Dilias",
	"19 rslegacy 19": "Ignis Vestae Lava",
	"20 rslegacy 20": "Ocean Conqueror Mega",
	"21 rslegacy 21": "Holy Arms Douglas",
	"22 rslegacy 22": "Holy Shock Emilia",
	"23 rslegacy 23": "Angelic Paladin Will",
	"24 rslegacy 24": "Lovely Princess Alice",
	"25 rslegacy 25": "Ace Chef Lancia",
	"26 rslegacy 26": "Salacia Persei Elimo",
	"27 rslegacy 27": "Pixy Lord Leore",
	"28 rslegacy 28": "Tesla Club Elulu",
	"29 rslegacy 29": "Ultra Blade Aem",
	"30 rslegacy 30": "Soul Vortex Lemia",
	"31 rslegacy 31": "Taskmaster Lorand",
	"32 rslegacy 32": "Ice Master Dean",
	"33 rslegacy 33": "Flora Aegis Edea",
	"34 rslegacy 34": "Celestial Archer Loch",
	"35 rslegacy 35": "Drake Angel Aisha",
	"36 rslegacy 36": "Twin Arms Rickel",
	"37 rslegacy 37": "Gaians Il & Mina",
	"38 rslegacy 38": "Heaven's Bolt Amy",
	"39 rslegacy 39": "Angelic Blades Sefia",
	"40 rslegacy 40": "Demonic Idol Kikuri",
	"41 rslegacy 41": "Wildfire Lotus Michele",
	"42 rslegacy 42": "Final Apostle Tiara",
	"43 rslegacy 43": "Blade Emperor Zelban",
	"44 rslegacy 44": "Empyreal Drake Lodin",
	"45 rslegacy 45": "Invictus Xeno Melchio",
	"46 rslegacy 46": "DUEL-SGX",
	"47 rslegacy 47": "Unleashed Ravana Vishra",
	"48 rslegacy 48": "Hailstorm Armor Reeze",
	"49 rslegacy 49": "Noble Fist Dilma",
	"50 rslegacy 50": "Sky Mage Rashil",
	"51 rslegacy 51": "Executioner Lilith XTF",
	"52 rslegacy 52": "Vicious Twin-Edge Logan",
	"53 rslegacy 53": "Bordebegia",
	"54 rslegacy 54": "Ice Bastion Zeldeus",
	"55 rslegacy 55": "Colossal Vars",
	"56 rslegacy 56": "Valkyrie Archangel Griel",
	"57 rslegacy 57": "Leorone",
	"58 rslegacy 58": "God Eater Lira",
	"59 rslegacy 59": "Crimson Phoenix Farlon",
	"60 rslegacy 60": "Blizzard Fang Signas",
	"61 rslegacy 61": "Mayhem Empress Luly",
	"62 rslegacy 62": "Gilded Dogma Rina",
	"63 rslegacy 63": "Paladin Crusader Sodis",
	"64 rslegacy 64": "Midnight Allure Lunaris",
	"65 rslegacy 65": "Siva Afi Ramna",
	"66 rslegacy 66": "Icicle Lance Raydn",
	"67 rslegacy 67": "Cyclonic Heroine Ophelia",
	"68 rslegacy 68": "Optimum Mecha Grybe",
	"69 rslegacy 69": "Glorious Crusader Alyut",
	"70 rslegacy 70": "Phantom Victor Zephyr",
	"71 rslegacy 71": "Inferno Princess Dia",
	"72 rslegacy 72": "Aqua Pura Lucina",
	"73 rslegacy 73": "Impenetrable Darvan",
	"74 rslegacy 74": "Blaze Guru Bran",
	"75 rslegacy 75": "Worldly Themis",
	"76 rslegacy 76": "Arcane Solo Eric",
	"77 rslegacy 77": "Defiant God Luther",
	"78 rslegacy 78": "Tyrant Goddess Phee",
	"79 rslegacy 79": "Ivy Goddess Nalmika",
	"80 rslegacy 80": "Crusher God Uda",
	"81 rslegacy 81": "Torturous Grief Zellha",
	"82 rslegacy 82": "Shadow Retribution Kajah",
	"83 rslegacy 83": "Flare Paladin Darvanshel",
	"84 rslegacy 84": "Axe God Mariudeth",
	"85 rslegacy 85": "Shining Thief Zelnite",
	"86 rslegacy 86": "Beast God Exvehl",
	"87 rslegacy 87": "Seraph Azael",
	"88 rslegacy 88": "Tyrant Lilly Matah",
	"89 rslegacy 89": "God Emperor Orwen",
	"90 rslegacy 90": "Ice God Arius",
	"91 rslegacy 91": "Flora Goddess Faris",
	"92 rslegacy 92": "God Engineer Garnan",
	"93 rslegacy 93": "Brave God Hogar",
	"94 rslegacy 94": "Graceful Princess Elza",
	"95 rslegacy 95": "Fire Goddess Ulkina",
	"96 rslegacy 96": "Aqua Goddess Kuhla",
	"97 rslegacy 97": "Guardian Goddess Tia",
	"98 rslegacy 98": "Lightning Gun Rowgen",
	"99 rslegacy 99": "Mad God Narza",
	"100 rslegacy 100": "Shadow Assailant Kuda",
	"101 rslegacy 101": "Ember Charm Fiora",
	"102 rslegacy 102": "Pirate Goddess Eve",
	"103 rslegacy 103": "Deity Ruler Lucca",
	"104 rslegacy 104": "Shocking Beauty Orna",
	"105 rslegacy 105": "Rainbow Angel Yujeh",
	"106 rslegacy 106": "Dark Demigod Ardin",
	"107 rslegacy 107": "Arus",
	"108 rslegacy 108": "Belfura",
	"109 rslegacy 109": "Ragshelm",
	"110 rslegacy 110": "Shera",
	"111 rslegacy 111": "Holy Night Priscilla",
	"112 rslegacy 112": "Demon God Borgeus",
	"113 rslegacy 113": "Pyre Aegis Vanberk",
	"114 rslegacy 114": "Magnum Opus Rigness",
	"115 rslegacy 115": "Floral Princess Rosetta",
	"116 rslegacy 116": "Dragoon Soul Bargus",
	"117 rslegacy 117": "Holy Priestess Elmedia",
	"118 rslegacy 118": "Blade Master Zergel",
/* [RS - 7 STAR] */
    "1 rs7star 119": "Brimstone Emperor Alpha",
	"2 rs7star 120": "",
	"3 rs7star 121": "",
	"4 rs7star 122": "",
	"5 rs7star 123": "",
	"6 rs7star 124": "",
	"7 rs7star 125": "",
	"8 rs7star 126": "",
	"9 rs7star 127": "",
	"10 rs7star 128": "",
	"11 rs7star 129": "",
	"12 rs7star 130": "",
	"13 rs7star 131": "",
	"14 rs7star 132": "",
	"15 rs7star 133": "",
	"16 rs7star 134": "",
	"17 rs7star 135": "",
	"18 rs7star 136": "",
	"19 rs7star 137": "",
	"20 rs7star 138": "",
	"21 rs7star 139": "",
	"22 rs7star 140": "",
	"23 rs7star 141": "",
	"24 rs7star 142": "",
	"25 rs7star 143": "",
	"26 rs7star 144": "",
	"27 rs7star 145": "",
	"28 rs7star 146": "",
	"29 rs7star 147": "",
	"30 rs7star 148": "",
	"31 rs7star 149": "",
	"32 rs7star 150": "",
	"33 rs7star 151": "",
	"34 rs7star 152": "",
	"35 rs7star 153": "",
	"36 rs7star 154": "",
	"37 rs7star 155": "",
	"38 rs7star 156": "",
	"39 rs7star 157": "",
	"40 rs7star 158": "",
	"41 rs7star 159": "",
	"42 rs7star 160": "",
	"43 rs7star 161": "",
	"44 rs7star 162": "",
	"45 rs7star 163": "",
	"46 rs7star 164": "",
	"47 rs7star 165": "",
	"48 rs7star 166": "",
	"49 rs7star 167": "",
	"50 rs7star 168": "",
	"51 rs7star 169": "",
	"52 rs7star 170": "",
	"53 rs7star 171": "",
	"54 rs7star 172": "",
	"55 rs7star 173": "",
	"56 rs7star 174": "",
	"57 rs7star 175": "",
	"58 rs7star 176": "",
	"59 rs7star 177": "",
	"60 rs7star 178": "",
	"61 rs7star 179": "",
	"62 rs7star 180": "",
	"63 rs7star 181": "",
	"64 rs7star 182": "",
	"65 rs7star 183": "",
	"66 rs7star 184": "",
	"67 rs7star 185": "",
	"68 rs7star 186": "",
	"69 rs7star 187": "",
	"70 rs7star 188": "",
	"71 rs7star 189": "",
	"72 rs7star 190": "",
	"73 rs7star 191": "",
	"74 rs7star 192": "",
	"75 rs7star 193": "",
	"76 rs7star 194": "",
	"77 rs7star 195": "",
	"78 rs7star 196": "",
/* [RS - OMNI EVO] */
    "1 rsoe 197": "Fabled Emperor Kulyuk",
	"2 rsoe 198": "",
	"3 rsoe 199": "",
	"4 rsoe 200": "",
	"5 rsoe 201": "",
	"6 rsoe 202": "",
	"7 rsoe 203": "",
	"8 rsoe 204": "",
	"9 rsoe 205": "",
	"10 rsoe 206": "",
	"11 rsoe 207": "",
	"12 rsoe 208": "",
	"13 rsoe 209": "",
	"14 rsoe 210": "",
	"15 rsoe 211": "",
	"16 rsoe 212": "",
	"17 rsoe 213": "",
	"18 rsoe 214": "",
	"19 rsoe 215": "",
	"20 rsoe 216": "",
	"21 rsoe 217": "",
	"22 rsoe 218": "",
	"23 rsoe 219": "",
	"24 rsoe 220": "",
	"25 rsoe 221": "",
	"26 rsoe 222": "",
	"27 rsoe 223": "",
	"28 rsoe 224": "",
	"29 rsoe 225": "",
	"30 rsoe 226": "",
	"31 rsoe 227": "",
	"32 rsoe 228": "",
	"33 rsoe 229": "",
	"34 rsoe 230": "",
	"35 rsoe 231": "",
	"36 rsoe 232": "",
	"37 rsoe 233": "",
	"38 rsoe 234": "",
	"39 rsoe 235": "",
	"40 rsoe 236": "",
	"41 rsoe 237": "",
	"42 rsoe 238": "",
	"43 rsoe 239": "",
	"44 rsoe 240": "",
	"45 rsoe 241": "",
	"46 rsoe 242": "",
	"47 rsoe 243": "",
	"48 rsoe 244": "",
	"49 rsoe 245": "",
	"50 rsoe 246": "",
	"51 rsoe 247": "",
	"52 rsoe 248": "",
	"53 rsoe 249": "",
	"54 rsoe 250": "",
	"55 rsoe 251": "",
	"56 rsoe 252": "",
	"57 rsoe 253": "",
	"58 rsoe 254": "",
	"59 rsoe 255": "",
/* [NON-RS UNITS] */
    "1 freeall f1": "Ignis Halcyon Vargas",
	"2 freeall f2": "",
	"3 freeall f3": "",
	"4 freeall f4": "",
	"5 freeall f5": "",
	"6 freeall f6": "",
	"7 freeall f7": "",
	"8 freeall f8": "",
	"9 freeall f9": "",
	"10 freeall f10": "",
	"11 freeall f11": "",
	"12 freeall f12": "",
	"13 freeall f13": "",
	"14 freeall f14": "",
	"15 freeall f15": "",
	"16 freeall f16": "",
	"17 freeall f17": "",
	"18 freeall f18": "",
	"19 freeall f19": "",
	"20 freeall f20": "",
	"21 freeall f21": "",
	"22 freeall f22": "",
	"23 freeall f23": "",
	"24 freeall f24": "",
	"25 freeall f25": "",
	"26 freeall f26": "",
	"27 freeall f27": "",
	"28 freeall f28": "",
	"29 freeall f29": "",
	"30 freeall f30": "",
	"31 freeall f31": "",
	"32 freeall f32": "",
	"33 freeall f33": "",
	"34 freeall f34": "",
	"35 freeall f35": "",
	"36 freeall f36": "",
	"51 freeall m1": "",
	"52 freeall m2": "",
	"53 freeall m3": "",
	"54 freeall m4": "",
	"55 freeall m5": "",
	"56 freeall m6": "",
	"57 freeall m7": "",
	"58 freeall m8": "",
	"59 freeall m9": "",
	"60 freeall m10": "",
	"61 freeall m11": "",
	"62 freeall m12": "",
	"63 freeall m13": "",
	"64 freeall m14": "",
	"65 freeall m15": "",
	"66 freeall m16": "",
	"67 freeall m17": "",
	"68 freeall m18": "",
	"69 freeall m19": "",
	"70 freeall m20": "",
	"71 freeall m21": "",
	"72 freeall m22": "",
	"73 freeall m23": "",
	"74 freeall m24": "",
	"75 freeall m25": "",
	"76 freeall m26": "",
	"77 freeall m27": "",
	"78 freeall m28": "",
	"79 freeall m29": "",
	"80 freeall m30": "",
	"81 freeall m31": "",
	"82 freeall m32": "",
/* [GLOBAL] */
    "1 gl d1": "Titan Wing Blaze",
	"2 gl d2": "",
	"3 gl d3": "",
	"4 gl d4": "",
	"5 gl d5": "",
	"6 gl d6": "",
	"7 gl d7": "",
	"8 gl d8": "",
	"9 gl d9": "",
	"10 gl d10": "",
	"11 gl d11": "",
	"12 gl d12": "",
	"13 gl d13": "",
	"14 gl d14": "",
	"15 gl d15": "",
	"16 gl d16": "",
	"17 gl d17": "",
	"18 gl d18": "",
	"19 gl d19": "",
	"20 gl d20": "",
	"21 gl d21": "",
	"22 gl d22": "",
	"23 gl d23": "",
	"24 gl d24": "",
	"25 gl d25": "",
	"26 gl d26": "",
	"27 gl d27": "",
	"28 gl d28": "",
	"29 gl d29": "",
	"30 gl d30": "",
	"31 gl d31": "",
	"32 gl d32": "",
	"33 gl d33": "",
	"34 gl d34": "",
	"35 gl d35": "",
	"36 gl d36": "",
	"37 gl d37": "",
	"38 gl d38": "",
	"39 gl d39": "",
	"40 gl d40": "",
	"41 gl d41": "",
	"51 gl g1": "",
	"52 gl g2": "",
	"53 gl g3": "",
	"54 gl g4": "",
	"55 gl g5": "",
	"56 gl g6": "",
	"57 gl g7": "",
	"58 gl g8": "",
	"59 gl g9": "",
	"60 gl g10": "",
	"61 gl g11": "",
	"62 gl g12": "",
	"63 gl g13": "",
	"64 gl g14": "",
	"65 gl g15": "",
	"66 gl g16": "",
	"67 gl g17": "",
	"68 gl g18": "",
	"69 gl g19": "",
	"70 gl g20": "",
	"71 gl g21": "",
	"72 gl g22": "",
	"73 gl g23": "",
	"74 gl g24": "",
	"75 gl g25": "",
	"76 gl g26": "",
	"77 gl g27": "",
	"78 gl g28": "",
	"79 gl g29": "",
	"80 gl g30": "",
	"81 gl g31": "",
	"82 gl g32": "",
	"83 gl g33": "",
	"84 gl g34": "",
	"85 gl g35": "",
	"86 gl g36": "",
	"87 gl g37": "",
	"88 gl g38": "",
	"89 gl g39": "",
	"90 gl g40": "",
	"91 gl g41": "",
	"92 gl g42": "",
	"93 gl g43": "",
	"101 gl l1": "",
	"102 gl l2": "",
	"103 gl l3": "",
	"104 gl l4": "",
	"105 gl l5": "",
	"106 gl l6": "",
	"107 gl l7": "",
	"108 gl l8": "",
	"109 gl l9": "",
	"110 gl l10": "",
	"111 gl l11": "",
	"112 gl l12": "",
	"113 gl l13": "",
	"114 gl l14": "",
	"115 gl l15": "",
	"116 gl l16": "",
	"117 gl l17": "",
	"118 gl l18": "",
	"1-19 gl l19": "",
	"1-20 gl l20": "",
	"1-21 gl l21": "",
	"1-22 gl l22": "",
/* [JP + EU] */
    "1 jpeu a1": "",
	"2 jpeu a2": "",
	"3 jpeu a3": "",
	"4 jpeu a4": "",
	"5 jpeu a5": "",
	"6 jpeu a6": "",
	"7 jpeu a7": "",
	"8 jpeu a8": "",
	"9 jpeu a9": "",
	"10 jpeu a10": "",
	"11 jpeu a11": "",
	"12 jpeu a12": "",
	"13 jpeu a13": "",
	"14 jpeu a14": "",
	"15 jpeu a15": "",
	"16 jpeu a16": "",
	"17 jpeu a17": "",
	"18 jpeu a18": "",
	"19 jpeu a19": "",
	"20 jpeu a20": "",
	"21 jpeu a21": "",
	"22 jpeu a22": "",
	"23 jpeu a23": "",
	"24 jpeu a24": "",
	"25 jpeu a25": "",
	"26 jpeu a26": "",
    "27 jpeu a27": "Haruto",
	"28 jpeu a28": "",
	"29 jpeu a29": "",
	"30 jpeu a30": "",
	"31 jpeu a31": "",
	"32 jpeu a32": "",
	"33 jpeu a33": "",
	"34 jpeu a34": "",
	"35 jpeu a35": "",
	"36 jpeu a36": "",
	"37 jpeu a37": "",
	"38 jpeu a38": "",
	"39 jpeu a39": "",
	"40 jpeu a40": "",
	"41 jpeu a41": "",
	"51 jpeu e1": "",
	"52 jpeu e2": "",
	"53 jpeu e3": "",
	"54 jpeu e4": "",
	"55 jpeu e5": "",
	"56 jpeu e6": "",
	"57 jpeu e7": "",
	"58 jpeu e8": "",
	"59 jpeu e9": "",
	"60 jpeu e10": "",
	"61 jpeu e11": "",
	"62 jpeu e12": "",
	"63 jpeu e13": "",
	"64 jpeu e14": "",
	"65 jpeu e15": "",
	"66 jpeu e16": "",
	"67 jpeu e17": "",
	"68 jpeu e18": "",
	"69 jpeu e19": "",
	"70 jpeu e20": "",
	"71 jpeu e21": "",
	"72 jpeu e22": "",
	"73 jpeu e23": "",
	"74 jpeu e24": "",
	"75 jpeu e25": "",
	"76 jpeu e26": "",
	"77 jpeu e27": "",
	"78 jpeu e28": "",
	"79 jpeu e29": "",
	"80 jpeu e30": "",
	"81 jpeu e31": "",
	"82 jpeu e32": "",
	"83 jpeu e33": "",
	"84 jpeu e34": "",
	"85 jpeu e35": "",
	"86 jpeu e36": "",
	"87 jpeu e37": "",
	"88 jpeu e38": "",
	"89 jpeu e39": "",
	"90 jpeu e40": "",
	"91 jpeu e41": "",
	"92 jpeu e42": "",
	"93 jpeu e43": "",
	"94 jpeu e44": "",
	"95 jpeu e45": "",
	"96 jpeu e46": "",
	"97 jpeu e47": "",
	"98 jpeu e48": "",
	"99 jpeu e49": "",
	"100 jpeu e50": "",
	"101 jpeu e51": "",
	"102 jpeu e52": "",
	"103 jpeu e53": "",
	"104 jpeu e54": "",
/* [ALT] */
    "1 alt 39-alt": "Angelic Blades Sefia (Alt)",
	"2 alt 41-alt": "Wildfire Lotus Michele (Alt)",
	"3 alt g22-alt": "Deimos Thunderborn (Alt)",
};