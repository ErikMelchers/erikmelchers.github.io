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

  