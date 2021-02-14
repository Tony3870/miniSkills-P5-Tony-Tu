/********************************************************/
//t07_objects
/********************************************************/

var circle = {
xPos: '50',
yPos: '50',
speedX: '5',
speedY: '7',
diameter: '100',
};
//Circle 2 Object
var circle1 = {
x: 70,
y: 70,
speedX: 5,
speedY: 7,
diameter: 75, 
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // 1st ciccle
ellipse(75,50,100,100)
ellipse(circle.xPos, circle.yPos, circle.diameter, circle.diameter )

  
}