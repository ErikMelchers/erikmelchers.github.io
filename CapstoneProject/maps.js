
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

// var mult = howManyStairs()

function setup() {
        // var path
        var arrayLink = [
            'https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png',
            'https://i.postimg.cc/5yXf4fxp/Don-Myers-Second-Floor.png',
            'https://i.postimg.cc/qRrJxcMV/Kogod-Floor1-Labelled.png',
            'https://i.postimg.cc/x8x9QWGn/Kogod-Floor2-Labelled.png',
            'https://i.postimg.cc/FFDr0JM8/Kogod-Terrace-Labelled.png',
        ]

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



        var floorsImg = []

        for (let i = 0; i < arrayLink.length; i++) {
            if(arrayLink[i].includes(buildingName)){
                const link = arrayLink[i]
                console.log(link)
                floorsImg.push(link)
            }
        }

        console.log(floorsImg)
//------------------------------------Work For Don Myers------------------------------------
    // var amount = 1
    // for (let i = 0; i < path.length - 1; i++) {
    //     if(path[i].includes("STAIRS") && path[i+1].includes("STAIRS")){
    //         amount += 1
    //     }
    // }
    // console.log(amount)
    // var y = 1
    // if (amount >= 1){
    //     y = (648 * amount)
    // }
    // else{
    //     y = 648
    // }
    // console.log("the y is: " + y)
    // if (amount <= 1){
    //     // console.log("load")
    //     createCanvas(1152, y);
    //     bg = loadImage('https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png');
    // }
    // else if (amount == 2){
    //     console.log("load2")
    //     createCanvas(1152,y);
    //     topImage = createGraphics(1152,648);
    //     bottomImage = createGraphics(1152,648);
    //     bg = loadImage('https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png');
    //     bg2= loadImage('https://i.postimg.cc/5yXf4fxp/Don-Myers-Second-Floor.png')
    // }
    // else if (amount == 3){

    // }
   //----------------------------------------------------------------------------------------
   
   var amount = 1
    for (let i = 0; i < path.length - 1; i++) {
        if(path[i].includes("STAIRS") && path[i+1].includes("STAIRS")){
            amount += 1
        }
    }
    console.log(amount)
    var y = 1
    if (amount >= 1){
        y = (1080 * amount)
    }
    else{
        y = 1080
    }
    console.log("the y is: " + y)
    if (amount <= 1){
        // console.log("load")
        createCanvas(1920, y);
        bg = loadImage('https://i.postimg.cc/qRrJxcMV/Kogod-Floor1-Labelled.png');
    }
    else if (amount == 2){
        console.log("load2")
        createCanvas(1920, y);
        topImage = createGraphics(1920, 1080);
        bottomImage = createGraphics(1920, 1080);
        bg = loadImage(floorsImg[0]);
        var TSTAIRSQ = false

        for (let i = 0; i < path.length - 1; i++) {
            if(path[i].includes("TSTAIRS")){
                TSTAIRSQ = true
            }
        }
        if (TSTAIRSQ){
            bg2 = loadImage(floorsImg[floorsImg.length - 1])
        }
        else{
            bg2 = loadImage(floorsImg[1])
        }
    }
    else if (amount == 3){
        
    }
    
}


function draw(){
    var amountFloors = 0
    for (let i = 0; i < path.length - 1; i++) {
        if(path[i].includes("STAIRS") && path[i+1].includes("STAIRS")){
            amountFloors += 1
        }
    }

    if (amountFloors  == 1){
        topImage.background(bg)
        bottomImage.background(bg2)
        image(topImage,0,0);
        image(bottomImage,0,1080);
    }else{
        background(bg)
    }
    var params = new URLSearchParams(window.location.search);
    const buildingName = JSON.parse(params.get("building"));

    stroke(50,50,50)
    strokeWeight(5)
    var offset = 0;
    for (let i = 0; i < path.length - 1; i++) {
        console.log(buildingName)
        var point1
        var point2

        if (buildingName === "Don-Myers"){
            point1 = d[path[i]];
            point2 = d[path[i + 1]];
        }else if(buildingName === "Kogod"){
            point1 = k[path[i]];
            point2 = k[path[i + 1]]; 
        }else if(buildingName === "SPA"){
            point1 = s[path[i]];
            point2 = s[path[i + 1]];
        }
        
        if(path[i].includes("STAIRS") && path[i+1].includes("STAIRS")){
             console.log(i)  
             offset += 1080 // this was another change from don myers to kogod 648 -> 1080
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