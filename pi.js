


function setup() {
 createCanvas(10000, 10000);
  background(90);
  noLoop();

}




function draw() {
	translate(5000,5000)
	ellipseMode(CENTER); 
	stroke(255,0,0);
	fill(255,0,0); // Set fill to red
	ellipse(0, 0, 10000)
	 loadPixels();
	let totalArea = pixels.length /4;
	let circleArea = 0;
	
	  for (let i = 0; i < pixels.length;  i+=4) {
		    circleArea += pixels[i]==255;
	  }
	  let percentRed = circleArea / totalArea;
	  let pi = percentRed * 4;
	  console.log(pi);
	}
	