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
    "1 rslegacy 750": "Dragon God Granados",
	"2 rslegacy 751": "Aqua Goddess Abel",
	"3 rslegacy 752": "Elf Queen Arbonella",
	"4 rslegacy 753": "Bolt Phoenix Ardas",
	"5 rslegacy 754": "Sky Goddess Raquel",
	"6 rslegacy 755": "Dark Lord Zaboeth",
	"7 rslegacy 755": "",
	"8 rslegacy 755": "",
	"9 rslegacy 755": "",
	"10 rslegacy 755": "",
	"11 rslegacy 755": "",
	"12 rslegacy 755": "",
	"13 rslegacy 755": "",
	"14 rslegacy 755": "",
	"15 rslegacy 755": "",
	"16 rslegacy 755": "",
	"17 rslegacy 755": "",
	"18 rslegacy 755": "",
	"19 rslegacy 755": "",
	"20 rslegacy 755": "",
	"21 rslegacy 755": "",
	"22 rslegacy 755": "",
	"23 rslegacy 755": "",
	"24 rslegacy 755": "",
	"25 rslegacy 755": "",
	"26 rslegacy 755": "",
	"27 rslegacy 755": "",
	"28 rslegacy 755": "",
	"29 rslegacy 755": "",
	"30 rslegacy 755": "",
	"31 rslegacy 755": "",
	"32 rslegacy 755": "",
	"33 rslegacy 755": "",
	"34 rslegacy 755": "",
	"35 rslegacy 755": "",
	"36 rslegacy 755": "",
	"37 rslegacy 755": "",
	"38 rslegacy 755": "",
	"39 rslegacy 755": "",
	"40 rslegacy 755": "",
	"41 rslegacy 755": "",
	"42 rslegacy 755": "",
	"43 rslegacy 755": "",
	"44 rslegacy 755": "",
	"45 rslegacy 755": "",
	"46 rslegacy 755": "",
	"47 rslegacy 755": "",
	"48 rslegacy 755": "",
	"49 rslegacy 755": "",
	"50 rslegacy 755": "",
	"51 rslegacy 755": "",
	"52 rslegacy 755": "",
	"53 rslegacy 755": "",
	"54 rslegacy 755": "",
	"55 rslegacy 755": "",
	"56 rslegacy 755": "",
	"57 rslegacy 755": "",
	"58 rslegacy 755": "",
	"59 rslegacy 755": "",
	"60 rslegacy 755": "",
	"61 rslegacy 755": "",
	"62 rslegacy 755": "",
	"63 rslegacy 755": "",
	"64 rslegacy 755": "",
	"65 rslegacy 755": "",
	"66 rslegacy 755": "",
	"67 rslegacy 755": "",
	"68 rslegacy 755": "",
	"69 rslegacy 755": "",
	"70 rslegacy 755": "",
	"71 rslegacy 755": "",
	"72 rslegacy 755": "",
	"73 rslegacy 755": "",
	"74 rslegacy 755": "",
	"75 rslegacy 755": "",
	"76 rslegacy 755": "",
	"77 rslegacy 755": "",
	"78 rslegacy 755": "",
	"79 rslegacy 755": "",
	"80 rslegacy 755": "",
	"81 rslegacy 755": "",
	"82 rslegacy 755": "",
	"83 rslegacy 755": "",
	"84 rslegacy 755": "",
	"85 rslegacy 755": "",
	"86 rslegacy 755": "",
	"87 rslegacy 755": "",
	"88 rslegacy 755": "",
	"89 rslegacy 755": "",
	"90 rslegacy 755": "",
	"91 rslegacy 755": "",
	"92 rslegacy 755": "",
	"93 rslegacy 755": "",
	"94 rslegacy 755": "",
	"95 rslegacy 755": "",
	"96 rslegacy 755": "",
	"97 rslegacy 755": "",
	"98 rslegacy 755": "",
	"99 rslegacy 755": "",
	"100 rslegacy 755": "",
	"101 rslegacy 755": "",
	"102 rslegacy 755": "",
	"103 rslegacy 755": "",
	"104 rslegacy 755": "",
	"105 rslegacy 755": "",
	"106 rslegacy 755": "",
	"107 rslegacy 755": "",
	"108 rslegacy 755": "",
	"109 rslegacy 755": "",
	"110 rslegacy 755": "",
	"111 rslegacy 755": "",
	"112 rslegacy 755": "",
	"113 rslegacy 755": "",
	"114 rslegacy 755": "",
	"115 rslegacy 755": "",
	"116 rslegacy 755": "",
	"117 rslegacy 755": "",
	"118 rslegacy 755": "",
/* [RS - 7 STAR] */
    "1 rs7star 852": "Brimstone Emperor Alpha",
	"2 rs7star 852": "",
	"3 rs7star 852": "",
	"4 rs7star 852": "",
	"5 rs7star 852": "",
	"6 rs7star 852": "",
	"7 rs7star 852": "",
	"8 rs7star 852": "",
	"9 rs7star 852": "",
	"10 rs7star 852": "",
	"11 rs7star 852": "",
	"12 rs7star 852": "",
	"13 rs7star 852": "",
	"14 rs7star 852": "",
	"15 rs7star 852": "",
	"16 rs7star 852": "",
	"17 rs7star 852": "",
	"18 rs7star 852": "",
	"19 rs7star 852": "",
	"20 rs7star 852": "",
	"21 rs7star 852": "",
	"22 rs7star 852": "",
	"23 rs7star 852": "",
	"24 rs7star 852": "",
	"25 rs7star 852": "",
	"26 rs7star 852": "",
	"27 rs7star 852": "",
	"28 rs7star 852": "",
	"29 rs7star 852": "",
	"30 rs7star 852": "",
	"31 rs7star 852": "",
	"32 rs7star 852": "",
	"33 rs7star 852": "",
	"34 rs7star 852": "",
	"35 rs7star 852": "",
	"36 rs7star 852": "",
	"37 rs7star 852": "",
	"38 rs7star 852": "",
	"39 rs7star 852": "",
	"40 rs7star 852": "",
	"41 rs7star 852": "",
	"42 rs7star 852": "",
	"43 rs7star 852": "",
	"44 rs7star 852": "",
	"45 rs7star 852": "",
	"46 rs7star 852": "",
	"47 rs7star 852": "",
	"48 rs7star 852": "",
	"49 rs7star 852": "",
	"50 rs7star 852": "",
	"51 rs7star 852": "",
	"52 rs7star 852": "",
	"53 rs7star 852": "",
	"54 rs7star 852": "",
	"55 rs7star 852": "",
	"56 rs7star 852": "",
	"57 rs7star 852": "",
	"58 rs7star 852": "",
	"59 rs7star 852": "",
	"60 rs7star 852": "",
	"61 rs7star 852": "",
	"62 rs7star 852": "",
	"63 rs7star 852": "",
	"64 rs7star 852": "",
	"65 rs7star 852": "",
	"66 rs7star 852": "",
	"67 rs7star 852": "",
	"68 rs7star 852": "",
	"69 rs7star 852": "",
	"70 rs7star 852": "",
	"71 rs7star 852": "",
	"72 rs7star 852": "",
	"73 rs7star 852": "",
	"74 rs7star 852": "",
	"75 rs7star 852": "",
	"76 rs7star 852": "",
	"77 rs7star 852": "",
	"78 rs7star 852": "",
/* [RS - OMNI EVO] */
    "1 rsoe 1309": "Fabled Emperor Kulyuk",
	"2 rsoe 852": "",
	"3 rsoe 852": "",
	"4 rsoe 852": "",
	"5 rsoe 852": "",
	"6 rsoe 852": "",
	"7 rsoe 852": "",
	"8 rsoe 852": "",
	"9 rsoe 852": "",
	"10 rsoe 852": "",
	"11 rsoe 852": "",
	"12 rsoe 852": "",
	"13 rsoe 852": "",
	"14 rsoe 852": "",
	"15 rsoe 852": "",
	"16 rsoe 852": "",
	"17 rsoe 852": "",
	"18 rsoe 852": "",
	"19 rsoe 852": "",
	"20 rsoe 852": "",
	"21 rsoe 852": "",
	"22 rsoe 852": "",
	"23 rsoe 852": "",
	"24 rsoe 852": "",
	"25 rsoe 852": "",
	"26 rsoe 852": "",
	"27 rsoe 852": "",
	"28 rsoe 852": "",
	"29 rsoe 852": "",
	"30 rsoe 852": "",
	"31 rsoe 852": "",
	"32 rsoe 852": "",
	"33 rsoe 852": "",
	"34 rsoe 852": "",
	"35 rsoe 852": "",
	"36 rsoe 852": "",
	"37 rsoe 852": "",
	"38 rsoe 852": "",
	"39 rsoe 852": "",
	"40 rsoe 852": "",
	"41 rsoe 852": "",
	"42 rsoe 852": "",
	"43 rsoe 852": "",
	"44 rsoe 852": "",
	"45 rsoe 852": "",
	"46 rsoe 852": "",
	"47 rsoe 852": "",
	"48 rsoe 852": "",
	"49 rsoe 852": "",
	"50 rsoe 852": "",
	"51 rsoe 852": "",
	"52 rsoe 852": "",
	"53 rsoe 852": "",
	"54 rsoe 852": "",
	"55 rsoe 852": "",
	"56 rsoe 852": "",
	"57 rsoe 852": "",
	"58 rsoe 852": "",
	"59 rsoe 852": "",
/* [NON-RS UNITS] */
    "1 freeall 1302": "Ignis Halcyon Vargas",
	"2 freeall 852": "",
	"3 freeall 852": "",
	"4 freeall 852": "",
	"5 freeall 852": "",
	"6 freeall 852": "",
	"7 freeall 852": "",
	"8 freeall 852": "",
	"9 freeall 852": "",
	"10 freeall 852": "",
	"11 freeall 852": "",
	"12 freeall 852": "",
	"13 freeall 852": "",
	"14 freeall 852": "",
	"15 freeall 852": "",
	"16 freeall 852": "",
	"17 freeall 852": "",
	"18 freeall 852": "",
	"19 freeall 852": "",
	"20 freeall 852": "",
	"21 freeall 852": "",
	"22 freeall 852": "",
	"23 freeall 852": "",
	"24 freeall 852": "",
	"25 freeall 852": "",
	"26 freeall 852": "",
	"27 freeall 852": "",
	"28 freeall 852": "",
	"29 freeall 852": "",
	"30 freeall 852": "",
	"31 freeall 852": "",
	"32 freeall 852": "",
	"33 freeall 852": "",
	"34 freeall 852": "",
	"35 freeall 852": "",
	"36 freeall 852": "",
	"51 freeall 755": "",
	"52 freeall 755": "",
	"53 freeall 755": "",
	"54 freeall 755": "",
	"55 freeall 755": "",
	"56 freeall 755": "",
	"57 freeall 755": "",
	"58 freeall 755": "",
	"59 freeall 755": "",
	"60 freeall 755": "",
	"61 freeall 755": "",
	"62 freeall 755": "",
	"63 freeall 755": "",
	"64 freeall 755": "",
	"65 freeall 755": "",
	"66 freeall 755": "",
	"67 freeall 755": "",
	"68 freeall 755": "",
	"69 freeall 755": "",
	"70 freeall 755": "",
	"71 freeall 755": "",
	"72 freeall 755": "",
	"73 freeall 755": "",
	"74 freeall 755": "",
	"75 freeall 755": "",
	"76 freeall 755": "",
	"77 freeall 755": "",
	"78 freeall 755": "",
	"79 freeall 755": "",
	"80 freeall 755": "",
	"81 freeall 755": "",
	"82 freeall 755": "",
/* [GLOBAL] */
    "1 gl 8033": "Titan Wing Blaze",
	"2 gl 852": "",
	"3 gl 852": "",
	"4 gl 852": "",
	"5 gl 852": "",
	"6 gl 852": "",
	"7 gl 852": "",
	"8 gl 852": "",
	"9 gl 852": "",
	"10 gl 852": "",
	"11 gl 852": "",
	"12 gl 852": "",
	"13 gl 852": "",
	"14 gl 852": "",
	"15 gl 852": "",
	"16 gl 852": "",
	"17 gl 852": "",
	"18 gl 852": "",
	"19 gl 852": "",
	"20 gl 852": "",
	"21 gl 852": "",
	"22 gl 852": "",
	"23 gl 852": "",
	"24 gl 852": "",
	"25 gl 852": "",
	"26 gl 852": "",
	"27 gl 852": "",
	"28 gl 852": "",
	"29 gl 852": "",
	"30 gl 852": "",
	"31 gl 852": "",
	"32 gl 852": "",
	"33 gl 852": "",
	"34 gl 852": "",
	"35 gl 852": "",
	"36 gl 852": "",
	"37 gl 852": "",
	"38 gl 852": "",
	"39 gl 852": "",
	"40 gl 852": "",
	"41 gl 852": "",
	"51 gl 755": "",
	"52 gl 755": "",
	"53 gl 755": "",
	"54 gl 755": "",
	"55 gl 755": "",
	"56 gl 755": "",
	"57 gl 755": "",
	"58 gl 755": "",
	"59 gl 755": "",
	"60 gl 755": "",
	"61 gl 755": "",
	"62 gl 755": "",
	"63 gl 755": "",
	"64 gl 755": "",
	"65 gl 755": "",
	"66 gl 755": "",
	"67 gl 755": "",
	"68 gl 755": "",
	"69 gl 755": "",
	"70 gl 755": "",
	"71 gl 755": "",
	"72 gl 755": "",
	"73 gl 755": "",
	"74 gl 755": "",
	"75 gl 755": "",
	"76 gl 755": "",
	"77 gl 755": "",
	"78 gl 755": "",
	"79 gl 755": "",
	"80 gl 755": "",
	"81 gl 755": "",
	"82 gl 755": "",
	"83 gl 755": "",
	"84 gl 755": "",
	"85 gl 755": "",
	"86 gl 755": "",
	"87 gl 755": "",
	"88 gl 755": "",
	"89 gl 755": "",
	"90 gl 755": "",
	"91 gl 755": "",
	"92 gl 755": "",
	"93 gl 755": "",
	"101 gl 755": "",
	"102 gl 755": "",
	"103 gl 755": "",
	"104 gl 755": "",
	"105 gl 755": "",
	"106 gl 755": "",
	"107 gl 755": "",
	"108 gl 755": "",
	"109 gl 755": "",
	"110 gl 755": "",
	"111 gl 755": "",
	"112 gl 755": "",
	"113 gl 755": "",
	"114 gl 755": "",
	"115 gl 755": "",
	"116 gl 755": "",
	"117 gl 755": "",
	"118 gl 755": "",
	"119 gl 755": "",
	"120 gl 755": "",
	"121 gl 755": "",
	"122 gl 755": "",
/* [JP + EU] */
    "1 jpeu 1195": "",
	"2 jpeu 852": "",
	"3 jpeu 852": "",
	"4 jpeu 852": "",
	"5 jpeu 852": "",
	"6 jpeu 852": "",
	"7 jpeu 852": "",
	"8 jpeu 852": "",
	"9 jpeu 852": "",
	"10 jpeu 852": "",
	"11 jpeu 852": "",
	"12 jpeu 852": "",
	"13 jpeu 852": "",
	"14 jpeu 852": "",
	"15 jpeu 852": "",
	"16 jpeu 852": "",
	"17 jpeu 852": "",
	"18 jpeu 852": "",
	"19 jpeu 852": "",
	"20 jpeu 852": "",
	"21 jpeu 852": "",
	"22 jpeu 852": "",
	"23 jpeu 852": "",
	"24 jpeu 852": "",
	"25 jpeu 852": "",
	"26 jpeu 852": "",
    "27 jpeu 1195": "Haruto",
	"28 jpeu 852": "",
	"29 jpeu 852": "",
	"30 jpeu 852": "",
	"31 jpeu 852": "",
	"32 jpeu 852": "",
	"33 jpeu 852": "",
	"34 jpeu 852": "",
	"35 jpeu 852": "",
	"36 jpeu 852": "",
	"37 jpeu 852": "",
	"38 jpeu 852": "",
	"39 jpeu 852": "",
	"40 jpeu 852": "",
	"41 jpeu 852": "",
	"51 jpeu 755": "",
	"52 jpeu 755": "",
	"53 jpeu 755": "",
	"54 jpeu 755": "",
	"55 jpeu 755": "",
	"56 jpeu 755": "",
	"57 jpeu 755": "",
	"58 jpeu 755": "",
	"59 jpeu 755": "",
	"60 jpeu 755": "",
	"61 jpeu 755": "",
	"62 jpeu 755": "",
	"63 jpeu 755": "",
	"64 jpeu 755": "",
	"65 jpeu 755": "",
	"66 jpeu 755": "",
	"67 jpeu 755": "",
	"68 jpeu 755": "",
	"69 jpeu 755": "",
	"70 jpeu 755": "",
	"71 jpeu 755": "",
	"72 jpeu 755": "",
	"73 jpeu 755": "",
	"74 jpeu 755": "",
	"75 jpeu 755": "",
	"76 jpeu 755": "",
	"77 jpeu 755": "",
	"78 jpeu 755": "",
	"79 jpeu 755": "",
	"80 jpeu 755": "",
	"81 jpeu 755": "",
	"82 jpeu 755": "",
	"83 jpeu 755": "",
	"84 jpeu 755": "",
	"85 jpeu 755": "",
	"86 jpeu 755": "",
	"87 jpeu 755": "",
	"88 jpeu 755": "",
	"89 jpeu 755": "",
	"90 jpeu 755": "",
	"91 jpeu 755": "",
	"92 jpeu 755": "",
	"93 jpeu 755": "",
	"94 jpeu 755": "",
	"95 jpeu 755": "",
	"96 jpeu 755": "",
	"97 jpeu 755": "",
	"98 jpeu 755": "",
	"99 jpeu 755": "",
	"100 jpeu 755": "",
	"101 jpeu 755": "",
	"102 jpeu 755": "",
	"103 jpeu 755": "",
	"104 jpeu 755": "",
/* [ALT] */
    "1 alt 880": "Angelic Blades Sefia (Alt)",
	"2 alt 1002": "Wildfire Lotus Michele (Alt)",
	"3 alt 8132": "Deimos Thunderborn (Alt)",
};