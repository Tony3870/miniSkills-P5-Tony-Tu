/********************************************************/
//t08_random.js
/********************************************************/
// Ball 1 Object

var ball = {
xPos: 50,
yPos: 50,
speedX: 5,
speedY: 7,
diameter: 50,
};


//Ball 2 Object
var ball1 = {
xPos: 50,
yPos: 50,
speedX: 5,
speedY: 9,
diameter: 50, 
};


function setup() {
  createCanvas(400, 400);
  // Random Positioning
  ball.xPos = random(0, width)
  ball.yPos = random(0, height)
  ball1.xPos = random(0, width)
  ball1.yPos = random(0, height)
}

function draw() {
 background(0, 200)
  // 1st ball
  fill(0, 100, 200)
   ellipse(ball.xPos, ball.yPos, ball.diameter);
// Movement speed of 1st ball xPos
   if(ball.xPos >=  (width - (ball.diameter / 2))){
      ball.speedX = ball.speedX * -1;
      ball.xPos = width - (ball.diameter / 2);
   }else if(ball.xPos <= (ball.diameter / 2)){
      ball.speedX = ball.speedX * -1;
      ball.xPos = ball.diameter / 2;
   }
// Movement speed of 1st ball yPos
   if(ball.yPos >=  (height - (ball.diameter / 2))){
      ball.speedY = ball.speedY * -1;
      ball.yPos =  height - (ball.diameter / 2);
   }else if(ball.yPos <= (ball.diameter / 2)){
      ball.speedY = ball.speedY * -1;
      ball.yPos = ball.diameter / 2;
   }
//Ball 1 Spd
   ball.xPos = ball.xPos + ball.speedX;
   ball.yPos = ball.yPos + ball.speedY;

// 2nd Ball
fill(0, 100, 100)
   ellipse(ball1.xPos, ball1.yPos, ball1.diameter)
// Movement speed of 2nd ball xPos
   if(ball1.xPos >=  (width - (ball1.diameter / 2))){
      ball1.speedX = ball1.speedX * -1;
      ball1.xPos = width - (ball1.diameter / 2);
   }else if(ball1.xPos <= (((width - width) + (ball1.diameter / 2)))){
      ball1.speedX = ball1.speedX * -1;
      ball1.xPos = ball1.diameter / 2;
   }
// Movement speed of 2nd ball yPos
   if(ball1.yPos >=  (height - (ball1.diameter / 2))){
      ball1.speedY = ball1.speedY * -1
      ball1.yPos =  height - (ball1.diameter / 2);
   }else if(ball1.yPos <= (ball1.diameter / 2)){
      ball1.speedY = ball1.speedY * -1;
      ball1.yPos = ball1.diameter / 2;
   }
   //Ball 2 Spd
   ball1.xPos = ball1.xPos + ball1.speedX
   ball1.yPos = ball1.yPos + ball1.speedY
   
}