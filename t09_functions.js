/********************************************************/
//t09_function.js
/********************************************************/
// Ball 1 Object

var ball = {
xPos: 50,
yPos: 50,
speedX: 5,
speedY: 7,
diameter: 50,
display: function(){
  fill(0, 200, 255, 100)
m_ball(this.xPos, this.yPos, this.diameter);
noStroke();
},
move: function(){
this.xPos = this.xPos + this.speedX;
this.yPos = this.yPos + this.speedY;
},
bounce: function(){
//Movement speed of 1st ball xPos
if(this.xPos >=  (width - (this.diameter / 2))){
      this.speedX = this.speedX * -1;
      this.xPos = width - (this.diameter / 2);
   }else if(this.xPos <= (this.diameter / 2)){
      this.speedX = this.speedX * -1;
      this.xPos = this.diameter / 2;
   }
// Movement speed of 1st ball yPos
   if(this.yPos >=  (height - (this.diameter / 2))){
      this.speedY = this.speedY * -1;
      this.yPos =  height - (this.diameter / 2);
   }else if(this.yPos <= (this.diameter / 2)){
      this.speedY = this.speedY * -1;
      this.yPos = this.diameter / 2;
   }
}
};
//Ball 2 Object
var ball1 = {
xPos: 50,
yPos: 50,
speedX: 5,
speedY: 9,
diameter: 50, 
display: function(){
  fill(255, 255,0, 100)
m_ball(this.xPos, this.yPos, this.diameter);
noStroke();
},
move: function(){
this.xPos = this.xPos + this.speedX;
this.yPos = this.yPos + this.speedY;
},
bounce: function(){
//Movement speed of 1st ball xPos
if(this.xPos >=  (width - (this.diameter / 2))){
      this.speedX = this.speedX * -1;
      this.xPos = width - (this.diameter / 2);
   }else if(this.xPos <= (this.diameter / 2)){
      this.speedX = this.speedX * -1;
      this.xPos = this.diameter / 2;
   }
// Movement speed of 1st ball yPos
   if(this.yPos >=  (height - (this.diameter / 2))){
      this.speedY = this.speedY * -1;
      this.yPos =  height - (this.diameter / 2);
   }else if(this.yPos <= (this.diameter / 2)){
      this.speedY = this.speedY * -1;
      this.yPos = this.diameter / 2;
   }
}
};
// Start of code
function setup() {
  createCanvas(400, 400);
  rPosition();
// Creating a slider
slider = createSlider(50, 200, 0, 1);
slider.position(10,10)
}
// Draws all the function called in this loop
function draw() {
background(200, 200, 200);
ball.move();
ball.display();
ball.bounce();
ball1.move();
ball1.display();
ball1.bounce();
// Increases the ball size
ball.diameter = slider.value()
ball1.diameter = slider.value()

console.log(ball.diameter)
}


function rPosition(){
 // Random Positioning
  ball.xPos = random(0, width)
  ball.yPos = random(0, height)
  ball1.xPos = random(0, width)
  ball1.yPos = random(0, height)
}
//Function to make the ball
function m_ball(x, y , diameter){
ellipse(x, y, diameter);
}
