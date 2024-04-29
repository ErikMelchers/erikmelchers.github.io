# AUmapAPP

//Kogod Floor 1 link: https://i.postimg.cc/qRrJxcMV/Kogod-Floor1-Labelled.png
//Kogod Floor 2 link: https://i.postimg.cc/x8x9QWGn/Kogod-Floor2-Labelled.png
//Kogod Floor T link: https://i.postimg.cc/FFDr0JM8/Kogod-Terrace-Labelled.png
Don Myers FLoor 1: https://i.postimg.cc/TYnXCLFT/Don-Myers-First-Floor-Rooms-Labelled.png
Don Myers Floor 2: https://i.postimg.cc/5yXf4fxp/Don-Myers-Second-Floor.png
SPA Floor T: https://i.postimg.cc/43xkf8d3/SPATERRACELABELLED.png
SPA Floor 1: https://i.postimg.cc/PqVGPmpQ/SPAFLOOR1-LABELLED.png
SPA Floor 2: https://i.postimg.cc/638kRyCJ/SPAFLOOR2-LABELLED.png
SPA Floor 3: https://i.postimg.cc/Px0BMTML/SPAFLOOR3-LABELLED.png



function draw() {
    background(bg);
    stroke(50, 50, 250);
    strokeWeight(5);

    // Draw lines between points
    for (let i = 0; i < points.length - 1; i++) {
        let point1 = coordinates[points[i]];
        let point2 = coordinates[points[i + 1]];
		if(points[i].includes("STAIRS") && points[i+1].includes("STAIRS")){
				
		} else if(point1 && point2){
				line(point1[0], point1[1], point2[0], point2[1]);
			}
		}
    }
