let button1;
let button2;

function setup() {
	createCanvas(1152, 648);
	bg = loadImage('https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png');
	button1 = createButton('To Second Floor');
    button1.position(800, 100);
  	button1.mousePressed(goToLink1);
	button2 = createButton('To Campus Map');
	button2.position(950, 100);
	button2.mousePressed(goToLink2);
}

function goToLink1() {
	window.location.href = 'donsecond.html';
}
function goToLink2() {
	window.location.href = 'mapexample.html';
}

var points = ['E1', 'A1', 'A2', 'A3', 'A4', '111a', 'A5', '111b', 'A6', 'STAIRS2',"2E2", "2B3", "2B2", "2B1", "2A3","207"];

var coordinates = {
    "E3": [850, 200],
    "A8": [850, 275],
    "C6": [995, 275],
	"C2": [910, 275],
	"C3": [945, 275],
	"A7": [850, 350],
	"C4": [945, 300],
	"C6": [995, 275],
	"E2": [608, 243],
	"E1": [82, 253],
	"C7": [1052, 275],
	"C8": [1087, 278],
	"A1": [132, 294],
	"C5": [996, 304],
	"A2": [234, 320],
	"A3": [320, 339],
	"A5": [575, 342],
	"A4": [432, 342],
	"A6": [624, 343],
	"C1": [886, 356],
	"B1": [442, 398],
	"B3": [621, 395],
	"B2": [526, 397],
	"115a": [870, 250],
	"112G": [935, 309],
	"STAIRS3": [825, 240],
	"ELEVATOR2": [830, 275],
	"101": [116, 255],
	"115b": [902, 261],
	"117": [994, 261],
	"121": [1078, 262],
	"119": [1034, 264],
	"STAIRS2": [626, 275],
	"103": [206, 279],
	"114": [1026, 288],
	"108": [300, 286],
	"107": [325, 285],
	"116": [1058, 288],
	"112a": [908, 293],
	"STAIRS4": [1084, 302],
	"ELEVATOR1": [626, 304],
	"111b": [573, 309],
	"112C": [954, 308],
	"112E": [989, 308],
	"112F": [1006, 309],
	"112B": [935, 309],
	"112D": [971, 309],
	"102": [86, 316],
	"111a": [464, 323],
	"110": [875, 329],
	"112b": [904, 331],
	"108A": [908, 348],
	"104": [108, 356],
	"STAIRS1": [141, 358],
	"160": [180, 365],
	"108B": [909, 363],
	"108G": [833, 368],
	"108F": [849, 368],
	"108E": [866, 368],
	"108D": [883, 368],
	"108C": [898, 369],
	"161": [226, 371],
	"106A": [653, 379],
	"106M": [466, 382],
	"106N": [489, 382],
	"106O": [515, 382],
	"106P": [539, 383],
	"106Q": [576, 382],
	"162": [425, 388],
	"106B": [656, 408],
	"106I": [498, 418],
	"106G": [547, 421],
	"106L": [433, 420],
	"106J": [475, 421],
	"106E": [597, 420],
	"106K": [454, 420],
	"106H": [524, 421],
	"106F": [573, 422],
	"106D": [621, 425],
	"106C": [642, 428],
	};

function draw() {
    background(bg);
    stroke(50, 50, 250);
    strokeWeight(5);

    // Draw lines between points
    for (let i = 0; i < points.length - 1; i++) {
        let point1 = coordinates[points[i]];
        let point2 = coordinates[points[i + 1]];
        if (point1 && point2) {
            line(point1[0], point1[1], point2[0], point2[1]);
        }
    }
}