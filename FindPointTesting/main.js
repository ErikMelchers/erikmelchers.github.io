var whatBuilding = []


window.onload = function () {
    const startPointSelect = document.getElementById('startPoint');
    const endPointSelect = document.getElementById('endPoint');
    const buildingSelect = document.getElementById('buildings');

    const buildingOption = document.createElement('option');
    // buildingOption.value = ""
    buildingOption.textContent = "--select and building--"
    buildingSelect.appendChild(buildingOption)
    buildingOption.value = null

    buildings.forEach(building =>{
        const buildingOption = document.createElement('option');
        buildingOption.value = building.name
        buildingOption.textContent = building.name
        buildingSelect.appendChild(buildingOption)
    })


    // const BuildingPoints = document.getElementById('buildings')
    // console.log(BuildingPoints)

    // points.forEach(point => {
    //     const option1 = document.createElement('option');
    //     const option2 = document.createElement('option');
    //     option1.value = point.name;
    //     option1.textContent = point.name;
    //     option2.value = point.name;
    //     option2.textContent = point.name;
    //     startPointSelect.appendChild(option1);
    //     endPointSelect.appendChild(option2);
    // });
};

function updatePoints(){
    try{
        const startPointSelect = document.getElementById('startPoint');
        while(startPointSelect.children.length > 0){
            startPointSelect.removeChild(startPointSelect.children[0])
        }

        const endPointSelect = document.getElementById('endPoint');
        while(endPointSelect.children.length > 0){
            endPointSelect.removeChild(endPointSelect.children[0])
        }

        const name = document.getElementById('buildings').value
        const buildArray = buildings.find(point => point.name == name); 

        console.log(buildArray.points)

        buildArray.points.forEach(point =>{
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');

            option1.value = point.name;
            option1.textContent = point.name;
            option2.value = point.name;
            option2.textContent = point.name;
            // console.log(point.name)
            startPointSelect.appendChild(option1);
            endPointSelect.appendChild(option2);
            // console.log(point.name)
        });
        
        whatBuilding = buildArray.points
    }
    catch{
        // pass
    }
    // const name = document.getElementById('buildings').value
    // const buildArray = buildings.find(point => point.name == name); /// ended work here (not working) come back to this

    


    // points.forEach(point => {
    //     const option1 = document.createElement('option');
    //     const option2 = document.createElement('option');
    //     option1.value = point.name;
    //     option1.textContent = point.name;
    //     option2.value = point.name;
    //     option2.textContent = point.name;
    //     startPointSelect.appendChild(option1);
    //     endPointSelect.appendChild(option2);
    // });
}

function findShortestPath() {
    const startPointName = document.getElementById('startPoint').value;
    const endPointName = document.getElementById('endPoint').value;
  
    const startPoint = whatBuilding.find(point => point.name === startPointName);
    const endPoint = whatBuilding.find(point => point.name === endPointName);
  
    const shortestPath = dijkstra(startPoint, endPoint, points);
    
    console.log(shortestPath);
    if (shortestPath) {
        console.log(`Shortest path from ${startPoint.name} to ${endPoint.name}: ${shortestPath.join(' -> ')}`);
    } else {
        console.log(`There is no path from ${startPoint.name} to ${endPoint.name}`);
    }
}

function printSelectedPath(){
    const startPointName = document.getElementById('startPoint').value;
    const endPointName = document.getElementById('endPoint').value;

    const startPoint = whatBuilding.find(point => point.name === startPointName);
    const endPoint = whatBuilding.find(point => point.name === endPointName);

    console.log(`Start Point ${startPoint.name}: ${startPoint.position} End Point ${endPoint.name}: ${endPoint.position}`);
    
    console.log(startPoint)
    console.log(endPoint)

}


