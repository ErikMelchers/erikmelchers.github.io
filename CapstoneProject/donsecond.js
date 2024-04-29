let button;

function setup() {
	createCanvas(1152, 648);
	bg = loadImage('https://i.postimg.cc/VLbXKyL8/secondfloordonmyersw-ithroomnumbers.png');
	button = createButton('To First Floor');
    button.position(850, 100);
  	button.mousePressed(goToLink);
}

function goToLink(){
	window.location.href = 'donfirst.html';
}

var points = ['E1', 'A1', 'A2', 'A3', 'A4', '111a', 'A5', '111b', 'A6', 'STAIRS2',"2E2", "2B3", "2B2", "2B1", "2A3","207"];

var coordinates = {
	"227":[1093, 208],
	"229":[1092, 227],
	"ELEVATOR2":[807, 232],
	"231":[1093, 244],
	"219":[1003, 261],
	"217":[954, 262],
	"233":[1096, 259],
	"215":[918, 262],
	"263":[810, 262],
	"235":[1097, 274],
	"265":[787, 296],
	"264":[803, 297],
	"201":[126, 301],
	"212a":[948, 299],
	"212b":[1000, 303],
	"210":[843, 304],
	"ELEVATOR1":[630, 309],
	"208J":[902, 312],
	"208K":[930, 314],
	"218":[1049, 314],
	"214":[1015, 315],
	"220":[1067, 315],
	"209":[510, 316],
	"213a":[527, 316],
	"216":[1033, 316],
	"222":[1085, 316],
	"203":[193, 319],
	"213b":[607, 321],
	"205":[235, 327],
	"207":[271, 331],
	"208L":[876, 329],
	"208H":[896, 346],
	"202":[98, 353],
	"202A":[81, 356],
	"204":[124, 361],
	"206L":[484, 367],
	"208G":[897, 365],
	"204A":[136, 373],
	"260":[220, 381],
	"202B":[75, 382],
	"208F":[905, 385],
	"261":[259, 391],
	"206M":[534, 395],
	"206N":[564, 397],
	"208C":[862, 395],
	"208A":[829, 395],
	"208B":[843, 396],
	"208D":[879, 395],
	"208E":[898, 396],
	"206A":[635, 394],
	"262":[419, 396],
	"204B":[129, 398],
	"272":[287, 405],
	"202C":[67, 409],
	"206K":[435, 425],
	"206B":[636, 420],
	"206F":[556, 425],
	"206E":[584, 424],
	"206C":[624, 424],
	"206J":[465, 425],
	"206G":[518, 424],
	"206D":[604, 425],
	"204C":[121, 425],
	"206H":[486, 425],
	"2E3":[825, 216],
	"2D2":[1063, 238],
	"2D3":[1091, 265],
	"2D1":[1041, 265],
	"2C3":[835, 275],
	"2C7":[978, 276],
	"2C8":[1018, 276],
	"2C3":[826, 277],
	"2C6":[895, 278],
	"2E2":[618, 282],
	"2C9":[1019, 300],
	"2D4":[1087, 300],
	"2E4":[1102, 300],
	"2A1":[90, 314],
	"2C5":[888, 328],
	"2A2":[192, 346],
	"2B1":[431, 351],
	"2B2":[509, 352],
	"2B7":[746, 352],
	"2C1":[827, 353],
	"2B3":[611, 353],
	"2A3":[306, 360],
	"2F1":[96, 364],
	"2F3":[119, 369],
	"2E1":[185, 371],
	"2C4":[868, 376],
	"2A4":[308, 408],
	"2B4":[432, 408],
	"2B6":[608, 408],
	"2B5":[509, 410],
	"2F2":[81, 411],
	"2F4":[105, 417],
	"223":[1060, 262],
	"225":[1080, 262],
}

function draw() {
    background(bg);
    stroke(50, 50, 250);
    strokeWeight(5);

    //Draw lines between points
    for (let i = 0; i < points.length - 1; i++) {
        let point1 = coordinates[points[i]];
        let point2 = coordinates[points[i + 1]];
        if (point1 && point2) {
            line(point1[0], point1[1], point2[0], point2[1]);
        }
    }
}

const R2B7point = new Point(['B7', 'B3', 14.4, 'C1', 8.7, '265', 8.4, '264', 9.1]);
const R2C1point = new Point(['C1', '265', 7.8, '264', 7.2, 'C3', 5.4, '208A', 4.3, '208B', 4.9, 'C4', 5.4, '210', 5.8]);
const R265point = new Point(['265', 'B7', 8.7, 'C1', 7.8]);
const R264point = new Point(['264', 'B7', 9.1, 'C1', 7.2]);
const R2C4point = new Point(['C4', 'C1', 5.4, '208C', 1.9, '208D', 2.2, '208E', 3.4, '208F', 4.0, '208G', 3.2, '208H', 4.3, 'C5', 5.4]);
const R208Apoint = new Point(['208A', 'C1', 4.3]);
const R208Bpoint = new Point(['208B', 'C1', 4.9]);
const R208Cpoint = new Point(['208C', 'C4', 1.9]);
const R208Dpoint = new Point(['208D', 'C4', 2.2]);
const R208Epoint = new Point(['208E', 'C4', 3.4]);
const R208Fpoint = new Point(['208F', 'C4', 4.0]);
const R208Gpoint = new Point(['208G', 'C4', 3.2]);
const R208Hpoint = new Point(['208H', 'C4', 4.3]);
const R2C5point = new Point(['C5', 'C4', 5.4, '208L', 0.9, 'C6', 5.6]);
const R208Lpoint = new Point(['208L', 'C5', 0.9]);
const R210point = new Point(['210', 'C1', 5.8, 'C3', 3.5]);
const R2C3point = new Point(['C3', 'C1', 5.4, '210', 3.5, '263', 2.5, 'ELEVATOR2', 4.7, 'E3', 6.4, 'C6', 7.0]);
const R2E3point = new Point(['E3', 'C3', 6.4, 'STAIRS3', 1.3, 'ELEVATOR2', 2.6, '263', 5.4]);
const STAIRS3point = new Point(['STAIRS3', 'E3', 1.3]);
const ELEVATOR2point = new Point(['ELEVATOR2', 'E3', 2.6, 'C3', 4.7,]);
const R263point = new Point(['263', 'E3', 5.4, 'C3', 2.5]);
const R2C6point = new Point(['C6', 'C3', 7.0, 'C5', 5.6, '208J', 3.9, '208K', 5.0, '212a', 5.9, '215', 2.5, '217', 6.7, 'C7', 8.9]);
const R208Jpoint = new Point(['208J', 'C6', 3.9]);
const R208Kpoint = new Point(['208K', 'C6', 5.0]);
const R212apoint = new Point(['212a', 'C6', 5.9]);
const R215point = new Point(['215', 'C6', 2.5]);
const R217point = new Point(['217', 'C6', 6.7, 'C7', 2.7]);
const R2C7point = new Point(['C7', 'C6', 7.0, '217', 2.7, 'C8', 4.3, '219', 3.1]);
const R219point = new Point(['219', 'C7', 3.1, 'C8', 1.8]);
const R2C8point = new Point(['C8', 'C7', 4.3, '219', 1.8, 'D1', 2.5, 'C9', 2.2]);
const R2C9point = new Point(['C9', 'C8', 2.2, '212b', 1.1, '214', 1.3, '216', 2.2, '218', 3.4, 'D4', 7.3]);
const R212bpoint = new Point(['212b', 'C9', 1.1]);
const R214point = new Point(['214', 'C9', 1.3]);
const R216point = new Point(['216', 'C9', 2.2]);
const R218point = new Point(['218', 'C9', 3.4, 'D4', 4.8]);
const R2D4point = new Point(['D4', 'C9', 7.3, '218', 4.8, '220', 2.8, '222', 1.8, 'E4', 1, '235', 2.7, 'D3', 3.8]);
const R220point = new Point(['220', 'D4', 2.8]);
const R222point = new Point(['222', 'D4', 1.8]);
const R2E4point = new Point(['E4', 'D4', 1]);
const R2D3point = new Point(['D3', 'D4', 3.8, '235', 1.2, '233', .9, '231', 2.1, 'D2', 3.8]);
const R235point = new Point(['235', 'D4', 2.7, 'D3', 1.2]);
const R233point = new Point(['233', 'D3', .9]);
const R231point = new Point(['231', 'D3', 2.1, 'D2', 3.2]);
const R2D2point = new Point(['D2', '231', 3.2, '229', 2.6, '227', 4.1, '225', 3.2, '223', 2.9, 'D1', 3.9]);
const R229point = new Point(['229', 'D2', 2.6]);
const R227point = new Point(['227', 'D2', 4.1]);
const R225point = new Point(['225', 'D2', 3.2]);
const R223point = new Point(['223', 'D2', 2.9]);
const R2D1point = new Point(['D1', 'D2', 3.9, 'C8', 2.5]);
