function findCoordinates(dataPoint, coordsArray){
  if (dataPoint === undefined){ 
    return(null)
  }
  for(let key in coordsArray){
    if (dataPoint === key){
      return (coordsArray[key])
    }
  }
  console.log('key not found')
  return(null)
}


function math(point1, point2){
  if (point1 === null || point2 === null){
    return null
  }
  answer = (((point2[0] - point1[0])^2) + ((point2[1] - point1[1])^2))
  answer = (     Math.pow((point2[0] - point1[0]), 2)
               + Math.pow((point2[1] - point1[1]), 2))

  answer = Math.abs(answer)

  answer = Math.sqrt(answer)
  return answer
}

class Building {
  constructor(name, points){
      this.name = name
      this.points = points
  }
  
}


class Point2 {
  constructor(data, coordsArray) { //takes data and coords array
    this.name = data[0];
    this.edges = [];
    
    console.log("doing " + data[0])
    this.position = findCoordinates(data[0], coordsArray)
    console.log("position:")
    console.log(this.position)
    console.log("did " + data[0])
    this.point = []

    if (this.position === null){
      this.edges.push({
        to: data[0],
        weight: 0
      })
    }
    else{
      // console.log(`Data Length ${data.length}`)
      for (let i = 1; i < data.length; i += 1) {
        // console.log(`i = ${this.data[i]}`)
        this.edges.push({
          to: data[i],
          weight: math(this.position, findCoordinates(data[i], coordsArray))
      });
        console.log(`Point ${this.name}, egdes:`)
        console.log(this.edges)
    }
    }
    
  }
}

class Point {
    constructor(data) {
      this.name = data[0];
      this.edges = [];
      for (let i = 1; i < data.length; i += 2) {
        this.edges.push({
          to: data[i],
          weight: data[i + 1]
        });
      }
    }
  }

function dijkstra(start, end, points) {
    console.log(start)
    console.log(end)
    console.log(points)

    const queue = [];
    const distances = {};
    const previous = {};
  
    distances[start.name] = 0;
    queue.push(start);
  
    while (queue.length > 0) {
      // console.log(queue.length)
      queue.sort((a, b) => distances[a.name] - distances[b.name]);
      const current = queue.shift();
  
      if (current.name === end.name) {
        const path = [];
        let at = end.name;
        while (at !== start.name) {
          path.push(at);
          at = previous[at];
        }
        path.push(start.name);
        return path.reverse();
      }
  
      for (const edge of current.edges) {
        const newDistance = distances[current.name] + edge.weight;
        if (newDistance < (distances[edge.to] || Infinity)) {
          distances[edge.to] = newDistance;
          previous[edge.to] = current.name;
          const nextPoint = points.find(point => point.name === edge.to);
          if (nextPoint && !queue.some(point => point.name === edge.to)) {
            queue.push(nextPoint);
          }
        }
      }
    }
  
    return null;
  }

  var buildings = []

  var d = { //Don Myers buidling Cooords
    "E3":  [850, 200],
    "A8":  [850, 275],
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
    };

      //--------Second Floor Points---------------------------------------------------------

      var E1point = new Point2(['E1','101', 'A1'], d);
      var E2point = new Point2(['E2','A6', 'STAIRS2', 'ELEVATOR1'],d);
      var E3point = new Point2(['E3','A8'],d);
      
      var A1point = new Point2(['A1', 'E1', '101', '102', '103', '104', 'STAIRS1', '160', 'A2'],d);
      var A2point = new Point2(['A2', 'A1', 'A3', '103', '160', '161', '108'],d);
      var A3point = new Point2(['A3', 'A2', 'A4', '108', '107'],d);
      var A4point = new Point2(['A4', 'A3', 'A5', 'B1', '111a', '162'],d);
      var A5point = new Point2(['A5', 'A4', 'A6 ', '111a', '111b'],d);
      var A6point = new Point2(['A6', 'A5', 'A7', 'E2', 'STAIRS2', 'ELEVATOR1','111b', '106A'],d);
      var A7point = new Point2(['A7', 'A6', 'A8', '108G', '108F', '108E', 'C1'], d);
      var A8point = new Point2(['A8', 'C2', 'E3', 'STAIRS3', 'ELEVATOR2', '115a', 'A7'],d);
    
      var B1point = new Point2(['B1', 'A4', 'B2', '106J', '106K', '106L', '106M', '106N', '162'],d);
      var B2point = new Point2(['B2', 'B1', 'B3', '106E', '106F', '106G', '106H', '106I', '106N', '106O', '106P', '106Q'],d);
      var B3point = new Point2(['B3', 'B2', '106A', '106B', '106C',  '106D', '106E', '106F', '106Q'],d);
      
      var STAIRS1point = new Point2(['STAIRS1', 'A1', '2E1'],d);
      var STAIRS2point = new Point2(['STAIRS2', 'A6', 'E2', '2E2'], d);
      var STAIRS3point = new Point2(['STAIRS3', 'A8', '2E3'], d);
      var STAIRS4point = new Point2(['STAIRS4', 'C8', '2E4'],d);
    
    
      var ELEVATOR1point = new Point2(['ELEVATOR1', 'A6', 'E2'],  d);
      var ELEVATOR2point = new Point2(['ELEVATOR2', 'A8'],  d);
      
      
      var R101point = new Point2(['101','A1', 'E1'],d);
      var R102point = new Point2(['102','A1'],d); 
      var R103point = new Point2(['103','A1','A2'],d);
      var R104point = new Point2(['104','A1'],d);
      var R160point = new Point2(['160','A1','A2'],d);
      var R161point = new Point2(['161','A2'],d);
      var R162point = new Point2(['162','A4', 'B1'],d);
      
      var R106Apoint = new Point2(['106A', 'A6', 'B3'],d);
      var R106Bpoint = new Point2(['106B', 'B3'],d);
      var R106Cpoint = new Point2(['106C', 'B3'],d);
      var R106Dpoint = new Point2(['106D', 'B3'],d);
      var R106Epoint = new Point2(['106E', 'B2', 'B3'],d);
      var R106Fpoint = new Point2(['106F', 'B2', 'B3'],d);
      var R106Gpoint = new Point2(['106G', 'B2'],d);
      var R106Hpoint = new Point2(['106H', 'B2'],d);
      var R106Ipoint = new Point2(['106I', 'B2'],d);
      var R106Jpoint = new Point2(['106J', 'B1'],d);
      var R106Kpoint = new Point2(['106K', 'B1'],d);
      var R106Lpoint = new Point2(['106L', 'B1'],d);
      var R106Mpoint = new Point2(['106M', 'B1'],d);
      var R106Npoint = new Point2(['106N', 'B1', 'B2'],d);
      var R106Opoint = new Point2(['106O', 'B2'],d);
      var R106Ppoint = new Point2(['106P', 'B2'],d);
      var R106Qpoint = new Point2(['106Q', 'B2', 'B3'],d);
      
      var R108point = new Point2(['108','A2', 'A3'],d);
      var R107point = new Point2(['107','A3'],d);
      var R111apoint = new Point2(['111a', 'A4', 'A5'],d);
      var R111bpoint = new Point2(['111b', 'A5', 'A6'],d);
    
      var C1point = new Point2(['C1', 'A7', '108D', '108C', '108B', '108A', '112b'],d);
      var C2point = new Point2(['C2', 'C3', '112a', '115b', 'A8'],d);
      var C3point = new Point2(['C3', 'C6', '112G', 'C4', 'C2'],d);
      var C4point = new Point2(['C4', '112G', '112B', '112C', 'C3', 'C5', '112D'],d);
      var C5point = new Point2(['C5', 'C4', '112E', '112F'],d);
      var C6point = new Point2(['C6', 'C7', '114', '119', '117', 'C3'],d);
      var C7point = new Point2(['C7', 'C8', '121', '116', '119', '114', 'C6'],d);
      var C8point = new Point2(['C8', 'STAIRS4', '121', 'C7'],d);
      
      var R108Apoint = new Point2(['108A', 'C1'],d);
      var R108Bpoint = new Point2(['108B', 'C1'],d);
      var R108Cpoint = new Point2(['108C', 'C1'],d);
      var R108Dpoint = new Point2(['108D', 'C1'],d);
      var R108Epoint = new Point2(['108E', 'A7'],d);
      var R108Fpoint = new Point2(['108F', 'A7'],d);
      var R108Gpoint = new Point2(['108G', 'A7'],d);
    
      var R114point = new Point2(['114', 'C7', 'C6'],d);
      var R116point = new Point2(['116', 'C7'],d);
      var R119point = new Point2(['119', 'C7', 'C6'],d);
      var R121point = new Point2(['121', 'C8','C7'],d);
      
      var R112apoint = new Point2(['112a','C2'],d);
      var R112bpoint = new Point2(['112b', 'C1'],d);
    
      var R112Bpoint = new Point2(['112B', 'C4'],d);
      var R112Cpoint = new Point2(['112C', 'C4'],d);
      var R112Dpoint = new Point2(['112D', 'C4'],d);
      var R112Epoint = new Point2(['112E', 'C5'],d);
      var R112Fpoint = new Point2(['112F', 'C5'],d);
      var R112Gpoint = new Point2(['112G', 'C3', 'C4'],d);

var R2B7point = new Point2(['2B7', '2B3', '2C1', '265', '264'],d);
var R2C1point = new Point2(['2C1', '265', '264', '2C3', '208A', '208B', '2C4', '210', '2B7'],d);
var R265point = new Point2(['265', '2B7',  '2C1'],d);
var R264point = new Point2(['264', '2B7', '2C1'],d);
var R2C4point = new Point2(['2C4', '2C1', '208C', '208D', '208E', '208F', '208G', '208H', '2C5'],d);
var R208Apoint = new Point2(['208A', '2C1'],d);
var R208Bpoint = new Point2(['208B', '2C1'],d);
var R208Cpoint = new Point2(['208C', '2C4'],d);
var R208Dpoint = new Point2(['208D', '2C4'],d);
var R208Epoint = new Point2(['208E', '2C4'],d);
var R208Fpoint = new Point2(['208F', '2C4'],d);
var R208Gpoint = new Point2(['208G', '2C4'],d);
var R208Hpoint = new Point2(['208H', '2C4'],d);
var R2C5point = new Point2(['2C5', '2C4', '208L', '2C6'],d);
var R208Lpoint = new Point2(['208L', '2C5'],d);
var R210point = new Point2(['210', '2C1', '2C3'],d);
var R2C3point = new Point2(['2C3', '2C1', '210', '263', 'ELEVATOR2', '2E3', '2C6'],d);
var R2E3point = new Point2(['2E3', '2C3', 'STAIRS3', 'ELEVATOR2', '263'],d);
var R263point = new Point2(['263', '2E3', '2C3'],d);
var R2C6point = new Point2(['2C6', '2C3', '2C5', '208J', '208K', '212a', '215', '217', '2C7'],d);
var R208Jpoint = new Point2(['208J', '2C6'],d);
var R208Kpoint = new Point2(['208K', '2C6'],d);
var R212apoint = new Point2(['212a', '2C6'],d);
var R215point = new Point2(['215', '2C6'],d);
var R217point = new Point2(['217', '2C6', '2C7'],d);
var R2C7point = new Point2(['2C7', '2C6', '217', '2C8', '219'],d);
var R219point = new Point2(['219', '2C7', '2C8'],d);
var R2C8point = new Point2(['2C8', '2C7', '219', '2D1', '2C9'],d);
var R2C9point = new Point2(['2C9', '2C8', '212b', '214', '216', '218', '2D4'],d);
var R212bpoint = new Point2(['212b', '2C9'],d);
var R214point = new Point2(['214', '2C9'],d);
var R216point = new Point2(['216', '2C9'],d);
var R218point = new Point2(['218', '2C9', '2D4'],d);
var R2D4point = new Point2(['2D4', '2C9', '218', '220', '222', '2E4', '235', '2D3'],d);
var R220point = new Point2(['220', '2D4'],d);
var R222point = new Point2(['222', '2D4'],d);
var R2E4point = new Point2(['E4', '2D4'],d);
var R2D3point = new Point2(['2D3', '2D4', '235','233', '231', '2D2'],d);
var R235point = new Point2(['235', '2D4', '2D3'],d);
var R233point = new Point2(['233', '2D3'],d);
var R231point = new Point2(['231', '2D3', '2D2'],d);
var R2D2point = new Point2(['2D2', '231', '229', '227', '225', '223', '2D1'],d);
var R229point = new Point2(['229', '2D2'],d);
var R227point = new Point2(['227', '2D2'],d);
var R225point = new Point2(['225', '2D2'],d);
var R223point = new Point2(['223', '2D2'],d);
var R2D1point = new Point2(['2D1', '2D2', '2C8'],d);



//--------------------------
var R2A1point = new Point2(['2A1', '201',  '2A2', '202', '204'],d);
var R201point = new Point2(['201', '2A1'],d);
var R202point = new Point2(['202', '2A1', '2F1'],d);
var R204point = new Point2(['204', '2A1', '2F3'],d);
var R2F1point = new Point2(['2F1', '202',  '202A', '202B', '2F2'],d);
var R202Apoint = new Point2(['202A', '2F1'],d);
var R202Bpoint = new Point2(['202B', '2F1', '2F2'],d);
var R2F2point = new Point2(['2F2', '2F1', '202B', '202C'],d);
var R202Cpoint = new Point2(['202C', '2F2'],d);
var R2F3point = new Point2(['2F3', '204', '204A', '2F4', '204B'],d);
var R204Apoint = new Point2(['204A', '2F3'],d);
var R204Bpoint = new Point2(['204B', '2F3', '2F4'],d);
var R2F4point = new Point2(['2F4', '2F3',  '204B', '204C'],d);
var R204Cpoint = new Point2(['204C', '2F4'],d);
var R2A2point = new Point2(['2A2', '2A1', '203', '205', '207',  '2E1', '260',  '261', '2A3'],d);
var R203point = new Point2(['203', '2A2'],d);
var R205point = new Point2(['205', '2A2'],d);
var R2E1point = new Point2(['2E1', '2A2'],d);
var R260point = new Point2(['260', '2A2'],d);
var R207point = new Point2(['207', '2A2',  '2A3'],d);
var R261point = new Point2(['261', '2A2', '2A3'],d  );
var R2A3point = new Point2(['2A3', '2A2',  '207', '261', '2A4', 'B1'],d);
var R2A4point = new Point2(['2A4', '2A3',  '272'],d);
var R272point = new Point2(['272', '2A4'],d);

//-------------------------------------------------------------------------------------------------------------------------
var R2B1point = new Point2(['2B1', '2A3',  '2B2', '2B4', '206L','262'],d);
var R2B2point = new Point2(['2B2', '2B1', '2B3','2B5', '206L',   '209',   '213a'],d);
var R2B3point = new Point2(['2B3', '2B2', '2B7', '2B6',  '2E2','ELEVATOR1',   '206A',   '213b'],d);
var R2B4point = new Point2(['2B4', '2B1', '2B5',    '206H',  '206J',  '206K',    '262'],d);
var R2B5point = new Point2(['2B5', '2B2',  '2B4',  '2B6','206F',   '206G',        '206H',  '206J', '206M', '206N'],d);
var R2B8point = new Point2(['2B6', '2B3', '206A',  '206B',   '206C',  '206D', '206E','206N'],d);

var R2E2point = new Point2(['2E3', 'STAIRS2', 'ELEVATOR1', '213b', '2B3'],d);

var R206Apoint= new Point2(['206A','2B3','2B6'],d);
var R206Bpoint= new Point2(['206B','2B6'],d);
var R206Cpoint= new Point2(['206C','2B6'],d);
var R206Dpoint= new Point2(['206D','2B6'],d);
var R206Epoint= new Point2(['206E','2B6'],d);
var R206Fpoint= new Point2(['206F','2B5'],d);
var R206Gpoint= new Point2(['206G','2B5'],d);
var R206Hpoint= new Point2(['206H','2B4','2B5'],d);
var R206Jpoint= new Point2(['206J','2B4','2B5'],d);
var R206Kpoint= new Point2(['206K','2B4'],d);
var R206Lpoint= new Point2(['206L','2B1','2B2'],d);
var R206Mpoint= new Point2(['206M','2B5'],d);
var R206Npoint= new Point2(['206N','2B5','2B6'],d);
var R209point = new Point2(['209', '2B2'],d);
var R213apoint= new Point2(['213a','2B2'],d);
var R213bpoint= new Point2(['213b','2B3', '2E3'],d);
var R262point = new Point2(['262', '2B1', '2B4'],d);







//-----------------------------------------------------------------------------------------


var points = [
  E1point, E2point, E3point,
  A1point, A2point, A3point, A4point, A5point, A6point, A7point, A8point,
  C1point, C2point, C3point, C4point, C5point, C6point, C7point, C8point,
  B1point, B2point, B3point,
  STAIRS1point, STAIRS2point, STAIRS3point, STAIRS4point,
  ELEVATOR1point, ELEVATOR2point,
  R101point, R102point, R103point, R104point,  //20
  R106Apoint, R106Bpoint, R106Cpoint, R106Dpoint, R106Epoint, R106Fpoint, R106Gpoint, R106Hpoint, R106Ipoint, R106Jpoint, R106Kpoint, R106Lpoint, R106Mpoint, R106Npoint, R106Opoint, R106Ppoint, R106Qpoint,
  R107point, R108point,
  R108Apoint, R108Bpoint, R108Cpoint, R108Dpoint, R108Epoint, R108Fpoint, R108Gpoint,
  R111apoint, R111bpoint,
  R112apoint, R112bpoint,
  R112Bpoint, R112Cpoint, R112Dpoint, R112Epoint, R112Fpoint, R112Gpoint,
  R114point, R116point, R119point, R121point, R160point, R161point, R162point,
  E1point, E2point, E3point,
  A1point, A2point, A3point, A4point, A5point, A6point, A7point, A8point,
  C1point, C2point, C3point, C4point, C5point, C6point, C7point, C8point,
  B1point, B2point, B3point,
  STAIRS1point, STAIRS2point, STAIRS3point, STAIRS4point,
  ELEVATOR1point, ELEVATOR2point,
  R101point, R102point, R103point, R104point,  //20
      R106Apoint, R106Bpoint, R106Cpoint, R106Dpoint, R106Epoint, R106Fpoint, R106Gpoint, R106Hpoint, R106Ipoint, R106Jpoint, R106Kpoint, R106Lpoint, R106Mpoint, R106Npoint, R106Opoint, R106Ppoint, R106Qpoint,
      R107point, R108point,
      R108Apoint, R108Bpoint, R108Cpoint, R108Dpoint, R108Epoint, R108Fpoint, R108Gpoint,
      R111apoint, R111bpoint,
      R112apoint, R112bpoint,
      R112Bpoint, R112Cpoint, R112Dpoint, R112Epoint, R112Fpoint, R112Gpoint,
      R114point, R116point, R119point, R121point, R160point, R161point, R162point,
        R2B7point, 
        R2C1point, R265point, 
        R264point ,
        R2C4point ,
        R208Apoint,
        R208Bpoint,
        R208Cpoint,
        R208Dpoint,
        R208Epoint,
        R208Fpoint,
        R208Gpoint,
        R208Hpoint,
        R2C5point ,
        R208Lpoint,
        R210point ,
        R2C3point ,
        R2E3point ,
    R263point ,
    R2C6point ,
    R208Jpoint,
    R208Kpoint,
    R212apoint,
    R215point ,
    R217point ,
    R2C7point ,
    R219point ,
    R2C8point ,
    R2C9point ,
    R212bpoint,
    R214point ,
    R216point ,
    R218point ,
    R2D4point ,
    R220point ,
    R222point ,
    R2E4point ,
    R2D3point ,
    R235point ,
    R233point ,
    R231point ,
    R2D2point ,
    R229point ,
    R227point ,
    R225point ,
    R223point ,
    R2D1point ,
    R2A1point ,
  R201point ,
  R202point ,
  R204point ,
  R2F1point ,
  R202Apoint,
  R202Bpoint,
  R2F2point ,
  R202Cpoint,
  R2F3point ,
  R204Apoint,
  R204Bpoint,
  R2F4point ,
  R204Cpoint,
  R2A2point ,
  R203point ,
  R205point ,
  R2E1point ,
  R260point ,
  R207point ,
  R261point ,
  R2A3point ,
  R2A4point ,
  R272point ,
  R2B1point ,
  R2B2point ,
  R2B3point ,
  R2B4point ,
  R2B5point ,
  R2B8point ,
  R2E2point ,
  R206Apoint,
  R206Bpoint, R206Cpoint, R206Dpoint, R206Epoint,
  R206Fpoint, R206Gpoint,
  R206Hpoint, R206Jpoint,
  R206Kpoint, R206Lpoint,
  R206Mpoint, R206Npoint, R209point ,
  R213apoint, R213bpoint, R262point ,
]

var build1 = new Building('Don Myers', points)
buildings.push(build1)
// 

var k = { // KOGOD coords
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
  "212": [410, 512],
    "210": [369, 512],
    "215b": [734, 512],
    "216": [824, 512],
    "218": [905, 512],
    "219": [950, 512],
    "222": [1073, 512],
    "208": [194, 512],
    "209": [244, 512],
    "214": [494, 512],
    "215a": [593, 512],
    "223": [1118, 512],
    "233a": [1541, 532],
    "233b": [1796, 532],
    "213": [598, 576],
    "221": [1056, 580],
    "217": [860, 580],
    "220": [1014, 580],
    "234a": [1504, 648],
    "234b": [1826, 648],
    "204": [315, 692],
    "206": [445, 692],
    "201A": [471, 760],
    "230": [913, 809],
    "228": [992, 810],
    "227A": [1027, 810],
    "227B": [1129, 810],
    "273": [803, 811],
    "207": [109, 849],
    "225": [1111, 870],
    "203": [333, 870],
    "200": [559, 870],
    "201": [605, 870],
    "231": [902, 870],
    "229": [951, 870],
    "226": [1070, 870],
    "206": [183, 870],
    "205": [232, 870],
    "232": [763, 870],
    "2A8": [545, 545],
    "2B5": [842, 547],
    "2B9": [1062, 547],
    "2B7": [942, 548],
    "2A2": [154, 549],
    "2A7": [384, 550],
    "2B3": [687, 550],
    "2B11": [1159, 553],
    "2ELEVATOR": [506, 576],
    "2C3": [1490, 593],
    "2C4": [1671, 593],
    "2C5": [1880, 593],
    "2C2": [1364, 653],
    "2B1": [686, 655],
    "2STAIRS2": [729, 655],
    "2STAIRS1": [69, 670],
    "2STAIRS3": [1237, 678],
    "2A1": [148, 701],
    "2STAIRS4": [1883, 707],
    "2C1": [1237, 716],
    "2B12": [1165, 718],
    "201C": [384, 758],
    "2A5": [370, 841],
    "2A9": [605, 841],
    "2A4": [231, 841],
    "2B2": [685, 841],
    "2A3": [142, 841],
    "2B6": [931, 841],
    "2A6": [488, 841],
    "2B10": [1161, 841],
    "2B4": [840, 841],
    "2B8": [1039, 841],
    "T27": [157, 253],
    "T23": [294, 255],
    "T25": [193, 253],
    "T21": [340, 256],
    "T31": [537, 258],
    "T37": [712, 279],
    "T41": [940, 258],
    "T43": [987, 259],
    "T45": [1080, 258],
    "T47": [1123, 259],
    "T33": [610, 259],
    "T35": [652, 259],
    "T61": [1590, 288],
    "T62": [1650, 289],
    "T36": [712, 312],
    "T28": [142, 316],
    "T28": [142, 316],
    "T30": [499, 333],
    "T32": [582, 333],
    "T34": [688, 334],
    "T24": [195, 336],
    "T20": [352, 336],
    "T26": [156, 337],
    "T22": [298, 337],
    "T42": [933, 343],
    "T46": [1081, 343],
    "T48": [1123, 343],
    "T44": [973, 345],
    "T59a": [1590, 360],
    "T60a": [1650, 360],
    "T39": [885, 495],
    "T59b": [1590, 498],
    "T60b": [1651, 499],
    "T57": [1591, 540],
    "T58a": [1656, 543],
    "T18": [436, 544],
    "T17": [538, 546],
    "T38": [840, 559],
    "T57A": [1590, 615],
    "T75": [159, 675],
    "T55": [1591, 696],
    "T58b": [1656, 696],
    "T78": [760, 709],
    "T10": [823, 709],
    "T06": [297, 711],
    "T01": [579, 711],
    "T05": [375, 712],
    "T03": [456, 712],
    "T12": [933, 714],
    "T14": [981, 714],
    "T16": [1092, 714],
    "T51": [1365, 715],
    "T56": [1701, 738],
    "T54": [1653, 855],
    "T94": [1378, 909],
    "T56A": [1669, 759],
    "T13": [976, 753],
    "T71": [228, 754],
    "T02": [538, 754],
    "T08": [733, 754],
    "T09": [813, 754],
    "T11": [901, 754],
    "T15": [1090, 754],
    "T50": [1306, 754],
    "T04": [459, 756],
    "TE1": [436, 168],
    "TE3": [1623, 168],
    "TE2": [837, 169],
    "TC1": [1621, 288],
    "TC2": [1621, 361],
    "TA11": [195, 298],
    "TA8": [535, 298],
    "TA9": [649, 298],
    "TA10": [346, 298],
    "TA7": [426, 298],
    "TB9": [1077, 300],
    "TB8": [931, 300],
    "TB7": [838, 300],
    "TA6": [435, 498],
    "TB6": [840, 498],
    "TC3": [1620, 498],
    "TB5": [634, 598],
    "TC4": [1624, 546],
    "TSTAIRS1": [81, 577],
    "TA5": [82, 633],
    "TSTAIRS3": [1177, 627],
    "TA4": [178, 636],
    "TC5": [1626, 697],
    "TA3": [183, 733],
    "TC10": [1171, 733],
    "TA1": [495, 733],
    "TB3": [789, 733],
    "TB2": [915, 733],
    "TA2": [331, 733],
    "TC9": [1293, 733],
    "TB1": [1038, 733],
    "TB4": [637, 733],
    "TC8": [1432, 733],
    "TC6": [1624, 733],
    "TC7": [1624, 978],
    "TSTAIRS2": [690, 630],
    "TB10": [637, 630],
  }



//--------------kogod Floor---------------------------------------------------
var KT94point = new Point2(['T94', 'TC7'], k);
var KTC7point = new Point2(['TC7', 'T94', 'TC6'], k);
var KTC6point = new Point2(['TC6', 'TC7', 'T54', 'T56A', 'T56', 'TC5', 'TC8'], k);
var KT54point = new Point2(['T54', 'TC6'], k);
var KT56Apoint = new Point2(['T56A', 'TC6'], k);
var KT56point = new Point2(['T56', 'TC6'], k);
var KTC5point = new Point2(['TC5', 'TC6', 'T58b', 'T55', 'TC4', 'T57A'], k);
var KT58bpoint = new Point2(['T58b', 'TC5'], k);
var KT55point = new Point2(['T55', 'TC5'], k);
var KT57Apoint = new Point2(['T57A', 'TC5', 'TC4'], k);
var KTC4point = new Point2(['TC4', 'T57A', 'TC5', 'T58a', 'TC3', 'T57'], k);
var KT58apoint = new Point2(['T58a', 'TC4'], k);
var KT57point = new Point2(['T57', 'TC4'], k);
var KTC3point = new Point2(['TC3', 'TC4', 'T60b', 'T59b', 'TC2'], k);
var KT60bpoint = new Point2(['T60b', 'TC3'], k);
var KT59bpoint = new Point2(['T59b', 'TC3'], k);
var KTC2point = new Point2(['TC2', 'TC3', 'T60a', 'T59a', 'TC1'], k);
var KT60apoint = new Point2(['T60a', 'TC2'], k);
var KT59apoint = new Point2(['T59a', 'TC2'], k);
var KTC1point = new Point2(['TC1', 'TC2', 'T62', 'T61', 'TE3'], k);
var KTE3point = new Point2(['TE3', 'TC1'], k);
var KTC8point = new Point2(['TC8', 'TC6', 'TC9', 'T51'], k);
var KTC9point = new Point2(['TC9', 'T51', 'T50', 'TC10'], k);
var KT51point = new Point2(['T51', 'TC9', 'TC8'], k);
var KT50point = new Point2(['T50', 'TC9'], k);
var KC10point = new Point2(['TC10', 'TC9', 'TSTAIRS3', 'TB1', 'T16', 'T15'], k);
var KTSTAIRS3point = new Point2(['TSTAIRS3', 'STAIRS3', 'TC10'], k);
var KT16point = new Point2(['T16', 'TC10', 'TB1'], k);
var KT15point = new Point2(['T15', 'TC10', 'TB1'], k);
var KTB1point = new Point2(['TB1', 'TC10', 'T16', 'T15', 'T14', 'T13', 'TB2'], k);
var KT14point = new Point2(['T14', 'TB1', 'TB2'], k);
var KT13point = new Point2(['T13', 'TB1', 'TB2'], k);
var KTB2point = new Point2(['TB2', 'TB1', 'T14', 'T13', 'T12', 'T11', 'TB3'], k);
var KTB3point = new Point2(['TB3', 'T10', 'T09', 'T78', 'T08', 'TB4'], k);
var KT10point = new Point2(['T10', 'TB3'], k);
var KT09point = new Point2(['T09', 'TB3'], k);
var KT78point = new Point2(['T78', 'TB3', 'TB4'], k);
var KT08point = new Point2(['T08', 'TB3', 'TB4'], k);
var KTB4point = new Point2(['TB4', 'TB4', 'T78', 'T08', 'TB10', 'T01', 'TA1', 'T02'], k);
var KT01point = new Point2(['T01', 'TB4', 'TA1'], k);
var KT02point = new Point2(['T02', 'TB4', 'TA1'], k);
var KTA1point = new Point2(['TA1', 'T02', 'TB4', 'T01', 'T03', 'TA2', 'T04'], k);
var KT03point = new Point2(['T03', 'TA1', 'TA2'], k);
var KT04point = new Point2(['T04', 'TA1', 'TA2'], k);
var KTA2point = new Point2(['TA2', 'T04', 'TA1', 'T03', 'T05', 'T06', 'TA3', 'T71'], k);
var KT05point = new Point2(['T05', 'TA2'], k);
var KT06point = new Point2(['T06', 'TA2', 'TA3'], k);
var KT71point = new Point2(['T71', 'TA3', 'TA2'], k);
var KTA3point = new Point2(['TA3', 'T71', 'TA2', 'T06', 'TA4', 'T75'], k);
var KT75point = new Point2(['T75', 'TA3', 'TA4'], k);
var KTA4point = new Point2(['TA4', 'TA3', 'T75', 'TA5'], k);
var KTA5point = new Point2(['TA5', 'TA4', 'TSTAIRS1'], k);
var KTSTAIRS1point = new Point2(['TSTAIRS1', 'STAIRS1','A5'], k);
var KTB10point = new Point2(['TB10', 'TB4', 'TSTAIRS2', 'B5'], k);
var KTSTAIRS2point = new Point2(['TSTAIRS2', 'STAIRS2','TB10'], k);
var KTB5point = new Point2(['TB5', 'TB10', 'T17', 'TA6', 'TB6'], k);
var KTB6point = new Point2(['TB6', 'T38', 'T39', 'TB7'], k);
var KTB7point = new Point2(['TB7', 'TB6', 'TB8', 'TE2'], k);
var KTB8point = new Point2(['TB8', 'T41', 'T42', 'T44', 'T43', 'TB9'], k);
var KT41point = new Point2(['T41', 'TB8'], k);
var KT42point = new Point2(['T42', 'TB8'], k);
var KT43point = new Point2(['T43', 'TB8'], k);
var KT44point = new Point2(['T44', 'TB8'], k);
var KTB9point = new Point2(['TB9', 'T45', 'T47', 'T49', 'T48', 'T46'], k);
var KT45point = new Point2(['T45', 'TB9'], k);
var KT47point = new Point2(['T47', 'TB9'], k);
var KT49point = new Point2(['T49', 'TB9'], k);
var KT48point = new Point2(['T48', 'TB9'], k);
var KT46point = new Point2(['T46', 'TB9'], k);
var KT17point = new Point2(['T17', 'TA6', 'TB5'], k);
var KTA6point = new Point2(['T17', 'TB5', 'T18', 'TA7'], k);
var KT18point = new Point2(['T18', 'TA6'], k);
var KTA7point = new Point2(['TA7', 'TA6', 'TE1', 'TA8', 'TA10'], k);
var KTA8point = new Point2(['TA8', 'T30', 'T32', 'TA9', 'T31', 'T33'], k);
var KT31point = new Point2(['T31', 'TA8'], k);
var KT33point = new Point2(['T33', 'TA8'], k);
var KT32point = new Point2(['T32', 'TA8'], k);
var KT30point = new Point2(['T30', 'TA8'], k);
var KT35point = new Point2(['T35', 'TA9'], k);
var KT37point = new Point2(['T37', 'TA9'], k);
var KT36point = new Point2(['T36', 'TA9'], k);
var KT34point = new Point2(['T34', 'TA9'], k);
var KTA9point = new Point2(['TA9', 'T35', 'T37', 'T36', 'T34'], k);
var KTA10point = new Point2(['TA10', 'T21', 'T20', 'T23', 'T22', 'TA11'], k);
var KT21point = new Point2(['T21', 'TA10'], k);
var KT20point = new Point2(['T20', 'TA10'], k);
var KT23point = new Point2(['T23', 'TA10'], k);
var KT22point = new Point2(['T22', 'TA10'], k);
var KTA11point = new Point2(['TA11', 'T25', 'T27', 'T28', 'T26', 'T24'], k);
var KT25point = new Point2(['T25', 'TA11'], k);
var KT27point = new Point2(['T27', 'TA11'], k);
var KT28point = new Point2(['T28', 'TA11'], k);
var KT26point = new Point2(['T26', 'TA11'], k);
var KT24point = new Point2(['T24', 'TA11'], k);

//-------------Floor 1-------------------------------------------------------
var KSTAIRS4point = new Point2(['STAIRS4','2STAIRS4', '196', 'E3'], k);
var K196point = new Point2(['196', 'STAIRS4', 'B9'], k);
var KE3point = new Point2(['E3', 'STAIRS4', 'B9'], k);
var KB9point = new Point2(['B9', '196', 'E3', '122', 'B8'], k);
var KB10point = new Point2(['B10', '122A', '122B', '122D', '122E', '122F', '122G', 'B11'], k);
var KB11point = new Point2(['B11', 'B10', '122H', '122K'], k);
var K122Apoint = new Point2(['122A', 'B10'], k);
var K122Bpoint = new Point2(['122B', 'B10'], k);
var K122Dpoint = new Point2(['122D', 'B10'], k);
var K122Epoint = new Point2(['122E', 'B10'], k);
var K122Fpoint = new Point2(['122F', 'B10'], k);
var K122Gpoint = new Point2(['122G', 'B10'], k);
var K122Hpoint = new Point2(['122H', 'B11'], k);
var K122Kpoint = new Point2(['122K', 'B11'], k);
var KB8point = new Point2(['B8', 'B9', 'B7'], k);
var KB7point = new Point2(['B7', 'B8', 'STAIRS3', 'E2'], k);
var KSTAIRS3point = new Point2(['STAIRS3','TSTAIRS3','2STAIRS3', 'B7', 'B4'], k);
var KB4point = new Point2(['B4', 'STAIRS3', 'B3', 'B5'], k);
var KE2point = new Point2(['E2', 'B7', 'B5'], k);
var KB3point = new Point2(['B3', 'B4', 'B2', '118b', '175'], k);
var KB2point = new Point2(['B2', 'B3', '174', '118a', 'B1'], k);
var K118bpoint = new Point2(['118b', 'B3'], k);
var K175point = new Point2(['175', 'B3'], k);
var K118apoint = new Point2(['118a', 'B2'], k);
var K174point = new Point2(['174', 'B2'], k);
var KB1point = new Point2(['B1', 'B2', '173', '120', 'A1'], k);
var K173point = new Point2(['173', 'B1'], k);
var K120point = new Point2(['120', 'B1'], k);
var KA1point = new Point2(['A1', 'E1', 'B1', 'STRAIRS2', 'A11', 'A2'], k);
var KA11point = new Point2(['A11', 'STAIRS2', '115', 'A10'], k);
var KSTAIRS2point = new Point2(['STAIRS2','TSTAIRS2','2STAIRS2', 'A1', 'A11'], k);
var K115point = new Point2(['115', 'A11', '115A'], k);
var K115Apoint = new Point2(['115A', '115'], k);
var KA10point = new Point2(['A10', 'A11', '114', 'A9', '103'], k);
var K114point = new Point2(['114', 'A10', 'A9'], k);
var K103point = new Point2(['103', 'A10', 'A9'], k);
var KA9point = new Point2(['A9', '103', 'A10', '114', '113', '112', 'A8'], k);
var K113point = new Point2(['113', 'A9', 'A8'], k);
var K112point = new Point2(['112', 'A9', 'A8'], k);
var KA8point = new Point2(['A8', 'A9', '113', '112', 'A7', '116'], k);
var K116point = new Point2(['116', 'A8', 'A7'], k);
var KA7point = new Point2(['A7', '109', '111', '110', 'A6'], k);
var K111point = new Point2(['111', 'A7'], k);
var K109point = new Point2(['109', 'A7'], k);
var K110point = new Point2(['110', 'A7', 'A6'], k);
var KA6point = new Point2(['A6', 'A7', '110', 'STAIRS1'], k);
var KSTAIRS1point = new Point2(['STAIRS1','TSTAIRS1','2STAIRS1', 'A6', 'A5'], k);
var KA5point = new Point2(['A5', '108', '107', '105', 'A4'], k);
var K108point = new Point2(['108', 'A5'], k);
var K107point = new Point2(['107', 'A5', 'A4'], k);
var K105point = new Point2(['105', 'A5', 'A4'], k);
var KA4point = new Point2(['A4', '106', '100', 'A5', '107', '105', '104', 'A3'], k);
var K106point = new Point2(['106', 'A4'], k);
var K100point = new Point2(['100', 'A4', 'A3'], k);
var K104point = new Point2(['104', 'A4', 'A3'], k);
var KA3point = new Point2(['A3', '102', '104', '100', 'A2'], k);
var K102point = new Point2(['102', 'A3'], k);
var KA2point = new Point2(['A2', 'A3', 'A1', '101'], k);
var K101point = new Point2(['101', 'A2'], k);

//--------------Floor 2----------------------------------------------------------
var K2STAIRS4point = new Point2(['2STAIRS4', 'STAIRS4','2C5'], k);
var K2C5point = new Point2(['2C5', '2STAIRS4', '233b', '2C4', '234b'], k);
var K233bpoint = new Point2(['233b', '2C4', '2C5'], k);
var K234bpoint = new Point2(['234b', '2C5', '2C4'], k);
var K2C4point = new Point2(['2C4', '233b', '234b', '233a', '234a', '2C3'], k);
var K233apoint = new Point2(['233a', '2C3', '2C4'], k);
var K234apoint = new Point2(['234a', '2C3', '2C4'], k);
var K2C3point = new Point2(['2C3', '2C4', '233a', '234a', '2C2'], k);
var K2C2point = new Point2(['2C2', '2C3', '2C1'], k);
var K2C1point = new Point2(['2C1', '2STAIRS3', '2C2', 'B12'], k);
var K2STAIRS3point = new Point2(['2STAIRS3','STAIRS3', '2C1'], k);
var K2B12point = new Point2(['2B12', '2C1', '2B11', '2B10'], k);
var K2B11point = new Point2(['2B11', '2B12', '223', '2B9'], k);
var K223point = new Point2(['223', '2B11', '2B9'], k);
var K2B9point = new Point2(['2B9', '2B11', '223', '222', '2B7', '220', '221'], k);
var K222point = new Point2(['222', '2B9', '2B7'], k);
var K221point = new Point2(['221', '2B9'], k);
var K220point = new Point2(['220', '2B9', '2B7'], k);
var K2B7point = new Point2(['2B7', '220', '2B9', '222', '219', '218', '2B5', '217'], k);
var K219point = new Point2(['219', '2B7'], k);
var K218point = new Point2(['218', '2B7', '2B5'], k);
var K217point = new Point2(['217', '2B5', '2B7'], k);
var K2B5point = new Point2(['2B5', '217', '2B7', '218', '216', '2B3'], k);
var K216point = new Point2(['216', '2B5'], k);
var K2B3point = new Point2(['2B3', '2B1', '2B5', '215b', '215a', '2A8', '213'], k);
var K2B1point = new Point2(['2B1', '2B3', '2STAIRS2', '2B2'], k);
var K2STARIS2point = new Point2(['2STAIRS2','STAIRS2', '2B1'], k);
var K215apoint = new Point2(['215a', '2B3', '2A8'], k);
var K215bpoint= new Point2(['215b','2B3','2B5'],k);
var K213point = new Point2(['213', '2A8', '2B3'], k);
var K2A8point = new Point2(['2A8', '213', '2B3', '215', '214', '2A7', 'ELEVATOR'], k);
var K214point = new Point2(['214', '2A8', 'ELEVATOR', '2A7'], k);
var KELEVATORpoint = new Point2(['ELEVATOR', '2A8', '214', '2A7'], k);
var K2A7point = new Point2(['2A7', 'ELEVATOR', '2A8', '214', '212', '210', '209', '208', '2A2'], k);
var K212point = new Point2(['212', '2A7'], k);
var K210point = new Point2(['210', '2A7'], k);
var K209point = new Point2(['209', '2A2', '2A7'], k);
var K208point = new Point2(['208', '2A2', '2A7'], k);
var K2A2point = new Point2(['2A2', '208', '209', '2A7', '2A1'], k);
var K2A1point = new Point2(['2A1', '2A2', '2STAIRS1', '2A3'], k);
var K2STAIRS1point = new Point2(['2STAIRS1','STAIRS1', '2A1'], k);
var K2A3point = new Point2(['2A3', '2A1', '2A4', '207', '206'], k);
var K207point = new Point2(['207', '2A3'], k);
var K206point = new Point2(['206', '2A3', '2A4'], k);
var K2A4point = new Point2(['2A4', '2A3', '206', '205', '203', '2A5'], k);
var K205point = new Point2(['205', '2A4'], k);
var K203point = new Point2(['203', '2A4', '2A5'], k);
var K2A5point = new Point2(['2A5', '2A4', '203', '2A6', '201C'], k);
var K201Cpoint = new Point2(['201', '204', '206', '201A'], k);
var K204point = new Point2(['204', '201C'], k);
var K206point = new Point2(['206', '201C'], k);
var K201Apoint = new Point2(['201A', '201C'], k);
var K2A6point = new Point2(['2A6', '2A5', '200', '2A9'], k);
var K200point = new Point2(['200', '2A6', '2A9'], k);
var K2A9point = new Point2(['2A9', '2A6', '200', '201', '2B2'], k);
var K201point = new Point2(['201', '2A9'], k);
var K2B2point = new Point2(['2B2', '2A9', '2B1', '273', '2B4', '232'], k);
var K232point = new Point2(['232', '2B2', '2B4'], k);
var K273point = new Point2(['273', '2B2', '2B4'], k);
var K2B4point = new Point2(['2B4', '2B2', '273', '232', '230', '231', '2B6'], k);
var K231point = new Point2(['231', '2B4', '2B6'], k);
var K230point = new Point2(['230', '2B6', '2B4'], k);
var K2B6point = new Point2(['2B6', '2B4', '230', '231', '228', '229', '2B8'], k);
var K229point = new Point2(['229', '2B6', '2B8'], k);
var K228point = new Point2(['228', '2B6', '2B8'], k);
var K2B8point = new Point2(['2B8', '229', '2B6', '228', '227A', '227B', '2B10', '225', '226'], k);
var K227Apoint = new Point2(['227A', '2B8'], k);
var K226point = new Point2(['226', '2B8', '2B10'], k);
var K225point = new Point2(['225', '2B8', '2B10'], k);
var K227Bpoint = new Point2(['227B', '2B8', '2B10'], k);
var K2B10point = new Point2(['2B10', '225', '2B8', '227B', '2B12'], k);

//---------------SPA Floor 3--------------------------------------------------

var points3 = [
  KT94point, KTC7point, KTC6point, KT54point, KT56Apoint, KT56point, KTC5point, KT58bpoint, 
  KT55point, KT57Apoint, KTC4point, KT58apoint, KT57point, KTC3point, KT60bpoint, KT59bpoint, 
  KTC2point, KT60apoint, KT59apoint, KTC1point, KTE3point, KTC8point, KTC9point, KT51point, 
  KT50point, KC10point, KTSTAIRS3point, KT16point, KT15point, KTB1point, KT14point, KT13point, 
  KTB2point, KTB3point, KT10point, KT09point, KT78point, KT08point, KTB4point, KT01point, 
  KT02point, KTA1point, KT03point, KT04point, KTA2point, KT05point, KT06point, KT71point, 
  KTA3point, KT75point, KTA4point, KTA5point, KTSTAIRS1point, KTB10point, KTSTAIRS2point, 
  KTB5point, KTB6point, KTB7point, KTB8point, KT41point, KT42point, KT43point, KT44point, 
  KTB9point, KT45point, KT47point, KT49point, KT48point, KT46point, KT17point, KTA6point, 
  KT18point, KTA7point, KTA8point, KT31point, KT33point, KT32point, KT30point, KT35point, 
  KT37point, KT36point, KT34point, KTA9point, KTA10point, KT21point, KT20point, KT23point, 
  KT22point, KTA11point, KT25point, KT27point, KT28point, KT26point, KT24point, KSTAIRS4point, 
  K196point, KE3point, KB9point, KB10point, KB11point, K122Apoint, K122Bpoint, K122Dpoint, 
  K122Epoint, K122Fpoint, K122Gpoint, K122Hpoint, K122Kpoint, KB8point, KB7point, KSTAIRS3point, 
  KB4point, KE2point, KB3point, KB2point, K118bpoint, K175point, K118apoint, K174point, 
  KB1point, K173point, K120point, KA1point, KA11point, KSTAIRS2point, K115point, K115Apoint, 
  KA10point, K114point, K103point, KA9point, K113point, K112point, KA8point, K116point, 
  KA7point, K111point, K109point, K110point, KA6point, KSTAIRS1point, KA5point, K108point, 
  K107point, K105point, KA4point, K106point, K100point, K104point, KA3point, K102point, 
  KA2point, K101point, K2STAIRS4point, K2C5point, K233bpoint, K234bpoint, K2C4point, K233apoint, 
  K234apoint, K2C3point, K2C2point, K2C1point, K2STAIRS3point, K2B12point, K2B11point, K223point, 
  K2B9point, K222point, K221point, K220point, K2B7point, K219point, K218point, K217point, 
  K2B5point, K216point, K2B3point, K2B1point, K2STARIS2point, K215apoint,K215bpoint, K213point, K2A8point, 
  K214point, KELEVATORpoint, K2A7point, K212point, K210point, K209point, K208point, K2A2point, 
  K2A1point, K2STAIRS1point, K2A3point, K207point, K206point, K2A4point, K205point, K203point, 
  K2A5point, K201Cpoint, K204point, K201Apoint, K2A6point, K200point, K2A9point, K201point, 
  K2B2point, K232point, K273point, K2B4point, K231point, K230point, K2B6point, K229point, 
  K228point, K2B8point, K227Apoint, K226point, K225point, K227Bpoint, K2B10point, 
]


var build3 = new Building('Kogod', points3)

buildings.push(build3)

var s = {
  "111": [195, 795],
  "109": [559, 775],
  "112": [195, 751],
  "106b": [1399, 726],
  "106a": [1152, 762],
  "105": [1570, 702],
  "103": [1572, 379],
  "104a": [1570, 445],
  "104b": [1572, 649],
  "109": [349, 699],
  "113b": [349, 649],
  "113a": [349, 474],
  "114": [349, 429],
  "192a": [1153, 348],
  "192b": [1402, 345],
  "108": [549, 640],
  "E2": [961, 1010],
  "STAIRS1": [1501, 774],
  "A1": [553, 711],
  "A2": [412, 702],
  "B1": [958, 697],
  "C1": [1399, 694],
  "C2": [1504, 694],
  "B4": [1150, 693],
  "A3": [415, 565],
  "C3": [1507, 553],
  "A5": [537, 399],
  "A4": [415, 399],
  "B3": [1152, 387],
  "C4": [1404, 385],
  "C5": [1501, 382],
  "B2": [957, 381],
  "STAIRS3": [442, 217],
  "STAIRS2": [1498, 216],
  "2B10": [958, 237],
  "2B8": [766, 237],
  "2B9": [867, 237],
  "2B12": [1303, 237],
  "2B7": [621, 237],
  "2B13": [1360, 237],
  "2C1": [1468, 237],
  "2C1": [1498, 237],
  "2B11": [1123, 237],
  "2C6": [1751, 292],
  "2C3": [1751, 693],
  "2C5": [1751, 423],
  "2C4": [1751, 582],
  "2A4": [161, 374],
  "2A3": [161, 481],
  "2A2": [161, 668],
  "2A1": [166, 757],
  "2B6": [617, 400],
  "2C8": [1499, 418],
  "2C7": [1610, 418],
  "2B4": [1202, 692],
  "2B5": [1411, 692],
  "2B1": [511, 693],
  "2B2": [733, 693],
  "2B3": [967, 693],
  "2C2": [1620, 695],
  "2C1": [1506, 696],
  "A9": [376, 764],
  "2STAIRS3": [1504, 836],
  "212": [360, 974],
  "211": [421, 884],
  "210": [421, 836],
  "266": [1735, 792],
  "213": [232, 782],
  "214": [197, 782],
  "268": [1617, 773],
  "204b": [948, 734],
  "202b": [1408, 733],
  "202a": [1230, 733],
  "203a": [990, 733],
  "204a": [758, 733],
  "205b": [709, 733],
  "203b": [1177, 732],
  "205a": [512, 732],
  "216": [116, 698],
  "264": [1782, 692],
  "218": [117, 658],
  "222": [118, 463],
  "220": [116, 499],
  "224": [117, 356],
  "215": [209, 675],
  "219": [208, 502],
  "217": [208, 637],
  "221": [208, 463],
  "281A": [1463, 647],
  "201": [1412, 646],
  "206": [1102, 645],
  "259": [1721, 629],
  "257": [1722, 383],
  "252": [1722, 292],
  "257": [483, 613],
  "262": [1782, 595],
  "260": [1781, 560],
  "258": [1782, 413],
  "256": [1782, 376],
  "254": [1781, 291],
  "276": [481, 472],
  "255": [1632, 442],
  "253": [1589, 442],
  "237A": [884, 441],
  "251": [1474, 372],
  "245": [1153, 356],
  "235": [852, 356],
  "243": [1088, 356],
  "237": [886, 356],
  "233": [658, 356],
  "226": [211, 341],
  "228": [257, 340],
  "249": [1344, 266],
  "247": [1301, 266],
  "241": [955, 266],
  "239": [807, 266],
  "233": [765, 266],
  "231": [588, 236],
  "246": [1362, 205],
  "244": [1304, 205],
  "240": [1080, 205],
  "242": [1126, 205],
  "238": [889, 205],
  "236": [849, 205],
  "232": [515, 205],
  "234": [648, 203],
  "250": [1505, 123],
  "248": [1453, 105],
  "2C11": [1468, 142],
  "2STAIRS1": [414, 172],
  "2A5": [409, 366],
  "2A6": [408, 472],
  "2A7": [408, 616],
  "2A8": [408, 687],
  "2ELEVATOR": [482, 544],
  "3STAIRS1": [396, 228],
  "3C6": [1643, 378],
  "3A1": [160, 382],
  "3A2": [161, 477],
  "3A3": [163, 629],
  "3A4": [165, 697],
  "3A6": [401, 438],
  "3C2": [838, 444],
  "3C1": [603, 446],
  "3C3": [1077, 446],
  "3C4": [1315, 446],
  "3C5": [1509, 446],
  "3A5": [334, 477],
  "3A7": [409, 703],
  "3B8": [1312, 724],
  "3B9": [1508, 724],
  "3STAIRS3": [1506, 902],
  "3B3": [783, 867],
  "3B5": [1036, 867],
  "3A8": [412, 867],
  "3B1": [568, 867],
  "3B4": [913, 867],
  "3B2": [636, 867],
  "3B6": [1149, 867],
  "3B7": [1313, 867],
  "311": [1557, 280],
  "312": [1728, 300],
  "313": [1706, 357],
  "350": [158, 313],
  "347": [124, 344],
  "346": [123, 381],
  "341": [123, 816],
  "342": [123, 737],
  "343": [123, 698],
  "344": [123, 575],
  "345": [124, 534],
  "349": [196, 380],
  "339": [196, 790],
  "340": [196, 829],
  "303b": [925, 392],
  "302a": [498, 393],
  "302b": [692, 393],
  "303a": [745, 393],
  "304b": [1164, 393],
  "305a": [1226, 393],
  "305b": [1399, 393],
  "304a": [984, 394],
  "310": [1555, 394],
  "314": [1773, 473],
  "316": [1772, 506],
  "301": [882, 493],
  "307": [485, 494],
  "308": [942, 495],
  "300a": [408, 527],
  "300b": [409, 675],
  "318": [1742, 573],
  "317": [1598, 592],
  "306": [1599, 730],
  "331A": [787, 694],
  "325": [1054, 711],
  "348": [458, 743],
  "331": [763, 770],
  "327": [1023, 770],
  "329": [971, 844],
  "323": [1148, 845],
  "335": [579, 846],
  "333": [621, 846],
  "321": [1340, 873],
  "338": [454, 989],
  "326": [1073, 890],
  "334": [614, 891],
  "332": [803, 891],
  "330": [843, 891],
  "328": [1036, 891],
  "337": [454, 892],
  "336": [573, 892],
  "324": [1273, 892],
  "322": [1404, 892],
  "T14": [1181, 136],
  "T13": [795, 141],
  "T5a": [1356, 278],
  "T4a": [370, 316],
  "T22": [549, 380],
  "T23": [645, 395],
  "T2b": [1095, 402],
  "T2a": [776, 435],
  "T5b": [1355, 512],
  "T4b": [372, 521],
  "T1a": [714, 539],
  "T1b": [1043, 539],
  "T3a": [370, 564],
  "T6a": [1357, 566],
  "T3b": [371, 745],
  "T6b": [1356, 746],
  "T8": [1008, 936],
  "T11": [522, 937],
  "T9": [859, 937],
  "T7": [1057, 937],
  "T10": [706, 938],
  "TSTAIRS3": [428, 179],
  "TSTAIRS3": [1294, 179],
  "TA3": [428, 314],
  "TB4": [886, 423],
  "TB1": [645, 451],
  "TC1": [1283, 452],
  "TA1": [432, 454],
  "TB2": [730, 493],
  "TB3": [1043, 497],
  "TA1": [434, 540],
  "TSTAIRS4": [429, 766],
  "TSTAIRS1": [1292, 769],
  "TB5": [715, 859],
  "TB6": [997, 859],
}


var S3STAIRS3point = new Point2(['3STAIRS3', '3B9', '2STAIRS3'], s);
var S3B9point = new Point2(['3B9', '3B8', '3STAIRS3', '306', '3C5', '317'], s);
var S306point = new Point2(['306', '3B9'], s);
var S317point = new Point2(['317', '3B9', '3B5'], s);
var S3C5point = new Point2(['3C5', '3B9', '317', '310', '305', '3C4'], s);
var S310point = new Point2(['310', '311', '3C6'], s);
var S311point = new Point2(['311', '310'], s);
var S3C6point = new Point2(['3C6', '313', '314', '316', '318'], s);
var S313point = new Point2(['313', '3C6', '312'], s);
var S312point = new Point2(['312', '313'], s);
var S314point = new Point2(['314', '3C6'], s);
var S316point = new Point2(['316', '3C6'], s);
var S318point = new Point2(['318', '3C6'], s);
var S305bpoint = new Point2(['305b', '3C5', '3C4'], s);
var S3C4point = new Point2(['3C4', '3C5', '305b', '305a', '304b', '3C3'], s);
var S305apoint = new Point2(['305a', '3C4', '3C3'], s);
var S304bpoint = new Point2(['304b', '3C4', '3C3'], s);
var S3C3point = new Point2(['3C3', '3C4', '305a', '304b', '304a', '303b', '3C2', '301', '308'], s);
var S304apoint = new Point2(['304a', '3C3', '3C2'], s);
var S303bpoint = new Point2(['303b', '3C3', '3C2'], s);
var S308point = new Point2(['308', '3C3', '3C2'], s);
var S301point = new Point2(['301', '3C3', '3C2'], s);
var S3C2point = new Point2(['3C2', '301', '308', '3C3', '304a', '303b', '303a', '302b', '3C1'], s);
var S303apoint = new Point2(['303a', '3C2', '3C1'], s);
var S302bpoint = new Point2(['302b', '3C2', '3C1'], s);
var S3C1point = new Point2(['3C1', '3C2', '303a', '302b', '302a', '307', '3A6'], s);
var S302apoint = new Point2(['302a', '3C1', '3A6'], s);
var S307point = new Point2(['307', '3C1', '3A6'], s);
var SCA6point = new Point2(['CA6', '307', '302', '3STAIRS1', '300a', '3A5'], s);
var S300apoint = new Point2(['300a', '3A6', '3A5'], s);
var S3STAIRS1point = new Point2(['3STAIRS1', '3A6', '3STAIRS1'], s);
var S3A5point = new Point2(['3A5', '300a', '3A6', '3A2'], s);
var S3A2point = new Point2(['3A2', '3A5', '3A1', '345', '34', '3A3'], s);
var S3A1point = new Point2(['3A1', '3A2', '349', '350', '347', '346'], s);
var S349point = new Point2(['349', '3A1'], s);
var S350point = new Point2(['350', '3A1'], s);
var S347point = new Point2(['347', '3A1'], s);
var S346point = new Point2(['346', '3A1'], s);
var S345point = new Point2(['345', '3A2', '3A3'], s);
var S344point = new Point2(['344', '3A2', '3A3'], s);
var S3A3point = new Point2(['3A3', '345', '344', '3A4', '3A2'], s);
var S3A4point = new Point2(['3A4', '3A3', '343', '342', '341', '339', '340', '3A7'], s);
var S343point = new Point2(['343', '3A4'], s);
var S342point = new Point2(['342', '3A4'], s);
var S341point = new Point2(['341', '3A4'], s);
var S339point = new Point2(['339', '3A4'], s);
var S340point = new Point2(['340', '3A4'], s);
var S3A7point = new Point2(['3A7', '3A4', '300b', '348', '3A8'], s);
var S300bpoint = new Point2(['300b', '3A7'], s);
var S348point = new Point2(['348', '3A7', '3A8'], s);
var S3A8point = new Point2(['3A8', '3A7', '348', '3B1', '337'], s);
var S337point = new Point2(['337', '3A8', '338', '3B1'], s);
var S338point = new Point2(['338', '337'], s);
var S3B1point = new Point2(['3B1', '3A8', '337', '335', '336', '3B2', '334', '333'], s);
var S335point = new Point2(['335', '3B1'], s);
var S336point = new Point2(['336', '3B1'], s);
var S333point = new Point2(['333', '3B1', '3B2'], s);
var S334point = new Point2(['334', '3B1', '3B2'], s);
var S3B2point = new Point2(['3B2', '3B1', '333', '334', '3B3'], s);
var S3B3point = new Point2(['3B3', '3B2', '332', '3B4', '330', '331'], s);
var S331point = new Point2(['331', '3B3', '331A'], s);
var S331Apoint = new Point2(['331A', '331'], s);
var S332point = new Point2(['332', '3B3'], s);
var S330point = new Point2(['330', '3B3', '3B4'], s);
var S3B4point = new Point2(['3B4', '3B3', '330', '329', '3B5'], s);
var S329point = new Point2(['329', '3B4', '3B5'], s);
var S3B5point = new Point2(['3B5', '328', '326', '327', '3B6'], s);
var S328point = new Point2(['328', '3B5'], s);
var S327point = new Point2(['327', '3B5', '325'], s);
var S325point = new Point2(['325', '327'], s);
var S326point = new Point2(['326', '3B5'], s);
var S3B6point = new Point2(['3B6', '3B5', '323', '324', '3B7'], s);
var S323point = new Point2(['323', '3B6'], s);
var S324point = new Point2(['324', '3B6', '3B7'], s);
var S3B7point = new Point2(['3B7', '3B6', '324', '321', '3B8'], s);
var S321point = new Point2(['321', '322', '3B7'], s);
var S322point = new Point2(['322', '321'], s);
var S3B8point = new Point2(['3B8', '3B7', '3B9'], s);

//------------------------Floor 2------------------------------------
var S2STAIRS3point = new Point2(['2STAIRS3', '2C1', '1STAIRS3'], s);
var S2C1point = new Point2(['2C1', '2STAIRS3', '2B5', '281A', '2C2'], s);
var S2C2point = new Point2(['2C2', '2C1', '268', '2C3'], s);
var S268point = new Point2(['268', '2C2', '266'], s);
var S266point = new Point2(['266', '268'], s);
var S2C3point = new Point2(['2C3', '2C2', '264', '259', '2C4'], s);
var S264point = new Point2(['264', '2C3'], s);
var S259point = new Point2(['259', '2C3', '2C4'], s);
var S2C4point = new Point2(['2C4', '259', '2C3', '262', '260', '2C5'], s);
var S262point = new Point2(['262', '2C4'], s);
var S260point = new Point2(['260', '2C4'], s);
var S2C5point = new Point2(['2C5', '2C4', '258', '256', '2C6', '257'], s);
var S258point = new Point2(['258', '2C5'], s);
var S256point = new Point2(['256', '2C5'], s);
var S257point = new Point2(['257', '2C5'], s);
var S2C6point = new Point2(['2C6', '254', '252'], s);
var S254point = new Point2(['254', '2C6'], s);
var S252point = new Point2(['252', '2C6'], s);
var S2C7point = new Point2(['2C7', '255', '253', '2C8', '2C5'], s);
var S255point = new Point2(['255', '2C7'], s);
var S253point = new Point2(['255', '2C7'], s);
var S2C8point = new Point2(['2C8', '2C7', '251', '2C9'], s);
var S251point = new Point2(['251', '2C8', '2C9'], s);
var S2C9point = new Point2(['2C9', '2C8', '251', '2C1'], s);
var S2C10point = new Point2(['2C10', '2C9', '2C11', '2B13'], s);
var S2C11point = new Point2(['2C11', '2C10', '250', '248'], s);
var S250point = new Point2(['250', '2C11'], s);
var S248point = new Point2(['248', '2C11'], s);
var S2B13point = new Point2(['2B13', '246', '249', '2B12', '2C10'], s);
var S249point = new Point2(['249', '2B13', '2B12'], s);
var S246point = new Point2(['246', '2B13'], s);
var S2B12point = new Point2(['2B12', '2B13', '249', '244', '247', '2B11'], s);
var S244point = new Point2(['244', '2B12'], s);
var S247point = new Point2(['247', '2B12'], s);
var S2B11point = new Point2(['2B11', '2B12', '242', '240', '2B10', '243', '245'], s);
var S242point = new Point2(['242', '2B11'], s);
var S245point = new Point2(['245', '2B11'], s);
var S243point = new Point2(['243', '2B11'], s);
var S240point = new Point2(['240', '2B11', '2B10'], s);
var S2B10point = new Point2(['2B10', '2B11', '240', '2B9', '241'], s);
var S241point = new Point2(['241', '2B10'], s);
var S2B9point = new Point2(['2B9', '2B10', '238', '236', '2B8', '239'], s);
var S238point = new Point2(['238', '2B9'], s);
var S236point = new Point2(['236', '2B9', '2B8'], s);
var S239point = new Point2(['239', '2B8', '2B9', '235', '237'], s);
var S235point = new Point2(['235', '239'], s);
var S237point = new Point2(['237', '239', '237A'], s);
var S237Apoint = new Point2(['237A', '237'], s);
var S2B8point = new Point2(['2B8', '233', '239', '2B9', '236', '234', '2B7'], s);
var S233point = new Point2(['233', '2B8'], s);
var S234point = new Point2(['234', '2B7', '2B8'], s);
var S2B7point = new Point2(['2B7', '2B8', '234', '231', '2B6'], s);
var S231point = new Point2(['231', '231', '2B7'], s);
var S232point = new Point2(['232', '231'], s);
var S2B6point = new Point2(['2B6', '233', '2B7', '2A5'], s);
var S233point = new Point2(['233', '3B6'], s);
var S2A5point = new Point2(['2A5', '2B6', '2STAIRS1', '228', '226', '2A4', '2A6'], s);
var S2STAIRS1point = new Point2(['2STAIRS1', '2A5'], s);
var S228point = new Point2(['228', '2A5', '2A4'], s);
var S226point = new Point2(['226', '2A5', '2A4'], s);
var S2A4point = new Point2(['2A4', '2A5', '228', '226', '224', '2A3'], s);
var S224point = new Point2(['224', '2A4'], s);
var S2A3point = new Point2(['2A3', '2A4', '221', '222', '219', '220', '2A2'], s);
var S221point = new Point2(['221', '2A3'], s);
var S222point = new Point2(['222', '2A3'], s);
var S220point = new Point2(['220', '2A3'], s);
var S219point = new Point2(['219', '2A3'], s);
var S2A2point = new Point2(['2A2', '2A3', '2A1', '217', '218', '216', '215'], s);
var S217point = new Point2(['217', '2A2'], s);
var S218point = new Point2(['218', '2A2'], s);
var S216point = new Point2(['216', '2A2'], s);
var S215point = new Point2(['215', '2A2'], s);
var S2A1point = new Point2(['2A1', '2A2', '214', '213', '2A9'], s);
var S214point = new Point2(['214', '2A1', '2A9'], s);
var S213point = new Point2(['213', '2A1', '2A9'], s);
var S2A9point = new Point2(['2A9', '2A1', '214', '213', '212', '211', '210', '2A8'], s);
var S212point = new Point2(['212', '2A9'], s);
var S211point = new Point2(['211', '2A9'], s);
var S210point = new Point2(['210', '219'], s);
var S2A8point = new Point2(['2A8', '2A9', '2B1', '2A7'], s);
var S2A7point = new Point2(['2A7', '2A8', '275', '2A6', '2ELEVATOR'], s);
var S275point = new Point2(['275', '2A7'], s);
var S2ELEVATORpoint = new Point2(['2ELEVATOR', '2A7', '2A6'], s);
var S2A6point = new Point2(['2A6', '2A7', '2ELEVATOR', '276', '2A5'], s);
var S276point = new Point2(['276', '2A6'], s);
var S2B1point = new Point2(['2B1', '2A8', '205a', '2B2'], s);
var S205apoint = new Point2(['205a', '2B1'], s);
var S2B2point = new Point2(['2B2', '205b', '204a', '2B1', '2B3'], s);
var S204apoint = new Point2(['204a', '2B2'], s);
var S205bpoint = new Point2(['205b', '2B2'], s);
var S2B3point = new Point2(['2B3', '2B2', '2B4', '204b', '203a', '206'], s);
var S204bpoint = new Point2(['204b', '2B3'], s);
var S203apoint = new Point2(['203a', '2B3'], s);
var S206point = new Point2(['206', '2B4', '2B3'], s);
var S2B4point = new Point2(['2B4', '2B3', '206', '203b', '202a', '2B5'], s);
var S203point = new Point2(['203', '2B4'], s);
var S202apoint = new Point2(['202a', '2B4'], s);
var S2B5point = new Point2(['2B5', '2B4', '202b', '201', '281A', '2C1'], s);
var S201point = new Point2(['201', '2B5'], s);
var S202bpoint = new Point2(['202b', '2B5'], s);
var S281Apoint = new Point2(['281A', '2B5', '2C1'], s);

//-------------------------Floor 1---------------------------------------------------
var SE1point = new Point2(['E1', 'B2', 'A5'], s);
var SB2point = new Point2(['B2', 'E1', 'A5', 'B1', 'B3'], s);
var SA5point = new Point2(['A5', 'E1', 'B2', 'A4'], s);
var SA4point = new Point2(['A4', 'A5', 'STAIRS3', '114', '113', 'A3'], s);
var S114point = new Point2(['114', 'A4', 'A3'], s);
var SSTAIRS3point = new Point2(['STAIRS3', 'A4'], s);
var S113apoint = new Point2(['113a', 'A4', 'A3'], s);
var SA3point = new Point2(['A3', 'A4', '114', '113a', '113b', 'A2'], s);
var S113bpoint = new Point2(['113b', 'A3', 'A2'], s);
var SA2point = new Point2(['A2', 'A3', '113b', '109', 'A1'], s);
var S109point = new Point2(['109', 'A2', '112', '111'], s);
var S112point = new Point2(['112', '109'], s);
var S111point = new Point2(['111', '109'], s);
var SA1point = new Point2(['A1', 'A2', '108', '107', 'B1'], s);
var SB1point = new Point2(['B1', 'B2', 'A1', 'E2', 'B4'], s);
var SE2point = new Point2(['E2', 'B1'], s);
var SB4point = new Point2(['B4', 'B1', '106a', 'C1'], s);
var S106apoint = new Point2(['106a', 'B4'], s);
var SC1point = new Point2(['C1', 'B4', '106b', 'C2'], s);
var S106bpoint = new Point2(['106b', 'C1'], s);
var SC2point = new Point2(['C2', 'C1', 'STAIRS1', '105', '104b', 'C3'], s);
var SSTAIRS1point = new Point2(['STAIRS1', 'C2'], s);
var S105point = new Point2(['105', 'C2'], s);
var S104bpoint = new Point2(['104b', 'C2', 'C3'], s);
var SC3point = new Point2(['C3', 'C2', '104b', '104a', 'C5'], s);
var S104apoint = new Point2(['104a', 'C3', 'C5'], s);
var SC5point = new Point2(['C5', 'C3', '104a', '103', 'STAIRS2', 'C4'], s);
var S103point = new Point2(['103', 'C5'], s);
var SSTAIRS2point = new Point2(['STAIRS2', 'C5'], s);
var SC4point = new Point2(['C4', 'C5', '192b', 'B3'], s);
var S192bpoint = new Point2(['192b', 'C4'], s);
var SB3point = new Point2(['B3', 'C4', '192a', 'B2'], s);
var S192apoint = new Point2(['192a', 'B3'], s);

//-------------------------Floor T---------------------------------------------
var STSTAIRS3point = new Point2(['TSTAIRS3', 'TA3'], s);
var STA3point = new Point2(['TA3', 'TSTAIRS3', 'T4a', 'TA2'], s);
var ST4apoint = new Point2(['T4a', 'TA3', 'TA2'], s);
var STA2point = new Point2(['TA2', 'T4a', 'TA3', 'T22', 'TB1', 'TA1', 'T4b'], s);
var ST4bpoint = new Point2(['T4b', 'TA2', 'TA1'], s);
var STA1point = new Point2(['TA1', 'TA2', 'T4b', 'T3a', 'TSTAIRS4'], s);
var ST3apoint = new Point2(['T3a', 'TA1', 'TSTAIRS4'], s);
var STSTAIRS4point = new Point2(['TSTAIRS4', 'TA1', 'T3a', 'T3b'], s);
var ST3bpoint = new Point2(['T3b', 'TSTAIRS4'], s);
var ST22point = new Point2(['T22', 'TA2', 'TB1'], s);
var STB1point = new Point2(['TB1', 'T22', 'T23', 'T2a', 'T2B2', 'T1a'], s);
var ST23point = new Point2(['T23', 'TB1'], s);
var STB2point = new Point2(['TB2', 'TB1', 'T1a', 'TB3'], s);
var STB3point = new Point2(['TB3', 'TB2', 'TC1', 'T2b', 'T1b'], s);
var ST1apoint = new Point2(['T1a', 'TB2', 'TB1', 'TB5'], s);
var ST1bpoint = new Point2(['T1b', 'TB3', 'TB6'], s);
var STB5point = new Point2(['TB5', 'T1a', 'TB6', 'T11', 'T10', 'T9'], s);
var STB6point = new Point2(['TB6', 'TB5', 'T9', 'T8', 'T7'], s);
var ST11point = new Point2(['T11', 'TB5'], s);
var ST10point = new Point2(['T10', 'TB5'], s);
var ST9point = new Point2(['T9', 'TB5', 'TB6'], s);
var ST8point = new Point2(['T8', 'TB6'], s);
var ST7point = new Point2(['T7', 'TB6'], s);
var ST2apoint = new Point2(['T2a', 'TB1', 'TB4'], s);
var STB4point = new Point2(['TB4', 'T2', 'T13', 'T14'], s);
var ST13point = new Point2(['T13', 'TB4', 'T2b'], s);
var ST14point = new Point2(['T14', 'TB4', 'T2b'], s);
var STC1point = new Point2(['TC1', 'TB3', 'T2b', 'TSTAIRS2', 'T5a', 'T5b', 'T6a', 'T6b', 'TSTAIRS1'], s);
var STSTAIRS2point = new Point2(['TSTAIRS2', 'TC1', 'T5a'], s);
var ST5apoint = new Point2(['T5a', 'TSTAIRS2', 'TC1'], s);
var ST5bpoint = new Point2(['T5b', 'TC1', 'TSTAIRS1'], s);
var ST6apoint = new Point2(['T6a', 'TC1', 'TSTAIRS1'], s);
var ST6bpoint = new Point2(['T6b', 'TC1', 'TSTAIRS1'], s);
var STSTAIRS1point = new Point2(['TSTAIRS1', 'T6b', 'T6a', 'T5b', 'TC1'], s);


var points3 = [
S3STAIRS3point, S3B9point, S306point, S317point, S3C5point, S310point, S311point, S3C6point,
S313point, S312point, S314point, S316point, S318point, S305bpoint, S3C4point, S305apoint,
S304bpoint, S3C3point, S304apoint, S303bpoint, S308point, S301point, S3C2point, S303apoint,
S302bpoint, S3C1point, S302apoint, S307point, SCA6point, S300apoint, S3STAIRS1point, S3A5point,
S3A2point, S3A1point, S349point, S350point, S347point, S346point, S345point, S344point, S3A3point,
S3A4point, S343point, S342point, S341point, S339point, S340point, S3A7point, S300bpoint, S348point,
S3A8point, S337point, S338point, S3B1point, S335point, S336point, S333point, S334point, S3B2point,
S3B3point, S331point, S331Apoint, S332point, S330point, S3B4point, S329point, S3B5point, S328point,
S327point, S325point, S326point, S3B6point, S323point, S324point, S3B7point, S321point, S322point,
S3B8point, S2STAIRS3point, S2C1point, S2C2point, S268point, S266point, S2C3point, S264point,
S259point, S2C4point, S262point, S260point, S2C5point, S258point, S256point, S257point, S2C6point,
S254point, S252point, S2C7point, S255point, S253point, S2C8point, S251point, S2C9point, S2C10point,
S2C11point, S250point, S248point, S2B13point, S249point, S246point, S2B12point, S244point,
S247point, S2B11point, S242point, S245point, S243point, S240point, S2B10point, S241point,
S2B9point, S238point, S236point, S239point, S235point, S237point, S237Apoint, S2B8point, S233point,
S234point, S2B7point, S231point, S232point, S2B6point, S233point, S2A5point, S2STAIRS1point,
S228point, S226point, S2A4point, S224point, S2A3point, S221point, S222point, S220point,
S219point, S2A2point, S217point, S218point, S216point, S215point, S2A1point, S214point,
S213point, S2A9point, S212point, S211point, S210point, S2A8point, S2A7point, S275point,
S2ELEVATORpoint, S2A6point, S2B1point, S205apoint, S2B2point, S204apoint, S205bpoint,
S2B3point, S204bpoint, S203apoint, S206point, S2B4point, S203point, S202apoint, S2B5point,
S201point, S202bpoint, S281Apoint, SE1point, SB2point, SA5point, SA4point, S114point,
SSTAIRS3point, S113apoint, SA3point, S113bpoint, SA2point, S109point, S112point, S111point,
SA1point, SB1point, SE2point, SB4point, S106apoint, SC1point, S106bpoint, SC2point,
S105point, S104bpoint, SC3point, S104apoint, SC5point, S103point, SSTAIRS2point, SC4point,
S192bpoint, SB3point, S192apoint, STSTAIRS3point, STA3point, ST4apoint, STA2point, ST4bpoint,
STA1point, ST3apoint, STSTAIRS4point, ST3bpoint, ST22point, STB1point, ST23point, STB2point,
STB3point, ST1apoint, ST1bpoint, STB5point, STB6point, ST11point, ST10point, ST9point,
ST8point, ST7point, ST2apoint, STB4point, ST13point, ST14point, STC1point, STSTAIRS2point,
ST5apoint, ST5bpoint, ST6apoint, ST6bpoint, STSTAIRS1point
]



var build3 = new Building('SPA', points3)
buildings.push(build3)