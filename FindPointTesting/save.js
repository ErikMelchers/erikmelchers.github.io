class Point {
    constructor(data) {
        this.name = data[0];
        this.edges = [];
        for (let i = 0; i < data.length; i += 2) {
            this.edges.push({
                to: data[i],
                weight: data[i + 1]
            });
        }
        }
    }
  
// function dijkstra(start, end) {
//     const queue = [];
//     const distances = {};
//     const previous = {};
    
//     distances[start.name] = 0;
//     queue.push(start);

//     for (let i = 0; i < points.length; i++){
//         console.log(points[i].edges);
//     }

//     // debugger;
//     count = 0;
//     while (queue.length > 0) {
//         queue.sort((a, b) => distances[a.name] - distances[b.name]);
//         const current = queue.shift();
      
//         if (current.name === end.name) {
//             const path = [];
//             let at = end.name;
//             while (at !== start.name) {
//                 path.push(at);
//                 at = previous[at];
//             }
//             path.push(start.name);
//             return path.reverse();
//         }
        
//         // debugger;

//         for (const edge of current.edges) {
//             const newDistance = distances[current.name] + edge.weight;
//             if (newDistance < (distances[edge.to] || Infinity)) {
//                 distances[edge.to] = newDistance;
//                 previous[edge.to] = current.name;
//                 queue.push(points.find(point => point.name === edge.to));
//             }
//         }
//         if (count > 100){
//             break;
//         }
//         else{
//             count += 1;
//         }
//     }
    
//     return null;
//   }
function dijkstra(start, end, points) {
    const queue = [];
    const distances = {};
    const previous = {};
  
    distances[start.name] = 0;
    queue.push(start);
  
    while (queue.length > 0) {
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
            if (!queue.some(point => point.name === edge.to)) {
                queue.push(nextPoint);
          }
        }
      }
    }
  
    return null;
  }
  
  
  // Example points
  const Apoint = new Point(['A', 0.0, 'B', 3.0]);
  const Bpoint = new Point(['B', 0.0, 'C', 3.5, 'D', 6.1, 'E', 7.6]);
  const Cpoint = new Point(['C', 0.0, 'B', 3.5]);
  const Dpoint = new Point(['D', 0.0, 'B', 6.1]);
  const Epoint = new Point(['E', 0.0, 'B', 7.6]);
  
  const points = [Apoint, Bpoint, Cpoint, Dpoint, Epoint];
  
  // Usage example
  const startPoint = Apoint;
  const endPoint = Epoint;
  const shortestPath = dijkstra(startPoint, endPoint);
  
  if (shortestPath) {
    console.log(`Shortest path from ${startPoint.name} to ${endPoint.name}: ${shortestPath.join(' -> ')}`);
  } else {
    console.log(`There is no path from ${startPoint.name} to ${endPoint.name}`);
  }

// class Point {
//     constructor(data) {
//       this.name = data[0];
//       this.edges = [];
//       for (let i = 1; i < data.length; i += 2) {
//         this.edges.push({
//           to: data[i],
//           weight: data[i + 1]
//         });
//       }
//     }
//   }
  
//   function dijkstra(start, end) {
//     const queue = [];
//     const distances = {};
//     const previous = {};
//     const points = [start, end]; // Add all points here
    
    

//     distances[start.name] = 0;
//     queue.push(start);
    
//     for (let i = 0; i < points.length; i++){
//         console.log(points[i].edges)
//     }

//     while (queue.length > 0) {
//       const current = queue.shift();
  
//       if (current.name === end.name) {
//         const path = [];
//         let at = end.name;
//         while (at !== start.name) {
//           path.push(at);
//           at = previous[at];
//         }
//         path.push(start.name);
//         return path.reverse();
//       }
  
//       for (const edge of current.edges) {
//         const newDistance = distances[current.name] + edge.weight;
//         if (newDistance < (distances[edge.to] || Infinity)) {
//           distances[edge.to] = newDistance;
//           previous[edge.to] = current.name;
//           const nextPoint = points.find(point => point.name === edge.to);
//           if (!queue.includes(nextPoint)) {
//             queue.push(nextPoint);
//           }
//         }
//       }
//     }
  
//     return null;
//   }
  
//   // Example points
//   const Apoint = new Point(['A', 0, 'B', 3.0]);
//   const Bpoint = new Point(['B', 0, 'C', 3.5, 'D', 6.1, 'E', 7.6]);
//   const Cpoint = new Point(['C', 0, 'B', 3.5]);
//   const Dpoint = new Point(['D', 0 ,'B', 6.1]);
//   const Epoint = new Point(['E', 0, 'B', 7.6]);
  
//   // Set up edges for each point
//   const points = [Apoint, Bpoint, Cpoint, Dpoint, Epoint];
  
//   // Usage example
//   const startPoint = Apoint;
//   const endPoint = Epoint;
//   const shortestPath = dijkstra(startPoint, endPoint);
  
//   if (shortestPath) {
//     console.log(`Shortest path from ${startPoint.name} to ${endPoint.name}: ${shortestPath.join(' -> ')}`);
//   } else {
//     console.log(`There is no path from ${startPoint.name} to ${endPoint.name}`);
//   }