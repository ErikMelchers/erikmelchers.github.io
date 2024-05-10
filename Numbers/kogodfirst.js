function setup() {
	createCanvas(1920, 1080);
	bg = loadImage('https://i.postimg.cc/qqMnkzKd/Kogod-Floor1-Labelled-With-Points.png');
}

function draw() {
    background(bg);
    stroke(0, 0, 0);
    strokeWeight(5);
}

var coordinates = {
    "118a": [816, 720],
    "118b": [1096, 721],
    "174": [853, 766],
    "175": [1062, 766],
    "A10": [551, 539],
    "A8": [321, 540],
    "A7": [217, 541],
    "A9": [423, 543],
    "A6": [130, 544],
    "A11": [630, 550],
    "B8": [1339, 598],
    "B9": [1618, 598],
    "E3": [1789, 603],
    "STAIRS2": [697, 649],
    "STAIRS3": [1188, 679],
    "STAIRS1": [105, 694],
    "B7": [1335, 699],
    "196": [1659, 822],
    "B3": [1087, 828],
    "A5": [144, 829],
    "B1": [745, 829],
    "A4": [280, 831],
    "A3": [376, 831],
    "A2": [501, 831],
    "B2": [823, 831],
    "B4": [1174, 831],
    "A1": [628, 834],
    "STAIRS4": [1800, 870],
    "B5": [1188, 942],
    "E1": [624, 976],
    "E2": [1341, 979],
    "122D": [1534, 342],
    "122E": [1578, 343],
    "122F": [1675, 345],
    "122G": [1717, 345],
    "122H": [1822, 345],
    "122K": [1842, 378],
    "122B": [1519, 394],
    "122A": [1584, 396],
    "115A": [706, 454],
    "110": [171, 510],
    "112": [336, 510],
    "113": [391, 510],
    "111": [217, 511],
    "114": [511, 513],
    "122": [1653, 528],
    "115": [690, 547],
    "116": [304, 568],
    "109": [217, 570],
    "103": [445, 571],
    "103A": [468, 657],
    "173": [748, 796],
    "RR1": [1534, 796],
    "RR2": [1536, 846],
    "106": [265, 799],
    "100": [301, 799],
    "108": [108, 822],
    "107": [168, 861],
    "105": [220, 861],
    "104": [337, 861],
    "102": [376, 861],
    "120": [741, 861],
    "101": [502, 862],
    "B10": [1648, 375],
    "B11": [1790, 375],
    "ELEVATOR": [506, 576],
}