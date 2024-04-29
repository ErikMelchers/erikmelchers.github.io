window.onload = function (){
    



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

    console.log(shortestPath)
    roomDiv.innerHTML = destination + buildingName
}



function getRoomNumber(){
    const roomDiv = document.getElementById('roomNumbers');
    var params = new URLSearchParams(window.location.search);

    const destination = JSON.parse(params.get("destination")); 
    roomDiv.innerHTML = destination
}