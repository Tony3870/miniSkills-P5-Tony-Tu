/**************************/
t03_shapes_and_drawing.js
/**************************/
function setup() {
	createCanvas(400, 400);
}
function draw() {
  background(255,255,255);
  
     // Colour OF first Rect
  fill(0,100,10)
  rect(200,200,55,100);
  
     // Colour OF  second Rect
  fill(0,100,100);
  rect(200,50,55,85);
  
     //Colour OF Circle
  fill(80, 100, 20,95);
  ellipse(200,50,50);
  line(100,200,55,65);
  strokeWeight(10);
}