var arrayLink = [
    ['Don Myers','https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png'],
    ['Don Myers','https://i.postimg.cc/L8RF74FL/Don-Myers-Second-Floor-And-Points.png']
]
var path
// window.onload = function (){
    

//     const roomDiv = document.getElementById('roomNumbers');
//     var params = new URLSearchParams(window.location.search);

    
//     const buildingName = JSON.parse(params.get("building"));
//     const destination = JSON.parse(params.get("destination"));
    
//     const endPointName = destination

//     const buildArray = buildings.find(point => point.name == buildingName);
//     console.log(buildArray) 
//     whatBuilding = buildArray.points
//     console.log(whatBuilding)

//     //E1
//     const startPointName = JSON.parse(params.get("start"))

//     console.log(startPointName)
//     console.log(endPointName)


//     const startPoint = whatBuilding.find(point => point.name === startPointName);
//     const endPoint = whatBuilding.find(point => point.name === endPointName);

//     console.log(startPoint)
//     console.log(endPoint)

//     const shortestPath = dijkstra(startPoint,endPoint,whatBuilding)
//     path = shortestPath
//     console.log(shortestPath)
//     roomDiv.innerHTML = destination + buildingName
// }



function getRoomNumber(){
    const roomDiv = document.getElementById('roomNumbers');
    var params = new URLSearchParams(window.location.search);

    const destination = JSON.parse(params.get("destination")); 
    roomDiv.innerHTML = destination
}

function howManyStairs(){
    var amount = 0
    for (let i = 0; i < path.length - 1; i++) {
        if(path[i].includes("STAIRS")){
            amount += 1
        }
    }
    return amount
}

var mult = howManyStairs()

function setup() {
    
        const roomDiv = document.getElementById('roomNumbers');
        var params = new URLSearchParams(window.location.search);
    
        
        const buildingName = JSON.parse(params.get("building"));
        const destination = JSON.parse(params.get("destination"));
        
        const endPointName = destination
    
        const buildArray = buildings.find(point => point.name == buildingName);
        console.log(buildArray) 
        whatBuilding = buildArray.points
        console.log(whatBuilding)
    
        //E1
        const startPointName = JSON.parse(params.get("start"))
    
        console.log(startPointName)
        console.log(endPointName)
    
    
        const startPoint = whatBuilding.find(point => point.name === startPointName);
        const endPoint = whatBuilding.find(point => point.name === endPointName);
    
        console.log(startPoint)
        console.log(endPoint)
    
        const shortestPath = dijkstra(startPoint,endPoint,whatBuilding)
        path = shortestPath
        console.log(shortestPath)
        roomDiv.innerHTML = destination + buildingName

    var amount = 0
    for (let i = 0; i < path.length - 1; i++) {
        if(path[i].includes("STAIRS")){
            amount += 1
        }
    }
    console.log(amount)

    var y = (648 * amount)
    if (amount == 1){
        createCanvas(1152, y);
        bg = loadImage('https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png');
    }
    else if (amount == 2){
        createCanvas(1152,y);
        topImage = createGraphics(1152,648);
        bottomImage = createGraphics(1152,648);
        bg = loadImage('https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png');
        bg2= loadImage('https://i.postimg.cc/L8RF74FL/Don-Myers-Second-Floor-And-Points.png')
    }
    
    
}


function draw(){
    topImage.background(bg)
    bottomImage.background(bg2)
    image(topImage,0,0);
    image(bottomImage,0,648);

    stroke(50,50,50)
    strokeWeight(5)
    var offset = 0;
    for (let i = 0; i < path.length - 1; i++) {
        let point1 = d[path[i]];
        let point2 = d[path[i + 1]];
        if(path[i].includes("STAIRS") && path[i+1].includes("STAIRS")){
             console.log(i)  
             offset += 648
        } else if(point1 && point2)
        {
            line(point1[0], point1[1] + offset, point2[0], point2[1]+offset);
        }
    }
}
//2e1 stars
//e2 stairs2
//2e3 stairs3
//2e4 stairs4