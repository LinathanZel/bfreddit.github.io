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
	"12 rslegacy 12": "Deadly Illusion Shida",
	"13 rslegacy 13": "Immortal Phoenix Levarza",
	"14 rslegacy 14": "Felneus",
	"15 rslegacy 15": "Gaia Tree Vertri",
	"16 rslegacy 16": "Ultimate Behemoth",
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
	"33 rslegacy 33": "Edea", /* --- NAME UPDATE --- */
	"34 rslegacy 34": "Loch", /* --- NAME UPDATE --- */
	"35 rslegacy 35": "Drake Angel Aisha",
	"36 rslegacy 36": "Miri (Rickel)", /* --- NAME UPDATE --- */
	"37 rslegacy 37": "Gaians Il & Mina",
	"38 rslegacy 38": "Heaven's Bolt Amy",
	"39 rslegacy 39": "Hallowed Dance Sefia",
	"40 rslegacy 40": "Nefarious Dance Kikuri",
	"41 rslegacy 41": "Vesta Padma Michele",
	"42 rslegacy 42": "Final Apostle Tiara",
	"43 rslegacy 43": "Blade Emperor Zelban",
	"44 rslegacy 44": "Empyreal Drake Lodin",
	"45 rslegacy 45": "Invictus Xeno Melchio",
	"46 rslegacy 46": "DUEL-FGXVM",
	"47 rslegacy 47": "Unleashed Ravana Vishra",
	"48 rslegacy 48": "Hailstorm Armor Reeze",
	"49 rslegacy 49": "Noble Fist Dilma",
	"50 rslegacy 50": "Sky Mage Rashil",
	"51 rslegacy 51": "Mechanic Goddess Lilith",
	"52 rslegacy 52": "Vicious Twin-Edge Logan",
	"53 rslegacy 53": "Bordebegia",
	"54 rslegacy 54": "Ice Bastion Zeldeus",
	"55 rslegacy 55": "Colossal Vars",
	"56 rslegacy 56": "Valkyrie Archangel Griel",
	"57 rslegacy 57": "Leorone",
	"58 rslegacy 58": "God Eater Lira",
	"59 rslegacy 59": "Crimson Phoenix Farlon",
	"60 rslegacy 60": "Signas", /* --- NAME UPDATE --- */
	"61 rslegacy 61": "Mayhem Empress Luly",
	"62 rslegacy 62": "Gilded Dogma Rina",
	"63 rslegacy 63": "Paladin Crusader Sodis",
	"64 rslegacy 64": "Lunaris", /* --- NAME UPDATE --- */
	"65 rslegacy 65": "Siva Afi Ramna",
	"66 rslegacy 66": "Icicle Lance Raydn",
	"67 rslegacy 67": "Cyclonic Heroine Ophelia",
	"68 rslegacy 68": "Optimum Mecha Grybe",
	"69 rslegacy 69": "Glorious Crusader Alyut",
	"70 rslegacy 70": "Zephyr", /* --- NAME UPDATE --- */
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
	"85 rslegacy 85": "Chivalrous Thief Zelnite",
	"86 rslegacy 86": "Beast God Exvehl",
	"87 rslegacy 87": "Seraph Azael",
	"88 rslegacy 88": "Necromancer Lilly Matah",
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
	"107 rslegacy 107": "Supreme Chol Arus",
	"108 rslegacy 108": "Glacial Wings Belfura",
	"109 rslegacy 109": "Divine Dragon Ragzbyul",
	"110 rslegacy 110": "Radiant Guardian Shera",
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
	"2 rs7star 120": "Gallant Spirit Tazer",
	"3 rs7star 121": "Rose Empress Tora",
	"4 rs7star 122": "Divine Law Kanon",
	"5 rs7star 123": "Vexing Monarch Kira",
	"6 rs7star 124": "Sublime Darkness Feeva",
	"7 rs7star 125": "Crimson Knight Claire",
	"8 rs7star 126": "Azure Wanderer Colt",
	"9 rs7star 127": "Heroic Leader Quaid",
	"10 rs7star 128": "Thunderbird Sabre Diana",
	"11 rs7star 129": "Radiant Virtue Fadahl",
	"12 rs7star 130": "Galactic Treasure Ivris",
	"13 rs7star 131": "Inferno Wings Magnazorda",
	"14 rs7star 132": "Tundra Scales Zerafalgar",
	"15 rs7star 133": "Gaia Sennin Oguro",
	"16 rs7star 134": "Eternal Radiance Rize",
	"17 rs7star 135": "Demon Champion Raaga",
	"18 rs7star 136": "Grave Carver Aaron",
	"19 rs7star 137": "Inferno Revolution Ruby",
	"20 rs7star 138": "Aquamarine Knight Medina",
	"21 rs7star 139": "Parallel Tempest Dion",
	"22 rs7star 140": "Rumbling Blade Balgran",
	"23 rs7star 141": "Sublime Divinity Rinon",
	"24 rs7star 142": "Wise Necromancer Yuura",
	"25 rs7star 143": "Inferno Rifle Bestie",
	"26 rs7star 144": "Lance Champion Vernil",
	"27 rs7star 145": "Feral Katana Toutetsu",
	"28 rs7star 146": "Dragon Scroll Kagura",
	"29 rs7star 147": "Turbo Wings Nemethgear",
	"30 rs7star 148": "Hellion Armor Reis",
	"31 rs7star 149": "Furious General Griff",
	"32 rs7star 150": "Oceanic Mirror Iris",
	"33 rs7star 151": "Flourished Bloom Libera",
	"34 rs7star 152": "Inquisitive Soul Rhoa",
	"35 rs7star 153": "Glorious Hero Krantz",
	"36 rs7star 154": "Demon Manipulator Kafka",
	"37 rs7star 155": "Phosphor Crystal Rineth",
	"38 rs7star 156": "Wave Breaker Quartz",
	"39 rs7star 157": "Quatre Marinus Duran",
	"40 rs7star 158": "Storm Chieftess Mahalu",
	"41 rs7star 159": "Angelic Champion Nadore",
	"42 rs7star 160": "Soul Covenant Charis",
	"43 rs7star 161": "Blazing Emperor Adel",
	"44 rs7star 162": "Alluring Empress Savia",
	"45 rs7star 163": "Gracious Madam Cyan",
	"46 rs7star 164": "Electrical Storm Eldora",
	"47 rs7star 165": "Refulgent Savage Jed",
	"48 rs7star 166": "Tenebrous Wings Reviora",
	"49 rs7star 167": "Undying Flame Avant",
	"50 rs7star 168": "Icicle Mirror Lune",
	"51 rs7star 169": "Heavenly Claymore Dolk",
	"52 rs7star 170": "Thunder Champion Rahgan",
	"53 rs7star 171": "Merciful Beacon Charla",
	"54 rs7star 172": "Calamity Steel Chrome",
	"55 rs7star 173": "Rider Empress Vermilion",
	"56 rs7star 174": "Sacred Lotus Piany",
	"57 rs7star 175": "Malachite Pike Drevas",
	"58 rs7star 176": "Prism Lightning Reud",
	"59 rs7star 177": "Seraph Wings Kiravel",
	"60 rs7star 178": "Sacred Kinnara Febros",
	"61 rs7star 179": "Volcanic Scepter Limera",
	"62 rs7star 180": "Frozen Typhoon Farzen",
	"63 rs7star 181": "Peacock Xena Estelle",
	"64 rs7star 182": "Double Voltage Julius",
	"65 rs7star 183": "Lunar Blade Rouche",
	"66 rs7star 184": "Soul Reaver Laberd",
	"67 rs7star 185": "Scorching Steel Gildorf",
	"68 rs7star 186": "Wyvern Wings Klaus",
	"69 rs7star 187": "Venomous Echo Isterio",
	"70 rs7star 188": "Galvanic Belle Lafiel",
	"71 rs7star 189": "Dharma Seal Reihard",
	"72 rs7star 190": "Ghastly Blaster Malbelle",
	"73 rs7star 191": "Tartarus Blaze Berdette",
	"74 rs7star 192": "Tartarus Flood Sareas",
	"75 rs7star 193": "Tartarus Demolition Dure",
	"76 rs7star 194": "Tartarus Sacrifice Radia",
	"77 rs7star 195": "Sacred Emperor Sirius",
	"78 rs7star 196": "Tartarus Burial Melina",
/* [RS - OMNI EVO] */
    "1 rsoe 197": "Fabled Emperor Kulyuk",
	"2 rsoe 198": "Nereides Treasure Averus",
	"3 rsoe 199": "Tempest Dragon Bestalg",
	"4 rsoe 200": "Steel Automaton Voldoga",
	"5 rsoe 201": "Untainted Justice Layla",
	"6 rsoe 202": "Mauve Tenebrosity Zeal",
	"7 rsoe 203": "Vehement Pyre Golzo",
	"8 rsoe 204": "Absolute Zero Vern",
	"9 rsoe 205": "Natural Whip Leona",
	"10 rsoe 206": "Lightning Menace Silas",
	"11 rsoe 207": "Pious Saint Astall",
	"12 rsoe 208": "Dusk Artemis Eclise",
	"13 rsoe 209": "Garnet Sorceress Shelly",
	"14 rsoe 210": "Arctic Virtuoso Soleil",
	"15 rsoe 211": "Eternal Goddess Felice",
	"16 rsoe 212": "Supreme Thunder Pamela",
	"17 rsoe 213": "Celestial Wings Lara",
	"18 rsoe 214": "Shadow Ocean Mizerka",
	"19 rsoe 215": "Dancing Flames Rengaku",
	"20 rsoe 216": "Dark Allure Azami",
	"21 rsoe 217": "Godly Command Izuna",
	"22 rsoe 218": "Emerald Tusk Daze",
	"23 rsoe 219": "Howling Wolf Zekt",
	"24 rsoe 220": "Sapphire Noble Stein",
	"25 rsoe 221": "Bennu Edge Rayla",
	"26 rsoe 222": "Sage God Melord",
	"27 rsoe 223": "Dark Destruction Kalon",
	"28 rsoe 224": "Heavenly Rift Shura",
	"29 rsoe 225": "Heavenly Spiral Hisui",
	"30 rsoe 226": "Torch Eccentric Malef",
	"31 rsoe 227": "Torrential Scar Holia",
	"32 rsoe 228": "Ideal Subject Lauda",
	"33 rsoe 229": "Wind Princess Rozalia",
	"34 rsoe 230": "Flashing Thief Fizz",
	"35 rsoe 231": "Treasure Demon Gregor",
	"36 rsoe 232": "Dragon Mother Mariela",
	"37 rsoe 233": "Roaring Thunder Viktor",
	"38 rsoe 234": "Brave Emperor Garrel",
	"39 rsoe 235": "Blazing Dragon Lyonesse",
	"40 rsoe 236": "Silva Khopesh Serge",
	"41 rsoe 237": "Roaring Empress Sonia",
	"42 rsoe 238": "Great General Zalts",
	"43 rsoe 239": "Victorious General Gyras",
	"44 rsoe 240": "Supreme Emperor Agress",
	"45 rsoe 241": "Brave Leader Alessa",
	"46 rsoe 242": "Gracious Champion Licht",
	"47 rsoe 243": "Imperial Chain Johan",
	"48 rsoe 244": "Scorching Fang Glenn",
	"49 rsoe 245": "Malachite Steel Lanza",
	"50 rsoe 246": "Auric Echo Eleanor",
	"51 rsoe 247": "Sapphire Dragon Asto",
	"52 rsoe 248": "Angelic Star Janice",
	"53 rsoe 249": "Halting Victory Zekuu",
	"54 rsoe 250": "Pyro Flail Barbara",
	"55 rsoe 251": "Third Eye Diastima",
	"56 rsoe 252": "War Maniac Zeek",
	"57 rsoe 253": "Hailing Blades Camilla",
	"58 rsoe 254": "Viridian Flag Freed",
	"59 rsoe 255": "Magnanimous Bolt Ewan",
	"60 rsoe 256": "Triumphant Blaze Valen",
	"61 rsoe 257": "Pure General Regil",
	"62 rsoe 258": "Soul Eater Zalvard",
	"63 rsoe 259": "Chain Magister Hugh",
	"64 rsoe 260": "Mademoiselle Mariletta",
	"65 rsoe 261": "Bitter Manipulator Zora",
	"66 rsoe 262": "Infernal Pyre Rugahr",
	"67 rsoe 263": "Crystalline Blue Azalea",
	"68 rsoe 264": "Furious Thunder Cleria",
	"69 rsoe 265": "Bizarre Sight Baro",
	"70 rsoe 266": "Metal Flower Ionia",
	"71 rsoe 267": "Disnomian Emperor Shion",
	"72 rsoe 268": "Cosmic Being Amu Yunos",
	"73 rsoe 269": "Celestial Plate Beiorg",
	"74 rsoe 270": "Glorious Shine Mora",
	"75 rsoe 271": "Draconic Emperor Barion",
	"76 rsoe 272": "Sacred Flora Mordlim",
	"77 rsoe 273": "Overflowing Sea Zeleste",
	"78 rsoe 274": "Roaring Skies Ragra",
	"79 rsoe 275": "Graceful Angel Linasera",
	"80 rsoe 276": "Blazing Admonition Agnia",
	"81 rsoe 277": "Boundless Peaks Daros",
	"82 rsoe 278": "Accursed Calamity Velma",
	"83 rsoe 279": "Final Petal Phileine",
	"84 rsoe 280": "Death Soul Mizo Dorte",
	"85 rsoe 281": "Colossal Spirit Jireid",
	"86 rsoe 282": "Master Sage Solos",
	"87 rsoe 283": "Sacred Ashes Jakra",
	"88 rsoe 284": "Sacred Judge Isniel",
	"89 rsoe 285": "Sacred Shift Becstain",
	"90 rsoe 286": "Divine Armor",
	"91 rsoe 287": "Sacred Purpose Lukroar",
	"92 rsoe 288": "Piercing Oath Arsom",
	"93 rsoe 289": "Poised Emperor Reseus",
	"94 rsoe 290": "Possessed Sea Dirk Rezo",
	"95 rsoe 291": "Oceanic Emperor Vaisal",
	"96 rsoe 292": "Cerulean Grace Eriana",
	"97 rsoe 293": "Tenacious Charge Marlo",
	"98 rsoe 294": "Courageous Blade Amus",
	"99 rsoe 295": "Virtuous Paladin Segrud",
	"100 rsoe 296": "Ominous Blade Neviro",
	"101 rsoe 297": "Weald Guardian Nagid",
	"102 rsoe 298": "Storm Guardian Razak",
	"103 rsoe 299": "Inferno Grandeur Ludero",
	"104 rsoe 300": "Booming Charge Gandrei",
	"105 rsoe 301": "Winged Mercy Lumis",
	"106 rsoe 302": "Killer Bolt Ordine",
	"107 rsoe 303": "Divine Blade Alan",
	"108 rsoe 304": "Deadly Edges Ragina",
	"109 rsoe 305": "Daltisk", /* --- NAME UPDATE --- */
	"110 rsoe 306": "Amadurim", /* --- NAME UPDATE --- */
	"111 rsoe 307": "Zegstia", /* --- NAME UPDATE --- */
	"112 rsoe 308": "Wintia", /* --- NAME UPDATE --- */
	"113 rsoe 309": "Rimylette", /* --- NAME UPDATE --- */
	"114 rsoe 310": "Rokuraiza", /* --- NAME UPDATE --- */
/* [NON-RS UNITS] */
    "1 freeall f1": "Ignis Halcyon Vargas",
	"2 freeall f2": "Algor Halcyon Selena",
	"3 freeall f3": "Terra Halcyon Lance",
	"4 freeall f4": "Fulgur Halcyon Eze",
	"5 freeall f5": "Lux Halcyon Atro",
	"6 freeall f6": "Umbra Halcyon Magress",
	"7 freeall f7": "Inferno Beast Zegar",
	"8 freeall f8": "Tidal Dragoon Zephu",
	"9 freeall f9": "Gaia Bow Lario",
	"10 freeall f10": "Gilded General Weiss",
	"11 freeall f11": "Radiant Goddess Luna",
	"12 freeall f12": "Heavenless Bushi Mifune",
	"13 freeall f13": "Imperial Smith Galant",
	"14 freeall f14": "Arctic Rose Stya",
	"15 freeall f15": "Dahlia Fist Nemia",
	"16 freeall f16": "Storm Roundhouse Zeln",
	"17 freeall f17": "Courageous Heart Alma",
	"18 freeall f18": "Shadow Chakra Oboro",
	"19 freeall f19": "Passion Sibyl Freya",
	"20 freeall f20": "Sorrow Sibyl Eliza",
	"21 freeall f21": "Beauty Sibyl Paula",
	"22 freeall f22": "Echo Sibyl Zele",
	"23 freeall f23": "Radiance Sibyl Sola",
	"24 freeall f24": "Eclipse Sibyl Madia",
	"25 freeall f25": "Scorching Sword Reed",
	"26 freeall f26": "Mystical Talon Rhein",
	"27 freeall f27": "Supreme Lawmaker Aneil",
	"28 freeall f28": "Lightning Speed Lucana",
	"29 freeall f29": "Sacred Armor Nevsky",
	"30 freeall f30": "Twin Dragons Eru",
	"31 freeall f31": "Scorching Halberd Lars",
	"32 freeall f32": "Arctic Wings Kyle",
	"33 freeall f33": "Robot Maniac Heins",
	"34 freeall f34": "Demolishing Roar Rutheon",
	"35 freeall f35": "Selene Empress Alicia",
	"36 freeall f36": "Wicked Demon Jade",
	"37 freeall f37": "Sol",
	"38 freeall f38": "Ky",
	"39 freeall f39": "Elphelt",
	"51 freeall m1": "Solar Fervor Seria",
	"52 freeall m2": "Boreal Courage Karl",
	"53 freeall m3": "Seismic Fury Lugina",
	"54 freeall m4": "Radiating Grandeur Paris",
	"55 freeall m5": "Rainbow Goddess Tilith",
	"56 freeall m6": "Effulgent Dusk Grahdens",
	"57 freeall m7": "Blazing Dawn Owen",
	"58 freeall m8": "Skilled Lance Noah",
	"59 freeall m9": "Blind Justice Tesla",
	"60 freeall m10": "Winged Lord Eriole",
	"61 freeall m11": "Informant Elise",
	"62 freeall m12": "Administrator Sera",
	"63 freeall m13": "Logistics Support Lin",
	"64 freeall m14": "Mad God Zebra",
	"65 freeall m15": "Blazing Mare",
	"66 freeall m16": "God of Decay Zurg",
	"67 freeall m17": "Treacherous Graham",
	"68 freeall m18": "Creator Maxwell",
	"69 freeall m19": "Cardes the Malevolent",
	"70 freeall m20": "Zevalhua the Supreme",
	"71 freeall m21": "Beast God Afla Dilith",
	"72 freeall m22": "Sealed God Lucius",
	"73 freeall m23": "Temptress Xie'Jing",
	"74 freeall m24": "Mad Heretic Gazia",
	"75 freeall m25": "Young Mirfah",
	"76 freeall m26": "Retribution Demon Mirfah",
	"77 freeall m27": "Knight of Holy Light Ark",
	"78 freeall m28": "Dark Oracle Knight Ark",
	"79 freeall m29": "Strife God Afla Dilith",
	"80 freeall m30": "Ruling God Zevalhua",
	"81 freeall m31": "Inception God Maxwell",
	"82 freeall m32": "Sovereign God Cardes",
	"83 freeall m33": "Compliant Subduer Mel",
	"84 freeall m34": "Dragon Warrior Liomerg",
	"85 freeall m35": "Demonic Witch Xie'Jing",
	"86 freeall m36": "Callow Flame Owen",
	"87 freeall m37": "Callow Shadow Grahdens",
	"88 freeall m38": "Sacred God Lucius",
	"89 freeall m39": "Loyal Servant Garrett",
	"90 freeall m40": "Pious Emperor Alza Masta",
	"91 freeall m41": "Ezra",
	"92 freeall m42": "Holy Emperor Karna Masta",
/* [GLOBAL] */
    "1 gl d1": "Titan Wing Blaze",
	"2 gl d2": "Abyssal Wing Sae",
	"3 gl d3": "Regalia Wing Dranoel",
	"4 gl d4": "Vorpal Wing Cerise",
	"5 gl d5": "Keymaster Gilnea",
	"6 gl d6": "Deemo and the Girl",
	"7 gl d7": "Dark Deemo and the Girl",
	"8 gl d8": "Xenon & Estia",
	"9 gl d9": "Flare Justice Cayena",
	"10 gl d10": "Gatling Soul Serin",
	"11 gl d11": "Indomitable Cat Bayley",
	"12 gl d12": "Thunderous Oracle Fennia",
	"13 gl d13": "Inimical Valkyrie Vanila",
	"14 gl d14": "Infernal Phantasm Lico",
	"15 gl d15": "Maestro Goddess Miku",
	"16 gl d16": "Stahn",
	"17 gl d17": "Rutee",
	"18 gl d18": "Rita",
	"19 gl d19": "Arche",
	"20 gl d20": "Cress",
	"21 gl d21": "Yuri",
	"22 gl d22": "Barbatos",
	"23 gl d23": "Dhaos",
	"24 gl d24": "Milla",
	"25 gl d25": "Tyrfing",
	"26 gl d26": "Laevateinn",
	"27 gl d27": "Sorcerer's Army Velnar",
	"28 gl d28": "Sorcerer's Army Yuni",
	"29 gl d29": "Wildcat Lindsey",
	"30 gl d30": "Holy Knight Symphonia",
	"31 gl d31": "Captain Yuuri",
	"32 gl d32": "Chronographia Phoena",
	"33 gl d33": "Universal Mage Aludra",
	"34 gl d34": "Silver Wolf Barienna",
	"35 gl d35": "Demon Mira",
	"36 gl d36": "Perdition Goddess Lucia",
	"37 gl d37": "Brave Kurewa & Kuraginn",
	"38 gl d38": "Kyo Kusanagi",
	"39 gl d39": "Omega Rugal",
	"40 gl d40": "Charlotte",
	"41 gl d41": "Eldritch Rocker Haido",
	"42 gl d42": "Autonomous Cotton",
	"43 gl d43": "Mard Geer",
	"44 gl d44": "Logi",
	"45 gl d45": "Foxblade Kitsu",
	"51 gl g1": "Abyssal Witch Ciara",
	"52 gl g2": "Pumleficent Semira",
	"53 gl g3": "Raging Nick",
	"54 gl g4": "Avalanche Jack",
	"55 gl g5": "Snow Queen Eva",
	"56 gl g6": "Herculean Ultor",
	"57 gl g7": "Neptunian Tridon",
	"58 gl g8": "Ruinous Andaria",
	"59 gl g9": "Imperator Zedus",
	"60 gl g10": "Archangel Aurelia",
	"61 gl g11": "Deathless Hadaron",
	"62 gl g12": "Heroes Fei and Fang",
	"63 gl g13": "Plasma Blaster Bonnie",
	"64 gl g14": "Eggspert Huntress Carrol",
	"65 gl g15": "Passion Soprano Meiko",
	"66 gl g16": "Digital Rhapsody Kaito",
	"67 gl g17": "Melody Kagamine Rin",
	"68 gl g18": "Harmony Kagamine Len",
	"69 gl g19": "Crescendo Megurine Luka",
	"70 gl g20": "Slayer Grandt",
	"71 gl g21": "Chrono Mage Elaina",
	"72 gl g22": "Deimos Thunderborn",
	"73 gl g23": "Void Walker Zenia",
	"74 gl g24": "Infernal Ravager Korzan",
	"75 gl g25": "Boreal Tempest Haile",
	"76 gl g26": "Monster Hunter Avani",
	"77 gl g27": "Storm Champion Mikael",
	"78 gl g28": "Loremaster Allanon",
	"79 gl g29": "Little Sister Nyami",
	"80 gl g30": "Doombringer Azurai",
	"81 gl g31": "Big Sister Nyala",
	"82 gl g32": "Scourgemistress Adriesta",
	"83 gl g33": "Fate-Eater Ilm",
	"84 gl g34": "White Wulf Faelan",
	"85 gl g35": "Owlrider Jute Eerikki",
	"86 gl g36": "Silver Queen Gabriela",
	"87 gl g37": "Hellborne Honeypot Luina",
	"88 gl g38": "Starpyre Lancer Zeis",
	"89 gl g39": "Tidal Stormsurge Galea",
	"90 gl g40": "Blightblade Wannahon",
	"91 gl g41": "Viper Blitzkrieg Durumn",
	"92 gl g42": "Silver Mechmagos Ceulfan",
	"93 gl g43": "Titanbane Primus Keres",
	"94 gl g44": "Battle Admiral Laresa",
	"95 gl g45": "White Death Ravea",
	"96 gl g46": "Steel Magnus Dessit",
	"97 gl g47": "Sonic Blaster Vashi",
	"98 gl g48": "Mobile Pathfinder Enile",
	"99 gl g49": "Warp Arcanist Savei",
	"100 gl g50": "Tridon the Judicious",
	"101 gl l1": "Infinity Starsage Zeruiah",
	"102 gl l2": "Lycanthrope Randolph",
	"103 gl l3": "Landeythan Ravenna",
	"104 gl l4": "Empyrean Juno-Seto",
	"105 gl l5": "Void Pasha Ensa-Taya",
	"106 gl l6": "Mankai Sakura Miku",
	"107 gl l7": "Zero",
	"108 gl l8": "Mai Shiranui",
	"109 gl l9": "Kula Diamond",
	"110 gl l10": "Terry Bogard",
	"111 gl l11": "Benimaru Nikaido",
	"112 gl l12": "Athena Asamiya",
	"113 gl l13": "Iori Yagami",
	"114 gl l14": "Hallelujah",
	"115 gl l15": "Gaston",
	"116 gl l16": "Toki",
	"117 gl l17": "Ruinous Despoiler Galtier",
	"118 gl l18": "Rain (GL)",
	"1-19 gl l19": "Lasswell (GL)",
	"1-20 gl l20": "Lid",
	"1-21 gl l21": "Fina (GL)",
	"1-22 gl l22": "Silent Sentinel Silvie",
	"1-23 gl l23": "Blazing Phoenix Feng",
	"1-24 gl l24": "Leona",
	"1-25 gl l25": "Laughing Devil Long",
	"1-26 gl l26": "Ebil Genius Vikki",
	"1-27 gl l27": "Dizzy",
	"1-28 gl l28": "Millia",
	"1-29 gl l29": "Jack-O'",
	"1-30 gl l30": "Ramlethal",
	"1-31 gl l31": "Sunless Warden Rahotep",
	"1-33 gl l33": "Divine Rogue Hetepheres",
	"1-34 gl l34": "Dusk Star Khepratum",
	"1-36 gl l36": "Midnight Judge Neferet",
	"1-37 gl l37": "Immortal Firewing Blaze",
	"1-38 gl l38": "Great Omniscience Sae",
	"1-39 gl l39": "Dark Soul Dranoel",
	"1-40 gl l40": "Storm Queen Cerise",
	"1-41 gl l41": "Brilliant Flash Fiona",
	"1-42 gl l42": "Occult Reaper Ciardha",
	"1-43 gl l43": "Natsu Dragneel",
	"1-44 gl l44": "Gray Fullbuster",
	"1-45 gl l45": "Erza Scarlet",
	"1-46 gl l46": "Lucy Heartfilia",
	"1-47 gl l47": "Carnal Domia Beatrix",
	"1-48 gl l48": "Baiken",
	"1-49 gl l49": "Leo Whitefang",
	"1-50 gl l50": "Johnny",
/* [GL Extended] */
	"1 gle g51": "Fate-Holder al-Akqat",
	"3 gle g53": "Verdant Góēs Nimune",
	"26 gle l51": "May",
	"27 gle l52": "Lofia",
	"28 gle l53": "Chloe",
	"29 gle l54": "Cheery Bjørn & Linlin",
/* [JP + EU] */
    "1 jpeu a1": "Randi",
	"2 jpeu a2": "Primm",
	"3 jpeu a3": "Popoi",
	"4 jpeu a4": "Flammie",
	"5 jpeu a5": "Aria",
	"6 jpeu a6": "Iris",
	"7 jpeu a7": "Ruruha",
	"8 jpeu a8": "Nashiru",
	"9 jpeu a9": "Gandalf",
	"10 jpeu a10": "Bilbo",
	"11 jpeu a11": "Legolas",
	"12 jpeu a12": "Ominous Lantern Lumie",
	"13 jpeu a13": "Vengeance Flail Sylvia",
	"14 jpeu a14": "Kanna",
	"15 jpeu a15": "Ura",
	"16 jpeu a16": "Adam",
	"17 jpeu a17": "Ruby Successor Reda",
	"18 jpeu a18": "Aguresa",
	"19 jpeu a19": "Aria",
	"20 jpeu a20": "Kain",
	"21 jpeu a21": "Coolan",
	"22 jpeu a22": "Hina",
	"23 jpeu a23": "Arthur",
	"24 jpeu a24": "Loneca",
	"25 jpeu a25": "Samantha",
	"26 jpeu a26": "Rogi",
    "27 jpeu a27": "Haruto",
	"28 jpeu a28": "Dino",
	"29 jpeu a29": "Fiida",
	"30 jpeu a30": "Yoshida",
	"31 jpeu a31": "Deluxe Fighter",
	"32 jpeu a32": "Philip",
	"33 jpeu a33": "Dr. Leonardo",
	"34 jpeu a34": "President",
	"35 jpeu a35": "Buddha-Pas",
	"36 jpeu a36": "Rahm",
	"37 jpeu a37": "Militant Leader Rahnas",
	"38 jpeu a38": "Rain (JP)",
	"39 jpeu a39": "Lasswell (JP)",
	"40 jpeu a40": "Fina (JP)",
	"41 jpeu a41": "Claudia",
	"42 jpeu a42": "Mari",
	"51 jpeu e1": "Jack's Army",
	"52 jpeu e2": "Generous Santa",
	"53 jpeu e3": "Skalmold, Last Stand",
	"54 jpeu e4": "Goddess Svafa",
	"55 jpeu e5": "Goddess Eir",
	"56 jpeu e6": "Goddess Thrud",
	"57 jpeu e7": "Goddess Alvitr",
	"58 jpeu e8": "Goddess Geirdriful",
	"59 jpeu e9": "God Etudrev",
	"60 jpeu e10": "Goddess Aymarks",
	"61 jpeu e11": "God Sotnarg",
	"62 jpeu e12": "God Tuanregguj",
	"63 jpeu e13": "Llewxam, Weaver of Fate",
	"64 jpeu e14": "God Arbez",
	"65 jpeu e15": "Omega Inquisitor Heinrich",
	"66 jpeu e16": "Abyssal Admiral Cornelius",
	"67 jpeu e17": "Penitent Empress Jade",
	"68 jpeu e18": "Warhammer Jason",
	"69 jpeu e19": "Tireless Stalker Magena",
	"70 jpeu e20": "Executors of the Will",
	"71 jpeu e21": "Warlord Coal Cauldron",
	"72 jpeu e22": "Bad Lands Queen Gazolina",
	"73 jpeu e23": "Heavy Voodoo Child",
	"74 jpeu e24": "Stratospheric Crash Belt",
	"75 jpeu e25": "Avenging Angel Blink",
	"76 jpeu e26": "Warlord Pig-Bull",
	"77 jpeu e27": "Fallen Morgana",
	"78 jpeu e28": "Viviane & Excalibur",
	"79 jpeu e29": "Crusader Perceval",
	"80 jpeu e30": "Mordred",
	"81 jpeu e31": "Dark Path Arthur",
	"82 jpeu e32": "Wayward Merlin",
	"83 jpeu e33": "Balance Bringer Plumatachi",
	"84 jpeu e34": "Duality Queen Freyja",
	"85 jpeu e35": "Herald of Yggdrasil",
	"86 jpeu e36": "Sagittarius of Renewal",
	"87 jpeu e37": "Pisces of Tyranny",
	"88 jpeu e38": "Capricorn of Devotion",
	"89 jpeu e39": "Aquarius of Weeping",
	"90 jpeu e40": "Gemini of Abomination",
	"91 jpeu e41": "Aries of Enslavement",
	"92 jpeu e42": "Leo of Indifference",
	"93 jpeu e43": "Cancer of Sacrifice",
	"94 jpeu e44": "Taurus of Fate",
	"95 jpeu e45": "Libra of Judgement",
	"96 jpeu e46": "Virgo of Virtue",
	"97 jpeu e47": "Scorpio of Secrets",
	"98 jpeu e48": "Riftwalker Sedrac",
	"99 jpeu e49": "Bellicose Princess Ninmah",
	"100 jpeu e50": "Superior Kaiser Enki",
	"101 jpeu e51": "Utopian Chimera Amadeus",
	"102 jpeu e52": "Royal Guard Galahad",
	"103 jpeu e53": "Kingslayer Lancelot",
	"104 jpeu e54": "Lucy & Prince Bogey",
	"105 jpeu e55": "Saint of Love Sergio",
	"106 jpeu e56": "Goddess of Love Julia",
	"107 jpeu e57": "Enhanced Bein Gwenevere",
	"108 jpeu e58": "Nitro Warlord Jake",
	"109 jpeu e59": "Peacekeeper Sesir",
	"110 jpeu e60": "Flawless Assassin Natalamé",
	"111 jpeu e61": "Techtonic Ruler Cobalt",
	"112 jpeu e62": "Magma Apex Surt",
	"113 jpeu e63": "Undefeated Apex Utheria",
	"114 jpeu e64": "Zodical Apex Ophiuchus",
	"115 jpeu e65": "Lonely Apex Sheriff",
	"116 jpeu e66": "Kaiser Apex Gilgamesh",
	"117 jpeu e67": "Wisdom Apex Auhlavez",
	"118 jpeu e68": "Trinity Goddess Htilit",
	"1-19 jpeu e69": "Lunatic Warrior Jeanne",
	"1-20 jpeu e70": "Harsh Terror Robespierre",
	"1-21 jpeu e71": "Humanity Betrayer Nelson",
	"1-22 jpeu e72": "Living Phoenix Migina",
	"1-23 jpeu e73": "Cruel Matriarch Cosette",
	"1-24 jpeu e74": "Swift Boxer Natasha",
/* [ALT] */
    "1 alt 26-alt": "Salacia Persei Elimo (Alt)",
    "2 alt 85-alt": "Chivalrous Thief Zelnite (Alt)",
	"3 alt g22-alt": "Deimos Thunderborn (Alt)",
	"4 alt g45-alt": "White Death Ravea (Alt)",
	"5 alt g46-alt": "Steel Magnus Dessit (Alt)",
	"6 alt g49-alt": "Warp Arcanist Savei (Alt)",
	"7 alt 267-alt": "Disnomian Emperor Shion (Alt)",
	"8 alt m41-alt": "Ezra (Alt)",
	"9 alt m35-alt": "Demonic Witch Xie'Jing (Alt)",
	"11 alt g41-alt": "Viper Blitzkrieg Durumn (Alt)",
};